import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_attribute_value, h as escape_object } from "./ssr.js";
import { c as classes } from "./button.js";
const css = {
  code: "h1.svelte-9b0tta{color:#4300b0;font-size:1.4em;font-weight:500;margin:0 0 0.5em}@media only screen and (min-width: 640px){h1.svelte-9b0tta{font-size:1.55em}}@media only screen and (min-width: 840px){h1.svelte-9b0tta{font-size:1.7em}}@media only screen and (min-width: 1024px){h1.svelte-9b0tta{font-size:1.8em}}",
  map: null
};
const H1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: _class = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  $$result.css.add(css);
  return `<h1${spread(
    [
      {
        class: escape_attribute_value(classes(_class))
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-9b0tta" }
  )}>${slots.default ? slots.default({}) : ``} </h1>`;
});
const H1$1 = H1;
export {
  H1$1 as H
};
