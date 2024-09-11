import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.ApnE-8oh.js","_app/immutable/chunks/msmGame.CNW5322_.js","_app/immutable/chunks/scheduler.x4Pbowds.js","_app/immutable/chunks/index.v-92yLxh.js","_app/immutable/chunks/button.y0uZejvG.js","_app/immutable/chunks/gameBoard.EOtkGGjv.js","_app/immutable/chunks/forms.TXfJzFMW.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/singletons.5rAW6ESP.js","_app/immutable/chunks/h2.mxyf_326.js","_app/immutable/chunks/slider.kXEo7O8a.js"];
export const stylesheets = ["_app/immutable/assets/msmGame.zDJxnMVW.css","_app/immutable/assets/button.XBfkhy5t.css","_app/immutable/assets/gameBoard.uKU69Gew.css","_app/immutable/assets/forms.7_OGDL4V.css","_app/immutable/assets/h2.3kNJDXZ5.css","_app/immutable/assets/slider.yL5pi6T6.css"];
export const fonts = [];
