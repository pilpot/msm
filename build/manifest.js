export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bg-bg.jpg","bg-old.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.OWSYnmqN.js","app":"_app/immutable/entry/app.HhqLPTuU.js","imports":["_app/immutable/entry/start.OWSYnmqN.js","_app/immutable/chunks/scheduler.x4Pbowds.js","_app/immutable/chunks/singletons.5rAW6ESP.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/entry/app.HhqLPTuU.js","_app/immutable/chunks/scheduler.x4Pbowds.js","_app/immutable/chunks/index.v-92yLxh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./server/nodes/0.js')),
			__memo(() => import('./server/nodes/1.js')),
			__memo(() => import('./server/nodes/2.js')),
			__memo(() => import('./server/nodes/3.js')),
			__memo(() => import('./server/nodes/4.js')),
			__memo(() => import('./server/nodes/5.js')),
			__memo(() => import('./server/nodes/6.js')),
			__memo(() => import('./server/nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/custom",
				pattern: /^\/custom\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/daily",
				pattern: /^\/daily\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/daily/settings",
				pattern: /^\/daily\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export const prerendered = new Set([]);
