import { MsmGame } from '$lib/msmGame';
import { fail, error } from '@sveltejs/kit';
import { parseFormData } from 'parse-nested-form-data'


// Store and keep for session the user answers in an array

const game = new MsmGame();
game.allowDuplicates = false;
const dailySecretAnswer: number[] = game.generateRandomRow();
game.setAnswer(dailySecretAnswer);

export const load = async ({ locals }) => {

  try {
    const db = locals.db;
    const queryBoard = await db.query(
      `SELECT * FROM game_data WHERE session_id = $1 LIMIT 1`,
      [locals.sessionId]
    );
    let previousBoard: number[][];
    if (queryBoard.rowCount && queryBoard.rowCount > 0) {
      previousBoard = queryBoard.rows[0].board;
      await game.loadBoard(previousBoard);
      console.log("Loading previous board:", previousBoard);
      await game.setAllRemainingAnswers();
      await game.answerResolutionBoardAll();
      await game.eliminateAnswersAll();
      console.log("resolutions:", game.resolution);
    }

  } catch (error) {
    console.log(error);
  }

  return {
    boardGuesses: game.board,
    boardResolutions: game.resolution,
    remainingAnswersCount: game.remainingAnswersCount,
    status: game.status,
    sessionId: locals.sessionId,
    answer: (game.status == 'won') ? game.answer : []
  };
}

export const actions = {
  submitGuess: async ({ request, locals }) => {
    console.log("handling guess");
    const db = locals.db;
    // handle errors for formdata and parseformdata
    let formData: FormData;
    let data;

    try {
      console.log('wait for formdata');
      console.log(request);
      formData = await request.formData();
      console.log('parsing formdata');
      data = parseFormData(formData);
    } catch (e) {
      error(400, { message: 'Invalid form data' + e.message });
    }

    if (!data.guess) {
     fail(400, { message: 'No guess' });
    }

    try {
      console.log('loading previous board');
      const queryBoard = await db.query(
        `SELECT * FROM game_data WHERE session_id = $1 LIMIT 1`,
        [locals.sessionId]
      );
      let previousBoard: number[][] = [];
      if (queryBoard.rowCount && queryBoard.rowCount > 0) {
        previousBoard = queryBoard.rows[0].board;
      }
      console.log("sessionId:", data.sessionId);
      console.log("previousBoard:", previousBoard);
      let guess: number[];
      console.log("type:", typeof data.guess);
      console.log("guess: ", data.guess);
      // if is an object
      if (typeof data.guess == "object") {
        // if the guess is an array
        if (Array.isArray(data.guess)) {
          // change content of array from string to number
          guess = data.guess.map(Number);
        } else {
          return fail(400, { message: 'Invalid guess' });
        }
      } else {
        return fail(400, { message: 'Invalid guess type' });
      }
      console.log("guess typed: ", guess);
      await game.checkGuessIsValid(guess);

      await game.setAllRemainingAnswers();

      if (previousBoard) {
        game.loadBoard(previousBoard);
      }

      await game.setBoardRowAvailable(guess);
      db.query('INSERT INTO game_data(session_id, board) VALUES($1, $2) ON CONFLICT (session_id) DO UPDATE SET board = $2', [locals.sessionId, game.board]);
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
          answer: (game.status === 'won') ? game.answer : []
        }
      }
    } catch (e) {
      if (e instanceof Error) return fail(400, { message: e.message });
      return fail(400, { message: 'Unknown error' });
    }
  }
};