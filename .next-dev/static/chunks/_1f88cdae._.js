(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/greetings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "greetingForLocalHour",
    ()=>greetingForLocalHour,
    "greetingPeriodForHour",
    ()=>greetingPeriodForHour
]);
const phrases = {
    morning: [
        "Good Morning",
        "Namaste",
        "Bonjour",
        "Konnichiwa",
        "Nǐ hǎo",
        "Hola",
        "Buongiorno"
    ],
    afternoon: [
        "Good Afternoon",
        "Namaste",
        "Bonjour",
        "Konnichiwa",
        "Nǐ hǎo",
        "Hola",
        "Buon pomeriggio"
    ],
    evening: [
        "Good Evening",
        "Namaste",
        "Bonsoir",
        "Konnichiwa",
        "Nǐ hǎo",
        "Buenas tardes",
        "Buona sera"
    ],
    night: [
        "Good Night",
        "Namaste",
        "Bonne nuit",
        "Buenas noches",
        "Buona notte"
    ]
};
function greetingPeriodForHour(hour) {
    if (hour < 5 || hour >= 19) return 'night';
    if (hour < 12) return 'morning';
    if (hour < 16) return 'afternoon';
    return 'evening';
}
function greetingForLocalHour(hour) {
    let random = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Math.random();
    const options = phrases[greetingPeriodForHour(hour)];
    return options[Math.min(options.length - 1, Math.floor(random * options.length))];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/AdminGreeting.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminGreeting",
    ()=>AdminGreeting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$greetings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/greetings.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function extractNameFromEmail(email) {
    if (!email) return 'admin';
    // Extract the part before @ symbol
    const localPart = email.split('@')[0];
    // Replace dots and underscores with spaces
    const withSpaces = localPart.replace(/[._-]/g, ' ');
    // Capitalize each word
    return withSpaces.split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).filter((word)=>word.length > 0).slice(0, 2) // Take only first two words
    .join(' ');
}
function AdminGreeting(param) {
    let { email = '', displayName = '' } = param;
    _s();
    const [greeting, setGreeting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Good Morning');
    const adminName = displayName || extractNameFromEmail(email);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminGreeting.useEffect": ()=>{
            setGreeting((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$greetings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greetingForLocalHour"])(new Date().getHours()));
        }
    }["AdminGreeting.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            greeting,
            ", ",
            adminName
        ]
    }, void 0, true);
}
_s(AdminGreeting, "zqLXF+0ROuj8INCnWdXyTKrcd2M=");
_c = AdminGreeting;
var _c;
__turbopack_context__.k.register(_c, "AdminGreeting");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminGreeting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/AdminGreeting.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Dashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            fetch('/api/admin/session', {
                cache: 'no-store'
            }).then({
                "Dashboard.useEffect": async (response)=>{
                    if (response.ok) {
                        const data = await response.json();
                        var _data_email;
                        setEmail((_data_email = data.email) !== null && _data_email !== void 0 ? _data_email : '');
                        var _data_displayName;
                        setDisplayName((_data_displayName = data.displayName) !== null && _data_displayName !== void 0 ? _data_displayName : '');
                    }
                }
            }["Dashboard.useEffect"]);
        }
    }["Dashboard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            const params = new URLSearchParams();
            if (search.trim()) params.set('search', search.trim());
            setLoadError(false);
            fetch("/api/admin/stats?".concat(params)).then({
                "Dashboard.useEffect": async (response)=>{
                    if (response.status === 401) {
                        router.replace('/admin/login');
                        return;
                    }
                    if (!response.ok) throw new Error('Unable to load dashboard.');
                    setStats(await response.json());
                }
            }["Dashboard.useEffect"]).catch({
                "Dashboard.useEffect": ()=>setLoadError(true)
            }["Dashboard.useEffect"]);
        }
    }["Dashboard.useEffect"], [
        router,
        search
    ]);
    var _stats_total, _stats_today, _stats_pastHour;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container admin-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "admin-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "Eduspray control centre"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/Dashboard.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminGreeting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminGreeting"], {
                                email: email,
                                displayName: displayName
                            }, void 0, false, {
                                fileName: "[project]/components/admin/Dashboard.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/Dashboard.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "admin-subtitle",
                            children: "Keep track of new student enquiries and follow up with every prospective learner."
                        }, void 0, false, {
                            fileName: "[project]/components/admin/Dashboard.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/Dashboard.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/Dashboard.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            loadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-alert",
                role: "alert",
                children: "We could not load the dashboard right now. Please refresh and try again."
            }, void 0, false, {
                fileName: "[project]/components/admin/Dashboard.tsx",
                lineNumber: 54,
                columnNumber: 20
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "stat-grid",
                "aria-label": "Enquiry overview",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-stat admin-stat-total",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Total submissions"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/Dashboard.tsx",
                                    lineNumber: 58,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (_stats_total = stats === null || stats === void 0 ? void 0 : stats.total) !== null && _stats_total !== void 0 ? _stats_total : '...'
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/Dashboard.tsx",
                                    lineNumber: 58,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "All submissions received"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/Dashboard.tsx",
                                    lineNumber: 58,
                                    columnNumber: 86
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/Dashboard.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/Dashboard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-stat admin-stat-today",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Submissions today"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/Dashboard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (_stats_today = stats === null || stats === void 0 ? void 0 : stats.today) !== null && _stats_today !== void 0 ? _stats_today : '...'
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/Dashboard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "New submissions today"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/Dashboard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 86
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/Dashboard.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/Dashboard.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-stat admin-stat-rate",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Past hour"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/Dashboard.tsx",
                                    lineNumber: 64,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (_stats_pastHour = stats === null || stats === void 0 ? void 0 : stats.pastHour) !== null && _stats_pastHour !== void 0 ? _stats_pastHour : '...'
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/Dashboard.tsx",
                                    lineNumber: 64,
                                    columnNumber: 38
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "Submissions in the last 60 minutes"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/Dashboard.tsx",
                                    lineNumber: 64,
                                    columnNumber: 81
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/Dashboard.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/Dashboard.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/Dashboard.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "admin-content-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-eyebrow",
                                        children: "Inbox"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/Dashboard.tsx",
                                        lineNumber: 70,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Recent submissions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/Dashboard.tsx",
                                        lineNumber: 70,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/Dashboard.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "text-link",
                                href: "/admin/enquiries",
                                children: [
                                    "View all enquiries ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/Dashboard.tsx",
                                        lineNumber: 71,
                                        columnNumber: 82
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/Dashboard.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/Dashboard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Enquiry ID"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/Dashboard.tsx",
                                                lineNumber: 75,
                                                columnNumber: 24
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/Dashboard.tsx",
                                                lineNumber: 75,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Course"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/Dashboard.tsx",
                                                lineNumber: 75,
                                                columnNumber: 56
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Submitted At"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/Dashboard.tsx",
                                                lineNumber: 75,
                                                columnNumber: 71
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Action"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/Dashboard.tsx",
                                                lineNumber: 75,
                                                columnNumber: 92
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/Dashboard.tsx",
                                        lineNumber: 75,
                                        columnNumber: 20
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/Dashboard.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        stats === null || stats === void 0 ? void 0 : stats.recent.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "enquiry-number",
                                                            href: "/admin/enquiries/".concat(item.id),
                                                            children: item.enquiry_number
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/Dashboard.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 64
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/Dashboard.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 60
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "candidate-name",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/Dashboard.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 171
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/Dashboard.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 167
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: item.course
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/Dashboard.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 231
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: new Date(item.created_at).toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/Dashboard.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 253
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "dashboard-view-button",
                                                            href: "/admin/enquiries/".concat(item.id),
                                                            children: "View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/Dashboard.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 310
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/Dashboard.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 306
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/components/admin/Dashboard.tsx",
                                                lineNumber: 77,
                                                columnNumber: 42
                                            }, this)),
                                        stats && stats.recent.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "empty-state",
                                                colSpan: 5,
                                                children: "No recent enquiries yet."
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/Dashboard.tsx",
                                                lineNumber: 78,
                                                columnNumber: 57
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/Dashboard.tsx",
                                            lineNumber: 78,
                                            columnNumber: 53
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/Dashboard.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/Dashboard.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/Dashboard.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/Dashboard.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/Dashboard.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "ucowFFrhmFpM6AZ7fq4SPEaJ2Tg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1f88cdae._.js.map