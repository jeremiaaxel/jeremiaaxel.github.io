const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0a1ef70c.js","app":"_app/immutable/entry/app.089d7a2e.js","imports":["_app/immutable/entry/start.0a1ef70c.js","_app/immutable/chunks/scheduler.8a360e50.js","_app/immutable/chunks/singletons.781b1140.js","_app/immutable/chunks/index.bee5a31a.js","_app/immutable/entry/app.089d7a2e.js","_app/immutable/chunks/scheduler.8a360e50.js","_app/immutable/chunks/index.c7a69d6f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-b86d1433.js')),
			__memo(() => import('./chunks/1-30c5f66b.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
