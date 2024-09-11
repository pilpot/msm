import { c as create_ssr_component, b as compute_rest_props, i as createEventDispatcher, e as escape, o as null_to_empty, d as spread, f as escape_attribute_value, h as escape_object, p as add_attribute, q as each, v as validate_component } from "./ssr.js";
import { c as classes, B as Button } from "./button.js";
import "devalue";
import "@svelte-put/clickoutside";
import { C as Card, H as H2 } from "./h2.js";
import { L as Label } from "./label.js";
const css$b = {
  code: '.switch.svelte-aapm94.svelte-aapm94.svelte-aapm94.svelte-aapm94{align-items:center;cursor:pointer;display:flex;font-family:"Ubuntu", sans-serif}.switch.svelte-aapm94 input.svelte-aapm94.svelte-aapm94.svelte-aapm94{clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;position:absolute;width:1px}.switch.svelte-aapm94 .track.svelte-aapm94.svelte-aapm94.svelte-aapm94{border:0.125em solid #aaa;border-radius:0.75em;cursor:pointer;height:1.125em;position:relative;width:2em}.switch.svelte-aapm94 .track.svelte-aapm94.svelte-aapm94.svelte-aapm94::before{border-radius:1.125em;content:"";height:2.375em;left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);width:3.25em}.switch.svelte-aapm94 .track.svelte-aapm94>.thumb.svelte-aapm94.svelte-aapm94{background:#aaa;border-radius:50%;height:0.75em;left:0.25em;position:absolute;top:50%;transform:translateY(-50%);transition:transform 100ms;width:0.75em}.switch.svelte-aapm94 input.svelte-aapm94:checked~.track.svelte-aapm94.svelte-aapm94{border-color:#4300b0}.switch.svelte-aapm94 input.svelte-aapm94:checked~.track.svelte-aapm94>.thumb.svelte-aapm94{background-color:#4300b0;transform:translateY(-50%) translateX(100%)}.switch.svelte-aapm94 input.svelte-aapm94:disabled~.track.svelte-aapm94.svelte-aapm94{border-color:#888;cursor:not-allowed}.switch.svelte-aapm94 input.svelte-aapm94:disabled~.track.svelte-aapm94>.thumb.svelte-aapm94{background:none;border:0.125em solid #888;height:0.5em;position:relative;width:0.5em}.switch.svelte-aapm94 input.svelte-aapm94:disabled~.track.svelte-aapm94>.thumb.svelte-aapm94::before{background:#888;content:"";height:0.125em;left:0;position:absolute;top:0.1875em;transform:rotate(-45deg);width:100%}.switch.svelte-aapm94 input.svelte-aapm94:focus~.track.svelte-aapm94.svelte-aapm94::before{background:rgba(0, 0, 0, 0.1)}.switch.svelte-aapm94 input.svelte-aapm94:focus:checked~.track.svelte-aapm94.svelte-aapm94::before{background:rgba(67, 0, 176, 0.1)}.switch.svelte-aapm94:hover .track.svelte-aapm94.svelte-aapm94.svelte-aapm94::before{background:rgba(0, 0, 0, 0.1)}.switch.svelte-aapm94:hover input.svelte-aapm94:checked:not(:disabled)~.track.svelte-aapm94.svelte-aapm94::before{background:rgba(67, 0, 176, 0.05)}',
  map: null
};
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "inputClass", "trackClass", "thumbClass", "value", "disabled", "slotLeft"]);
  let { class: _class = null } = $$props;
  let { inputClass = null } = $$props;
  let { trackClass = null } = $$props;
  let { thumbClass = null } = $$props;
  let { value = false } = $$props;
  let { disabled = false } = $$props;
  let { slotLeft = false } = $$props;
  createEventDispatcher();
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  if ($$props.trackClass === void 0 && $$bindings.trackClass && trackClass !== void 0)
    $$bindings.trackClass(trackClass);
  if ($$props.thumbClass === void 0 && $$bindings.thumbClass && thumbClass !== void 0)
    $$bindings.thumbClass(thumbClass);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.slotLeft === void 0 && $$bindings.slotLeft && slotLeft !== void 0)
    $$bindings.slotLeft(slotLeft);
  $$result.css.add(css$b);
  return `<label class="${escape(null_to_empty(classes("switch", _class)), true) + " svelte-aapm94"}">${slotLeft ? `${slots.default ? slots.default({}) : ``}` : ``} <input${spread(
    [
      { type: "checkbox" },
      {
        class: escape_attribute_value(classes(inputClass))
      },
      { disabled: disabled || null },
      escape_object($$restProps)
    ],
    { classes: "svelte-aapm94" }
  )}${add_attribute("checked", value, 1)}> <div class="${escape(null_to_empty(classes("track", trackClass)), true) + " svelte-aapm94"}"><div class="${escape(null_to_empty(classes("thumb", thumbClass)), true) + " svelte-aapm94"}"></div></div> ${!slotLeft ? `${slots.default ? slots.default({}) : ``}` : ``} </label>`;
});
const Switch$1 = Switch;
const css$a = {
  code: '.chip.svelte-oww5en{background:rgba(0, 0, 0, 0.08);border-radius:1.5625em;color:#656565;font-family:"Ubuntu", sans-serif;font-weight:500;padding:0.6em 0.9em}.chip.small.svelte-oww5en{font-size:0.9rem;min-width:0.9em;padding:0.4em 0.6em;text-align:center}.chip.outline.svelte-oww5en{background:transparent;border:1px solid #4300b0}.chip.no-padding.svelte-oww5en{padding:0}',
  map: null
};
const Chip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: _class = null } = $$props;
  let { small = false } = $$props;
  let { outline = false } = $$props;
  let { noPadding = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.noPadding === void 0 && $$bindings.noPadding && noPadding !== void 0)
    $$bindings.noPadding(noPadding);
  $$result.css.add(css$a);
  return `<div class="${[
    escape(null_to_empty(classes("chip", _class)), true) + " svelte-oww5en",
    (small ? "small" : "") + " " + (outline ? "outline" : "") + " " + (noPadding ? "no-padding" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </div>`;
});
const Chip$1 = Chip;
const css$9 = {
  code: ".headline.svelte-7dvfxj{color:#4300b0;font-size:1.5em;font-weight:500;margin-bottom:0.2em}@media only screen and (min-width: 640px){.headline.svelte-7dvfxj{font-size:1.9em}}@media only screen and (min-width: 840px){.headline.svelte-7dvfxj{font-size:2em}}@media only screen and (min-width: 1024px){.headline.svelte-7dvfxj{font-size:2.1em}}@media only screen and (min-width: 1200px){.headline.svelte-7dvfxj{font-size:2.2em}}",
  map: null
};
const Headline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: _class = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  $$result.css.add(css$9);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classes("headline", _class))
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-7dvfxj" }
  )}>${slots.default ? slots.default({}) : ``} </div>`;
});
const Headline$1 = Headline;
const css$8 = {
  code: ".dot.svelte-1rux4jd{background:#4300b0;border-radius:50%;height:0.625em;width:0.625em}.dot.info.svelte-1rux4jd{background:#86d3ff}.dot.attention.svelte-1rux4jd{background:#ffb359}.dot.success.svelte-1rux4jd{background:#9cde70}.dot.danger.svelte-1rux4jd{background:#b80000}.dot.small.svelte-1rux4jd{height:0.375em;width:0.375em}",
  map: null
};
const Dot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "info", "attention", "danger", "success", "small"]);
  let { class: _class = null } = $$props;
  let { info = false } = $$props;
  let { attention = false } = $$props;
  let { danger = false } = $$props;
  let { success = false } = $$props;
  let { small = false } = $$props;
  if (info + attention + danger + success > 1) {
    console.warn("A dot can either be info, attention, danger or success, not several of them");
  }
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  if ($$props.attention === void 0 && $$bindings.attention && attention !== void 0)
    $$bindings.attention(attention);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  if ($$props.success === void 0 && $$bindings.success && success !== void 0)
    $$bindings.success(success);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  $$result.css.add(css$8);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classes("dot", _class))
      },
      escape_object($$restProps)
    ],
    {
      classes: (info ? "info" : "") + " " + (attention ? "attention" : "") + " " + (success ? "success" : "") + " " + (danger ? "danger" : "") + " " + (small ? "small" : "") + " svelte-1rux4jd"
    }
  )}></div>`;
});
const Dot$1 = Dot;
const css$7 = {
  code: "hr.svelte-lhyupy{border:0 solid #ddd;border-top-width:1px;margin-top:1em;width:100%}hr[data-text].svelte-lhyupy{overflow:visible;position:relative}hr[data-text].svelte-lhyupy::after{background:#fff;content:attr(data-text);font-size:0.85rem;left:50%;padding:0 0.4em;position:absolute;top:0;transform:translate(-50%, -55%)}",
  map: null
};
const Divider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["text"]);
  let { text = null } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$7);
  return `<hr${spread(
    [
      {
        "data-text": escape_attribute_value(text)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-lhyupy" }
  )}>`;
});
const Divider$1 = Divider;
const css$6 = {
  code: ".spinner.svelte-5lyar3.svelte-5lyar3{align-items:center;color:#4300b0;display:flex;justify-content:center}.spinner.svelte-5lyar3>div.svelte-5lyar3{animation:svelte-5lyar3-sk-bouncedelay 1.2s infinite ease-in-out both;background:currentColor;border-radius:100%;display:inline-block;height:0.4em;margin:0 0.1em;width:0.4em}.spinner.svelte-5lyar3 .bounce1.svelte-5lyar3{animation-delay:-0.32s}.spinner.svelte-5lyar3 .bounce2.svelte-5lyar3{animation-delay:-0.16s}@keyframes svelte-5lyar3-sk-bouncedelay{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: _class = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  $$result.css.add(css$6);
  return `  <div class="${escape(null_to_empty(classes("spinner", _class)), true) + " svelte-5lyar3"}"><div class="bounce1 svelte-5lyar3"></div> <div class="bounce2 svelte-5lyar3"></div> <div class="bounce3 svelte-5lyar3"></div> </div>`;
});
const Loading$1 = Loading;
const css$5 = {
  code: ".guessRow.svelte-ichylx{display:flex;align-items:baseline;justify-content:space-around;gap:0.5em}",
  map: null
};
const GameBoardGuess = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["guesses"]);
  let { guesses = [] } = $$props;
  const colors = [
    "conic-gradient(from 180deg,violet,blue,green,yellow,orange,red,violet)",
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
  if ($$props.guesses === void 0 && $$bindings.guesses && guesses !== void 0)
    $$bindings.guesses(guesses);
  $$result.css.add(css$5);
  return `<div${spread([{ class: "guessRow" }, escape_object($$restProps)], { classes: "svelte-ichylx" })}>${each(guesses, (guess) => {
    return `${validate_component(Dot$1, "Dot").$$render(
      $$result,
      {
        style: "background:" + colors[guess] + ";display:inline-block;height:25px;width:25px;filter: drop-shadow(0px 0px 2px #804000);margin:5px;"
      },
      {},
      {}
    )}`;
  })} ${slots.default ? slots.default({}) : ``} </div>`;
});
const css$4 = {
  code: ".resolution.svelte-10od9t2{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.resolutionRow.svelte-10od9t2{display:flex;align-items:center;margin-left:15px;justify-content:space-around;gap:0.2em}.remainingAnswers.svelte-10od9t2{display:flex;width:70px;text-align:center;color:#f7f7f7;justify-content:center}.judge.svelte-10od9t2{display:flex}",
  map: null
};
const GameBoardResolution = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { resolution = [0, 0] } = $$props;
  let { remainingAnswersCount = 0 } = $$props;
  let { maxAnswers = 0 } = $$props;
  let { columns = 5 } = $$props;
  let { showRemainingAnswersCount = true } = $$props;
  let { showJudge = true } = $$props;
  if ($$props.resolution === void 0 && $$bindings.resolution && resolution !== void 0)
    $$bindings.resolution(resolution);
  if ($$props.remainingAnswersCount === void 0 && $$bindings.remainingAnswersCount && remainingAnswersCount !== void 0)
    $$bindings.remainingAnswersCount(remainingAnswersCount);
  if ($$props.maxAnswers === void 0 && $$bindings.maxAnswers && maxAnswers !== void 0)
    $$bindings.maxAnswers(maxAnswers);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.showRemainingAnswersCount === void 0 && $$bindings.showRemainingAnswersCount && showRemainingAnswersCount !== void 0)
    $$bindings.showRemainingAnswersCount(showRemainingAnswersCount);
  if ($$props.showJudge === void 0 && $$bindings.showJudge && showJudge !== void 0)
    $$bindings.showJudge(showJudge);
  $$result.css.add(css$4);
  return `<div class="resolution svelte-10od9t2"><div class="resolutionRow svelte-10od9t2">${each(Array(resolution[0]), (_, j) => {
    return `${validate_component(Dot$1, "Dot").$$render(
      $$result,
      {
        style: "background-color: #FFF;display:inline-block;height:15px;width:15px"
      },
      {},
      {}
    )}`;
  })} ${each(Array(resolution[1]), (_, j) => {
    return `${validate_component(Dot$1, "Dot").$$render(
      $$result,
      {
        style: "background-color: #000;display:inline-block;height:15px;width:15px"
      },
      {},
      {}
    )}`;
  })} ${each(Array(columns - resolution[0] - resolution[1]), (_, j) => {
    return `${validate_component(Dot$1, "Dot").$$render(
      $$result,
      {
        style: "background-color: transparent;display:inline-block;height:15px;width:15px"
      },
      {},
      {}
    )}`;
  })}</div> ${showRemainingAnswersCount ? `<div class="remainingAnswers svelte-10od9t2">${escape(remainingAnswersCount > 0 ? remainingAnswersCount : "")}</div>` : ``} ${showJudge ? `<div class="judge svelte-10od9t2"> <meter${add_attribute("min", -maxAnswers, 0)} max="-1"${add_attribute("high", -Math.round(maxAnswers / 3), 0)}${add_attribute("low", -Math.round(maxAnswers / 2), 0)} optimum="-1"${add_attribute("value", -remainingAnswersCount, 0)}></meter></div>` : ``} </div>`;
});
const css$3 = {
  code: ".gameBoardRow.svelte-1kvt3tu{display:flex;justify-content:center;margin-top:5px;margin-bottom:5px;flex-wrap:wrap;gap:0.5em;min-height:30px}",
  map: null
};
const GameBoardRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { guesses = [] } = $$props;
  let { resolution = [0, 0] } = $$props;
  let { remainingAnswersCount = 0 } = $$props;
  let { maxAnswers = 0 } = $$props;
  let { showRemainingAnswersCount = true } = $$props;
  let { showJudge = true } = $$props;
  if ($$props.guesses === void 0 && $$bindings.guesses && guesses !== void 0)
    $$bindings.guesses(guesses);
  if ($$props.resolution === void 0 && $$bindings.resolution && resolution !== void 0)
    $$bindings.resolution(resolution);
  if ($$props.remainingAnswersCount === void 0 && $$bindings.remainingAnswersCount && remainingAnswersCount !== void 0)
    $$bindings.remainingAnswersCount(remainingAnswersCount);
  if ($$props.maxAnswers === void 0 && $$bindings.maxAnswers && maxAnswers !== void 0)
    $$bindings.maxAnswers(maxAnswers);
  if ($$props.showRemainingAnswersCount === void 0 && $$bindings.showRemainingAnswersCount && showRemainingAnswersCount !== void 0)
    $$bindings.showRemainingAnswersCount(showRemainingAnswersCount);
  if ($$props.showJudge === void 0 && $$bindings.showJudge && showJudge !== void 0)
    $$bindings.showJudge(showJudge);
  $$result.css.add(css$3);
  return `<div class="gameBoardRow svelte-1kvt3tu">${guesses[0] > 0 ? `${validate_component(GameBoardGuess, "GameBoardGuess").$$render($$result, { guesses }, {}, {})} ${validate_component(GameBoardResolution, "GameBoardResolution").$$render(
    $$result,
    {
      resolution,
      remainingAnswersCount,
      maxAnswers,
      showRemainingAnswersCount,
      showJudge,
      columns: guesses.length
    },
    {},
    {}
  )}` : ``} </div>`;
});
const css$2 = {
  code: ".answerRow.svelte-12y9ewt{display:flex;align-items:baseline;justify-content:flex-start;opacity:0.7}",
  map: null
};
const GameBoardAnswer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { answer = [] } = $$props;
  let { columns = 5 } = $$props;
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  $$result.css.add(css$2);
  return `<div class="answerRow svelte-12y9ewt">${answer.length > 0 ? `${validate_component(GameBoardGuess, "GameBoardGuess").$$render($$result, { guesses: answer }, {}, {})}` : `${validate_component(GameBoardGuess, "GameBoardGuess").$$render($$result, { guesses: Array(columns).fill(0) }, {}, {})}`} </div>`;
});
const css$1 = {
  code: ".color-picker-holder.svelte-b4ihmo.svelte-b4ihmo{position:relative}.color-picker-inner.svelte-b4ihmo.svelte-b4ihmo{display:flex;height:35px}.select-color.svelte-b4ihmo.svelte-b4ihmo{border:1px solid #545454c7;padding:4px;border-radius:50%;background:#ccc;height:35px;width:35px;filter:drop-shadow(0px 0px 2px #804000)}.caret.svelte-b4ihmo.svelte-b4ihmo{display:none;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #555;position:relative;top:10px;margin-left:4px}.caret.top.svelte-b4ihmo.svelte-b4ihmo{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid #555;border-top:none}.active.svelte-b4ihmo.svelte-b4ihmo{box-shadow:inset 0 0 0 1px #fff,\r\n			0 0 3px 1px rgba(0, 0, 0, 0.8)}.fake-focus.svelte-b4ihmo.svelte-b4ihmo,input.svelte-b4ihmo.svelte-b4ihmo:focus,button.svelte-b4ihmo.svelte-b4ihmo:focus{outline:0;box-shadow:0 0 0 2px #18a0fb;border-color:#18a0fb}input.svelte-b4ihmo.svelte-b4ihmo{border:1px solid #ccc;height:35px;border-radius:0.2rem}.color-block.svelte-b4ihmo.svelte-b4ihmo{border-radius:50%;width:25px;height:25px;line-height:0;font-size:0}.values-dropdown.svelte-b4ihmo.svelte-b4ihmo{padding:6px;position:absolute;z-index:1;top:38px;background:#ccc;border:1px solid #8d6767;border-radius:0.3rem}.values-dropdown-grid.svelte-b4ihmo.svelte-b4ihmo{grid-template-columns:repeat(4, 24px);grid-template-rows:25px 25px;grid-gap:5px;display:grid}.values-dropdown.top.svelte-b4ihmo.svelte-b4ihmo{top:auto;bottom:40px}.values-dropdown.svelte-b4ihmo button.svelte-b4ihmo{border:none;border-radius:50%}",
  map: null
};
const GameBoardPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "guess" } = $$props;
  let { value = 1 } = $$props;
  let { colors = [] } = $$props;
  let { colorsCount = 8 } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.colorsCount === void 0 && $$bindings.colorsCount && colorsCount !== void 0)
    $$bindings.colorsCount(colorsCount);
  $$result.css.add(css$1);
  return ` <div class="color-picker-holder svelte-b4ihmo"><div class="color-picker-inner svelte-b4ihmo"><button${add_attribute("id", id + "-button", 0)} class="${["select-color svelte-b4ihmo", ""].join(" ").trim()}"><div style="display: flex;"><div style="${"background: " + escape(colors[value], true) + ";"}" class="color-block svelte-b4ihmo"></div> <div class="${["caret svelte-b4ihmo", ""].join(" ").trim()}" style="margin-right: .2rem;"></div></div></button> <input type="hidden"${add_attribute("name", id, 0)} class="svelte-b4ihmo"${add_attribute("value", value, 0)}></div> ${``} </div>`;
});
const GameBoardForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sessionId } = $$props;
  let { colors } = $$props;
  let { colorsCount } = $$props;
  let { columns } = $$props;
  let { gameObject } = $$props;
  let guesspos = new Array(columns);
  for (let i = 0; i < columns; i++) {
    guesspos[i] = "";
  }
  if ($$props.sessionId === void 0 && $$bindings.sessionId && sessionId !== void 0)
    $$bindings.sessionId(sessionId);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.colorsCount === void 0 && $$bindings.colorsCount && colorsCount !== void 0)
    $$bindings.colorsCount(colorsCount);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.gameObject === void 0 && $$bindings.gameObject && gameObject !== void 0)
    $$bindings.gameObject(gameObject);
  return `<form action="?/submitGuess" method="post" enctype="multipart/form-data"><div class="formBoard" style="display:flex;align-items: center;justify-content: space-between;flex-wrap:wrap;gap: 0.5em;"><div style="display: flex;justify-content: space-around; gap: 0.5em;">${each(guesspos, (pos, i) => {
    return `${validate_component(GameBoardPicker, "GameBoardPicker").$$render(
      $$result,
      {
        colors,
        colorsCount,
        id: "guess[" + i + "]",
        value: parseInt(pos)
      },
      {},
      {}
    )}`;
  })}</div> <div style="display: flex;">${validate_component(Button, "Button").$$render(
    $$result,
    {
      small: true,
      filled: true,
      type: "submit"
    },
    {},
    {
      default: () => {
        return `Make a guess`;
      }
    }
  )}</div>  <input type="hidden" name="sessionId"${add_attribute("value", sessionId, 0)}></div></form>`;
});
const css = {
  code: ".gameBoardHolder.svelte-14k9nlz{max-width:max-content;margin:0 auto}.gameBoardContent.svelte-14k9nlz{background:#ffffff2e;padding:2em;border-radius:1.25em;padding-bottom:1em}.gameBoardRows.svelte-14k9nlz{min-height:250px}.options.svelte-14k9nlz{display:flex;align-items:flex-start;justify-content:flex-start;flex-wrap:wrap;flex-direction:column;row-gap:1em;padding:0.5em}.ml.svelte-14k9nlz{margin-left:0.5em}",
  map: null
};
const GameBoard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { boardGuesses } = $$props;
  let { boardResolutions } = $$props;
  let { remainingAnswersCount } = $$props;
  let { maxAnswers } = $$props;
  let { answer } = $$props;
  let { sessionId } = $$props;
  let { colors } = $$props;
  let { colorsCount } = $$props;
  let { allowDuplicates } = $$props;
  let { columns } = $$props;
  let { status } = $$props;
  let { error_message } = $$props;
  let { game } = $$props;
  let { UISettings = {
    showRemainingAnswersCount: true,
    showJudge: true
  } } = $$props;
  if ($$props.boardGuesses === void 0 && $$bindings.boardGuesses && boardGuesses !== void 0)
    $$bindings.boardGuesses(boardGuesses);
  if ($$props.boardResolutions === void 0 && $$bindings.boardResolutions && boardResolutions !== void 0)
    $$bindings.boardResolutions(boardResolutions);
  if ($$props.remainingAnswersCount === void 0 && $$bindings.remainingAnswersCount && remainingAnswersCount !== void 0)
    $$bindings.remainingAnswersCount(remainingAnswersCount);
  if ($$props.maxAnswers === void 0 && $$bindings.maxAnswers && maxAnswers !== void 0)
    $$bindings.maxAnswers(maxAnswers);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  if ($$props.sessionId === void 0 && $$bindings.sessionId && sessionId !== void 0)
    $$bindings.sessionId(sessionId);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.colorsCount === void 0 && $$bindings.colorsCount && colorsCount !== void 0)
    $$bindings.colorsCount(colorsCount);
  if ($$props.allowDuplicates === void 0 && $$bindings.allowDuplicates && allowDuplicates !== void 0)
    $$bindings.allowDuplicates(allowDuplicates);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error_message === void 0 && $$bindings.error_message && error_message !== void 0)
    $$bindings.error_message(error_message);
  if ($$props.game === void 0 && $$bindings.game && game !== void 0)
    $$bindings.game(game);
  if ($$props.UISettings === void 0 && $$bindings.UISettings && UISettings !== void 0)
    $$bindings.UISettings(UISettings);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="gameBoardHolder svelte-14k9nlz">${validate_component(Card, "Card").$$render($$result, { class: "gameBoard" }, {}, {
      default: () => {
        return `<center>${validate_component(Headline$1, "Headline").$$render(
          $$result,
          {
            style: "color:#FFF;filter: drop-shadow(-3px 5px 10px #000000); margin-bottom:0.5em;"
          },
          {},
          {
            default: () => {
              return `MasterSuperMind`;
            }
          }
        )}</center> <div class="gameBoardContent svelte-14k9nlz">${validate_component(GameBoardAnswer, "GameBoardAnswer").$$render($$result, { answer, columns }, {}, {})} ${validate_component(Divider$1, "Divider").$$render($$result, { style: "margin-bottom: 1em;" }, {}, {})} <div class="gameBoardRows svelte-14k9nlz">${each(boardGuesses, (guess, i) => {
          return `${validate_component(GameBoardRow, "GameBoardRow").$$render(
            $$result,
            {
              guesses: guess,
              resolution: boardResolutions[i],
              remainingAnswersCount: remainingAnswersCount[i],
              maxAnswers,
              showRemainingAnswersCount: UISettings.showRemainingAnswersCount,
              showJudge: UISettings.showJudge
            },
            {},
            {}
          )}`;
        })} <div id="loadingRow" style="display: none;margin-top: 1em;"><div style="zoom:3;opacity:0.8;">${validate_component(Loading$1, "Loading").$$render($$result, {}, {}, {})}</div></div></div> ${validate_component(Divider$1, "Divider").$$render($$result, { style: "margin-bottom: 1em;" }, {}, {})} ${status !== "won" ? `<div>${validate_component(GameBoardForm, "GameBoardForm").$$render(
          $$result,
          {
            sessionId,
            colors,
            colorsCount,
            columns,
            gameObject: game
          },
          {},
          {}
        )}</div>` : ``} ${error_message ? `<div id="error">${validate_component(Chip$1, "Chip").$$render($$result, { small: true, class: "errorChip" }, {}, {
          default: () => {
            return `${escape(error_message)}`;
          }
        })}</div>` : ``} ${status === "won" ? `<div>${validate_component(Chip$1, "Chip").$$render($$result, { small: true, class: "successChip" }, {}, {
          default: () => {
            return `Well done!`;
          }
        })}</div>` : ``}</div>`;
      }
    })} ${validate_component(Card, "Card").$$render(
      $$result,
      {
        class: "gameBoardOptions",
        style: "diplay: flex;align-items: center;background-color: #d4cccc; margin-top: 1em;"
      },
      {},
      {
        default: () => {
          return `${validate_component(H2, "H2").$$render($$result, {}, {}, {
            default: () => {
              return `Options`;
            }
          })} <div class="options svelte-14k9nlz">${status !== "won" ? `<form action="?/helpMe" method="post" enctype="multipart/form-data">${validate_component(Button, "Button").$$render(
            $$result,
            {
              small: true,
              outline: true,
              type: "submit"
            },
            {},
            {
              default: () => {
                return `Help me out 🪄`;
              }
            }
          )}</form>` : ``} ${validate_component(Switch$1, "Switch").$$render(
            $$result,
            {
              value: UISettings.showRemainingAnswersCount
            },
            {
              value: ($$value) => {
                UISettings.showRemainingAnswersCount = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<span class="ml svelte-14k9nlz" data-svelte-h="svelte-1qvpn75">Show remaining answers count</span>`;
              }
            }
          )} ${validate_component(Switch$1, "Switch").$$render(
            $$result,
            { value: UISettings.showJudge },
            {
              value: ($$value) => {
                UISettings.showJudge = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<span class="ml svelte-14k9nlz" data-svelte-h="svelte-15jzmf">Show judge meter</span>`;
              }
            }
          )} ${validate_component(Label, "Label").$$render($$result, { style: "margin-bottom:-0.8em;" }, {}, {
            default: () => {
              return `${escape(colorsCount)} ${escape(allowDuplicates ? "" : "Unique")} Colors x ${escape(columns)} Columns = ${escape(maxAnswers)} Combinations`;
            }
          })} ${validate_component(GameBoardGuess, "GameBoardGuess").$$render(
            $$result,
            {
              guesses: Array.from({ length: colorsCount }, (_, i) => i + 1),
              columns: "8"
            },
            {},
            {}
          )}</div>`;
        }
      }
    )} </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Divider$1 as D,
  GameBoard as G
};
