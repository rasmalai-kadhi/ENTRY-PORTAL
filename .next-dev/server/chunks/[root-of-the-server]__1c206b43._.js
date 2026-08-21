module.exports = [
"[project]/.next-internal/server/app/api/enquiries/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/schemas/enquiry.schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enquirySchema",
    ()=>enquirySchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const enquirySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    course: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Course is required'),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Name is required'),
    dob: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'DOB is required'),
    gender: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'M',
        'F',
        'Other',
        ''
    ]).default(''),
    motherName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Mother name is required'),
    fatherName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Father name is required'),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Address is required'),
    mobile1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{10}$/, 'Enter a 10-digit mobile number'),
    mobile2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((value)=>value === '' || /^\d{10}$/.test(value), 'Enter a 10-digit mobile number or leave blank'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Enter a valid email').or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('')),
    class10Percent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Class 10 marks are required'),
    class12Stream: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    class12Percent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Class 12 marks are required'),
    physicsMarks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    chemistryMarks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    mathsMarks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    biologyMarks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    csMarks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    schoolNameWithState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    neetUgScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    neetPgScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    cuetScoreRank: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    cetScoreRank: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    clatScoreRank: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    catScoreRank: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    jeeMainsCrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    percentile: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    pcmPercent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    pcbPercent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    collegeUniversityName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    courses: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    marks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    reference: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    signatureDataUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('')
});
}),
"[project]/types/pdf-mapping.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDF_TEMPLATE_ID",
    ()=>PDF_TEMPLATE_ID
]);
const PDF_TEMPLATE_ID = 'entry-form';
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
"[project]/lib/pdf/get-mappings.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPdfFieldMappings",
    ()=>getPdfFieldMappings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$pdf$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/pdf-mapping.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/admin.ts [app-route] (ecmascript)");
;
;
async function getPdfFieldMappings() {
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])().from('pdf_field_mappings').select('*').eq('template_id', __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$pdf$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PDF_TEMPLATE_ID"]).order('page_number').order('field_label');
    if (error) throw new Error(`Unable to load PDF field mappings: ${error.message}`);
    if (!data?.length) throw new Error(`No saved PDF field mappings found for template "${__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$pdf$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PDF_TEMPLATE_ID"]}".`);
    return data;
}
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/lib/pdf/stamp.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stampPdf",
    ()=>stampPdf
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/StandardFonts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/rotations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/colors.js [app-route] (ecmascript)");
;
;
;
const TEMPLATE = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), 'private', 'templates', 'entry-form.pdf');
const NON_PDF_KEYS = new Set([
    'id',
    'pdfStoragePath',
    'status',
    'createdAt',
    'updatedAt'
]);
function valueFor(enquiry, key) {
    if (key === 'enquiryNumber') return enquiry.enquiryNumber;
    if (key === 'date') return enquiry.date;
    return String(enquiry[key] ?? '');
}
function parseColor(value) {
    const hex = /^#?([0-9a-f]{6})$/i.exec(value)?.[1] ?? '000000';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(parseInt(hex.slice(0, 2), 16) / 255, parseInt(hex.slice(2, 4), 16) / 255, parseInt(hex.slice(4, 6), 16) / 255);
}
function wrapText(value, font, size, width) {
    const words = value.split(/\s+/);
    const lines = [];
    let line = '';
    for (const word of words){
        const candidate = line ? `${line} ${word}` : word;
        if (line && font.widthOfTextAtSize(candidate, size) > width) {
            lines.push(line);
            line = word;
        } else line = candidate;
    }
    if (line) lines.push(line);
    return lines;
}
async function stampPdf(enquiry, mappings) {
    if (!mappings.length) throw new Error('Cannot generate PDF: no saved field mappings were supplied.');
    const input = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readFile(TEMPLATE);
    const pdf = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PDFDocument"].load(input);
    const mappedKeys = new Set(mappings.map((mapping)=>mapping.field_key));
    for (const [key, value] of Object.entries(enquiry)){
        if (value && !mappedKeys.has(key) && !NON_PDF_KEYS.has(key)) throw new Error(`No mapping found for field: ${key}`);
    }
    console.info('MAPPING_SOURCE = SUPABASE');
    const fonts = new Map();
    async function getFont(family) {
        const name = family in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StandardFonts"] ? family : family === 'Times-Roman' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StandardFonts"].TimesRoman : family === 'Courier' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StandardFonts"].Courier : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StandardFonts"].Helvetica;
        if (!fonts.has(name)) fonts.set(name, await pdf.embedFont(name));
        return fonts.get(name);
    }
    for (const mapping of mappings){
        const page = pdf.getPages()[mapping.page_number - 1];
        if (!page) {
            console.warn(`PDF mapping skipped: page ${mapping.page_number} does not exist for field "${mapping.field_key}".`);
            continue;
        }
        const raw = valueFor(enquiry, mapping.field_key);
        if (!raw) continue;
        const mediaBox = page.getMediaBox();
        const x = mapping.x + mediaBox.x;
        const y = mapping.y + mediaBox.y;
        console.debug('PDF mapping', {
            fieldKey: mapping.field_key,
            page: mapping.page_number,
            x: mapping.x,
            y: mapping.y,
            width: mapping.width,
            height: mapping.height
        });
        const color = parseColor(mapping.color);
        if (mapping.field_key === 'signatureDataUrl' && raw.startsWith('data:image/')) {
            const [, meta, base64] = raw.match(/^data:(image\/(?:png|jpeg));base64,(.+)$/) ?? [];
            if (meta && base64) {
                const image = meta === 'image/png' ? await pdf.embedPng(Buffer.from(base64, 'base64')) : await pdf.embedJpg(Buffer.from(base64, 'base64'));
                page.drawImage(image, {
                    x,
                    y,
                    width: mapping.width,
                    height: mapping.height,
                    rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["degrees"])(mapping.rotation)
                });
            }
            continue;
        }
        const font = await getFont(mapping.font_family);
        const size = Math.max(1, mapping.font_size);
        const lines = mapping.multiline ? wrapText(raw, font, size, mapping.width) : [
            raw
        ];
        const lineHeight = size * 1.2;
        const visibleLines = lines.slice(0, Math.max(1, Math.floor(mapping.height / lineHeight)));
        visibleLines.forEach((line, index)=>{
            const lineWidth = font.widthOfTextAtSize(line, size);
            const textX = mapping.alignment === 'center' ? x + Math.max(0, (mapping.width - lineWidth) / 2) : mapping.alignment === 'right' ? x + Math.max(0, mapping.width - lineWidth) : x;
            page.drawText(line, {
                x: textX,
                y: y + mapping.height - size - index * lineHeight,
                size,
                font,
                color,
                rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["degrees"])(mapping.rotation),
                maxWidth: mapping.width
            });
        });
    }
    return pdf.save();
}
}),
"[project]/lib/pdf/generate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateEnquiryPdf",
    ()=>generateEnquiryPdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$get$2d$mappings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/get-mappings.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$stamp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/stamp.ts [app-route] (ecmascript)");
;
;
async function generateEnquiryPdf(enquiry) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$stamp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stampPdf"])(enquiry, await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$get$2d$mappings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPdfFieldMappings"])());
}
}),
"[project]/lib/enquiry/numbering.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateEnquiryNumber",
    ()=>generateEnquiryNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/admin.ts [app-route] (ecmascript)");
;
async function generateEnquiryNumber() {
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])().rpc('next_enquiry_number');
    if (error || !data) throw error ?? new Error('Unable to generate enquiry number.');
    return data;
}
}),
"[project]/lib/request/client-ip.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClientIp",
    ()=>getClientIp
]);
function getClientIp(headers) {
    const forwarded = headers.get('x-forwarded-for');
    const ip = headers.get('cf-connecting-ip') ?? headers.get('x-real-ip') ?? forwarded?.split(',')[0]?.trim();
    return ip || 'Unavailable';
}
}),
"[project]/app/api/enquiries/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$schemas$2f$enquiry$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/schemas/enquiry.schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$generate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/generate.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$numbering$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/enquiry/numbering.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$request$2f$client$2d$ip$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/request/client-ip.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const runtime = "nodejs";
function jsonError(message, status = 500) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: false,
        error: message
    }, {
        status
    });
}
async function POST(request) {
    try {
        const clientIp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$request$2f$client$2d$ip$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClientIp"])(request.headers);
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySupabaseConnection"])()) {
            return jsonError("Database connection unavailable.", 503);
        }
        // ---------------------------------------------------------
        // 1. Read JSON body
        // ---------------------------------------------------------
        let body;
        try {
            body = await request.json();
        } catch  {
            return jsonError("Invalid request body.", 400);
        }
        // ---------------------------------------------------------
        // 2. Validate
        // ---------------------------------------------------------
        const normalizedBody = body && typeof body === 'object' ? {
            ...body,
            gender: ({
                Male: 'M',
                Female: 'F'
            })[String(body.gender)] ?? body.gender
        } : body;
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$schemas$2f$enquiry$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enquirySchema"].safeParse(normalizedBody);
        if (!parsed.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Please check the form fields.",
                fields: parsed.error.flatten().fieldErrors
            }, {
                status: 400
            });
        }
        const now = new Date();
        const enquiryNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$numbering$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEnquiryNumber"])();
        // ---------------------------------------------------------
        // 4. Prepare record for PDF
        // ---------------------------------------------------------
        const enquiry = {
            ...parsed.data,
            enquiryNumber,
            date: now.toLocaleDateString("en-GB")
        };
        // ---------------------------------------------------------
        // 5. Stamp submitted data onto original PDF
        // ---------------------------------------------------------
        const pdfBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$generate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEnquiryPdf"])(enquiry);
        const pdfStoragePath = `${enquiryNumber}/${enquiryNumber}.pdf`;
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])();
        const { error: uploadError } = await supabase.storage.from("generated-forms").upload(pdfStoragePath, Buffer.from(pdfBytes), {
            contentType: "application/pdf",
            upsert: false
        });
        if (uploadError) throw uploadError;
        const { error: insertError } = await supabase.from("enquiries").insert({
            ...parsed.data,
            date: enquiry.date,
            enquiry_number: enquiryNumber,
            client_ip: clientIp,
            submitted_at: now.toISOString(),
            pdf_storage_path: pdfStoragePath,
            status: "submitted"
        });
        if (insertError) {
            await supabase.storage.from("generated-forms").remove([
                pdfStoragePath
            ]);
            throw insertError;
        }
        // ---------------------------------------------------------
        // 7. Return JSON
        // ---------------------------------------------------------
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            message: "Form submitted successfully.",
            clientIp
        });
    } catch (error) {
        console.error("ENQUIRY SUBMISSION ERROR:", error);
        const message = error instanceof Error ? error.message : "Unable to submit enquiry.";
        return jsonError(message, 500);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1c206b43._.js.map