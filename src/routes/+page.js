import { error } from '@sveltejs/kit';
import { MsmGame } from "../lib/msmGame";

// export a game object to display on the page
export const load = async () => {
  let game = new MsmGame();
  game.noConsoleOutput = true;
  game.allowDuplicates = true;
  await game.runGameSequence();
  // game.board.reverse();
  // game.resolution.reverse();
  return {
    game: game,
    // nice different uniques 8 colors (ie red, blue, green...)
    colors: ["#CCC", "#FFF", "#000", "#a93226", "#2e86c1", "#28b463", "#f4d03f", "#a569bd", "#8d6e63"],
  };

  // Black, white, red, blue, green, yellow, purple, brown
  // #000, #FFF,  #a93226,  #2e86c1,  #28b463,  #f4d03f,  #a569bd,  #8d6e63
};