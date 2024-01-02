// import msmGame.ts
import { MsmGame } from "./msmGame";
const cliProgress = require('cli-progress');
const babar = require('babar');

// Run a benchmark for 1000 games, totalling the average attemps count and time per game
async function runBenchmark(numGames: number): Promise<void> {
  let totalAttempts: number = 0, totalTime: number = 0;
  let attemptsCountArray: number[] = Array(11).fill(0);
  // display a progress bar in cli while running
  console.log("Running benchmark...");
  const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar1.start(numGames, 0);

  // run games concurrently to speed up the benchmark
  
  for (let i = 0; i < numGames; i++) {
    // create game with options
    let game = new MsmGame();
    game.allowDuplicates = false;
    game.noConsoleOutput = true;
    game.guessAlgorithm = 'lessWhites';
    const start: number = Date.now();
    await game.runGameSequence();
    
    const end: number = Date.now();

    const attempts: number = game.attempts;
    attemptsCountArray[attempts]++; 

    const time: number = end - start;

    totalAttempts += attempts;
    totalTime += time;
    bar1.update(i + 1);
  }

  const averageAttempts: number = totalAttempts / numGames;
  const averageTime: number = totalTime / numGames;
  bar1.stop();
  console.log(`Average Attempts: ${averageAttempts}`);
  console.log(`Average Time per Game: ${averageTime}ms`);
  // attempts count table seperated by tabs
  //console.log("1\t2\t3\t4\t5\t6\t7\t8\t9\t10");
  //console.log(attemptsCountArray.join("\t"));
  // map attemptscountarray like this console.log [[0, 1], [1, 5], [2, 5], [3, 1], [4, 6]...]
  console.log(babar(attemptsCountArray.map((count, index) => [index, count])));
}

await runBenchmark(10000);