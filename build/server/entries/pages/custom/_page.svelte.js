import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { G as GameBoard } from "../../../chunks/gameBoard.js";
import { C as Card } from "../../../chunks/h2.js";
import { H as H1 } from "../../../chunks/h1.js";
import { L as Label } from "../../../chunks/label.js";
import { S as Slider } from "../../../chunks/slider.js";
import { B as Button } from "../../../chunks/button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let game;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    game = data.game;
    $$rendered = `${escape(game.answer)} ${validate_component(GameBoard, "GameBoard").$$render(
      $$result,
      {
        boardGuesses: game.board,
        boardResolutions: game.resolution,
        remainingAnswersCount: game.remainingAnswersCount,
        sessionId: "",
        colors: data.colors,
        colorsCount: data.colors.length,
        allowDuplicates: game.allowDuplicates,
        status: game.status,
        answer: game.answer,
        error_message: "",
        maxAnswers: game.maxAnswers,
        columns: game.columns,
        game
      },
      {
        columns: ($$value) => {
          game.columns = $$value;
          $$settled = false;
        },
        game: ($$value) => {
          game = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Card, "Card").$$render(
      $$result,
      {
        style: "max-width: 280px; display: inline-block"
      },
      {},
      {
        default: () => {
          return `${validate_component(H1, "H1").$$render($$result, {}, {}, {
            default: () => {
              return `Options`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { small: true }, {}, {
            default: () => {
              return `Colors`;
            }
          })} ${validate_component(Slider, "Slider").$$render(
            $$result,
            {
              value: 8,
              min: 4,
              max: 12,
              step: 1,
              tooltips: "active",
              ticks: {
                mode: "values",
                values: [4, 5, 6, 7, 8, 9, 10, 11, 12]
              }
            },
            {},
            {}
          )} <br> <br> ${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Columns`;
            }
          })} ${validate_component(Slider, "Slider").$$render(
            $$result,
            {
              min: 4,
              max: 7,
              step: 1,
              tooltips: "active",
              ticks: { mode: "values", values: [4, 5, 6, 7] },
              value: game.columns
            },
            {
              value: ($$value) => {
                game.columns = $$value;
                $$settled = false;
              }
            },
            {}
          )} <br> <br> ${validate_component(Button, "Button").$$render($$result, { filled: true, small: true }, {}, {
            default: () => {
              return `New Game`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { outline: true, small: true }, {}, {
            default: () => {
              return `Reset`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { outline: true, small: true }, {}, {
            default: () => {
              return `Console Log Board`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
