import { n as noop, k as assign, l as identity, c as create_ssr_component, i as createEventDispatcher, s as subscribe, e as escape, o as null_to_empty, p as add_attribute, b as compute_rest_props, d as spread, f as escape_attribute_value, h as escape_object, q as each, v as validate_component } from "./ssr.js";
import { w as writable } from "./index2.js";
import { c as classes } from "./button.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function sineOut(t) {
  return Math.sin(t * Math.PI / 2);
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
function getSteps(step, { min, max }) {
  const steps = (max - min) / step;
  return Array.from({ length: steps + 1 }, (_, i) => min + i * step);
}
function getTickValues(ticks, min, max) {
  if (ticks.mode === "steps")
    return getSteps(ticks.step, { min, max });
  if (ticks.mode === "values" && Array.isArray(ticks.values))
    return [...ticks.values];
  return [];
}
function getSubTickPositions(ticks, min, max, tickValues = []) {
  if (ticks.mode === "none")
    return [];
  const { subDensity } = ticks;
  if (!subDensity)
    return [];
  const step = (max - min) / 100 * subDensity;
  const subTicks = getSteps(step, { min, max }).filter(
    (tick) => !tickValues.includes(tick)
  );
  return subTicks;
}
function calcPercentOfRange(value, { min, max }) {
  const ratio = (value - min) / (max - min);
  return Math.max(0, ratio * 100);
}
const css$1 = {
  code: ".handle.svelte-1u2at4{backface-visibility:hidden;background:#4300b0;border-radius:50%;display:block;height:16px;position:absolute;width:16px;z-index:2}.handle-horizontal.svelte-1u2at4{top:-6px;transform:translateX(-50%)}.handle-vertical.svelte-1u2at4{left:-6px;transform:translateY(50%)}.handle.svelte-1u2at4:hover{box-shadow:0 0 0 8px rgba(131, 141, 231, 0.16);cursor:pointer}.handle.svelte-1u2at4:focus{box-shadow:0 0 0 8px rgba(131, 141, 231, 0.16);outline:none}.handle-active.svelte-1u2at4{background:#4300b0}.handle-disabled.svelte-1u2at4,.handle-disabled.svelte-1u2at4:hover,.handle-disabled.svelte-1u2at4:active{background:#888;box-shadow:none;cursor:not-allowed}",
  map: null
};
const Handle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset;
  let canShowActiveTooltip;
  let orientation;
  let $$unsubscribe_tween;
  createEventDispatcher();
  let { value } = $$props;
  let { min } = $$props;
  let { max } = $$props;
  let { active } = $$props;
  let { disabled = false } = $$props;
  let { tabIndex = 0 } = $$props;
  let { vertical = false } = $$props;
  let focus = false;
  let hovered = false;
  let handle;
  const initialPosition = calcPercentOfRange(value, { min, max });
  const tween = tweened(initialPosition, { duration: 60, easing: sineOut });
  $$unsubscribe_tween = subscribe(tween, (value2) => value2);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.tabIndex === void 0 && $$bindings.tabIndex && tabIndex !== void 0)
    $$bindings.tabIndex(tabIndex);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  $$result.css.add(css$1);
  offset = calcPercentOfRange(value, { min, max });
  {
    tween.set(offset);
  }
  canShowActiveTooltip = active && focus || hovered;
  orientation = vertical ? "vertical" : "horizontal";
  $$unsubscribe_tween();
  return `<div role="slider" class="${[
    escape(null_to_empty(`handle handle-${orientation}`), true) + " svelte-1u2at4",
    (active ? "handle-active" : "") + "  " + (disabled ? "handle-disabled" : "")
  ].join(" ").trim()}"${add_attribute("tabindex", disabled ? -1 : tabIndex, 0)}${add_attribute("aria-valuenow", value, 0)}${add_attribute("aria-orientation", orientation, 0)}${add_attribute("aria-disabled", disabled, 0)}${add_attribute("this", handle, 0)}>${slots.tooltips ? slots.tooltips({ canShowActiveTooltip, value }) : ``} </div>`;
});
const Handle$1 = Handle;
const css = {
  code: '.slider.svelte-1o2b9u1.svelte-1o2b9u1{box-sizing:border-box;cursor:pointer;padding:4px 0;position:relative;touch-action:none;user-select:none;z-index:1}.slider-horizontal.svelte-1o2b9u1.svelte-1o2b9u1{height:10px;width:100%}.slider-vertical.svelte-1o2b9u1.svelte-1o2b9u1{height:100%;width:10px}.slider-disabled.svelte-1o2b9u1.svelte-1o2b9u1{cursor:not-allowed}.rail.svelte-1o2b9u1.svelte-1o2b9u1{background:#aaa;border-radius:2px;position:absolute}.rail-horizontal.svelte-1o2b9u1.svelte-1o2b9u1{height:4px;top:0;width:100%}.rail-vertical.svelte-1o2b9u1.svelte-1o2b9u1{height:100%;left:0;top:0;width:4px}.rail-disabled.svelte-1o2b9u1.svelte-1o2b9u1{background:#cfcfcf;cursor:not-allowed}.range-selection.svelte-1o2b9u1.svelte-1o2b9u1{background:#4300b0;border-radius:2px;pointer-events:none;position:absolute}.range-selection-horizontal.svelte-1o2b9u1.svelte-1o2b9u1{height:4px;left:0;right:auto;top:0}.range-selection-vertical.svelte-1o2b9u1.svelte-1o2b9u1{bottom:0;top:auto;width:4px}.range-selection-disabled.svelte-1o2b9u1.svelte-1o2b9u1{background:darkgray}.tick.svelte-1o2b9u1.svelte-1o2b9u1{background:#7a7a7a;position:absolute}.tick-horizontal.svelte-1o2b9u1.svelte-1o2b9u1{bottom:auto;height:8px;position:absolute;right:auto;top:10px;white-space:nowrap;width:1px}.tick-horizontal-sub.svelte-1o2b9u1.svelte-1o2b9u1{height:4px}.tick-vertical.svelte-1o2b9u1.svelte-1o2b9u1{bottom:100%;height:1px;left:10px;right:auto;width:8px}.tick-vertical-sub.svelte-1o2b9u1.svelte-1o2b9u1{width:4px}.tick-value.svelte-1o2b9u1.svelte-1o2b9u1{background:none;color:#7a7a7a;font-size:12px;font-variant-numeric:tabular-nums;position:absolute;white-space:nowrap}.tick-value-horizontal.svelte-1o2b9u1.svelte-1o2b9u1{top:2px;transform:translate(-50%, 50%)}.tick-value-vertical.svelte-1o2b9u1.svelte-1o2b9u1{left:12px;top:0;transform:translate(0%, -50%)}.tick-value-disabled.svelte-1o2b9u1.svelte-1o2b9u1{color:#cfcfcf}.tick-disabled.svelte-1o2b9u1.svelte-1o2b9u1{background:#cfcfcf}.handle-tooltip.svelte-1o2b9u1.svelte-1o2b9u1{align-items:center;background:#4300b0;border:0;border-radius:0;box-shadow:0 1px 2px 0 rgba(8, 11, 13, 0.25);color:#fff;display:flex;font-weight:600;justify-content:center;line-height:16px;position:absolute;white-space:nowrap;z-index:1}.handle-tooltip.svelte-1o2b9u1.svelte-1o2b9u1::after{background:#4300b0;box-shadow:0 1px 2px 0 rgba(8, 11, 13, 0.25);content:"";display:inline-block;height:12px;position:absolute;transform:rotate(45deg) translateY(50%);width:12px;z-index:-1}.handle-tooltip-horizontal.svelte-1o2b9u1.svelte-1o2b9u1{left:50%;top:-40px;transform:translate(-50%, 0)}.handle-tooltip-horizontal.svelte-1o2b9u1.svelte-1o2b9u1::after{bottom:-2px;clip-path:inset(0 -15px -15px 0);left:calc(50% - 2px)}.handle-tooltip-vertical.svelte-1o2b9u1.svelte-1o2b9u1{right:24px;top:50%;transform:translate(0, -50%)}.handle-tooltip-vertical.svelte-1o2b9u1.svelte-1o2b9u1::after{bottom:45%;clip-path:inset(-15px -15px 0 0);right:-10px}.handle-tooltip-content.svelte-1o2b9u1.svelte-1o2b9u1{background:#4300b0;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;height:100%;line-height:16px;padding:5px;width:100%;z-index:2}.handle-tooltip-disabled.svelte-1o2b9u1 .handle-tooltip-content.svelte-1o2b9u1{background:#aaa}.handle-tooltip-disabled.handle-tooltip.svelte-1o2b9u1.svelte-1o2b9u1::after{background:#aaa}',
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let internalValue;
  let orientation;
  let tickValues;
  let subTicks;
  let $$restProps = compute_rest_props($$props, [
    "min",
    "max",
    "step",
    "vertical",
    "disabled",
    "value",
    "ticks",
    "rangeBehavior",
    "tooltips",
    "class"
  ]);
  createEventDispatcher();
  let { min } = $$props;
  let { max } = $$props;
  let { step = 1 } = $$props;
  let { vertical = false } = $$props;
  let { disabled = false } = $$props;
  let { value = max < min ? min : min + (max - min) / 2 } = $$props;
  let { ticks = { mode: "none" } } = $$props;
  let { rangeBehavior = "block" } = $$props;
  let { tooltips = "never" } = $$props;
  let { class: _class = null } = $$props;
  let slider;
  let activeHandle = 0;
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0)
    $$bindings.ticks(ticks);
  if ($$props.rangeBehavior === void 0 && $$bindings.rangeBehavior && rangeBehavior !== void 0)
    $$bindings.rangeBehavior(rangeBehavior);
  if ($$props.tooltips === void 0 && $$bindings.tooltips && tooltips !== void 0)
    $$bindings.tooltips(tooltips);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  $$result.css.add(css);
  internalValue = typeof value === "number" ? [value] : value;
  orientation = vertical ? "vertical" : "horizontal";
  tickValues = getTickValues(ticks, min, max);
  subTicks = ticks.mode !== "none" && ticks.subDensity ? getSubTickPositions(ticks, min, max, tickValues) : [];
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classes(`slider slider-${orientation}`, _class))
      },
      escape_object($$restProps)
    ],
    {
      classes: " " + (disabled ? "slider-disabled" : "") + " svelte-1o2b9u1"
    }
  )}${add_attribute("this", slider, 0)}><div class="${[
    escape(null_to_empty(`rail rail-${orientation}`), true) + " svelte-1o2b9u1",
    disabled ? "rail-disabled" : ""
  ].join(" ").trim()}">${slots["rail-content"] ? slots["rail-content"]({}) : ``}</div> ${each(internalValue, (val, index) => {
    return `${validate_component(Handle$1, "Handle").$$render(
      $$result,
      {
        value: val,
        min,
        max,
        vertical,
        disabled,
        active: activeHandle === index
      },
      {},
      {
        tooltips: ({ canShowActiveTooltip, value: value2 }) => {
          return `<div slot="tooltips">${tooltips === "always" || tooltips === "active" && canShowActiveTooltip ? `<div class="${[
            escape(null_to_empty(`handle-tooltip handle-tooltip-${orientation}`), true) + " svelte-1o2b9u1",
            disabled ? "handle-tooltip-disabled" : ""
          ].join(" ").trim()}"><div class="handle-tooltip-content svelte-1o2b9u1">${slots["tooltip-content"] ? slots["tooltip-content"]({ value: value2 }) : ` ${escape(value2)} `}</div> </div>` : ``} </div>`;
        }
      }
    )}`;
  })} <div class="${[
    escape(null_to_empty(`range-selection range-selection-${orientation}`), true) + " svelte-1o2b9u1",
    disabled ? "range-selection-disabled" : ""
  ].join(" ").trim()}"></div> ${each(tickValues, (tick) => {
    return `<span class="${[
      escape(null_to_empty(`tick tick-${orientation}`), true) + " svelte-1o2b9u1",
      disabled ? "tick-disabled" : ""
    ].join(" ").trim()}" style="${escape(vertical ? "bottom" : "left", true) + ": " + escape(calcPercentOfRange(tick, { min, max }), true) + "%;"}"><span class="${[
      escape(null_to_empty(`tick-value tick-value-${orientation}`), true) + " svelte-1o2b9u1",
      disabled ? "tick-value-disabled" : ""
    ].join(" ").trim()}">${slots["tick-value"] ? slots["tick-value"]({ value: tick }) : ` ${escape(tick)} `}</span> </span>`;
  })} ${each(subTicks, (sub) => {
    return `<span class="${[
      escape(null_to_empty(`tick tick-${orientation} tick-${orientation}-sub`), true) + " svelte-1o2b9u1",
      disabled ? "tick-disabled" : ""
    ].join(" ").trim()}" style="${escape(vertical ? "bottom" : "left", true) + ": " + escape(calcPercentOfRange(sub, { min, max }), true) + "%;"}"></span>`;
  })}</div> `;
});
const Slider$1 = Slider;
export {
  Slider$1 as S
};
