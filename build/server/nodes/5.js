import * as server from '../entries/pages/daily/settings/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/daily/settings/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/daily/settings/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.lgvyBG5f.js","_app/immutable/chunks/scheduler.x4Pbowds.js","_app/immutable/chunks/index.v-92yLxh.js","_app/immutable/chunks/forms.TXfJzFMW.js","_app/immutable/chunks/button.y0uZejvG.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/singletons.5rAW6ESP.js","_app/immutable/chunks/slider.kXEo7O8a.js"];
export const stylesheets = ["_app/immutable/assets/5.Fsamm2x5.css","_app/immutable/assets/forms.7_OGDL4V.css","_app/immutable/assets/button.XBfkhy5t.css","_app/immutable/assets/slider.yL5pi6T6.css"];
export const fonts = [];
