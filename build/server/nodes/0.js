import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.yKhjkr56.js","_app/immutable/chunks/scheduler.x4Pbowds.js","_app/immutable/chunks/index.v-92yLxh.js","_app/immutable/chunks/stores.6cOkCVYH.js","_app/immutable/chunks/singletons.5rAW6ESP.js","_app/immutable/chunks/h2.mxyf_326.js","_app/immutable/chunks/button.y0uZejvG.js"];
export const stylesheets = ["_app/immutable/assets/0.nmNaJnwE.css","_app/immutable/assets/h2.3kNJDXZ5.css","_app/immutable/assets/button.XBfkhy5t.css"];
export const fonts = [];
