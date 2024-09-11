import { c as create_ssr_component, s as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { C as Card, H as H2 } from "../../chunks/h2.js";
import { B as Button } from "../../chunks/button.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-i053pm_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin"><link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600&display=swap" rel="stylesheet">${$$result.title = `<title>MasterSuperMind</title>`, ""}<!-- HEAD_svelte-i053pm_END -->`, ""} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      tight: true,
      style: "display:flex;flex-direction:row;flex-wrap: wrap;align-content: center;justify-content: center;align-items: center;margin-bottom: 1em;gap: 1em;padding:0.5em;"
    },
    {},
    {
      default: () => {
        return `${validate_component(H2, "H2").$$render($$result, { style: "margin:0;" }, {}, {
          default: () => {
            return `MasterSuperMind`;
          }
        })} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            filled: $page.url.pathname === "/",
            href: "/"
          },
          {},
          {
            default: () => {
              return `Home`;
            }
          }
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            filled: $page.url.pathname === "/daily",
            href: "/daily"
          },
          {},
          {
            default: () => {
              return `Daily`;
            }
          }
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            filled: $page.url.pathname === "/custom",
            href: "/custom"
          },
          {},
          {
            default: () => {
              return `Custom`;
            }
          }
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            filled: $page.url.pathname === "/multiplayer",
            href: "/multiplayer"
          },
          {},
          {
            default: () => {
              return `Multiplayer`;
            }
          }
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            filled: $page.url.pathname === "/settings",
            href: "/settings"
          },
          {},
          {
            default: () => {
              return `Settings`;
            }
          }
        )}`;
      }
    }
  )} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
