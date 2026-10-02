;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="1705afed-8d5b-041f-5c10-2ae581b45018")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/consent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONSENT_CHANGE_EVENT",
    ()=>CONSENT_CHANGE_EVENT,
    "CONSENT_STORAGE_KEY",
    ()=>CONSENT_STORAGE_KEY,
    "OPEN_PREFERENCES_EVENT",
    ()=>OPEN_PREFERENCES_EVENT,
    "applyConsent",
    ()=>applyConsent,
    "consentLabel",
    ()=>consentLabel,
    "openPrivacyPreferences",
    ()=>openPrivacyPreferences,
    "readConsent",
    ()=>readConsent,
    "writeConsent",
    ()=>writeConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/posthog-js/dist/module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$replay$2f$build$2f$npm$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/replay/build/npm/esm/index.js [app-client] (ecmascript)");
;
;
const CONSENT_STORAGE_KEY = 'um_privacy_consent_v1';
const CONSENT_CHANGE_EVENT = 'um:consent-change';
const OPEN_PREFERENCES_EVENT = 'um:open-privacy-preferences';
function readConsent() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
        if (!raw) return 'pending';
        const parsed = JSON.parse(raw);
        if (typeof parsed.analyticsAndReplay !== 'boolean') return 'pending';
        return parsed.analyticsAndReplay ? 'accepted' : 'rejected';
    } catch  {
        return 'pending';
    }
}
function writeConsent(choice) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const payload = {
        analyticsAndReplay: choice === 'accepted',
        updatedAt: new Date().toISOString()
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, {
        detail: choice
    }));
}
async function applyConsent(choice, options) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (choice === 'accepted') {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].opt_in_capturing();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$replay$2f$build$2f$npm$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReplay"]()?.start();
        return;
    }
    const replay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$replay$2f$build$2f$npm$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReplay"]();
    if (replay) {
        await replay.stop();
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].opt_out_capturing();
    if (options?.clearIdentifiers) {
        // Drop persistent PostHog IDs; keep only our essential consent preference.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reset(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].opt_out_capturing();
    }
}
function openPrivacyPreferences() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
function consentLabel(state) {
    switch(state){
        case 'accepted':
            return 'Accepted';
        case 'rejected':
            return 'Rejected';
        default:
            return 'Not yet chosen';
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/privacy/consent-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsentContext",
    ()=>ConsentContext,
    "ConsentContextProvider",
    ()=>ConsentContextProvider,
    "useConsent",
    ()=>useConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ConsentContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useConsent() {
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ConsentContext);
    if (!ctx) {
        throw new Error('useConsent must be used within ConsentProvider');
    }
    return ctx;
}
_s(useConsent, "/dMy7t63NXD4eYACoT93CePwGrg=");
function ConsentContextProvider({ value, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/privacy/consent-context.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = ConsentContextProvider;
var _c;
__turbopack_context__.k.register(_c, "ConsentContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/privacy/consent-banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsentBanner",
    ()=>ConsentBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/privacy/consent-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ConsentBanner() {
    _s();
    const { accept, reject, openPreferences } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsent"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "dialog",
        "aria-modal": "false",
        "aria-labelledby": "consent-banner-title",
        "aria-describedby": "consent-banner-desc",
        className: "fixed inset-x-0 bottom-0 z-100 border-t-2 border-[#2f4f4f] bg-[#f2f2da] p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] sm:p-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-end md:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "consent-banner-title",
                            className: "mb-2 font-(family-name:--font-nunito-sans) text-[18px] font-bold text-[#2f4f4f]",
                            children: "Privacy choices"
                        }, void 0, false, {
                            fileName: "[project]/components/privacy/consent-banner.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            id: "consent-banner-desc",
                            className: "font-(family-name:--font-nunito-sans) text-[15px] leading-relaxed text-[#2f4f4f]",
                            children: [
                                "Useful Magic uses optional analytics and session recording to understand how the site is used and diagnose problems. You can accept or reject this tracking.",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy",
                                    className: "underline underline-offset-2 hover:text-[#6f42c1]",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/components/privacy/consent-banner.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                ' · ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: openPreferences,
                                    className: "underline underline-offset-2 hover:text-[#6f42c1]",
                                    children: "Privacy Preferences"
                                }, void 0, false, {
                                    fileName: "[project]/components/privacy/consent-banner.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/privacy/consent-banner.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/privacy/consent-banner.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>void reject(),
                            className: "min-h-11 min-w-34 rounded-full border-[3px] border-[#6f42c1] bg-transparent px-6 py-2 font-(family-name:--font-abeezee) text-[18px] text-[#2f4f4f] transition-colors hover:bg-[#6f42c1]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f42c1]",
                            children: "Reject"
                        }, void 0, false, {
                            fileName: "[project]/components/privacy/consent-banner.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>void accept(),
                            className: "min-h-11 min-w-34 rounded-full border border-[#f2f2da] bg-[#6f42c1] px-6 py-2 font-(family-name:--font-abeezee) text-[18px] text-white transition-colors hover:bg-[#5a35a0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f42c1]",
                            children: "Accept"
                        }, void 0, false, {
                            fileName: "[project]/components/privacy/consent-banner.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/privacy/consent-banner.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/privacy/consent-banner.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/privacy/consent-banner.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(ConsentBanner, "EPtn9gr8yUXLazAc+zf8+ifh4+Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsent"]
    ];
});
_c = ConsentBanner;
var _c;
__turbopack_context__.k.register(_c, "ConsentBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/privacy/privacy-preferences-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrivacyPreferencesModal",
    ()=>PrivacyPreferencesModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/privacy/consent-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function PrivacyPreferencesModal() {
    _s();
    const { preferencesOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsent"])();
    if (!preferencesOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpenPrivacyPreferencesModal, {}, void 0, false, {
        fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_s(PrivacyPreferencesModal, "lOagtaz+yW4hXUfTNUKN5+H9IPc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsent"]
    ];
});
_c = PrivacyPreferencesModal;
function OpenPrivacyPreferencesModal() {
    _s1();
    const { consent, consentLabel, preferencesOpen, closePreferences, setAnalyticsEnabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsent"])();
    const titleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const descId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const closeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [analyticsDraft, setAnalyticsDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "OpenPrivacyPreferencesModal.useState": ()=>({
                consent,
                enabled: consent === 'accepted'
            })
    }["OpenPrivacyPreferencesModal.useState"]);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const analyticsEnabled = analyticsDraft.consent === consent ? analyticsDraft.enabled : consent === 'accepted';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OpenPrivacyPreferencesModal.useEffect": ()=>{
            if (!preferencesOpen) return;
            closeRef.current?.focus();
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            const onKeyDown = {
                "OpenPrivacyPreferencesModal.useEffect.onKeyDown": (event)=>{
                    if (event.key === 'Escape') closePreferences();
                }
            }["OpenPrivacyPreferencesModal.useEffect.onKeyDown"];
            window.addEventListener('keydown', onKeyDown);
            return ({
                "OpenPrivacyPreferencesModal.useEffect": ()=>{
                    document.body.style.overflow = previousOverflow;
                    window.removeEventListener('keydown', onKeyDown);
                }
            })["OpenPrivacyPreferencesModal.useEffect"];
        }
    }["OpenPrivacyPreferencesModal.useEffect"], [
        closePreferences,
        preferencesOpen
    ]);
    const onSave = async ()=>{
        setSaving(true);
        try {
            await setAnalyticsEnabled(analyticsEnabled);
            closePreferences();
        } finally{
            setSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-110 flex items-end justify-center bg-[#2f4f4f]/45 p-4 sm:items-center",
        role: "presentation",
        onMouseDown: (event)=>{
            if (event.target === event.currentTarget) closePreferences();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": titleId,
            "aria-describedby": descId,
            className: "max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[18px] border-2 border-[#2f4f4f] bg-[#e9e9e6] p-5 shadow-lg sm:p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: titleId,
                                    className: "font-(family-name:--font-nunito-sans) text-[24px] font-bold text-[#2f4f4f]",
                                    children: "Privacy Preferences"
                                }, void 0, false, {
                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: descId,
                                    className: "mt-1 font-(family-name:--font-nunito-sans) text-[15px] text-[#2f4f4f]/opacity-80",
                                    children: [
                                        "Current choice: ",
                                        consentLabel
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: closeRef,
                            type: "button",
                            onClick: closePreferences,
                            className: "rounded-full px-3 py-1 font-(family-name:--font-abeezee) text-[16px] text-[#2f4f4f] underline underline-offset-2 hover:text-[#6f42c1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f42c1]",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "rounded-[14px] border border-[#2f4f4f]/30 bg-[#f2f2da] p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-(family-name:--font-nunito-sans) text-[18px] font-bold text-[#2f4f4f]",
                                    children: "Essential — Always active"
                                }, void 0, false, {
                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 font-(family-name:--font-nunito-sans) text-[15px] leading-relaxed text-[#2f4f4f]",
                                    children: "Needed for site functionality, security, remembering this privacy choice, and privacy-minimized error monitoring (Sentry) when legally appropriate. This category cannot be turned off."
                                }, void 0, false, {
                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "rounded-[14px] border border-[#2f4f4f]/30 bg-white/60 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-(family-name:--font-nunito-sans) text-[18px] font-bold text-[#2f4f4f]",
                                                    children: "Analytics and session recording — Optional"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 font-(family-name:--font-nunito-sans) text-[15px] leading-relaxed text-[#2f4f4f]",
                                                    children: "Enables persistent PostHog analytics and Sentry Session Replay (masked). If rejected, PostHog may still perform cookieless measurement without storing analytics cookies."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "inline-flex cursor-pointer items-center gap-2 pt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: "Enable analytics and session recording"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: analyticsEnabled,
                                                    onChange: (event)=>setAnalyticsDraft({
                                                            consent,
                                                            enabled: event.target.checked
                                                        }),
                                                    className: "h-5 w-5 accent-[#6f42c1]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 list-disc space-y-1 pl-5 font-(family-name:--font-nunito-sans) text-[14px] text-[#2f4f4f]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "PostHog"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this),
                                                ": page views and explicit conversion / CTA events. No names, emails, or form contents."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Sentry Session Replay"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                ": masked recordings to diagnose issues. Error monitoring can run separately under Essential."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/privacy",
                            className: "font-(family-name:--font-abeezee) text-[15px] text-[#2f4f4f] underline underline-offset-2 hover:text-[#6f42c1]",
                            onClick: closePreferences,
                            children: "Privacy Policy"
                        }, void 0, false, {
                            fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: saving,
                            onClick: ()=>void onSave(),
                            className: "min-h-11 rounded-full border border-[#f2f2da] bg-[#6f42c1] px-6 py-2 font-(family-name:--font-abeezee) text-[18px] text-white transition-colors hover:bg-[#5a35a0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f42c1] disabled:opacity-60",
                            children: saving ? 'Saving…' : 'Save preferences'
                        }, void 0, false, {
                            fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/privacy/privacy-preferences-modal.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s1(OpenPrivacyPreferencesModal, "y9j64g1yXTj8KBkVPH9RiY887i0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c1 = OpenPrivacyPreferencesModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "PrivacyPreferencesModal");
__turbopack_context__.k.register(_c1, "OpenPrivacyPreferencesModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/privacy/consent-provider.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsentProvider",
    ()=>ConsentProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/privacy/consent-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/privacy/consent-banner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$privacy$2d$preferences$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/privacy/privacy-preferences-modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const getServerConsent = ()=>'pending';
const getClientHydration = ()=>true;
const getServerHydration = ()=>false;
const subscribeToHydration = ()=>()=>undefined;
function subscribeToConsent(onStoreChange) {
    window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_CHANGE_EVENT"], onStoreChange);
    return ()=>window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_CHANGE_EVENT"], onStoreChange);
}
function ConsentProvider({ children }) {
    _s();
    const consent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToConsent, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readConsent"], getServerConsent);
    const hydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToHydration, getClientHydration, getServerHydration);
    const [preferencesOpen, setPreferencesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsentProvider.useEffect": ()=>{
            const existing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readConsent"])();
            if (existing === 'accepted') {
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyConsent"])('accepted');
            } else if (existing === 'rejected') {
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyConsent"])('rejected');
            }
            const onOpenPreferences = {
                "ConsentProvider.useEffect.onOpenPreferences": ()=>setPreferencesOpen(true)
            }["ConsentProvider.useEffect.onOpenPreferences"];
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPEN_PREFERENCES_EVENT"], onOpenPreferences);
            return ({
                "ConsentProvider.useEffect": ()=>{
                    window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPEN_PREFERENCES_EVENT"], onOpenPreferences);
                }
            })["ConsentProvider.useEffect"];
        }
    }["ConsentProvider.useEffect"], []);
    const persistAndApply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConsentProvider.useCallback[persistAndApply]": async (choice, clearIdentifiers)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeConsent"])(choice);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyConsent"])(choice, {
                clearIdentifiers
            });
        }
    }["ConsentProvider.useCallback[persistAndApply]"], []);
    const accept = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConsentProvider.useCallback[accept]": async ()=>{
            await persistAndApply('accepted', false);
        }
    }["ConsentProvider.useCallback[accept]"], [
        persistAndApply
    ]);
    const reject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConsentProvider.useCallback[reject]": async ()=>{
            const wasAccepted = consent === 'accepted';
            await persistAndApply('rejected', wasAccepted);
        }
    }["ConsentProvider.useCallback[reject]"], [
        consent,
        persistAndApply
    ]);
    const setAnalyticsEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConsentProvider.useCallback[setAnalyticsEnabled]": async (enabled)=>{
            if (enabled) {
                await persistAndApply('accepted', false);
                return;
            }
            const wasAccepted = consent === 'accepted';
            await persistAndApply('rejected', wasAccepted);
        }
    }["ConsentProvider.useCallback[setAnalyticsEnabled]"], [
        consent,
        persistAndApply
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConsentProvider.useMemo[value]": ()=>({
                consent,
                consentLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentLabel"])(consent),
                accept,
                reject,
                setAnalyticsEnabled,
                openPreferences: ({
                    "ConsentProvider.useMemo[value]": ()=>setPreferencesOpen(true)
                })["ConsentProvider.useMemo[value]"],
                closePreferences: ({
                    "ConsentProvider.useMemo[value]": ()=>setPreferencesOpen(false)
                })["ConsentProvider.useMemo[value]"],
                preferencesOpen
            })
    }["ConsentProvider.useMemo[value]"], [
        accept,
        consent,
        preferencesOpen,
        reject,
        setAnalyticsEnabled
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentContextProvider"], {
        value: value,
        children: [
            children,
            hydrated && consent === 'pending' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentBanner"], {}, void 0, false, {
                fileName: "[project]/components/privacy/consent-provider.tsx",
                lineNumber: 116,
                columnNumber: 44
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$privacy$2d$preferences$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivacyPreferencesModal"], {}, void 0, false, {
                fileName: "[project]/components/privacy/consent-provider.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/privacy/consent-provider.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(ConsentProvider, "5OkwvVd43btu4jzrDc2dbv6SXPc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = ConsentProvider;
var _c;
__turbopack_context__.k.register(_c, "ConsentProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/privacy/consent-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsentProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConsentProvider"],
    "useConsent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/privacy/consent-provider.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$privacy$2f$consent$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/privacy/consent-context.tsx [app-client] (ecmascript)");
}),
]);

//# debugId=1705afed-8d5b-041f-5c10-2ae581b45018
//# sourceMappingURL=_0i6_510._.js.map