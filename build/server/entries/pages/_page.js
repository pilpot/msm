import { M as MsmGame } from "../../chunks/msmGame.js";
const load = async () => {
  let game = new MsmGame();
  game.noConsoleOutput = true;
  game.allowDuplicates = true;
  await game.runGameSequence();
  return {
    game,
    // nice different uniques 8 colors (ie red, blue, green...)
    colors: [
      "#CCC",
      "#FFF",
      "#000",
      "#a93226",
      "#2e86c1",
      "#28b463",
      "#f4d03f",
      "#a569bd",
      "#8d6e63"
    ]
  };
};
export {
  load
};
