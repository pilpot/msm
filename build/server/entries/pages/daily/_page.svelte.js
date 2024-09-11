import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { G as GameBoard } from "../../../chunks/gameBoard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  const colors = [
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
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${validate_component(GameBoard, "GameBoard").$$render(
    $$result,
    {
      boardGuesses: form?.body?.boardGuesses || data.boardGuesses,
      boardResolutions: form?.body?.boardResolutions || data.boardResolutions,
      remainingAnswersCount: form?.body?.remainingAnswersCount || data.remainingAnswersCount,
      sessionId: data.sessionId || "",
      colors,
      colorsCount: form?.body?.colors || data.colors,
      allowDuplicates: form?.body?.allowDuplicates || data.allowDuplicates,
      columns: form?.body?.columns || data.columns,
      status: form?.body?.status || data.status,
      answer: form?.body?.answer || data.answer,
      error_message: form?.message || "",
      maxAnswers: form?.body?.maxAnswers || data.maxAnswers
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
