import { MsmGame } from '$lib/msmGame';

export const load = async () => {
	const game = new MsmGame();
	game.noConsoleOutput = true;
    game.rows = 10;
	//randow number of columns between 4 and 6
	game.columns = Math.floor(Math.random() * 3) + 4;
	// random number of colors between columns +1 and 10
	game.setColors(Math.floor(Math.random() * (game.columns + 1)) + game.columns - 1);
	// allow duplicates is random true or false
	game.allowDuplicates = Math.random() < 0.4;
	// generate random answer
	await game.setAnswer();
	await game.setAllRemainingAnswers();

	return {
		game,
		colors: [
			'#CCC',
			'#FFF',
			'#000',
			'#a93226',
			'#2e86c1',
			'#28b463',
			'#f4d03f',
			'#a569bd',
			'#7a5142',
			'#ff4600',
			'#9d9d9d'
		]
	};
};
