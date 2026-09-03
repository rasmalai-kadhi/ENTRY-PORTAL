module.exports = [
"[project]/.next-internal/server/app/api/admin/enquiries/[id]/sync-google-sheets/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/app/api/admin/enquiries/[id]/sync-google-sheets/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$google$2d$sheets$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/google-sheets-sync.ts [app-route] (ecmascript)");
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
async function POST(request, { params }) {
    try {
        const { id } = await params;
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])();
        // Fetch the enquiry from the database
        const { data: enquiry, error: fetchError } = await supabase.from("enquiries").select("*").eq("id", id).single();
        if (fetchError || !enquiry) {
            return jsonError("Enquiry not found.", 404);
        }
        // Sync to Google Sheets
        const syncResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$google$2d$sheets$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["syncEnquiryToGoogleSheets"])(enquiry);
        // Update the sync status in the database
        const now = new Date().toISOString();
        const updateData = syncResult.success ? {
            google_sheet_synced: true,
            google_sheet_synced_at: now,
            google_sheet_error: null,
            google_sheet_row_id: syncResult.rowId || null
        } : {
            google_sheet_synced: false,
            google_sheet_error: syncResult.error || "Unknown error"
        };
        const { error: updateError } = await supabase.from("enquiries").update(updateData).eq("id", id);
        if (updateError) {
            console.error("Error updating sync status:", updateError);
        }
        if (!syncResult.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: syncResult.error || "Failed to sync to Google Sheets"
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            message: "Successfully synced to Google Sheets",
            rowId: syncResult.rowId
        });
    } catch (error) {
        console.error("SYNC ERROR:", error);
        return jsonError(error instanceof Error ? error.message : "Unable to sync enquiry.");
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4323f137._.js.map