// import msmGame.ts
import { MsmGame } from "./msmGame";
const cliProgress = require('cli-progress');
const babar = require('babar');

// import db
 import { JSONFilePreset } from 'lowdb/node'
 const db = await JSONFilePreset('db.json', { games: [] })

// Run a benchmark for 1000 games, totalling the average attemps count, time per game and memory usage
async function runBenchmark(numGames: number): Promise<void> {
  let totalAttempts: number = 0, totalTime: number = 0;
  let wonCount: number = 0, lostCount: number = 0;
  const boardRowsCount: number = 10;
  const columnsCount: number = 5;
  const colors: number = 8;
  const allowDuplicates: boolean = false;
  const guessAlgorithm: 'random' | 'optimal' | 'first' | 'moreBlacks' | 'lessWhites' = 'random';
  const attemptsCountArray: number[] = Array(boardRowsCount + 1).fill(0);
  const listOfAllResolutions: number[][][] = [];

  // display a progress bar in cli while running
  console.log("Running benchmark...");
  const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar1.start(numGames, 0);

  for (let i = 0; i < numGames; i++) {
    // create game with options
    const game = new MsmGame(colors);
    game.allowDuplicates = allowDuplicates;
    game.noConsoleOutput = true;
    game.guessAlgorithm = guessAlgorithm;
    game.columns = columnsCount;
    game.rows = boardRowsCount;

    const start: number = Date.now();
    await game.runGameSequence();

    const end: number = Date.now();

    const attempts: number = game.attempts;
    attemptsCountArray[attempts]++;

    if (game.status === 'won') {
      wonCount++;
    } else if (game.status === 'lost') {
      lostCount++;
    }
    if(attempts < 2) {
      //console.log("");
      //game.outputBoard(true);
      // copy the 2 first resolution rows
      listOfAllResolutions.push(game.resolution.slice(0, 2));
    }
    

    const time: number = end - start;

    totalAttempts += attempts;
    totalTime += time;
    //await db.update(({ games }) => games.push({ attemps: attempts, time: time, board: game.board, resolution: game.resolution, answer: game.answer, status: game.status }));
    bar1.update(i + 1);
  }

  const averageAttempts: number = totalAttempts / numGames;
  const averageTime: number = totalTime / numGames;
  bar1.stop();
  //console.log(listOfAllResolutions);
  // group by first resolution containing second resolution (if exists) and count reccurence
  const groupedResolutions = listOfAllResolutions.reduce((acc, resolution) => {
    const firstResolution = resolution[0].join('');
    let secondResolution = "";
    if(resolution.length > 1) {
       secondResolution = resolution[1].join('');
    }
    
    if (!acc[firstResolution]) {
      acc[firstResolution] = [];
    }
    
    acc[firstResolution].push(secondResolution);
    
    return acc;
  }, {});

  console.log(groupedResolutions);

  console.log("");
  console.log(`Total Games: \x1b[33m${numGames}\x1b[0m`);
  console.log(`Columns: \x1b[33m${columnsCount}\x1b[0m, Colors: \x1b[33m${colors}\x1b[0m, Rows: \x1b[33m${boardRowsCount}\x1b[0m`);
  console.log(`Duplicates: \x1b[33m${allowDuplicates? "Yes" : "No"}\x1b[0m, Guess Algorithm: \x1b[33m${guessAlgorithm}\x1b[0m`);
  console.log(babar(attemptsCountArray.map((count, index) => [index, count]), { color : "green", caption : `Count of games / Attemps` }));
  console.log(`Average Attempts: \x1b[33m${averageAttempts}\x1b[0m`);
  console.log(`Won: \x1b[32m${wonCount}\x1b[0m, Lost: \x1b[31m${lostCount}\x1b[0m`);
  console.log(`Average Time per Game: \x1b[34m${averageTime}ms\x1b[0m`);
  const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script used approximately \x1b[34m${Math.round(usedMemory * 100) / 100} MB\x1b[0m`);
}

await runBenchmark(50000);
