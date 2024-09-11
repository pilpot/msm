import { M as MsmGame } from "../../../chunks/msmGame.js";
import { f as fail } from "../../../chunks/index.js";
import { Bodyguard } from "@auth70/bodyguard";
import { z } from "zod";
async function createDailyGameSettings(db, game) {
  game.rows = 10;
  game.columns = Math.floor(Math.random() * 3) + 4;
  game.setColors(Math.floor(Math.random() * (game.columns + 1)) + game.columns - 1);
  game.allowDuplicates = Math.random() < 0.4;
  game.setAnswer();
  await db.query(
    "INSERT INTO daily_settings (day, rows, columns, colors, allow_duplicates, answer) VALUES ($1, $2, $3, $4, $5, $6)",
    [/* @__PURE__ */ new Date(), game.rows, game.columns, game.colors, game.allowDuplicates, game.answer]
  );
  console.log("Created new daily settings");
}
async function setDailyGameSettings(db, game) {
  const querySettings = await db.query("SELECT * FROM daily_settings WHERE day = $1 LIMIT 1", [
    /* @__PURE__ */ new Date()
  ]);
  if (querySettings.rowCount && querySettings.rowCount >= 1) {
    game.rows = querySettings.rows[0].rows;
    game.columns = querySettings.rows[0].columns;
    await game.setColors(querySettings.rows[0].colors);
    game.allowDuplicates = querySettings.rows[0].allow_duplicates;
    await game.setAnswer(querySettings.rows[0].answer);
    console.log("Loaded daily settings:", querySettings.rows[0]);
  } else {
    await createDailyGameSettings(db, game);
  }
  console.log("rows:", game.rows, "columns:", game.columns, "colors:", game.colors);
  console.log("answer:", game.answer);
}
async function loadPreviousBoard(db, game, sessionId) {
  let previousBoard = [];
  const queryBoard = await db.query(`SELECT * FROM game_data WHERE session_id = $1 LIMIT 1`, [
    sessionId
  ]);
  if (queryBoard.rowCount && queryBoard.rowCount > 0) {
    previousBoard = queryBoard.rows[0].board;
    await game.loadBoard(previousBoard);
  }
}
const load = async ({ locals, cookies }) => {
  const db = locals.db;
  const game = new MsmGame();
  await setDailyGameSettings(db, game);
  if (cookies.get("session") != void 0) {
    if (cookies.get("session").match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      await loadPreviousBoard(db, game, cookies.get("session"));
      await game.setAllRemainingAnswers();
      await game.answerResolutionBoardAll();
      await game.eliminateAnswersAll();
    }
  }
  return {
    boardGuesses: game.board,
    boardResolutions: game.resolution,
    remainingAnswersCount: game.remainingAnswersCount,
    status: game.status,
    sessionId: locals.sessionId,
    answer: game.status == "won" ? game.answer : [],
    columns: game.columns,
    maxAnswers: game.maxAnswers,
    colors: game.colors,
    allowDuplicates: game.allowDuplicates
  };
};
const RouteSchema = z.object({ sessionId: z.string(), guess: z.array(z.string()) });
const bodyguard = new Bodyguard();
const actions = {
  helpMe: async ({ locals }) => {
    const db = locals.db;
    const game = new MsmGame();
    await setDailyGameSettings(db, game);
    if (locals.sessionId) {
      await loadPreviousBoard(db, game, locals.sessionId);
    }
    await game.setAllRemainingAnswers();
    await game.answerResolutionBoardAll();
    await game.eliminateAnswersAll();
    const randomIndex = Math.floor(Math.random() * game.allRemainingAnswers.length);
    const choosenAnswer = game.allRemainingAnswers[randomIndex];
    await game.setBoardRowAvailable(choosenAnswer);
    await game.removeAnswer(choosenAnswer);
    db.query(
      "INSERT INTO game_data(session_id, board) VALUES($1, $2) ON CONFLICT (session_id) DO UPDATE SET board = $2",
      [locals.sessionId, game.board]
    );
    await game.answerResolutionBoardRow(game.board.length - 1);
    await game.eliminateAnswers(game.board.length - 1);
    return {
      status: 200,
      body: {
        boardGuesses: game.board,
        boardResolutions: game.resolution,
        remainingAnswersCount: game.remainingAnswersCount,
        status: game.status,
        success: true,
        answer: game.status === "won" ? game.answer : [],
        columns: game.columns,
        maxAnswers: game.maxAnswers,
        colors: game.colors,
        allowDuplicates: game.allowDuplicates
      }
    };
  },
  submitGuess: async ({ request, locals }) => {
    const db = locals.db;
    const game = new MsmGame();
    await setDailyGameSettings(db, game);
    const { success, value } = await bodyguard.softForm(
      request,
      // Pass in the request
      RouteSchema.parse
      // Pass in the validator
    ).catch((e) => {
      console.log(e);
    });
    if (!success) {
      return fail(400, { message: "Invalid form data " + value });
    }
    if (value === void 0) {
      return fail(400, { message: "No data" });
    }
    if (!value.guess) {
      return fail(400, { message: "No guess" });
    }
    try {
      const queryBoard = await db.query(`SELECT * FROM game_data WHERE session_id = $1 LIMIT 1`, [
        locals.sessionId
      ]);
      let previousBoard = [];
      if (queryBoard.rowCount && queryBoard.rowCount > 0) {
        previousBoard = queryBoard.rows[0].board;
      }
      let guess;
      if (typeof value.guess == "object") {
        if (Array.isArray(value.guess)) {
          guess = value.guess.map(Number);
        } else {
          return fail(400, { message: "Invalid guess" });
        }
      } else {
        return fail(400, { message: "Invalid guess type" });
      }
      await game.checkGuessIsValid(guess);
      await game.setAllRemainingAnswers();
      if (previousBoard) {
        game.loadBoard(previousBoard);
      }
      await game.setBoardRowAvailable(guess);
      db.query(
        "INSERT INTO game_data(session_id, board) VALUES($1, $2) ON CONFLICT (session_id) DO UPDATE SET board = $2",
        [locals.sessionId, game.board]
      );
      await game.answerResolutionBoardAll();
      await game.eliminateAnswersAll();
      return {
        status: 200,
        body: {
          boardGuesses: game.board,
          boardResolutions: game.resolution,
          remainingAnswersCount: game.remainingAnswersCount,
          status: game.status,
          success: true,
          answer: game.status === "won" ? game.answer : [],
          columns: game.columns,
          maxAnswers: game.maxAnswers,
          colors: game.colors,
          allowDuplicates: game.allowDuplicates
        }
      };
    } catch (e) {
      if (e instanceof Error)
        return fail(400, { message: e.message });
      return fail(400, { message: "Unknown error" });
    }
  }
};
export {
  actions,
  load
};
