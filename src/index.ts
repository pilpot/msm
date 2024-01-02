// import msmGame.ts
import { MsmGame } from "./msmGame";
const cliProgress = require('cli-progress');
const babar = require('babar');

// import db
// import { JSONFilePreset } from 'lowdb/node'
// const db = await JSONFilePreset('db.json', { games: [] })

// todo import brain.js


// Run a benchmark for 1000 games, totalling the average attemps count, time per game and memory usage
async function runBenchmark(numGames: number): Promise<void> {
  let totalAttempts: number = 0, totalTime: number = 0;
  let wonCount: number = 0, lostCount: number = 0;
  let attemptsCountArray: number[] = Array(11).fill(0);
  // display a progress bar in cli while running
  console.log("Running benchmark...");
  const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar1.start(numGames, 0);

  for (let i = 0; i < numGames; i++) {
    // create game with options
    let game = new MsmGame(8);
    game.allowDuplicates = false;
    game.noConsoleOutput = true;
    game.guessAlgorithm = 'random';
    game.columns = 5;
    const start: number = Date.now();
    await game.runGameSequence();

    const end: number = Date.now();

    const attempts: number = game.attempts;
    attemptsCountArray[attempts]++;

    if(game.status === 'won') {
      wonCount++;
    } else if (game.status === 'lost') {
      lostCount++;
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
  console.log(babar(attemptsCountArray.map((count, index) => [index, count])));
  console.log(`Average Attempts: ${averageAttempts}`);
  console.log(`Average Time per Game: ${averageTime}ms`);
  console.log(`Won: ${wonCount}, Lost: ${lostCount}`);
  const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script used approximately ${Math.round(usedMemory * 100) / 100} MB`);
}

await runBenchmark(100);
