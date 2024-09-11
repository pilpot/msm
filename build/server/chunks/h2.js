import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_attribute_value, h as escape_object } from "./ssr.js";
import { c as classes } from "./button.js";
const css$1 = {
  code: ".card.svelte-1bts72l{background-color:#fff;border-radius:1.25em;box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);overflow:hidden;padding:1.5em}.card.no-padding.svelte-1bts72l{padding:0}.card.outline.svelte-1bts72l{border:1px solid rgba(67, 0, 176, 0.3);box-shadow:none}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "tight", "outline"]);
  let { class: _class = null } = $$props;
  let { tight = false } = $$props;
  let { outline = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.tight === void 0 && $$bindings.tight && tight !== void 0)
    $$bindings.tight(tight);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  $$result.css.add(css$1);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classes("card", _class, tight && "no-padding"))
      },
      escape_object($$restProps)
    ],
    {
      classes: (outline ? "outline" : "") + " svelte-1bts72l"
    }
  )}>${slots.default ? slots.default({}) : ``} </div>`;
});
const Card$1 = Card;
const css = {
  code: "h2.svelte-2wjwmd{color:#4300b0;font-size:1.3em;font-weight:500;margin:0 0 0.4em}@media only screen and (min-width: 640px){h2.svelte-2wjwmd{font-size:1.4em}}@media only screen and (min-width: 840px){h2.svelte-2wjwmd{font-size:1.5em}}",
  map: null
};
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: _class = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  $$result.css.add(css);
  return `<h2${spread(
    [
      {
        class: escape_attribute_value(classes(_class))
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-2wjwmd" }
  )}>${slots.default ? slots.default({}) : ``} </h2>`;
});
const H2$1 = H2;
export {
  Card$1 as C,
  H2$1 as H
};
