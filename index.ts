// setups a basic object for a mastermind game status and board in typescript with bun
// there is 4 to 10 colors in the game
// 10 rows and 3 to 6 columns

import { sleep } from "bun";

interface MastermindGame {
  status: 'idle' | 'playing' | 'won' | 'lost';
  board: number[][];
  resolution: number[][];
  answer: number[];
  attempts: number;
  rows: number;
  columns: number;
  colors: number;
  allRemainingAnswers: number[][];
}

let mastermind: MastermindGame = {
  status: 'idle',
  board: Array(10).fill(null).map(() => Array(5).fill(0)),
  resolution: Array(10).fill(null).map(() => Array(3).fill(0)),
  answer: Array(5).fill(0),
  attempts: 0,
  rows: 10,
  columns: 5,
  colors: 8,
  allRemainingAnswers: [],
};


// output the board row along the resolution arrays
async function outputBoard() {
  console.table(mastermind.answer);
  for (let i = 0; i < mastermind.rows; i++) {
    console.log(mastermind.board[i], mastermind.resolution[i]);
  }
}

// set the answer with or without duplicates colors
async function setAnswer(answerProvided?: number[]) {
  if (answerProvided) {
    mastermind.answer = answerProvided;
  } else {
    const availableColors = Array.from({ length: mastermind.colors }, (_, i) => i);
    for (let i = 0; i < mastermind.columns; i++) {
      const colorIndex = Math.floor(Math.random() * availableColors.length);
      mastermind.answer[i] = availableColors.splice(colorIndex, 1)[0] + 1;
    }
  }
}

// evaluates a single row and returns the count of white and black pins
async function evaluateRow(row: number[]): [number, number] {
  let whitePins = 0;
  let blackPins = 0;
  const answerSet = new Set(mastermind.answer);

  for (let j = 0; j < mastermind.columns; j++) {
    if (row[j] !== mastermind.answer[j]) {
      if (answerSet.has(row[j])) {
        whitePins++;
      }
    } else {
      blackPins++;
    }
  }

  return [whitePins, blackPins];
}

// answers each resolution not previously filled
// answered, black pins, white pins
async function answerResolutionBoard() {
  for (let i = 0; i < mastermind.rows; i++) {
    mastermind.resolution[i] = await evaluateRow(mastermind.board[i]);
  }
}

async function setBoardRow(row: number, content: number[]) {
  mastermind.board[row] = content;
}

// returns a new random row
function generateRandomRow(): number[] {
  const availableColors = Array.from({ length: mastermind.colors }, (_, i) => i);
  const row = [];
  for (let i = 0; i < mastermind.columns; i++) {
    const colorIndex = Math.floor(Math.random() * availableColors.length);
    row[i] = availableColors.splice(colorIndex, 1)[0] + 1;
  }
  return row;
}

// Generates an array with all possible answers with or without duplicate color in the same row
function generateAllPossibleAnswers(allowDuplicates: boolean): number[][] {

  const allPossibleAnswers: number[][] = [];
  const availableColors = Array.from({ length: mastermind.colors }, (_, i) => i + 1);

  if (!allowDuplicates) {
    const generatePermutations = (currentRow: number[], remainingColors: number[]): void => {
      if (currentRow.length === mastermind.columns) {
        allPossibleAnswers.push(currentRow);
        return;
      }

      for (let i = 0; i < remainingColors.length; i++) {
        const color = remainingColors[i];
        const newRemainingColors = remainingColors.filter((_, index) => index !== i);
        generatePermutations([...currentRow, color], newRemainingColors);
      }
    };

    generatePermutations([], availableColors);
  } else {
    // Generates an array with all possible answers allowing duplicate color in the same row
    const generateDuplicates = (currentRow: number[], remainingColors: number[]): void => {
      if (currentRow.length === mastermind.columns) {
        allPossibleAnswers.push(currentRow);
        return;
      }

      for (let i = 0; i < remainingColors.length; i++) {
        const color = remainingColors[i];
        generateDuplicates([...currentRow, color], remainingColors);
      }
    };

    generateDuplicates([], availableColors);

  }

  return allPossibleAnswers;
}

async function setAllRemainingAnswers(allowDuplicates: boolean) {
  mastermind.allRemainingAnswers = generateAllPossibleAnswers(allowDuplicates);
}

// for a row in the board eliminates from the remaining answers the ones that doens't match white pins and black pins criteria
async function eliminateAnswers() {
  for (let i = 0; i < mastermind.rows; i++) {
    if (mastermind.board[i].every(num => num === 0)) {
      continue; // Skip rows that contain only zeros
    }

    // evaluate each remaining answer to see if it matches the white pins and black pins criteria
    mastermind.allRemainingAnswers = mastermind.allRemainingAnswers.filter(answer => {

    });
  }
}

// a recursive function that tries to solve the game async 
async function solveGame() {

}

async function runGameSequence() {
  await setAnswer();
  await setAllRemainingAnswers(false);
  console.log("Starting answers count: ", mastermind.allRemainingAnswers.length);
  await makeATry();
}

async function makeATry() {
  // Make random try finding the first row empty (filled with zeroees)in the board
  let emptyRowIndex = -1;
  for (let i = 0; i < mastermind.rows; i++) {
    if (mastermind.board[i].every(num => num === 0)) {
      emptyRowIndex = i;
      break;
    }
  }

  // Make random try for the empty row
  if (emptyRowIndex !== -1) {
    await setBoardRow(emptyRowIndex, generateRandomRow());
    await answerResolutionBoard();
    await eliminateAnswers();
    await outputBoard();
    console.log("Remaining answers count: ", mastermind.allRemainingAnswers.length);
  }
}


/* await setBoardRow(0, generateRandomRow());
await answerResolutionBoard();
await eliminateAnswers();
await outputBoard();
console.log("Remaining answers count: ", mastermind.allRemainingAnswers.length); */

runGameSequence();