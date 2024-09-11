

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.KyBvJH1U.js","_app/immutable/chunks/scheduler.x4Pbowds.js","_app/immutable/chunks/index.v-92yLxh.js","_app/immutable/chunks/stores.6cOkCVYH.js","_app/immutable/chunks/singletons.5rAW6ESP.js"];
export const stylesheets = [];
export const fonts = [];
