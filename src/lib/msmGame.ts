// msmGame.ts
interface IMsmGame {
  allRemainingAnswers: number[][];
  allowDuplicates: boolean;
  answer: number[];
  attempts: number;
  availableColors: number[];
  board: number[][];
  colors: number;
  columns: number;
  guessAlgorithm: 'random' | 'optimal' | 'first' | 'moreBlacks' | 'lessWhites';
  noConsoleOutput: boolean;
  remainingAnswersCount: number[];
  resolution: number[][];
  rows: number;
  status: 'idle' | 'playing' | 'won' | 'lost';
}

export class MsmGame implements IMsmGame {
  public allRemainingAnswers: number[][];
  public allowDuplicates: boolean;
  public answer: number[];
  public attempts: number;
  public availableColors: number[];
  public board: number[][];
  public colors: number;
  public columns: number;
  public guessAlgorithm: 'random' | 'optimal' | 'first' | 'moreBlacks' | 'lessWhites';
  public noConsoleOutput: boolean;
  public remainingAnswersCount: number[];
  public resolution: number[][];
  public rows: number;
  public status: 'idle' | 'playing' | 'won' | 'lost';

  constructor(colors?: number, columns?: number, rows?: number, allowDuplicates?: boolean, guessAlgorithm?: 'random' | 'optimal' | 'first' | 'moreBlacks' | 'lessWhites') {
    this.columns = columns ?? 5;
    this.rows = rows ?? 10;
    this.colors = colors ?? 8;
    this.availableColors = Array.from({ length: this.colors }, (_, i) => i + 1);
    // value of availableColors is 1-8 for 8 colors
    this.status = 'idle';
    this.board = Array(1).fill(null).map(() => Array(this.colors).fill(null));
    this.resolution = Array(1).fill(null).map(() => Array(2).fill(0));
    this.remainingAnswersCount = Array(this.rows).fill(0);
    this.answer = Array(this.columns).fill(0);
    this.allowDuplicates = allowDuplicates ?? true;
    this.guessAlgorithm = guessAlgorithm ?? 'random';
    this.allRemainingAnswers = [];
    this.noConsoleOutput = false;
    this.attempts = 0;
  }

  // Add a row to the board
  public addBoardRow(): void {
    this.board.push(Array(this.columns).fill(null));
  }

  // Add a row to the resolution
  public addResolutionRow(): void {
    this.resolution.push([0, 0]);
  }

  // resolution board for all board rows
  public async answerResolutionBoardAll(): Promise<void> {
    for (let i = 0; i < this.board.length; i++) {
      await this.answerResolutionBoardRow(i);
    }
  }

  // answers a resolution board row
  public async answerResolutionBoardRow(boardRow: number): Promise<void> {
    this.resolution[boardRow] = await this.evaluateRow(this.board[boardRow]);
    // if the game is solved
    if (this.resolution[boardRow][0] === 0 && this.resolution[boardRow][1] === this.columns) {
      this.status = "won";
    } else {
      this.status = "lost";
    }
  }

  public countLeastCommonColors(answerA: number[], answerB: number[]): number {
    let count = 0;
    for (let i = 0; i < answerA.length; i++) {
      if (answerA[i] === answerB[i]) {
        count++;
      }
    }
    return answerA.length - count;
  }

  public countSamePosition(answerA: number[], answerB: number[]): number {
    let count = 0;
    for (let i = 0; i < answerA.length; i++) {
      if (answerA[i] === answerB[i]) {
        count++;
      }
    }
    return count;
  }

  // for a row in the board eliminates from the remaining answers the ones that doens't match white pins and black pins criteria
  public async eliminateAnswers(boardRow: number): Promise<void> {
    // Skip rows that contain only nulls
    if (this.board[boardRow].every(num => num === null)) {
      return;
    }

    const totalPositionsInBoardRow = this.resolution[boardRow][1];
    const totalColorsInBoardRow = this.resolution[boardRow][0] + this.resolution[boardRow][1];

    // evaluate each remaining answer to see if it matches following criterias
    // - first : colors in the same place
    // this is count of similar colors (total of black) in the same place in board row and answer
    // is must be at least the same count of correct positions
    // - second : global count of similar colors (total of black and white) in the regardless of the place in board row and answer
    // is must be at least the same count of total colors in the row
    for (let j = 0; j < this.allRemainingAnswers.length; j++) {
      const answer = this.allRemainingAnswers[j];
      let blackCount = 0;
      let whiteCount = 0;


      for (let k = 0; k < this.columns; k++) {
        // Check for colors in the same place
        if (answer[k] === this.board[boardRow][k]) {
          blackCount++;
        }
        // Check for global count of similar colors
        if (answer.includes(this.board[boardRow][k])) {
          whiteCount++;
        }
      }

      // Check if the answer matches the criteria
      if (blackCount == totalPositionsInBoardRow && whiteCount >= totalColorsInBoardRow) {
        continue; // Answer matches the criteria, skip to the next answer
      }

      // Answer doesn't match the criteria, remove it from the remaining answers
      this.allRemainingAnswers.splice(j, 1);
      j--; // Adjust the index after removing an element
    }
    this.remainingAnswersCount[boardRow] = this.allRemainingAnswers.length;
  }

  public async eliminateAnswersAll(): Promise<void> {
    for (let i = 0; i < this.board.length; i++) {
      await this.eliminateAnswers(i);
    }
  }

  // evaluates a single row and returns the count of white and black pins as promise
  public async evaluateRow(row: number[]): Promise<[number, number]> {
    let whitePins = 0;
    let blackPins = 0;
    const answerSet = new Set(this.answer);

    for (let j = 0; j < this.columns; j++) {
      if (row[j] !== this.answer[j]) {
        if (answerSet.has(row[j])) {
          whitePins++;
        }
      } else {
        blackPins++;
      }
    }

    return [whitePins, blackPins];
  }

  // find recursively the answer that select the answer with the least similarity
  public findOptimalAnswer(): number[] {
    let optimalAnswer = this.allRemainingAnswers[0];
    let optimalSimilarity = this.allRemainingAnswers[0].length;
    for (let i = 0; i < this.allRemainingAnswers.length; i++) {
      const answer = this.allRemainingAnswers[i];
      let similarity = 0;
      for (let j = 0; j < this.columns; j++) {
        if (answer[j] === this.answer[j]) {
          similarity++;
        }
      }
      if (similarity < optimalSimilarity) {
        optimalSimilarity = similarity;
        optimalAnswer = answer;
      }
    }
    return optimalAnswer;
  }

  // Generates an array with all possible answers with or without duplicate color in the same row
  public async generateAllPossibleAnswers(allowDuplicates: boolean): Promise<number[][]> {
    // duplicate the available colors array to a new array
    const duplicatedColors = [...this.availableColors];
    const allPossibleAnswers: number[][] = [];

    if (!allowDuplicates) {
      const generatePermutations = (currentRow: number[], remainingColors: number[]): void => {
        if (currentRow.length === this.columns) {
          allPossibleAnswers.push(currentRow);
          return;
        }

        for (let i = 0; i < remainingColors.length; i++) {
          const color = remainingColors[i];
          const newRemainingColors = remainingColors.filter((_, index) => index !== i);
          generatePermutations([...currentRow, color], newRemainingColors);
        }
      };

      generatePermutations([], duplicatedColors);
    } else {
      // Generates an array with all possible answers allowing duplicate color in the same row
      const generateDuplicates = (currentRow: number[], remainingColors: number[]): void => {
        if (currentRow.length === this.columns) {
          allPossibleAnswers.push(currentRow);
          return;
        }

        for (let i = 0; i < remainingColors.length; i++) {
          const color = remainingColors[i];
          generateDuplicates([...currentRow, color], remainingColors);
        }
      };

      generateDuplicates([], duplicatedColors);
    }
    // why is this not included by the above?
    // todo test generation of all possible answers
    allPossibleAnswers.push([8, 7, 6, 5, 4]);
    return allPossibleAnswers;
  }

  // returns a new random row
  public generateRandomRow(allowDuplicates?: boolean): number[] {
    if(allowDuplicates === undefined) {
      allowDuplicates = this.allowDuplicates;
    }
    const colorsToPick = [...this.availableColors]; // copy of this.availableColors;
    const row = [];
    if (!allowDuplicates) {
      for (let i = 0; i < this.columns; i++) {
        const colorIndex = Math.floor(Math.random() * colorsToPick.length);
        row[i] = colorsToPick.splice(colorIndex, 1)[0];
      }
    } else {
      for (let i = 0; i < this.columns; i++) {
        // pick a random color
        const colorIndex = Math.floor(Math.random() * colorsToPick.length);
        row[i] = colorsToPick[colorIndex];
      }
    }

    return row;
  }

  // make a try following the guess algorithm
  public async makeATry(): Promise<boolean> {
    // Make random try finding the first row empty (filled with null)in the board
    let emptyRowIndex = -1;
    for (let i = 0; i < this.rows; i++) {
      if (this.board[i].every(num => num === null)) {
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
      const randomRow: number[] = this.generateRandomRow(this.allowDuplicates);
      await this.setBoardRow(emptyRowIndex, randomRow);
      this.removeAnswer(randomRow);
    }
    // if algorithm is the first of the remaining answers
    else if (this.guessAlgorithm === 'first' && this.allRemainingAnswers.length > 0) {
      const firstAnswer = this.allRemainingAnswers[0];
      await this.setBoardRow(emptyRowIndex, firstAnswer);
      this.removeAnswer(firstAnswer);
    }
    // or try randomoly one of the remaining answers
    else if (this.guessAlgorithm === 'random' && this.allRemainingAnswers.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.allRemainingAnswers.length);
      const randomAnswer = this.allRemainingAnswers[randomIndex];
      await this.setBoardRow(emptyRowIndex, randomAnswer);
      this.removeAnswer(randomAnswer);
    }
    // weight remaining answers by remaining answers count
    else if (this.guessAlgorithm === 'optimal') {
      // find the answer that elimanates the most remaining answers
      const optimalAnswer = this.findOptimalAnswer();
      await this.setBoardRow(emptyRowIndex, optimalAnswer);
    }
    // choose the remaining answer with the highest black pins count
    else if (this.guessAlgorithm === "moreBlacks") {
      // sort most colors is in the same position as in the previous answer
      this.allRemainingAnswers = this.sortBySamePosition(this.board[emptyRowIndex - 1], this.allRemainingAnswers);
      await this.setBoardRow(emptyRowIndex, this.allRemainingAnswers[0]);
      this.removeAnswer(this.allRemainingAnswers[0]);
    }
    // choose the remaining answer with the less white pins count
    else if (this.guessAlgorithm === "lessWhites") {
      // sort least amount of colors in common with the previous answer
      this.allRemainingAnswers = this.sortByLeastCommonColors(this.board[emptyRowIndex - 1], this.allRemainingAnswers);
      await this.setBoardRow(emptyRowIndex, this.allRemainingAnswers[0]);
      this.removeAnswer(this.allRemainingAnswers[0]);
    }

    await this.answerResolutionBoardRow(emptyRowIndex);
    await this.eliminateAnswers(emptyRowIndex);

    if (this.resolution[emptyRowIndex][1] == this.columns) {
      await this.outputBoard();
      return true;
    }
    // if board is smaller than rows, add a row for next try
    if (this.board.length < this.rows) {
      this.addBoardRow();
      this.addResolutionRow();
    }

    return false;
  }

  // output the board row along the resolution arrays
  public async outputBoard(forceOutput?: boolean): Promise<void> {
    if (forceOutput || !this.noConsoleOutput) {
      console.log(this.answer);
      for (let i = 0; i < this.board.length; i++) {
        console.log(this.board[i], this.resolution[i], this.remainingAnswersCount[i] || "");
      }
      // line to separate the output from the next game
      console.log("--------------------");
    }
  }

  // function to remove an answer by value from all remaining answers only if not the last remaining answer
  public removeAnswer(answer: number[]): void {
    if (this.allRemainingAnswers.length > 1) {
      const index = this.allRemainingAnswers.indexOf(answer);
      this.allRemainingAnswers.splice(index, 1);
    }
  }

  resetGame = () => {
    this.status = "idle";
    this.attempts = 0;
    this.board = Array(1).fill(null).map(() => Array(this.colors).fill(null));
    this.resolution = Array(1).fill(null).map(() => Array(2).fill(0));
    this.remainingAnswersCount = Array(this.rows).fill(0);
    this.answer = Array(this.columns).fill(0);
  }

  // run game full resolution sequence
  runGameSequence = async () => {
    this.resetGame();
    // Welcome in green
    this.status = "playing";
    this.noConsoleOutput || console.log("\x1b[32mStarting game sequence...\x1b[0m");
    await this.setAnswer();
    await this.setAllRemainingAnswers(this.allowDuplicates);
    this.noConsoleOutput || console.log("Colors count: ", this.colors, " Columns count: ", this.columns, " Max Rows count: ", this.rows);
    this.noConsoleOutput || console.log("Guess algorithm: ", this.guessAlgorithm);
    this.noConsoleOutput || console.log("Starting answers count: ", this.allRemainingAnswers.length);

    while (this.attempts < this.rows && this.resolution[this.attempts][1] < this.columns) {
      if (!this.allRemainingAnswers.some(remaining => remaining.every((color, index) => color === this.answer[index]))) {
        throw new Error("Answer has been erroneously eliminated from remaining answers, answer: " + this.answer);
      }
      if (await this.makeATry()) {
        break;
      }
      this.attempts++;
    }
    this.noConsoleOutput || console.log("Game solved in ", this.attempts + 1, " tries, result:", this.status);
    // if lost display the board
    //if (this.status == "lost") {
    //this.outputBoard(true);
    //}
  }

  public async setAllRemainingAnswers(allowDuplicates?: boolean): Promise<void> {
    if (!allowDuplicates) {
      allowDuplicates = this.allowDuplicates;
    }
    this.allRemainingAnswers = await this.generateAllPossibleAnswers(allowDuplicates);
  }

  // set the answer with or without duplicates colors
  public async setAnswer(answerProvided?: number[]): Promise<void> {
    if (answerProvided) {
      await this.checkGuessIsValid(answerProvided);
      this.answer = answerProvided;
    } else {
      this.answer = this.generateRandomRow(this.allowDuplicates);
    }
  }

  public async loadBoard(board: number[][]): Promise<void> {
    // board must respect columns and max rows
    board.forEach((row, i) => {
      if (row.length !== this.columns) {
        throw new Error("Board row " + i + " must have " + this.columns + " colors");
      }
    });
    if (board.length > this.rows) {
      throw new Error("Board must have " + this.rows + " rows");
    }
    this.board = board;
  }

  public async checkGuessIsValid(guess: number[]): Promise<void> {
    // only contains numbers between 0 and colors
    if (!guess.every(num => num >= 1 && num < this.colors + 1)) {
      throw new Error("Guess contains invalid numbers");
    }
    // cannot contain duplicate colors
    if (!this.allowDuplicates && guess.some((num, i) => guess.indexOf(num) !== i)) {
      throw new Error("Guess contains duplicate colors and allowDuplicates is false");
    }
    // cannot be bigger or smaller than columns
    if (guess.length !== this.columns) {
      throw new Error("Guess length must be equal to the number of columns");
    }
    // cannot be one of the previous answers
    if (this.board.some(row => JSON.stringify(row) === JSON.stringify(guess))) {
      throw new Error("Guess cannot be one of the previous answers");
    }
  }

  public async setBoardRow(row: number, content: number[]): Promise<void> {
    await this.checkGuessIsValid(content);
    // if the row doesn't exist, push an empty one at the end
    if (!this.board[row]) {
      this.board[row] = [];
    }
    this.board[row] = content;
  }

  public async setBoardRowAvailable(content: number[]): Promise<void> {
    await this.checkGuessIsValid(content);
    // find an empty row and set the content, if the first one isn't an empty one and row count is less than rows, add a new row
    let emptyRowIndex = -1;
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i].every(num => num === null)) {
        emptyRowIndex = i;
        break;
      }
    }

    // If the first row isn't empty and row count is less than rows, add a new row
    if (emptyRowIndex === -1 && this.board.length < this.rows) {
      emptyRowIndex = this.board.length;
      this.addBoardRow();
    }

    // Set the content in the empty row
    if (emptyRowIndex !== -1) {
      this.board[emptyRowIndex] = content;
    } else {
      throw new Error("No empty row available");
    }
  }



  public sortByLeastCommonColors(previousAnswer: number[], remainingAnswers: number[][]): number[][] {
    return remainingAnswers.sort((a, b) => {
      const leastCommonColorsA = this.countLeastCommonColors(previousAnswer, a);
      const leastCommonColorsB = this.countLeastCommonColors(previousAnswer, b);
      return leastCommonColorsA - leastCommonColorsB;
    });
  }

  public sortBySamePosition(previousAnswer: number[], remainingAnswers: number[][]): number[][] {
    return remainingAnswers.sort((a, b) => {
      const samePositionA = this.countSamePosition(previousAnswer, a);
      const samePositionB = this.countSamePosition(previousAnswer, b);
      return samePositionB - samePositionA;
    });
  }

}