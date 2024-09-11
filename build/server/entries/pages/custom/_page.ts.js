import { M as MsmGame } from "../../../chunks/msmGame.js";
const load = async () => {
  const game = new MsmGame();
  game.noConsoleOutput = true;
  game.rows = 10;
  game.columns = Math.floor(Math.random() * 3) + 4;
  game.setColors(Math.floor(Math.random() * (game.columns + 1)) + game.columns - 1);
  game.allowDuplicates = Math.random() < 0.4;
  await game.setAnswer();
  await game.setAllRemainingAnswers();
  return {
    game,
    colors: [
      "#CCC",
      "#FFF",
      "#000",
      "#a93226",
      "#2e86c1",
      "#28b463",
      "#f4d03f",
      "#a569bd",
      "#7a5142",
      "#ff4600",
      "#9d9d9d"
    ]
  };
};
export {
  load
};
