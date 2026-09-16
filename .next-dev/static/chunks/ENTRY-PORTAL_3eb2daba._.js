(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ENTRY-PORTAL/lib/greetings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        "Hola"
    ],
    afternoon: [
        "Good Afternoon",
        "Namaste",
        "Bonjour",
        "Konnichiwa",
        "Nǐ hǎo",
        "Hola"
    ],
    evening: [
        "Good Evening",
        "Namaste",
        "Bonjour",
        "Konnichiwa",
        "Nǐ hǎo",
        "Hola"
    ],
    night: [
        "Good Night",
        "Namaste",
        "Bonne nuit"
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
"[project]/ENTRY-PORTAL/components/admin/AdminGreeting.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminGreeting",
    ()=>AdminGreeting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$greetings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/lib/greetings.ts [app-client] (ecmascript)");
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
    const [greeting, setGreeting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Good Morning');
    const adminName = displayName || extractNameFromEmail(email);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminGreeting.useEffect": ()=>{
            setGreeting((0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$greetings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greetingForLocalHour"])(new Date().getHours()));
        }
    }["AdminGreeting.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
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
"[project]/ENTRY-PORTAL/lib/hooks/useRealtimeEnquiries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRealtimeEnquiries",
    ()=>useRealtimeEnquiries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/lib/supabase/client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useRealtimeEnquiries() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRealtimeEnquiries.useEffect": ()=>{
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            let channel;
            const setupChannel = {
                "useRealtimeEnquiries.useEffect.setupChannel": async ()=>{
                    channel = supabase.channel('new_enquiries').on('postgres_changes', {
                        event: 'INSERT',
                        schema: 'public',
                        table: 'enquiries'
                    }, {
                        "useRealtimeEnquiries.useEffect.setupChannel": (payload)=>{
                            var _options_onNewEnquiry;
                            const newEnquiry = payload.new;
                            const notification = {
                                id: newEnquiry.id,
                                enquiry_number: newEnquiry.enquiry_number,
                                name: newEnquiry.name,
                                course: newEnquiry.course
                            };
                            setNotification(notification);
                            (_options_onNewEnquiry = options.onNewEnquiry) === null || _options_onNewEnquiry === void 0 ? void 0 : _options_onNewEnquiry.call(options, notification);
                        }
                    }["useRealtimeEnquiries.useEffect.setupChannel"]).subscribe({
                        "useRealtimeEnquiries.useEffect.setupChannel": (status)=>{
                            setIsConnected(status === 'SUBSCRIBED');
                        }
                    }["useRealtimeEnquiries.useEffect.setupChannel"]);
                }
            }["useRealtimeEnquiries.useEffect.setupChannel"];
            void setupChannel();
            return ({
                "useRealtimeEnquiries.useEffect": ()=>{
                    if (channel) {
                        void supabase.removeChannel(channel);
                    }
                }
            })["useRealtimeEnquiries.useEffect"];
        }
    }["useRealtimeEnquiries.useEffect"], [
        options
    ]);
    const clearNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRealtimeEnquiries.useCallback[clearNotification]": ()=>{
            setNotification(null);
        }
    }["useRealtimeEnquiries.useCallback[clearNotification]"], []);
    return {
        notification,
        isConnected,
        clearNotification
    };
}
_s(useRealtimeEnquiries, "ybjvu+s15SOVZwZCsdnGpoQufEQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ENTRY-PORTAL/components/ui/Skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton,
    "SkeletonLine",
    ()=>SkeletonLine,
    "SkeletonRows",
    ()=>SkeletonRows
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$react$2d$loading$2d$skeleton$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/react-loading-skeleton/dist/index.js [app-client] (ecmascript)");
'use client';
;
;
;
function Skeleton(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$react$2d$loading$2d$skeleton$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/ENTRY-PORTAL/components/ui/Skeleton.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = Skeleton;
function SkeletonLine(param) {
    let { width = '100%', height = 16, className = '' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
        width: width,
        height: height,
        className: className
    }, void 0, false, {
        fileName: "[project]/ENTRY-PORTAL/components/ui/Skeleton.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c1 = SkeletonLine;
function SkeletonRows(param) {
    let { count = 5, columns = 5 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: Array.from({
            length: count
        }, (_, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "skeleton-table-row",
                children: Array.from({
                    length: columns
                }, (_, columnIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                            height: 16
                        }, void 0, false, {
                            fileName: "[project]/ENTRY-PORTAL/components/ui/Skeleton.tsx",
                            lineNumber: 20,
                            columnNumber: 33
                        }, this)
                    }, columnIndex, false, {
                        fileName: "[project]/ENTRY-PORTAL/components/ui/Skeleton.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this))
            }, rowIndex, false, {
                fileName: "[project]/ENTRY-PORTAL/components/ui/Skeleton.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this))
    }, void 0, false);
}
_c2 = SkeletonRows;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Skeleton");
__turbopack_context__.k.register(_c1, "SkeletonLine");
__turbopack_context__.k.register(_c2, "SkeletonRows");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$components$2f$admin$2f$AdminGreeting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/components/admin/AdminGreeting.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$hooks$2f$useRealtimeEnquiries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/lib/hooks/useRealtimeEnquiries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/components/ui/Skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Dashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [notificationMessage, setNotificationMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { notification, clearNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$hooks$2f$useRealtimeEnquiries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimeEnquiries"])({
        onNewEnquiry: {
            "Dashboard.useRealtimeEnquiries": (enquiry)=>{
                setNotificationMessage("New enquiry received: ".concat(enquiry.name, " for ").concat(enquiry.course));
                // Refresh stats after a short delay to ensure data is persisted
                setTimeout({
                    "Dashboard.useRealtimeEnquiries": ()=>{
                        refreshStats();
                    }
                }["Dashboard.useRealtimeEnquiries"], 500);
                // Clear notification after 5 seconds
                setTimeout({
                    "Dashboard.useRealtimeEnquiries": ()=>{
                        setNotificationMessage('');
                        clearNotification();
                    }
                }["Dashboard.useRealtimeEnquiries"], 5000);
            }
        }["Dashboard.useRealtimeEnquiries"]
    });
    const refreshStats = function() {
        let searchQuery = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : search;
        setLoading(true);
        const params = new URLSearchParams();
        if (searchQuery.trim()) params.set('search', searchQuery.trim());
        fetch("/api/admin/stats?".concat(params)).then(async (response)=>{
            if (response.status === 401) {
                router.replace('/admin/login');
                return;
            }
            if (!response.ok) throw new Error('Unable to load dashboard.');
            setStats(await response.json());
        }).catch(()=>setLoadError(true)).finally(()=>setLoading(false));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            setLoadError(false);
            refreshStats();
        }
    }["Dashboard.useEffect"], [
        search,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container admin-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "admin-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "Eduspray control centre"
                        }, void 0, false, {
                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: email || displayName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$components$2f$admin$2f$AdminGreeting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminGreeting"], {
                                email: email,
                                displayName: displayName
                            }, void 0, false, {
                                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                lineNumber: 74,
                                columnNumber: 39
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonLine"], {
                                width: 220,
                                height: 38
                            }, void 0, false, {
                                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                lineNumber: 74,
                                columnNumber: 99
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "admin-subtitle",
                            children: "Keep track of new student enquiries and follow up with every prospective learner."
                        }, void 0, false, {
                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            notificationMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-notification-toast",
                role: "status",
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: notificationMessage
                    }, void 0, false, {
                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin/enquiries/".concat(notification.id),
                        className: "notification-link",
                        children: "View enquiry →"
                    }, void 0, false, {
                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            loadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-alert",
                role: "alert",
                children: "We could not load the dashboard right now. Please refresh and try again."
            }, void 0, false, {
                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                lineNumber: 90,
                columnNumber: 20
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "stat-grid",
                "aria-label": "Enquiry overview",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-stat admin-stat-total",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Total submissions"
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                    lineNumber: 94,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: stats ? stats.total : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        width: 48
                                    }, void 0, false, {
                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                        lineNumber: 94,
                                        columnNumber: 77
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                    lineNumber: 94,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "All submissions received"
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                    lineNumber: 94,
                                    columnNumber: 110
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-stat admin-stat-today",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Submissions today"
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: stats ? stats.today : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        width: 48
                                    }, void 0, false, {
                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 77
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "New submissions today"
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 110
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-stat admin-stat-rate",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Past hour"
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                    lineNumber: 100,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: stats ? stats.pastHour : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        width: 48
                                    }, void 0, false, {
                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                        lineNumber: 100,
                                        columnNumber: 72
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                    lineNumber: 100,
                                    columnNumber: 38
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "Submissions in the last 60 minutes"
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                    lineNumber: 100,
                                    columnNumber: 105
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "admin-content-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-eyebrow",
                                        children: "Inbox"
                                    }, void 0, false, {
                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                        lineNumber: 106,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Recent submissions"
                                    }, void 0, false, {
                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                        lineNumber: 106,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "text-link",
                                href: "/admin/enquiries",
                                children: [
                                    "View all enquiries ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                        lineNumber: 107,
                                        columnNumber: 82
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Enquiry ID"
                                            }, void 0, false, {
                                                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                lineNumber: 111,
                                                columnNumber: 24
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                lineNumber: 111,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Course"
                                            }, void 0, false, {
                                                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                lineNumber: 111,
                                                columnNumber: 56
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Submitted At"
                                            }, void 0, false, {
                                                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                lineNumber: 111,
                                                columnNumber: 71
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Action"
                                            }, void 0, false, {
                                                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                lineNumber: 111,
                                                columnNumber: 92
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                        lineNumber: 111,
                                        columnNumber: 20
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        !stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonRows"], {
                                            count: 5
                                        }, void 0, false, {
                                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                            lineNumber: 113,
                                            columnNumber: 26
                                        }, this),
                                        stats === null || stats === void 0 ? void 0 : stats.recent.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "enquiry-number",
                                                            href: "/admin/enquiries/".concat(item.id),
                                                            children: item.enquiry_number
                                                        }, void 0, false, {
                                                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 64
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 60
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "candidate-name",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 171
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 167
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: item.course
                                                    }, void 0, false, {
                                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 231
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: new Date(item.created_at).toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 253
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "dashboard-view-button",
                                                            href: "/admin/enquiries/".concat(item.id),
                                                            children: "View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 310
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 306
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 42
                                            }, this)),
                                        stats && stats.recent.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "empty-state",
                                                colSpan: 5,
                                                children: "No recent enquiries yet."
                                            }, void 0, false, {
                                                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                                lineNumber: 115,
                                                columnNumber: 57
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                            lineNumber: 115,
                                            columnNumber: 53
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ENTRY-PORTAL/components/admin/Dashboard.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "UU++NLTsajafayRmZWw2Ss7tgrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$hooks$2f$useRealtimeEnquiries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimeEnquiries"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ENTRY-PORTAL/node_modules/react-loading-skeleton/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonTheme",
    ()=>SkeletonTheme,
    "default",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
/**
 * @internal
 */ const SkeletonThemeContext = __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({});
/* eslint-disable react/no-array-index-key */ const defaultEnableAnimation = true;
// For performance & cleanliness, don't add any inline styles unless we have to
function styleOptionsToCssProperties(param) {
    let { baseColor, highlightColor, width, height, borderRadius, circle, direction, duration, enableAnimation = defaultEnableAnimation, customHighlightBackground } = param;
    const style = {};
    if (direction === 'rtl') style['--animation-direction'] = 'reverse';
    if (typeof duration === 'number') style['--animation-duration'] = "".concat(duration, "s");
    if (!enableAnimation) style['--pseudo-element-display'] = 'none';
    if (typeof width === 'string' || typeof width === 'number') style.width = width;
    if (typeof height === 'string' || typeof height === 'number') style.height = height;
    if (typeof borderRadius === 'string' || typeof borderRadius === 'number') style.borderRadius = borderRadius;
    if (circle) style.borderRadius = '50%';
    if (typeof baseColor !== 'undefined') style['--base-color'] = baseColor;
    if (typeof highlightColor !== 'undefined') style['--highlight-color'] = highlightColor;
    if (typeof customHighlightBackground === 'string') style['--custom-highlight-background'] = customHighlightBackground;
    return style;
}
function Skeleton(param) {
    let { count = 1, wrapper: Wrapper, className: customClassName, containerClassName, containerTestId, circle = false, style: styleProp, ...originalPropsStyleOptions } = param;
    var _a, _b, _c;
    const contextStyleOptions = __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(SkeletonThemeContext);
    const propsStyleOptions = {
        ...originalPropsStyleOptions
    };
    // DO NOT overwrite style options from the context if `propsStyleOptions`
    // has properties explicity set to undefined
    for (const [key, value] of Object.entries(originalPropsStyleOptions)){
        if (typeof value === 'undefined') {
            delete propsStyleOptions[key];
        }
    }
    // Props take priority over context
    const styleOptions = {
        ...contextStyleOptions,
        ...propsStyleOptions,
        circle
    };
    // `styleProp` has the least priority out of everything
    const style = {
        ...styleProp,
        ...styleOptionsToCssProperties(styleOptions)
    };
    let className = 'react-loading-skeleton';
    if (customClassName) className += " ".concat(customClassName);
    const inline = (_a = styleOptions.inline) !== null && _a !== void 0 ? _a : false;
    const elements = [];
    const countCeil = Math.ceil(count);
    for(let i = 0; i < countCeil; i++){
        let thisStyle = style;
        if (countCeil > count && i === countCeil - 1) {
            // count is not an integer and we've reached the last iteration of
            // the loop, so add a "fractional" skeleton.
            //
            // For example, if count is 3.5, we've already added 3 full
            // skeletons, so now we add one more skeleton that is 0.5 times the
            // original width.
            const width = (_b = thisStyle.width) !== null && _b !== void 0 ? _b : '100%'; // 100% is the default since that's what's in the CSS
            const fractionalPart = count % 1;
            const fractionalWidth = typeof width === 'number' ? width * fractionalPart : "calc(".concat(width, " * ").concat(fractionalPart, ")");
            thisStyle = {
                ...thisStyle,
                width: fractionalWidth
            };
        }
        const skeletonSpan = __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: className,
            style: thisStyle,
            key: i
        }, "\u200C");
        if (inline) {
            elements.push(skeletonSpan);
        } else {
            // Without the <br />, the skeleton lines will all run together if
            // `width` is specified
            elements.push(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                key: i
            }, skeletonSpan, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("br", null)));
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: containerClassName,
        "data-testid": containerTestId,
        "aria-live": "polite",
        "aria-busy": (_c = styleOptions.enableAnimation) !== null && _c !== void 0 ? _c : defaultEnableAnimation
    }, Wrapper ? elements.map((el, i)=>__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Wrapper, {
            key: i
        }, el)) : elements);
}
function SkeletonTheme(param) {
    let { children, ...styleOptions } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SkeletonThemeContext.Provider, {
        value: styleOptions
    }, children);
}
;
}),
]);

//# sourceMappingURL=ENTRY-PORTAL_3eb2daba._.js.map