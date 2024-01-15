import { MsmGame } from '$lib/msmGame';
import { fail } from '@sveltejs/kit';
import { Bodyguard } from '@auth70/bodyguard';
import { z } from 'zod';
import type { PoolClient } from 'pg';

// Store and keep for session the user answers in an array

// const game = new MsmGame();
// game.allowDuplicates = false;
// const dailySecretAnswer: number[] = game.generateRandomRow();
// game.setAnswer(dailySecretAnswer);
// console.log('dailySecretAnswer:', dailySecretAnswer);

async function createDailyGameSettings(db: PoolClient, game: MsmGame) {
	game.rows = 10;
	//randow number of columns between 4 and 6
	game.columns = Math.floor(Math.random() * 3) + 4;
	// random number of colors between columns +1 and 10
	game.setColors(Math.floor(Math.random() * (game.columns + 1)) + game.columns);
	// allow duplicates is random true or false
	game.allowDuplicates = Math.floor(Math.random() * 2) == 1;
	// generate random answer
	game.setAnswer();
	await db.query(
		'INSERT INTO daily_settings (day, rows, columns, colors, allow_duplicates, answer) VALUES ($1, $2, $3, $4, $5, $6)',
		[new Date(), game.rows, game.columns, game.colors, game.allowDuplicates, game.answer]
	);
	console.log('Created new daily settings');
}

async function setDailyGameSettings(db: PoolClient, game: MsmGame) {
	const querySettings = await db.query('SELECT * FROM daily_settings WHERE day = $1 LIMIT 1', [
		new Date()
	]);
	if (querySettings.rowCount && querySettings.rowCount >= 1) {
		game.rows = querySettings.rows[0].rows;
		game.columns = querySettings.rows[0].columns;
		await game.setColors(querySettings.rows[0].colors);
		game.allowDuplicates = querySettings.rows[0].allow_duplicates;
		await game.setAnswer(querySettings.rows[0].answer);
		console.log('Loaded daily settings:', querySettings.rows[0]);
	} else {
		// create new game settings for the day
		await createDailyGameSettings(db, game);
	}
	console.log('rows:', game.rows, 'columns:', game.columns, 'colors:', game.colors);
	console.log('answer:', game.answer);
}

async function loadPreviousBoard(db: PoolClient, game: MsmGame, sessionId: string): Promise<void> {
	let previousBoard: number[][] = [];

	const queryBoard = await db.query(`SELECT * FROM game_data WHERE session_id = $1 LIMIT 1`, [
		sessionId
	]);

	if (queryBoard.rowCount && queryBoard.rowCount > 0) {
		previousBoard = queryBoard.rows[0].board;
		await game.loadBoard(previousBoard);
		//console.log('Loaded previous board:', previousBoard);
	}
}

export const load = async ({ locals, cookies }) => {
	const db = locals.db;
	const game = new MsmGame();
	// load game settings of the day from the database
	await setDailyGameSettings(db, game);

	// if cookies session is set and a uuid format, use it to load previous board
	if (cookies.get('session') != undefined) {
		if (
			cookies
				.get('session')!
				.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)
		) {
			await loadPreviousBoard(db, game, cookies.get('session') as string);
			await game.setAllRemainingAnswers();
			await game.answerResolutionBoardAll();
			await game.eliminateAnswersAll();
		}
	}

	return {
		boardGuesses: game.board,
		boardResolutions: game.resolution,
		remainingAnswersCount: game.remainingAnswersCount,
		status: game.status,
		sessionId: locals.sessionId,
		answer: game.status == 'won' ? game.answer : [],
		columns: game.columns,
		maxAnswers: game.maxAnswers,
		colors: game.colors,
		allowDuplicates: game.allowDuplicates
	};
};

const RouteSchema = z.object({ sessionId: z.string(), guess: z.array(z.string()) });
const bodyguard = new Bodyguard();

export const actions = {
	helpMe: async ({ locals }) => {
		const db = locals.db;
		const game = new MsmGame();

		// load game settings of the day from the database
		await setDailyGameSettings(db, game);

		if (locals.sessionId) {
			await loadPreviousBoard(db, game, locals.sessionId);
		}

		await game.setAllRemainingAnswers();
		await game.answerResolutionBoardAll();
		await game.eliminateAnswersAll();

		const randomIndex = Math.floor(Math.random() * game.allRemainingAnswers.length);
		const choosenAnswer = game.allRemainingAnswers[randomIndex];
		await game.setBoardRowAvailable(choosenAnswer);
		await game.removeAnswer(choosenAnswer);
		db.query(
			'INSERT INTO game_data(session_id, board) VALUES($1, $2) ON CONFLICT (session_id) DO UPDATE SET board = $2',
			[locals.sessionId, game.board]
		);
		await game.answerResolutionBoardRow(game.board.length - 1);
		await game.eliminateAnswers(game.board.length - 1);

		return {
			status: 200,
			body: {
				boardGuesses: game.board,
				boardResolutions: game.resolution,
				remainingAnswersCount: game.remainingAnswersCount,
				status: game.status,
				success: true,
				answer: game.status === 'won' ? game.answer : [],
				columns: game.columns,
				maxAnswers: game.maxAnswers,
				colors: game.colors,
				allowDuplicates: game.allowDuplicates
			}
		};
	},
	submitGuess: async ({ request, locals }) => {
		const db = locals.db;
		const game = new MsmGame();
		// load game settings of the day from the database
		await setDailyGameSettings(db, game);

		//console.log(request);
		const { success, value } = await bodyguard.softForm(
			request, // Pass in the request
			RouteSchema.parse // Pass in the validator
		).catch((e) => {
			console.log(e);
		});

		if (!success) {
			return fail(400, { message: 'Invalid form data ' + value });
		}
		if (value === undefined) {
			return fail(400, { message: 'No data' });
		}
		if (!value.guess) {
			return fail(400, { message: 'No guess' });
		}

		try {
			const queryBoard = await db.query(`SELECT * FROM game_data WHERE session_id = $1 LIMIT 1`, [
				locals.sessionId
			]);
			let previousBoard: number[][] = [];
			if (queryBoard.rowCount && queryBoard.rowCount > 0) {
				previousBoard = queryBoard.rows[0].board;
			}
			let guess: number[];
			// if is an object
			if (typeof value.guess == 'object') {
				// if the guess is an array
				if (Array.isArray(value.guess)) {
					// change content of array from string to number
					guess = value.guess.map(Number);
				} else {
					return fail(400, { message: 'Invalid guess' });
				}
			} else {
				return fail(400, { message: 'Invalid guess type' });
			}

			await game.checkGuessIsValid(guess);
			await game.setAllRemainingAnswers();

			if (previousBoard) {
				game.loadBoard(previousBoard);
			}

			await game.setBoardRowAvailable(guess);

			db.query(
				'INSERT INTO game_data(session_id, board) VALUES($1, $2) ON CONFLICT (session_id) DO UPDATE SET board = $2',
				[locals.sessionId, game.board]
			);

			await game.answerResolutionBoardAll();
			await game.eliminateAnswersAll();

			return {
				status: 200,
				body: {
					boardGuesses: game.board,
					boardResolutions: game.resolution,
					remainingAnswersCount: game.remainingAnswersCount,
					status: game.status,
					success: true,
					answer: game.status === 'won' ? game.answer : [],
					columns: game.columns,
					maxAnswers: game.maxAnswers,
					colors: game.colors,
					allowDuplicates: game.allowDuplicates
				}
			};
		} catch (e) {
			if (e instanceof Error) return fail(400, { message: e.message });
			return fail(400, { message: 'Unknown error' });
		}
	}
};
