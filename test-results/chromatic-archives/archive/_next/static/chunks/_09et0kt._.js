;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="b1ea0eab-4e63-e0b2-95ed-53f5b97d8853")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/sentry-scrub.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrubSentryEvent",
    ()=>scrubSentryEvent
]);
const SENSITIVE_QUERY_KEYS = [
    'email',
    'password',
    'token',
    'auth',
    'code',
    'key',
    'secret',
    'session',
    'access_token',
    'refresh_token'
];
function scrubUrl(url) {
    if (!url) return url;
    try {
        const parsed = new URL(url, 'http://localhost');
        for (const key of [
            ...parsed.searchParams.keys()
        ]){
            if (SENSITIVE_QUERY_KEYS.some((sensitive)=>key.toLowerCase().includes(sensitive))) {
                parsed.searchParams.set(key, '[Filtered]');
            }
        }
        // Prefer path + scrubbed query when the absolute origin is unknown/local.
        return `${parsed.pathname}${parsed.search}`;
    } catch  {
        return url;
    }
}
function scrubSentryEvent(event) {
    if (event.request) {
        event.request.cookies = undefined;
        event.request.headers = undefined;
        event.request.data = undefined;
        event.request.query_string = undefined;
        if (event.request.url) {
            event.request.url = scrubUrl(event.request.url);
        }
    }
    if (event.user) {
        event.user = {
            id: undefined,
            email: undefined,
            username: undefined,
            ip_address: undefined
        };
    }
    if (event.extra) {
        delete event.extra.request;
        delete event.extra.body;
        delete event.extra.headers;
        delete event.extra.cookies;
    }
    if (event.contexts?.response) {
        delete event.contexts.response;
    }
    return event;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/instrumentation-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Client-side Sentry + PostHog initialization.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
// https://posthog.com/tutorials/cookieless-tracking
__turbopack_context__.s([
    "onRouterTransitionStart",
    ()=>onRouterTransitionStart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/posthog-js/dist/module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sentry/nextjs/build/esm/client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$replay$2f$build$2f$npm$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/replay/build/npm/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/nextjs/build/esm/client/routing/appRouterRoutingInstrumentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sentry$2d$scrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sentry-scrub.ts [app-client] (ecmascript)");
globalThis["_sentryRouteManifest"] = "{\"dynamicRoutes\":[],\"staticRoutes\":[{\"path\":\"/\"},{\"path\":\"/login\"},{\"path\":\"/privacy\"},{\"path\":\"/sentry-example-page\"}],\"isrRoutes\":[]}";
globalThis["_sentryNextJsVersion"] = "16.2.10";
globalThis["_sentryRewritesTunnelPath"] = "/monitoring";
;
;
;
/**
 * PostHog stays paused until the visitor accepts or rejects optional tracking
 * (`cookieless_mode: "on_reject"`). Project settings still required:
 * 1. Cookieless server hash mode
 * 2. Discard client IP data (where available)
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    defaults: '2026-05-30',
    cookieless_mode: 'on_reject',
    autocapture: false,
    capture_dead_clicks: false,
    capture_exceptions: false,
    // PostHog session replay stays off — Sentry owns replay after consent.
    disable_session_recording: true,
    disable_surveys: true,
    person_profiles: 'identified_only',
    debug: ("TURBOPACK compile-time value", "development") === 'development'
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"]({
    dsn: 'https://6874c84087539a3bc35b4b30204a8bdb@o4511734027517952.ingest.us.sentry.io/4511734034923520',
    sendDefaultPii: false,
    integrations: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$replay$2f$build$2f$npm$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replayIntegration"]({
            maskAllText: true,
            maskAllInputs: true,
            blockAllMedia: true,
            // Exclude sensitive surfaces even if unmasked elsewhere later.
            block: [
                'form',
                'input',
                'textarea',
                'select',
                '[type="password"]',
                '#contact',
                '[data-sentry-block]'
            ],
            networkDetailAllowUrls: [],
            networkCaptureBodies: false
        })
    ],
    tracesSampleRate: 1,
    enableLogs: true,
    // Replay stays off until optional consent is granted.
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0,
    beforeSend: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sentry$2d$scrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubSentryEvent"],
    dataCollection: {
        userInfo: false,
        httpBodies: []
    }
});
const onRouterTransitionStart = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureRouterTransitionStart"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# debugId=b1ea0eab-4e63-e0b2-95ed-53f5b97d8853
//# sourceMappingURL=_09et0kt._.js.map