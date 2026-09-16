module.exports = [
"[project]/ENTRY-PORTAL/.next-internal/server/app/api/admin/stats/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/ENTRY-PORTAL/lib/supabase/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://jcrqjmjafbvdhvpebjcz.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_LjXLRy7nhMfcIWe8sxseoA_9Jxls6MJ"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // Server Components cannot always write cookies.
                }
            }
        }
    });
}
}),
"[project]/ENTRY-PORTAL/lib/supabase/admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAdminClient",
    ()=>createAdminClient,
    "verifySupabaseConnection",
    ()=>verifySupabaseConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
;
let connectionChecked = false;
function createAdminClient() {
    const url = ("TURBOPACK compile-time value", "https://jcrqjmjafbvdhvpebjcz.supabase.co");
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !serviceRoleKey) {
        throw new Error('Supabase server configuration is missing.');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, serviceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });
}
async function verifySupabaseConnection() {
    if (connectionChecked) return true;
    const { error } = await createAdminClient().from('enquiries').select('id', {
        count: 'exact',
        head: true
    });
    if (error) {
        console.error('Supabase database connection failed:', error.message);
        return false;
    }
    connectionChecked = true;
    console.log('Supabase database connected.');
    return true;
}
}),
"[project]/ENTRY-PORTAL/lib/auth/admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdminContext",
    ()=>getAdminContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/lib/supabase/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/lib/supabase/admin.ts [app-route] (ecmascript)");
;
;
async function getAdminContext() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    const { data: admin } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])().from('admins').select('id, user_id, email, role, display_name').eq('user_id', user.id).eq('role', 'admin').maybeSingle();
    return admin ? {
        user,
        admin,
        supabase: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])()
    } : null;
}
}),
"[project]/ENTRY-PORTAL/app/api/admin/stats/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$auth$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ENTRY-PORTAL/lib/auth/admin.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$lib$2f$auth$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAdminContext"])();
    if (!context) return __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Unauthorized'
    }, {
        status: 401
    });
    const requestUrl = new URL(request.url);
    const search = requestUrl.searchParams.get('search')?.trim().replace(/[%(),]/g, '') ?? '';
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const applySearch = (query)=>search ? query.or(`enquiry_number.ilike.%${search}%,name.ilike.%${search}%,mobile1.ilike.%${search}%,email.ilike.%${search}%,course.ilike.%${search}%`) : query;
    const { count: total, error: totalError } = await applySearch(context.supabase.from('enquiries').select('id', {
        count: 'exact',
        head: true
    }));
    const { count: today, error: todayError } = await applySearch(context.supabase.from('enquiries').select('id', {
        count: 'exact',
        head: true
    }).gte('created_at', start.toISOString()));
    const { count: pastHour, error: hourError } = await applySearch(context.supabase.from('enquiries').select('id', {
        count: 'exact',
        head: true
    }).gte('created_at', hourAgo.toISOString()));
    const { data: recent, error: recentError } = await applySearch(context.supabase.from('enquiries').select('id, enquiry_number, name, course, created_at, status')).order('created_at', {
        ascending: false
    }).limit(5);
    if (totalError || todayError || hourError || recentError) return __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Unable to load dashboard.'
    }, {
        status: 500
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$ENTRY$2d$PORTAL$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        total: total ?? 0,
        today: today ?? 0,
        pastHour: pastHour ?? 0,
        recent: recent ?? []
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5d5e3f8f._.js.map