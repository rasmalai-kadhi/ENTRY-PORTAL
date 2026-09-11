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
"[project]/lib/enquiry/dob.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDob",
    ()=>formatDob,
    "normalizeDob",
    ()=>normalizeDob
]);
function formatDob(value) {
    if (!value) return '';
    const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (isoMatch) return `${isoMatch[3]}-${isoMatch[2]}-${isoMatch[1]}`;
    return value;
}
function normalizeDob(value) {
    const displayMatch = /^(\d{2})-(\d{2})-(\d{4})$/.exec(value);
    return displayMatch ? `${displayMatch[3]}-${displayMatch[2]}-${displayMatch[1]}` : value;
}
}),
"[project]/lib/enquiry/question-validation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildQuestionSchema",
    ()=>buildQuestionSchema,
    "buildQuestionsSchema",
    ()=>buildQuestionsSchema,
    "normalizeQuestions",
    ()=>normalizeQuestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$dob$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/enquiry/dob.ts [app-route] (ecmascript)");
;
;
function characterPattern(question) {
    let pattern = '';
    if (question.type === 'number' && question.number_format === 'decimal') pattern += '\\.';
    if (question.allow_alphabets) pattern += 'A-Za-z';
    if (question.allow_numbers) pattern += '0-9';
    if (question.allow_special_characters) pattern += '\\s\\p{P}';
    return pattern ? new RegExp(`^[${pattern}]*$`, 'u') : null;
}
function isPercentage(question) {
    return question.type === 'number' && /percent(age)?/i.test(`${question.field_key} ${question.label}`);
}
function buildQuestionSchema(question) {
    let schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim();
    if (question.required) schema = schema.min(1, `${question.label} is required`);
    schema = schema.max(question.max_length, `${question.label} must be ${question.max_length} characters or fewer`);
    if (question.type === 'email') schema = schema.refine((value)=>value === '' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].email().safeParse(value).success, 'Enter a valid email');
    if (question.type === 'date') schema = schema.refine((value)=>value === '' || !Number.isNaN(Date.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$dob$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeDob"])(value))) && (/^\d{4}-\d{2}-\d{2}$/.test(value) || question.field_key === 'dob' && /^\d{2}-\d{2}-\d{4}$/.test(value)), 'Enter a valid date');
    if (question.type === 'number') {
        const numberPattern = question.number_format === 'decimal' ? /^\d+(\.\d+)?$/ : /^\d+$/;
        schema = schema.refine((value)=>value === '' || numberPattern.test(value), question.number_format === 'decimal' ? 'Enter a valid decimal number' : 'Enter a whole number');
    }
    if (question.type === 'phone') schema = schema.refine((value)=>value === '' || /^\d{10}$/.test(value), 'Enter a 10-digit phone number');
    if (question.type === 'select') schema = schema.refine((value)=>value === '' || question.options.includes(value), 'Select a valid option');
    const pattern = characterPattern(question);
    if (pattern) schema = schema.refine((value)=>value === '' || pattern.test(value), `${question.label} contains unsupported characters`);
    if (isPercentage(question)) schema = schema.refine((value)=>value === '' || Number(value) >= 0 && Number(value) <= 100, 'Enter a percentage from 0 to 100');
    return schema;
}
function buildQuestionsSchema(questions) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object(Object.fromEntries(questions.map((question)=>[
            question.field_key,
            buildQuestionSchema(question)
        ])));
}
function normalizeQuestions(value) {
    return Array.isArray(value) ? value.map((rawQuestion)=>{
        const question = rawQuestion;
        const options = Array.isArray(question.options) ? question.options.filter((option)=>typeof option === 'string') : [];
        return {
            ...question,
            options
        };
    }) : [];
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$dob$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/enquiry/dob.ts [app-route] (ecmascript)");
;
;
;
;
const TEMPLATE = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), 'private', 'templates', 'entry-form.pdf');
const NON_PDF_KEYS = new Set([
    'id',
    'pdfStoragePath',
    'status',
    'createdAt',
    'updatedAt',
    'answers'
]);
function valueFor(enquiry, key) {
    if (key === 'enquiryNumber') return enquiry.enquiryNumber;
    if (key === 'date') return enquiry.date;
    if (enquiry.answers?.[key] !== undefined) return enquiry.answers[key];
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
        const stampedText = (mapping.field_key === 'dob' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$dob$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDob"])(raw) : raw).toUpperCase();
        const font = await getFont(mapping.font_family);
        const size = Math.max(1, mapping.font_size);
        const lines = mapping.multiline ? wrapText(stampedText, font, size, mapping.width) : [
            stampedText
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
function applicationDate() {
    const timezone = process.env.APP_TIMEZONE || 'Asia/Kolkata';
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).formatToParts(new Date());
    const values = Object.fromEntries(parts.map((part)=>[
            part.type,
            part.value
        ]));
    return `${values.year}-${values.month}-${values.day}`;
}
async function generateEnquiryNumber() {
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])().rpc('next_enquiry_number', {
        p_enquiry_date: applicationDate()
    });
    if (error || !data) throw error ?? new Error('Unable to generate enquiry number.');
    return data;
}
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[project]/lib/pdf/google-sheets-sync.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "syncEnquiryToGoogleSheets",
    ()=>syncEnquiryToGoogleSheets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/googleapis/build/src/index.js [app-route] (ecmascript)");
;
const HEADERS = [
    'Enquiry Number',
    'Date',
    'Course',
    'Name',
    'DOB',
    'Gender',
    "Mother's Name",
    "Father's Name",
    'Address',
    'Mobile 1',
    'Mobile 2',
    'Email',
    'Class 10 %',
    'Class 12 Stream',
    'Class 12 %',
    'Physics Marks',
    'Chemistry Marks',
    'Maths Marks',
    'Biology Marks',
    'CS Marks',
    'School Name & State',
    'NEET UG Score',
    'NEET PG Score',
    'Category',
    'CUET Score / Rank',
    'CET Score / Rank',
    'CLAT Score / Rank',
    'CAT Score / Percentile',
    'JEE Mains CRL',
    'Percentile',
    'PCM %',
    'PCB %',
    'College / University Name',
    'Courses',
    'Marks',
    'Reference',
    'Client IP',
    'Submitted At',
    'Status'
];
const FIELD_MAPPING = {
    'Enquiry Number': 'enquiry_number',
    'Date': 'date',
    'Course': 'course',
    'Name': 'name',
    'DOB': 'dob',
    'Gender': 'gender',
    "Mother's Name": 'motherName',
    "Father's Name": 'fatherName',
    'Address': 'address',
    'Mobile 1': 'mobile1',
    'Mobile 2': 'mobile2',
    'Email': 'email',
    'Class 10 %': 'class10Percent',
    'Class 12 Stream': 'class12Stream',
    'Class 12 %': 'class12Percent',
    'Physics Marks': 'physicsMarks',
    'Chemistry Marks': 'chemistryMarks',
    'Maths Marks': 'mathsMarks',
    'Biology Marks': 'biologyMarks',
    'CS Marks': 'csMarks',
    'School Name & State': 'schoolNameWithState',
    'NEET UG Score': 'neetUgScore',
    'NEET PG Score': 'neetPgScore',
    'Category': 'category',
    'CUET Score / Rank': 'cuetScoreRank',
    'CET Score / Rank': 'cetScoreRank',
    'CLAT Score / Rank': 'clatScoreRank',
    'CAT Score / Percentile': 'catScoreRank',
    'JEE Mains CRL': 'jeeMainsCrl',
    'Percentile': 'percentile',
    'PCM %': 'pcmPercent',
    'PCB %': 'pcbPercent',
    'College / University Name': 'collegeUniversityName',
    'Courses': 'courses',
    'Marks': 'marks',
    'Reference': 'reference',
    'Client IP': 'client_ip',
    'Status': 'status'
};
function getGoogleAuth() {
    const privateKeyId = process.env.GOOGLE_PRIVATE_KEY_ID;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    if (!privateKeyId || !privateKey || !clientEmail) {
        throw new Error('Missing Google Sheets credentials in environment variables');
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"].auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes: [
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    });
}
async function initializeSheet(config) {
    try {
        const auth = getGoogleAuth();
        const sheets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"].sheets({
            version: 'v4',
            auth
        });
        // Get existing sheets
        const spreadsheet = await sheets.spreadsheets.get({
            spreadsheetId: config.spreadsheetId
        });
        const sheetExists = spreadsheet.data.sheets?.some((sheet)=>sheet.properties?.title === config.sheetName);
        if (!sheetExists) {
            // Create the sheet if it doesn't exist
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId: config.spreadsheetId,
                requestBody: {
                    requests: [
                        {
                            addSheet: {
                                properties: {
                                    title: config.sheetName
                                }
                            }
                        }
                    ]
                }
            });
        }
        // Add headers if not present
        const sheetData = await sheets.spreadsheets.values.get({
            spreadsheetId: config.spreadsheetId,
            range: `${config.sheetName}!A1:Z1`
        });
        if (!sheetData.data.values || sheetData.data.values[0]?.length === 0) {
            await sheets.spreadsheets.values.update({
                spreadsheetId: config.spreadsheetId,
                range: `${config.sheetName}!A1`,
                valueInputOption: 'RAW',
                requestBody: {
                    values: [
                        HEADERS
                    ]
                }
            });
        }
    } catch (error) {
        console.error('Error initializing Google Sheet:', error);
        throw error;
    }
}
async function findRowByEnquiryNumber(config, enquiryNumber) {
    try {
        const auth = getGoogleAuth();
        const sheets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"].sheets({
            version: 'v4',
            auth
        });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: config.spreadsheetId,
            range: `${config.sheetName}!A:A`
        });
        const values = response.data.values || [];
        for(let i = 1; i < values.length; i++){
            if (values[i][0] === enquiryNumber) {
                return i + 1; // Row numbers are 1-indexed
            }
        }
        return null;
    } catch (error) {
        console.error('Error finding row:', error);
        throw error;
    }
}
function enquiryToSheetRow(enquiry) {
    const row = [];
    for (const header of HEADERS){
        const fieldKey = FIELD_MAPPING[header];
        let value = '';
        if (fieldKey && enquiry[fieldKey]) {
            value = String(enquiry[fieldKey]);
        }
        row.push(value);
    }
    return row;
}
async function syncEnquiryToGoogleSheets(enquiry) {
    try {
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
        const sheetName = process.env.GOOGLE_SHEETS_NAME || 'Enquiries';
        if (!spreadsheetId) {
            return {
                success: false,
                error: 'Google Sheets spreadsheet ID not configured'
            };
        }
        const config = {
            spreadsheetId,
            sheetName
        };
        // Ensure sheet is initialized
        await initializeSheet(config);
        const auth = getGoogleAuth();
        const sheets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"].sheets({
            version: 'v4',
            auth
        });
        // Check if enquiry already exists
        const existingRowNum = await findRowByEnquiryNumber(config, enquiry.enquiry_number || '');
        const sheetRow = enquiryToSheetRow(enquiry);
        if (existingRowNum) {
            // Update existing row
            const columnLetter = String.fromCharCode(65 + HEADERS.length - 1);
            await sheets.spreadsheets.values.update({
                spreadsheetId: config.spreadsheetId,
                range: `${config.sheetName}!A${existingRowNum}:${columnLetter}${existingRowNum}`,
                valueInputOption: 'RAW',
                requestBody: {
                    values: [
                        sheetRow
                    ]
                }
            });
            return {
                success: true,
                rowId: `${existingRowNum}`
            };
        } else {
            // Append new row
            const appendResponse = await sheets.spreadsheets.values.append({
                spreadsheetId: config.spreadsheetId,
                range: `${config.sheetName}!A:A`,
                valueInputOption: 'RAW',
                requestBody: {
                    values: [
                        sheetRow
                    ]
                }
            });
            const newRowNum = appendResponse.data.updates?.updatedRows ? 2 : 1;
            return {
                success: true,
                rowId: String(newRowNum)
            };
        }
    } catch (error) {
        console.error('Error syncing to Google Sheets:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to sync to Google Sheets'
        };
    }
}
}),
"[externals]/node:net [external] (node:net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:net", () => require("node:net"));

module.exports = mod;
}),
"[project]/lib/request/client-ip.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectClientIp",
    ()=>detectClientIp,
    "getClientIp",
    ()=>getClientIp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$net__$5b$external$5d$__$28$node$3a$net$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:net [external] (node:net, cjs)");
;
;
function normalize(value) {
    const candidate = value.trim().replace(/^\[|\]$/g, '').replace(/^::ffff:/i, '');
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$net__$5b$external$5d$__$28$node$3a$net$2c$__cjs$29$__["isIP"])(candidate) ? candidate : null;
}
function detectClientIp(headers) {
    const environment = ("TURBOPACK compile-time value", "development") ?? 'development';
    const trustedHeaders = (process.env.TRUSTED_PROXY_HEADERS ?? 'cf-connecting-ip,x-real-ip').split(',').map((value)=>value.trim()).filter(Boolean);
    const headerValues = new Map([
        [
            'cf-connecting-ip',
            headers.get('cf-connecting-ip')
        ],
        [
            'true-client-ip',
            headers.get('true-client-ip')
        ],
        [
            'x-real-ip',
            headers.get('x-real-ip')
        ],
        [
            'x-forwarded-for',
            headers.get('x-forwarded-for')
        ]
    ]);
    let ip = null;
    let source = 'proxy-ip-unavailable';
    for (const header of trustedHeaders){
        const raw = headerValues.get(header);
        const candidate = raw?.split(',')[0] ? normalize(raw.split(',')[0]) : null;
        if (candidate) {
            ip = candidate;
            source = header;
            break;
        }
    }
    if (!ip && environment !== 'production') {
        const local = normalize(headers.get('x-forwarded-for')?.split(',')[0] ?? '') ?? normalize(headers.get('x-real-ip') ?? '');
        if (local === '::1' || local === '127.0.0.1') {
            ip = local;
            source = 'local-development';
        }
    }
    if (ip === '::1' || ip === '127.0.0.1') {
        ip = 'localhost';
        source = 'local-development';
    }
    const result = {
        ip: ip ?? 'proxy-ip-unavailable',
        source,
        environment
    };
    console.info('CLIENT_IP_DETECTED', {
        ...result,
        relevantProxyHeader: source.includes('-') ? headers.get(source) : null,
        forwarded: headers.get('x-forwarded-for') ?? null
    });
    return result;
}
function getClientIp(headers) {
    return detectClientIp(headers).ip;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$question$2d$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/enquiry/question-validation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$generate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/generate.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$numbering$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/enquiry/numbering.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$google$2d$sheets$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/google-sheets-sync.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$request$2f$client$2d$ip$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/request/client-ip.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$dob$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/enquiry/dob.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const runtime = "nodejs";
const legacyKeys = [
    'course',
    'name',
    'dob',
    'gender',
    'motherName',
    'fatherName',
    'address',
    'mobile1',
    'mobile2',
    'email',
    'class10Percent',
    'class12Stream',
    'class12Percent',
    'physicsMarks',
    'chemistryMarks',
    'mathsMarks',
    'biologyMarks',
    'csMarks',
    'schoolNameWithState',
    'neetUgScore',
    'neetPgScore',
    'category',
    'cuetScoreRank',
    'cetScoreRank',
    'clatScoreRank',
    'catScoreRank',
    'jeeMainsCrl',
    'percentile',
    'pcmPercent',
    'pcbPercent',
    'collegeUniversityName',
    'courses',
    'marks',
    'reference',
    'signatureDataUrl'
];
const TERMS_VERSION = '2026-08-23';
const PRIVACY_VERSION = '2026-08-23';
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
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySupabaseConnection"])()) return jsonError("Database connection unavailable.", 503);
        const body = await request.json().catch(()=>null);
        if (!body) return jsonError("Invalid request body.", 400);
        if (body.terms_accepted !== true) return jsonError('You must accept the Terms of Use and Privacy/Data Collection Policy.', 400);
        const questionsResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])().from('form_questions').select('*').eq('active', true).order('display_order');
        if (questionsResult.error) return jsonError('Unable to load form configuration.', 503);
        const questions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$question$2d$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeQuestions"])(questionsResult.data);
        const answers = body.answers && typeof body.answers === 'object' ? body.answers : body;
        const normalizedAnswers = {
            ...answers,
            ...typeof answers.dob === 'string' ? {
                dob: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$dob$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeDob"])(answers.dob)
            } : {}
        };
        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$question$2d$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildQuestionsSchema"])(questions).safeParse(normalizedAnswers);
        if (!parsed.success) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Please check the form fields.",
            fields: parsed.error.flatten().fieldErrors
        }, {
            status: 400
        });
        const now = new Date();
        const enquiryNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$numbering$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEnquiryNumber"])();
        const answerValues = parsed.data;
        const enquiry = {
            ...answerValues,
            answers: answerValues,
            enquiryNumber,
            date: now.toLocaleDateString("en-GB")
        };
        const pdfBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$generate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEnquiryPdf"])(enquiry);
        const pdfStoragePath = `${enquiryNumber}/${enquiryNumber}.pdf`;
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])();
        const { error: uploadError } = await supabase.storage.from("generated-forms").upload(pdfStoragePath, Buffer.from(pdfBytes), {
            contentType: "application/pdf",
            upsert: false
        });
        if (uploadError) throw uploadError;
        const legacyValues = Object.fromEntries(legacyKeys.map((key)=>[
                key,
                answerValues[key] ?? ''
            ]));
        const { error: insertError } = await supabase.from("enquiries").insert({
            ...legacyValues,
            answers: answerValues,
            date: enquiry.date,
            enquiry_number: enquiryNumber,
            client_ip: clientIp,
            terms_accepted: true,
            terms_accepted_at: now.toISOString(),
            terms_version: TERMS_VERSION,
            privacy_version: PRIVACY_VERSION,
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
        // Trigger Google Sheets sync asynchronously (non-blocking)
        const enquiryForSync = {
            ...legacyValues,
            answers: answerValues,
            enquiry_number: enquiryNumber,
            date: enquiry.date,
            client_ip: clientIp,
            status: "submitted",
            submitted_at: now.toISOString()
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$google$2d$sheets$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["syncEnquiryToGoogleSheets"])(enquiryForSync).then((result)=>{
            if (result.success) {
                console.log(`[SYNC SUCCESS] Enquiry ${enquiryNumber} synced to Google Sheets (Row: ${result.rowId})`);
                // Update the sync status in the database
                supabase.from("enquiries").update({
                    google_sheet_synced: true,
                    google_sheet_synced_at: new Date().toISOString(),
                    google_sheet_row_id: result.rowId || null
                }).eq("enquiry_number", enquiryNumber).then(({ error })=>{
                    if (error) console.error(`[SYNC UPDATE ERROR] Failed to update sync status for ${enquiryNumber}:`, error);
                });
            } else {
                console.error(`[SYNC ERROR] Failed to sync ${enquiryNumber}:`, result.error);
                // Update error status in the database
                supabase.from("enquiries").update({
                    google_sheet_synced: false,
                    google_sheet_error: result.error || "Unknown error"
                }).eq("enquiry_number", enquiryNumber).then(({ error })=>{
                    if (error) console.error(`[SYNC UPDATE ERROR] Failed to update error status for ${enquiryNumber}:`, error);
                });
            }
        }).catch((error)=>{
            console.error(`[SYNC EXCEPTION] Exception during sync of ${enquiryNumber}:`, error);
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            message: "Form submitted successfully.",
            clientIp,
            enquiryNumber
        });
    } catch (error) {
        console.error("ENQUIRY SUBMISSION ERROR:", error);
        return jsonError(error instanceof Error ? error.message : "Unable to submit enquiry.");
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c8d029cd._.js.map