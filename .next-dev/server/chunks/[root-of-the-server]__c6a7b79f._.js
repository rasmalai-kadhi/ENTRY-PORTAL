module.exports = [
"[project]/.next-internal/server/app/api/admin/form-questions/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/lib/supabase/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://jcrqjmjafbvdhvpebjcz.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_LjXLRy7nhMfcIWe8sxseoA_9Jxls6MJ"), {
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
"[project]/lib/supabase/admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAdminClient",
    ()=>createAdminClient,
    "verifySupabaseConnection",
    ()=>verifySupabaseConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
;
let connectionChecked = false;
function createAdminClient() {
    const url = ("TURBOPACK compile-time value", "https://jcrqjmjafbvdhvpebjcz.supabase.co");
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !serviceRoleKey) {
        throw new Error('Supabase server configuration is missing.');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, serviceRoleKey, {
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
"[project]/lib/auth/admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdminContext",
    ()=>getAdminContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/admin.ts [app-route] (ecmascript)");
;
;
async function getAdminContext() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    const { data: admin } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])().from('admins').select('id, user_id, email, role, display_name').eq('user_id', user.id).eq('role', 'admin').maybeSingle();
    return admin ? {
        user,
        admin,
        supabase: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])()
    } : null;
}
}),
"[project]/types/form-question.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "questionTypes",
    ()=>questionTypes
]);
const questionTypes = [
    'text',
    'number',
    'email',
    'date',
    'textarea',
    'select',
    'phone'
];
}),
"[project]/app/api/admin/form-questions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$form$2d$question$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/form-question.ts [app-route] (ecmascript)");
;
;
;
async function context() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAdminContext"])();
}
function describeError(operation, table, error) {
    console.error('[FORM CONFIGURATION]', {
        operation,
        table,
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
    });
    return `Supabase ${operation} on ${table} failed${error.code ? ` [${error.code}]` : ''}: ${error.message || 'Unknown database error'}${error.details ? ` Details: ${error.details}` : ''}${error.hint ? ` Hint: ${error.hint}` : ''}`;
}
function cleanSection(value) {
    if (!value || typeof value !== 'object') return null;
    const input = value;
    const title = String(input.title ?? '').trim().slice(0, 100);
    const description = String(input.description ?? '').trim().slice(0, 300);
    const displayOrder = Number(input.display_order);
    if (!title || !Number.isInteger(displayOrder) || displayOrder < 0) return null;
    const id = input.id && /^[0-9a-f-]{36}$/i.test(String(input.id)) ? String(input.id) : undefined;
    return {
        ...id ? {
            id
        } : {},
        title,
        description,
        display_order: displayOrder,
        active: input.active !== false
    };
}
function cleanQuestion(value) {
    if (!value || typeof value !== 'object') return null;
    const input = value;
    const fieldKey = String(input.field_key ?? '').trim();
    const label = String(input.label ?? '').trim();
    const type = String(input.type ?? 'text');
    const maxLength = Number(input.max_length ?? 255);
    const sectionId = input.section_id ? String(input.section_id).trim() : null;
    const displayOrder = Number(input.display_order);
    if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(fieldKey) || !label || !__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$form$2d$question$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["questionTypes"].includes(type) || !Number.isInteger(maxLength) || maxLength < 1 || maxLength > 10000 || sectionId && !/^[0-9a-f-]{36}$/i.test(sectionId) || !Number.isInteger(displayOrder) || displayOrder < 0) return null;
    const id = input.id && /^[0-9a-f-]{36}$/i.test(String(input.id)) ? String(input.id) : undefined;
    return {
        ...id ? {
            id
        } : {},
        field_key: fieldKey,
        label,
        type,
        number_format: input.number_format === 'decimal' ? 'decimal' : 'integer',
        required: Boolean(input.required),
        allow_alphabets: Boolean(input.allow_alphabets),
        allow_numbers: Boolean(input.allow_numbers),
        allow_special_characters: Boolean(input.allow_special_characters),
        max_length: maxLength,
        options: Array.isArray(input.options) ? input.options.filter((option)=>typeof option === 'string').slice(0, 100) : [],
        display_order: displayOrder,
        section_id: sectionId,
        active: input.active !== false,
        placeholder: input.placeholder ? String(input.placeholder).slice(0, 500) : null
    };
}
async function load(admin) {
    const [{ data: sections, error: sectionError }, { data: questions, error: questionError }] = await Promise.all([
        admin.supabase.from('form_sections').select('*').order('display_order'),
        admin.supabase.from('form_questions').select('*').order('display_order')
    ]);
    if (sectionError) throw new Error(describeError('SELECT', 'form_sections', sectionError));
    if (questionError) throw new Error(describeError('SELECT', 'form_questions', questionError));
    return {
        sections: sections ?? [],
        questions: questions ?? []
    };
}
async function GET() {
    const admin = await context();
    if (!admin) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Unauthorized'
    }, {
        status: 401
    });
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(await load(admin));
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error instanceof Error ? error.message : 'Unable to load form configuration.'
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    const admin = await context();
    if (!admin) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Unauthorized'
    }, {
        status: 401
    });
    const body = await request.json().catch(()=>null);
    if (!Array.isArray(body?.sections) || !Array.isArray(body?.questions)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Sections and questions are required.'
    }, {
        status: 400
    });
    const sections = body.sections.map(cleanSection);
    const questions = body.questions.map(cleanQuestion);
    if (sections.some((section)=>!section) || questions.some((question)=>!question)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Invalid form configuration.'
    }, {
        status: 400
    });
    const deletedSectionIds = body.deletedSectionIds ?? [];
    const deletedQuestionIds = body.deletedQuestionIds ?? [];
    if (deletedSectionIds.length + deletedQuestionIds.length > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Delete items individually.'
    }, {
        status: 400
    });
    if ((deletedSectionIds.length || deletedQuestionIds.length) && body.deleteConfirmation !== 'DELETE') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Type DELETE to confirm deletion.'
    }, {
        status: 400
    });
    try {
        console.info('[FORM CONFIGURATION] SAVE', {
            sections: sections.map((section)=>({
                    id: section?.id,
                    title: section?.title,
                    display_order: section?.display_order,
                    active: section?.active
                })),
            questions: questions.map((question)=>({
                    id: question?.id,
                    field_key: question?.field_key,
                    section_id: question?.section_id,
                    display_order: question?.display_order,
                    active: question?.active
                }))
        });
        if (sections.length) {
            const { error } = await admin.supabase.from('form_sections').upsert(sections.map((section)=>({
                    ...section,
                    updated_at: new Date().toISOString()
                })), {
                onConflict: 'id'
            });
            if (error) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: describeError('UPSERT', 'form_sections', error)
            }, {
                status: 400
            });
        }
        if (questions.length) {
            const { error } = await admin.supabase.from('form_questions').upsert(questions.map((question)=>({
                    ...question,
                    updated_at: new Date().toISOString()
                })), {
                onConflict: 'field_key'
            });
            if (error) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: describeError('UPSERT', 'form_questions', error)
            }, {
                status: 400
            });
        }
        if (deletedSectionIds.length) {
            const { count, error } = await admin.supabase.from('form_questions').select('id', {
                count: 'exact',
                head: true
            }).eq('section_id', deletedSectionIds[0]);
            if (error) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: describeError('COUNT', 'form_questions', error)
            }, {
                status: 400
            });
            if (count) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Reassign all questions from this section before deleting it.'
            }, {
                status: 409
            });
            const { error: deleteError } = await admin.supabase.from('form_sections').delete().eq('id', deletedSectionIds[0]);
            if (deleteError) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: describeError('DELETE', 'form_sections', deleteError)
            }, {
                status: 400
            });
        }
        if (deletedQuestionIds.length) {
            const { error } = await admin.supabase.from('form_questions').delete().eq('id', deletedQuestionIds[0]);
            if (error) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: describeError('DELETE', 'form_questions', error)
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(await load(admin));
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error instanceof Error ? error.message : 'Unable to save form configuration.'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c6a7b79f._.js.map