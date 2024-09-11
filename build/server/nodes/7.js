import * as server from '../entries/pages/settings/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/settings/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.Zwcn9WUX.js","_app/immutable/chunks/scheduler.x4Pbowds.js","_app/immutable/chunks/index.v-92yLxh.js"];
export const stylesheets = [];
export const fonts = [];
