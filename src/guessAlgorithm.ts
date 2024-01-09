// Guess Algorithm interface
interface GuessAlgorithm {
  guess(board: number[][], resolution: number[][], remainingAnswers: number[][]): number[];
}

export class GuessAlgorithmRandom implements GuessAlgorithm {
  public guess(remainingAnswers: number[][]): number[] {
    return remainingAnswers[Math.floor(Math.random() * remainingAnswers.length)];
  }
}

export class GuessAlgorithmFirst implements GuessAlgorithm {
  public guess(remainingAnswers: number[][]): number[] {
    return remainingAnswers[0];
  }
}