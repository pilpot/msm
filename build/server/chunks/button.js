import { c as create_ssr_component, b as compute_rest_props, i as createEventDispatcher, d as spread, f as escape_attribute_value, h as escape_object } from "./ssr.js";
function classes(...args) {
  return args.filter((cls) => !!cls).join(" ");
}
const css = {
  code: '.btn.svelte-2r4z0x{align-items:center;cursor:pointer;display:flex;font-family:"Ubuntu", sans-serif;font-weight:500;outline:none;background:none;border-radius:1.5625em;font-size:1rem;padding:0.8em 1.1em}.btn.svelte-2r4z0x::-moz-focus-inner{border:0}.btn.svelte-2r4z0x:hover:not([disabled]),.btn.outline.svelte-2r4z0x:hover:not([disabled]){background:rgba(67, 0, 176, 0.05)}.btn.svelte-2r4z0x:focus:not([disabled]),.btn.outline.svelte-2r4z0x:focus:not([disabled]){background:rgba(67, 0, 176, 0.12)}.btn.svelte-2r4z0x{color:#4300b0}.btn.svelte-2r4z0x .icon{stroke:#4300b0}.btn.svelte-2r4z0x .ripple{background:rgba(67, 0, 176, 0.1)}.btn.danger.svelte-2r4z0x:hover:not([disabled]),.btn.danger.outline.svelte-2r4z0x:hover:not([disabled]){background:rgba(184, 0, 0, 0.05)}.btn.danger.svelte-2r4z0x:focus:not([disabled]),.btn.danger.outline.svelte-2r4z0x:focus:not([disabled]){background:rgba(184, 0, 0, 0.12)}.btn.danger.svelte-2r4z0x{color:#b80000}.btn.danger.svelte-2r4z0x .icon{stroke:#b80000}.btn.danger.svelte-2r4z0x .ripple{background:rgba(184, 0, 0, 0.1)}.btn.neutral.svelte-2r4z0x:hover:not([disabled]),.btn.neutral.outline.svelte-2r4z0x:hover:not([disabled]){background:rgba(51, 51, 51, 0.05)}.btn.neutral.svelte-2r4z0x:focus:not([disabled]),.btn.neutral.outline.svelte-2r4z0x:focus:not([disabled]){background:rgba(51, 51, 51, 0.12)}.btn.neutral.svelte-2r4z0x{color:#333}.btn.neutral.svelte-2r4z0x .icon{stroke:#333}.btn.neutral.svelte-2r4z0x .ripple{background:rgba(51, 51, 51, 0.1)}.btn.filled.svelte-2r4z0x{background:#4300b0;background:linear-gradient(0deg, #4300b0 0%, #5000d1 100%);box-shadow:0 2px 5px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12)}.btn.filled.svelte-2r4z0x:hover:not([disabled]){background:#4900c1;background:linear-gradient(0deg, #4900c1 0%, #5600e2 100%)}.btn.filled.svelte-2r4z0x:focus:not([disabled]){background:#5600e3;background:linear-gradient(0deg, #5000d1 0%, #5c00f3 100%)}.btn.filled.svelte-2r4z0x:hover:not([disabled]),.btn.filled.svelte-2r4z0x:focus:not([disabled]){box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.btn.filled.danger.svelte-2r4z0x{background:#b80000;background:linear-gradient(0deg, #b80000 0%, #d90000 100%)}.btn.filled.danger.svelte-2r4z0x:hover:not([disabled]){background:#c80000;background:linear-gradient(0deg, #c80000 0%, #e90000 100%)}.btn.filled.danger.svelte-2r4z0x:focus:not([disabled]){background:#eb0000;background:linear-gradient(0deg, #d90000 0%, #f90000 100%)}.btn.filled.neutral.svelte-2r4z0x{background:#333;background:linear-gradient(0deg, #333 0%, #474747 100%)}.btn.filled.neutral.svelte-2r4z0x:hover:not([disabled]){background:#3d3d3d;background:linear-gradient(0deg, #3d3d3d 0%, #525252 100%)}.btn.filled.neutral.svelte-2r4z0x:focus:not([disabled]){background:#4d4d4d;background:linear-gradient(0deg, #474747 0%, #5c5c5c 100%)}.btn.filled.svelte-2r4z0x{color:#fff}.btn.filled.svelte-2r4z0x .icon{stroke:#fff}.btn.filled.svelte-2r4z0x .ripple{background:rgba(255, 255, 255, 0.1)}.btn.filled[disabled].svelte-2r4z0x{background:#d7d7d7;box-shadow:none}.btn.outline.svelte-2r4z0x{border:1px solid #4300b0}.btn.outline.danger.svelte-2r4z0x{border-color:#b80000}.btn.outline.neutral.svelte-2r4z0x{border-color:#333}.btn.outline[disabled].svelte-2r4z0x{border-color:#d7d7d7}.btn[disabled].svelte-2r4z0x{background:transparent;color:#888;cursor:default}.btn[disabled].svelte-2r4z0x .icon{stroke:#888}.btn.round.svelte-2r4z0x{padding:0.7em}.btn.rectangle.svelte-2r4z0x{border-radius:0.78125em;font-size:1.1rem;padding:1.2em}.btn.small.svelte-2r4z0x{padding:0.5em 0.8em}.btn.small.round.svelte-2r4z0x{padding:0.5em}.btn.selected.svelte-2r4z0x:not(.filled){background:rgba(67, 0, 176, 0.12)}button.btn.svelte-2r4z0x{border:0}a.btn.svelte-2r4z0x{text-decoration:none}a.btn[disabled].svelte-2r4z0x{pointer-events:none}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "class",
    "filled",
    "outline",
    "danger",
    "neutral",
    "round",
    "rectangle",
    "small",
    "selected",
    "noRipple",
    "disabled",
    "href",
    "noPrefetch",
    "events"
  ]);
  let { class: _class = null } = $$props;
  let { filled = false } = $$props;
  let { outline = false } = $$props;
  let { danger = false } = $$props;
  let { neutral = false } = $$props;
  let { round = false } = $$props;
  let { rectangle = false } = $$props;
  let { small = false } = $$props;
  let { selected = false } = $$props;
  let { noRipple = false } = $$props;
  let { disabled = false } = $$props;
  let { href = null } = $$props;
  let { noPrefetch = false } = $$props;
  let { events = [] } = $$props;
  if (filled && outline) {
    console.error("A button may not be filled and outlined at the same time");
  }
  if (danger && neutral) {
    console.error("A button may not be danger and neutral at the same time");
  }
  if (filled && selected) {
    console.error("A button may not be filled and selected at the same time");
  }
  createEventDispatcher();
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.filled === void 0 && $$bindings.filled && filled !== void 0)
    $$bindings.filled(filled);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  if ($$props.neutral === void 0 && $$bindings.neutral && neutral !== void 0)
    $$bindings.neutral(neutral);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0)
    $$bindings.round(round);
  if ($$props.rectangle === void 0 && $$bindings.rectangle && rectangle !== void 0)
    $$bindings.rectangle(rectangle);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.noRipple === void 0 && $$bindings.noRipple && noRipple !== void 0)
    $$bindings.noRipple(noRipple);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.noPrefetch === void 0 && $$bindings.noPrefetch && noPrefetch !== void 0)
    $$bindings.noPrefetch(noPrefetch);
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  $$result.css.add(css);
  return `${href ? `<a${spread(
    [
      {
        href: escape_attribute_value(disabled ? null : href)
      },
      {
        rel: escape_attribute_value(noPrefetch ? null : "prefetch")
      },
      {
        "sapper:prefetch": escape_attribute_value(noPrefetch ? null : true)
      },
      {
        "sveltekit:prefetch": escape_attribute_value(noPrefetch ? null : true)
      },
      {
        disabled: (disabled ? true : null) || null
      },
      {
        class: escape_attribute_value(classes("btn", _class))
      },
      escape_object($$restProps)
    ],
    {
      classes: (filled ? "filled" : "") + " " + (outline ? "outline" : "") + " " + (danger ? "danger" : "") + " " + (round ? "round" : "") + " " + (neutral ? "neutral" : "") + " " + (rectangle ? "rectangle" : "") + " " + (small ? "small" : "") + " " + (selected ? "selected" : "") + " svelte-2r4z0x"
    }
  )}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      { disabled: disabled || null },
      {
        class: escape_attribute_value(classes("btn", _class))
      },
      escape_object($$restProps)
    ],
    {
      classes: (filled ? "filled" : "") + " " + (outline ? "outline" : "") + " " + (danger ? "danger" : "") + " " + (round ? "round" : "") + " " + (neutral ? "neutral" : "") + " " + (rectangle ? "rectangle" : "") + " " + (small ? "small" : "") + " " + (selected ? "selected" : "") + " svelte-2r4z0x"
    }
  )}>${slots.default ? slots.default({}) : ``}</button>`}`;
});
const Button$1 = Button;
export {
  Button$1 as B,
  classes as c
};
