module.exports = [
"[project]/ENTRY-PORTAL/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://jcrqjmjafbvdhvpebjcz.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_LjXLRy7nhMfcIWe8sxseoA_9Jxls6MJ"), {
        auth: {
            autoRefreshToken: false,
            persistSession: true
        }
    });
}
}),
"[project]/ENTRY-PORTAL/lib/auth/session-ttl.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADMIN_SESSION_MAX_AGE_MS",
    ()=>ADMIN_SESSION_MAX_AGE_MS,
    "adminSessionRemaining",
    ()=>adminSessionRemaining
]);
const ADMIN_SESSION_MAX_AGE_MS = 8 * 60 * 60 * 1000;
function tokenIssuedAt(accessToken) {
    try {
        const payload = accessToken.split('.')[1];
        const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
        return typeof decoded.iat === 'number' ? decoded.iat * 1000 : null;
    } catch  {
        return null;
    }
}
function adminSessionRemaining(accessToken) {
    const issuedAt = tokenIssuedAt(accessToken);
    return issuedAt === null ? ADMIN_SESSION_MAX_AGE_MS : Math.max(0, issuedAt + ADMIN_SESSION_MAX_AGE_MS - Date.now());
}
}),
"[project]/ENTRY-PORTAL/components/ui/Toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Toast({ message, error = false, severity, onClose }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = window.setTimeout(onClose, 5000);
        return ()=>window.clearTimeout(timer);
    }, [
        message,
        onClose
    ]);
    const kind = severity ?? (error ? 'error' : 'success');
    const icons = {
        success: '✓',
        error: '!',
        warning: '!',
        info: 'i'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `app-toast app-toast-${kind}`,
        role: kind === 'error' || kind === 'warning' ? 'alert' : 'status',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "app-toast-icon",
                "aria-hidden": "true",
                children: icons[kind]
            }, void 0, false, {
                fileName: "[project]/ENTRY-PORTAL/components/ui/Toast.tsx",
                lineNumber: 15,
                columnNumber: 124
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: message
            }, void 0, false, {
                fileName: "[project]/ENTRY-PORTAL/components/ui/Toast.tsx",
                lineNumber: 15,
                columnNumber: 196
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Close notification",
                onClick: onClose,
                children: "×"
            }, void 0, false, {
                fileName: "[project]/ENTRY-PORTAL/components/ui/Toast.tsx",
                lineNumber: 15,
                columnNumber: 218
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ENTRY-PORTAL/components/ui/Toast.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
}),
"[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminHeader",
    ()=>AdminHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$auth$2f$session$2d$ttl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/lib/auth/session-ttl.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/components/ui/Toast.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function AdminHeader() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingDisplayName, setEditingDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displayNameInput, setDisplayNameInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [savingDisplayName, setSavingDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [signingOut, setSigningOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/admin/session', {
            cache: 'no-store'
        }).then(async (response)=>{
            if (response.ok) {
                const data = await response.json();
                setEmail(data.email ?? '');
                setDisplayName(data.displayName ?? '');
                setDisplayNameInput(data.displayName ?? '');
            }
        });
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        let timer;
        void supabase.auth.getSession().then(({ data })=>{
            if (!data.session) return;
            const remaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$auth$2f$session$2d$ttl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminSessionRemaining"])(data.session.access_token);
            if (remaining <= 0) {
                void supabase.auth.signOut();
                router.replace('/admin/login');
                return;
            }
            timer = window.setTimeout(()=>{
                void supabase.auth.signOut();
                router.replace('/admin/login');
            }, remaining);
        });
        return ()=>{
            if (timer !== undefined) window.clearTimeout(timer);
        };
    }, [
        router
    ]);
    async function saveDisplayName() {
        const newName = displayNameInput.trim();
        if (!newName) return;
        setSavingDisplayName(true);
        try {
            const response = await fetch('/api/admin/session', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    displayName: newName
                })
            });
            if (response.ok) {
                setDisplayName(newName);
                setEditingDisplayName(false);
                setNotice('Display name saved.');
            } else setNotice('Unable to save display name.');
        } catch  {
            setNotice('Unable to save display name.');
        } finally{
            setSavingDisplayName(false);
        }
    }
    async function signOut() {
        if (signingOut) return;
        setSigningOut(true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])().auth.signOut();
        router.replace('/admin/login');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "admin-topbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "admin-topbar-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "brand-lockup admin-brand",
                            href: "/admin",
                            "aria-label": "Eduspray dashboard",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/logo.png",
                                alt: "Eduspray",
                                width: 200,
                                height: 64,
                                className: "brand-mark"
                            }, void 0, false, {
                                fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                lineNumber: 73,
                                columnNumber: 96
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                            lineNumber: 73,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "admin-nav",
                            "aria-label": "Admin navigation",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: pathname === '/admin' ? 'active' : '',
                                    href: "/admin",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                    lineNumber: 75,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: pathname === '/admin/enquiries' ? 'active' : '',
                                    href: "/admin/enquiries",
                                    children: "Enquiries"
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                    lineNumber: 76,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: pathname === '/admin/questions' ? 'active' : '',
                                    href: "/admin/questions",
                                    children: "Questions"
                                }, void 0, false, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                    lineNumber: 77,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                            lineNumber: 74,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "profile-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "profile-button",
                                    "aria-expanded": menuOpen,
                                    onClick: ()=>setMenuOpen(!menuOpen),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "avatar",
                                            children: email ? email[0].toUpperCase() : 'A'
                                        }, void 0, false, {
                                            fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                            lineNumber: 80,
                                            columnNumber: 108
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "profile-label",
                                            children: "Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                            lineNumber: 80,
                                            columnNumber: 178
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                    lineNumber: 80,
                                    columnNumber: 9
                                }, this),
                                menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "profile-menu",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: displayName || email || 'Admin'
                                        }, void 0, false, {
                                            fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                            lineNumber: 83,
                                            columnNumber: 13
                                        }, this),
                                        editingDisplayName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "profile-display-name-editor",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    autoFocus: true,
                                                    type: "text",
                                                    value: displayNameInput,
                                                    onChange: (e)=>setDisplayNameInput(e.target.value),
                                                    placeholder: "Enter display name",
                                                    disabled: savingDisplayName
                                                }, void 0, false, {
                                                    fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "profile-editor-actions",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: saveDisplayName,
                                                            disabled: savingDisplayName || !displayNameInput.trim(),
                                                            children: savingDisplayName ? 'Saving...' : 'Save'
                                                        }, void 0, false, {
                                                            fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setEditingDisplayName(false);
                                                                setDisplayNameInput(displayName);
                                                            },
                                                            disabled: savingDisplayName,
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "profile-menu-link",
                                                    onClick: ()=>{
                                                        router.push('/admin/settings');
                                                        setMenuOpen(false);
                                                    },
                                                    children: "PDF field mapping"
                                                }, void 0, false, {
                                                    fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "profile-menu-link",
                                                    onClick: ()=>setEditingDisplayName(true),
                                                    children: "Edit display name"
                                                }, void 0, false, {
                                                    fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: signOut,
                                                    disabled: signingOut,
                                                    children: signingOut ? 'Signing out...' : 'Log out'
                                                }, void 0, false, {
                                                    fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                                    lineNumber: 82,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                            lineNumber: 79,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                    lineNumber: 72,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                lineNumber: 71,
                columnNumber: 12
            }, this),
            notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                message: notice,
                onClose: ()=>setNotice('')
            }, void 0, false, {
                fileName: "[project]/ENTRY-PORTAL/components/admin/AdminHeader.tsx",
                lineNumber: 114,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=ENTRY-PORTAL_ef2bdf87._.js.map