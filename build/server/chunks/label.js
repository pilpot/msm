import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_attribute_value, h as escape_object } from "./ssr.js";
import { c as classes } from "./button.js";
const css = {
  code: ".label.svelte-1bye8mi{color:#4300b0;font-size:0.8em;font-weight:500;text-transform:uppercase}.label.small.svelte-1bye8mi{font-size:0.7em}",
  map: null
};
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "small"]);
  let { class: _class = null } = $$props;
  let { small = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  $$result.css.add(css);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classes("label", _class))
      },
      escape_object($$restProps)
    ],
    {
      classes: (small ? "small" : "") + " svelte-1bye8mi"
    }
  )}>${slots.default ? slots.default({}) : ``} </div>`;
});
const Label$1 = Label;
export {
  Label$1 as L
};
