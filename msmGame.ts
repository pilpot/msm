// msmGame.ts 
interface MastermindGame {
  status: 'idle' | 'playing' | 'won' | 'lost';
  board: number[][];
  resolution: number[][];
  remainingAnswersCount: number[];
  answer: number[];
  rows: number;
  allowDuplicates: boolean;
  guessAlgorithm: 'random' | 'optimal' | 'first' | 'moreBlacks' | 'lessWhites';
  columns: number;
  colors: number;
  allRemainingAnswers: number[][];
  noConsoleOutput: boolean;
  attempts: number;
  outputBoard: () => Promise<void>;
  setAnswer: (answerProvided?: number[]) => Promise<void>;
  evaluateRow: (row: number[]) => Promise<[number, number]>;
  answerResolutionBoardRow: (row: number) => Promise<void>;
  answerResolutionBoardAll: () => Promise<void>;
  setBoardRow: (row: number, answer: number[]) => Promise<void>;
  generateRandomRow: (allowDuplicates: boolean) => number[];
  runGameSequence: () => Promise<void>;
}

const columns: number = 5;
const colors: number = 8;
const rows: number = 15;
const allowDuplicates = false;

// list all function of this file separated by commas
// outputBoard, setAnswer, evaluateRow, answerResolutionBoardRow, answerResolutionBoardAll, setBoardRow, generateRandomRow, sleep,  makeATry

let mastermind: MastermindGame = {
  status: 'idle',
  board: Array(rows).fill(null).map(() => Array(colors).fill(null)),
  resolution: Array(rows).fill(null).map(() => Array(2).fill(0)),
  remainingAnswersCount: Array(rows).fill(0),
  answer: Array(columns).fill(0),
  rows: rows,
  allowDuplicates: allowDuplicates,
  guessAlgorithm: 'random',
  columns: columns,
  colors: colors,
  allRemainingAnswers: [],
  noConsoleOutput: false,
  attempts: 0,
  // list all function of this file
  outputBoard,
  setAnswer,
  evaluateRow,
  answerResolutionBoardRow,
  answerResolutionBoardAll,
  setBoardRow,
  generateRandomRow,
  runGameSequence
};

// output the board row along the resolution arrays
async function outputBoard(): Promise<void> {
  mastermind.noConsoleOutput || console.table(mastermind.answer);
  for (let i = 0; i < mastermind.rows; i++) {
    // hide empty rows (filled with nulls)
    if (mastermind.board[i].every(num => num === null)) {
      continue;
    }
    mastermind.noConsoleOutput || console.log(mastermind.board[i], mastermind.resolution[i], mastermind.remainingAnswersCount[i] || "");
  }
  // line to separate the output from the next game
  mastermind.noConsoleOutput || console.log("--------------------");
}
// set the answer with or without duplicates colors
async function setAnswer(answerProvided?: number[]): Promise<void> {
  // alert if answer provided contains duplicates and allowDuplicates is false
  if (answerProvided && answerProvided.some((num, i) => answerProvided.indexOf(num) !== i) && !mastermind.allowDuplicates) {
    console.log("Answer provided contains duplicates and allowDuplicates is false, answer provided: ", answerProvided);
  }

  if (answerProvided) {
    mastermind.answer = answerProvided;
  } else {
    mastermind.answer = generateRandomRow(mastermind.allowDuplicates);
  }
}
// evaluates a single row and returns the count of white and black pins as promise
async function evaluateRow(row: number[]): Promise<[number, number]> {
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
// answers a resolution board row
async function answerResolutionBoardRow(boardRow: number): Promise<void> {
  mastermind.resolution[boardRow] = await evaluateRow(mastermind.board[boardRow]);
}
// resolution board for all board rows
async function answerResolutionBoardAll(): Promise<void> {
  for (let i = 0; i < mastermind.board.length; i++) {
    await answerResolutionBoardRow(i);
  }
}
async function setBoardRow(row: number, content: number[]): Promise<void> {
  mastermind.board[row] = content;
}
// returns a new random row
function generateRandomRow(allowDuplicates: boolean): number[] {
  const availableColors = Array.from({ length: mastermind.colors }, (_, i) => i);
  const row = [];
  if (!allowDuplicates) {
    for (let i = 0; i < mastermind.columns; i++) {
      const colorIndex = Math.floor(Math.random() * availableColors.length);
      row[i] = availableColors.splice(colorIndex, 1)[0] + 1;
    }
  } else {
    for (let i = 0; i < mastermind.columns; i++) {
      row[i] = Math.floor(Math.random() * mastermind.colors) + 1;
    }
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

async function setAllRemainingAnswers(allowDuplicates: boolean): Promise<void> {
  mastermind.allRemainingAnswers = generateAllPossibleAnswers(allowDuplicates);
}

// for a row in the board eliminates from the remaining answers the ones that doens't match white pins and black pins criteria
async function eliminateAnswers(boardRow: number): Promise<void> {

  // Skip rows that contain only nulls
  if (mastermind.board[boardRow].every(num => num === null)) {
    return;
  }

  let totalPositionsInBoardRow = mastermind.resolution[boardRow][1];
  let totalColorsInBoardRow = mastermind.resolution[boardRow][0] + mastermind.resolution[boardRow][1];

  // evaluate each remaining answer to see if it matches following criterias
  // - first : colors in the same place
  // this is count of similar colors (total of black) in the same place in board row and answer
  // is must be at least the same count of correct positions
  // - second : global count of similar colors (total of black and white) in the regardless of the place in board row and answer
  // is must be at least the same count of total colors in the row
  for (let j = 0; j < mastermind.allRemainingAnswers.length; j++) {
    let answer = mastermind.allRemainingAnswers[j];
    let blackCount = 0;
    let whiteCount = 0;

    // Check for colors in the same place
    for (let k = 0; k < mastermind.columns; k++) {
      if (answer[k] === mastermind.board[boardRow][k]) {
        blackCount++;
      }
    }

    // Check for global count of similar colors
    for (let k = 0; k < mastermind.columns; k++) {
      if (answer.includes(mastermind.board[boardRow][k])) {
        whiteCount++;
      }
    }

    // Check if the answer matches the criteria
    if (blackCount == totalPositionsInBoardRow && whiteCount >= totalColorsInBoardRow) {
      continue; // Answer matches the criteria, skip to the next answer
    }

    // Answer doesn't match the criteria, remove it from the remaining answers
    mastermind.allRemainingAnswers.splice(j, 1);
    j--; // Adjust the index after removing an element
  }

}

async function runGameSequence(): Promise<void> {
  mastermind.noConsoleOutput || console.log("Starting game sequence...");
  await mastermind.setAnswer();
  await setAllRemainingAnswers(mastermind.allowDuplicates);
  mastermind.noConsoleOutput || console.log("Colors count: ", mastermind.colors, " Columns count: ", mastermind.columns, " Max Rows count: ", mastermind.rows);
  mastermind.noConsoleOutput || console.log("Guess algorithm: ", mastermind.guessAlgorithm);
  mastermind.noConsoleOutput || console.log("Starting answers count: ", mastermind.allRemainingAnswers.length);

  while (mastermind.attempts < mastermind.rows && mastermind.resolution[mastermind.attempts][1] < mastermind.columns) {
    if (!mastermind.allRemainingAnswers.some(remaining => remaining.every((color, index) => color === mastermind.answer[index]))) {
      throw new Error("Answer has been erroneously eliminated from remaining answers, answer: " + mastermind.answer);
    }
    // check for inclusion
    if (await makeATry()) {
      break;
    }
    mastermind.attempts++;
  }
  mastermind.noConsoleOutput || console.log("Game solved in ", mastermind.attempts + 1, " tries");
}

// function to remove an answer by value from all remaining answers
function removeAnswer(answer: number[]): void {
  const index = mastermind.allRemainingAnswers.indexOf(answer);
  mastermind.allRemainingAnswers.splice(index, 1);
}

async function makeATry(): Promise<boolean> {
  // Make random try finding the first row empty (filled with zeroes)in the board
  let emptyRowIndex = -1;
  for (let i = 0; i < mastermind.rows; i++) {
    if (mastermind.board[i].every(num => num === null)) {
      emptyRowIndex = i;
      break;
    }
  }

  // there is no empty row in the board
  if (emptyRowIndex == -1) {
    throw new Error("No empty row in the board");
  }
  // Make random try for the first row
  if (emptyRowIndex == 0) {
    let randomRow: number[] = generateRandomRow(mastermind.allowDuplicates);
    await setBoardRow(emptyRowIndex, randomRow);
    removeAnswer(randomRow);
  }
  // if algorithm is the first of the remaining answers
  else if (mastermind.guessAlgorithm === 'first' && mastermind.allRemainingAnswers.length > 0) {
    const firstAnswer = mastermind.allRemainingAnswers[0];
    await setBoardRow(emptyRowIndex, firstAnswer);
    removeAnswer(firstAnswer);
  }
  // or try randomoly one of the remaining answers
  else if (mastermind.guessAlgorithm === 'random' && mastermind.allRemainingAnswers.length > 0) {
    const randomIndex = Math.floor(Math.random() * mastermind.allRemainingAnswers.length);
    const randomAnswer = mastermind.allRemainingAnswers[randomIndex];
    await setBoardRow(emptyRowIndex, randomAnswer);
    removeAnswer(randomAnswer);
  }
  // weight remaining answers by remaining answers count
  else if (mastermind.guessAlgorithm === 'optimal') {
    // todo
    throw new Error("Not implemented");
  }
  // choose the remaining answer with the highest black pins count
  else if (mastermind.guessAlgorithm === "moreBlacks") {
    // sort most colors is in the same position as in the previous answer
    mastermind.allRemainingAnswers = sortBySamePosition(mastermind.board[emptyRowIndex - 1], mastermind.allRemainingAnswers);
    await setBoardRow(emptyRowIndex, mastermind.allRemainingAnswers[0]);
    removeAnswer(mastermind.allRemainingAnswers[0]);
  }
  // choose the remaining answer with the less white pins count
  else if (mastermind.guessAlgorithm === "lessWhites") {
    // sort least amount of colors in common with the previous answer
    mastermind.allRemainingAnswers = sortByLeastCommonColors(mastermind.board[emptyRowIndex - 1], mastermind.allRemainingAnswers);
    await setBoardRow(emptyRowIndex, mastermind.allRemainingAnswers[0]);
    removeAnswer(mastermind.allRemainingAnswers[0]);
  }

  await answerResolutionBoardRow(emptyRowIndex);
  await eliminateAnswers(emptyRowIndex);


  if (mastermind.resolution[emptyRowIndex][1] == mastermind.columns) {
    await mastermind.outputBoard();
    // last board row is the correct answer
    // console.log(mastermind.board[emptyRowIndex] , " is the correct answer");
    return true;
  }
  mastermind.remainingAnswersCount[emptyRowIndex] = mastermind.allRemainingAnswers.length;
  return false;
}

function sortByLeastCommonColors(previousAnswer: number[], remainingAnswers: number[][]): number[][] {
  return remainingAnswers.sort((a, b) => {
    const leastCommonColorsA = countLeastCommonColors(previousAnswer, a);
    const leastCommonColorsB = countLeastCommonColors(previousAnswer, b);
    return leastCommonColorsA - leastCommonColorsB;
  });
}
function countLeastCommonColors(answerA: number[], answerB: number[]): number {
  let count = 0;
  for (let i = 0; i < answerA.length; i++) {
    if (answerA[i] === answerB[i]) {
      count++;
    }
  }
  return answerA.length - count;
}

function sortBySamePosition(previousAnswer: number[], remainingAnswers: number[][]): number[][] {
  return remainingAnswers.sort((a, b) => {
    const samePositionA = countSamePosition(previousAnswer, a);
    const samePositionB = countSamePosition(previousAnswer, b);
    return samePositionB - samePositionA;
  });
}

function countSamePosition(answerA: number[], answerB: number[]): number {
  let count = 0;
  for (let i = 0; i < answerA.length; i++) {
    if (answerA[i] === answerB[i]) {
      count++;
    }
  }
  return count;
}

mastermind.runGameSequence();

// export the namespace
export { mastermind };