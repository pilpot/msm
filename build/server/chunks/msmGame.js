class MsmGame {
  constructor(colors, columns, rows, allowDuplicates, guessAlgorithm) {
    this.resetGame = () => {
      this.status = "idle";
      this.attempts = 0;
      this.board = Array(1).fill(null).map(() => Array(this.colors).fill(null));
      this.resolution = Array(1).fill(null).map(() => Array(2).fill(0));
      this.remainingAnswersCount = Array(this.rows).fill(0);
      this.answer = Array(this.columns).fill(0);
    };
    this.runGameSequence = async () => {
      this.resetGame();
      this.status = "playing";
      this.noConsoleOutput || console.log("\x1B[32mStarting game sequence...\x1B[0m");
      await this.setAnswer();
      await this.setAllRemainingAnswers(this.allowDuplicates);
      this.noConsoleOutput || console.log(
        "Colors count: ",
        this.colors,
        " Columns count: ",
        this.columns,
        " Max Rows count: ",
        this.rows
      );
      this.noConsoleOutput || console.log("Guess algorithm: ", this.guessAlgorithm);
      this.noConsoleOutput || console.log("Starting answers count: ", this.allRemainingAnswers.length);
      while (this.attempts < this.rows && this.resolution[this.attempts][1] < this.columns) {
        if (!this.allRemainingAnswers.some(
          (remaining) => remaining.every((color, index) => color === this.answer[index])
        )) {
          throw new Error(
            "Answer has been erroneously eliminated from remaining answers, answer: " + this.answer
          );
        }
        if (await this.makeATry()) {
          break;
        }
        this.attempts++;
      }
      this.noConsoleOutput || console.log("Game solved in ", this.attempts + 1, " tries, result:", this.status);
    };
    this.columns = columns ?? 5;
    this.rows = rows ?? 10;
    this.colors = colors ?? 8;
    this.availableColors = Array.from({ length: this.colors }, (_, i) => i + 1);
    this.status = "idle";
    this.board = Array(1).fill(null).map(() => Array(this.colors).fill(null));
    this.resolution = Array(1).fill(null).map(() => Array(2).fill(0));
    this.remainingAnswersCount = Array(this.rows).fill(0);
    this.answer = Array(this.columns).fill(0);
    this.allowDuplicates = allowDuplicates ?? true;
    this.guessAlgorithm = guessAlgorithm ?? "random";
    this.allRemainingAnswers = [];
    this.maxAnswers = 0;
    this.noConsoleOutput = false;
    this.attempts = 0;
  }
  // Add a row to the board
  addBoardRow() {
    this.board.push(Array(this.columns).fill(null));
  }
  // Add a row to the resolution
  addResolutionRow() {
    this.resolution.push([0, 0]);
  }
  setColors(colors) {
    this.colors = colors;
    this.availableColors = Array.from({ length: this.colors }, (_, i) => i + 1);
  }
  // resolution board for all board rows
  async answerResolutionBoardAll() {
    for (let i = 0; i < this.board.length; i++) {
      await this.answerResolutionBoardRow(i);
    }
  }
  // answers a resolution board row
  async answerResolutionBoardRow(boardRow) {
    this.resolution[boardRow] = await this.evaluateRow(this.board[boardRow]);
    if (this.resolution[boardRow][0] === 0 && this.resolution[boardRow][1] === this.columns) {
      this.status = "won";
    } else {
      this.status = "lost";
    }
  }
  countLeastCommonColors(answerA, answerB) {
    let count = 0;
    for (let i = 0; i < answerA.length; i++) {
      if (answerA[i] === answerB[i]) {
        count++;
      }
    }
    return answerA.length - count;
  }
  countSamePosition(answerA, answerB) {
    let count = 0;
    for (let i = 0; i < answerA.length; i++) {
      if (answerA[i] === answerB[i]) {
        count++;
      }
    }
    return count;
  }
  // for a row in the board eliminates from the remaining answers the ones that doens't match white pins and black pins criteria
  async eliminateAnswers(boardRow) {
    if (this.board[boardRow].every((num) => num === null)) {
      return;
    }
    const totalPositionsInBoardRow = this.resolution[boardRow][1];
    const totalColorsInBoardRow = this.resolution[boardRow][0] + this.resolution[boardRow][1];
    for (let j = 0; j < this.allRemainingAnswers.length; j++) {
      const answer = this.allRemainingAnswers[j];
      let blackCount = 0;
      let whiteCount = 0;
      for (let k = 0; k < this.columns; k++) {
        if (answer[k] === this.board[boardRow][k]) {
          blackCount++;
        }
        if (answer.includes(this.board[boardRow][k])) {
          whiteCount++;
        }
      }
      if (blackCount == totalPositionsInBoardRow && whiteCount >= totalColorsInBoardRow) {
        continue;
      }
      this.allRemainingAnswers.splice(j, 1);
      j--;
    }
    this.remainingAnswersCount[boardRow] = this.allRemainingAnswers.length;
  }
  async eliminateAnswersAll() {
    for (let i = 0; i < this.board.length; i++) {
      await this.eliminateAnswers(i);
    }
  }
  // evaluates a single row and returns the count of white and black pins as promise
  async evaluateRow(row) {
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
  findOptimalAnswer() {
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
  async generateAllPossibleAnswers(allowDuplicates) {
    const duplicatedColors = [...this.availableColors];
    const allPossibleAnswers = [];
    if (!allowDuplicates) {
      const generatePermutations = (currentRow, remainingColors) => {
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
      const generateDuplicates = (currentRow, remainingColors) => {
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
    allPossibleAnswers.push([8, 7, 6, 5, 4]);
    return allPossibleAnswers;
  }
  // returns a new random row
  generateRandomRow(allowDuplicates) {
    if (allowDuplicates === void 0) {
      allowDuplicates = this.allowDuplicates;
    }
    const colorsToPick = [...this.availableColors];
    const row = [];
    if (!allowDuplicates) {
      for (let i = 0; i < this.columns; i++) {
        const colorIndex = Math.floor(Math.random() * colorsToPick.length);
        row[i] = colorsToPick.splice(colorIndex, 1)[0];
      }
    } else {
      for (let i = 0; i < this.columns; i++) {
        const colorIndex = Math.floor(Math.random() * colorsToPick.length);
        row[i] = colorsToPick[colorIndex];
      }
    }
    return row;
  }
  // make a try following the guess algorithm
  async makeATry() {
    let emptyRowIndex = -1;
    for (let i = 0; i < this.rows; i++) {
      if (this.board[i].every((num) => num === null)) {
        emptyRowIndex = i;
        break;
      }
    }
    if (emptyRowIndex == -1) {
      throw new Error("No empty row in the board");
    }
    if (emptyRowIndex == 0) {
      const randomRow = this.generateRandomRow(this.allowDuplicates);
      await this.setBoardRow(emptyRowIndex, randomRow);
      this.removeAnswer(randomRow);
    } else if (this.guessAlgorithm === "first" && this.allRemainingAnswers.length > 0) {
      const firstAnswer = this.allRemainingAnswers[0];
      await this.setBoardRow(emptyRowIndex, firstAnswer);
      this.removeAnswer(firstAnswer);
    } else if (this.guessAlgorithm === "random" && this.allRemainingAnswers.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.allRemainingAnswers.length);
      const randomAnswer = this.allRemainingAnswers[randomIndex];
      await this.setBoardRow(emptyRowIndex, randomAnswer);
      this.removeAnswer(randomAnswer);
    } else if (this.guessAlgorithm === "optimal") {
      const optimalAnswer = this.findOptimalAnswer();
      await this.setBoardRow(emptyRowIndex, optimalAnswer);
    } else if (this.guessAlgorithm === "moreBlacks") {
      this.allRemainingAnswers = this.sortBySamePosition(
        this.board[emptyRowIndex - 1],
        this.allRemainingAnswers
      );
      await this.setBoardRow(emptyRowIndex, this.allRemainingAnswers[0]);
      this.removeAnswer(this.allRemainingAnswers[0]);
    } else if (this.guessAlgorithm === "lessWhites") {
      this.allRemainingAnswers = this.sortByLeastCommonColors(
        this.board[emptyRowIndex - 1],
        this.allRemainingAnswers
      );
      await this.setBoardRow(emptyRowIndex, this.allRemainingAnswers[0]);
      this.removeAnswer(this.allRemainingAnswers[0]);
    }
    await this.answerResolutionBoardRow(emptyRowIndex);
    await this.eliminateAnswers(emptyRowIndex);
    if (this.resolution[emptyRowIndex][1] == this.columns) {
      await this.outputBoard();
      return true;
    }
    if (this.board.length < this.rows) {
      this.addBoardRow();
      this.addResolutionRow();
    }
    return false;
  }
  // output the board row along the resolution arrays
  async outputBoard(forceOutput) {
    if (forceOutput || !this.noConsoleOutput) {
      console.log(this.answer);
      for (let i = 0; i < this.board.length; i++) {
        console.log(this.board[i], this.resolution[i], this.remainingAnswersCount[i] || "");
      }
      console.log("--------------------");
    }
  }
  // function to remove an answer by value from all remaining answers only if not the last remaining answer
  removeAnswer(answer) {
    if (this.allRemainingAnswers.length > 1) {
      const index = this.allRemainingAnswers.indexOf(answer);
      this.allRemainingAnswers.splice(index, 1);
    }
  }
  async setAllRemainingAnswers(allowDuplicates) {
    if (!allowDuplicates) {
      allowDuplicates = this.allowDuplicates;
    }
    this.allRemainingAnswers = await this.generateAllPossibleAnswers(allowDuplicates);
    this.maxAnswers = this.allRemainingAnswers.length;
  }
  // set the answer with or without duplicates colors
  async setAnswer(answerProvided) {
    if (answerProvided) {
      await this.checkGuessIsValid(answerProvided);
      this.answer = answerProvided;
    } else {
      this.answer = this.generateRandomRow(this.allowDuplicates);
    }
  }
  async loadBoard(board) {
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
  async checkGuessIsValid(guess) {
    if (!guess.every((num) => num >= 1 && num < this.colors + 1)) {
      throw new Error("Nice try, but one of the colors isn't in the base colors set 🫠");
    }
    if (!this.allowDuplicates && guess.some((num, i) => guess.indexOf(num) !== i)) {
      throw new Error("Watch out, duplicate colors are not allowed in this game 🥸");
    }
    if (guess.length !== this.columns) {
      throw new Error("Mmmh... guess must have " + this.columns + " pins in it 🤔");
    }
    if (this.board.some((row) => JSON.stringify(row) === JSON.stringify(guess))) {
      throw new Error("Sure ? You already tried this one 🤨");
    }
  }
  async setBoardRow(row, content) {
    await this.checkGuessIsValid(content);
    if (!this.board[row]) {
      this.board[row] = [];
    }
    this.board[row] = content;
  }
  async setBoardRowAvailable(content) {
    await this.checkGuessIsValid(content);
    let emptyRowIndex = -1;
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i].every((num) => num === null)) {
        emptyRowIndex = i;
        break;
      }
    }
    if (emptyRowIndex === -1 && this.board.length < this.rows) {
      emptyRowIndex = this.board.length;
      this.addBoardRow();
    }
    if (emptyRowIndex !== -1) {
      this.board[emptyRowIndex] = content;
    } else {
      throw new Error("No empty row available");
    }
  }
  sortByLeastCommonColors(previousAnswer, remainingAnswers) {
    return remainingAnswers.sort((a, b) => {
      const leastCommonColorsA = this.countLeastCommonColors(previousAnswer, a);
      const leastCommonColorsB = this.countLeastCommonColors(previousAnswer, b);
      return leastCommonColorsA - leastCommonColorsB;
    });
  }
  sortBySamePosition(previousAnswer, remainingAnswers) {
    return remainingAnswers.sort((a, b) => {
      const samePositionA = this.countSamePosition(previousAnswer, a);
      const samePositionB = this.countSamePosition(previousAnswer, b);
      return samePositionB - samePositionA;
    });
  }
}
export {
  MsmGame as M
};
