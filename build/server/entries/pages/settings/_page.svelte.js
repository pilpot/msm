import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p data-svelte-h="svelte-1oue1np">Wishes</p> <ul data-svelte-h="svelte-6g2qym"><li>Translations</li> <li>Partial guess (limit guesses to columns-1 unless final guess)</li></ul>`;
});
export {
  Page as default
};
