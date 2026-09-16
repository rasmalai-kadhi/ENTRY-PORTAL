module.exports = [
"[project]/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Button({ children, variant = 'primary', href, className = '', target, rel, type = 'button', ...props }) {
    const classes = `ui-button ui-button-${variant} ${className}`.trim();
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: classes,
            href: href,
            target: target,
            rel: rel,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 15,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: classes,
        type: type,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/ui/BookLoader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookLoader",
    ()=>BookLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function BookLoader({ text, fullPage = false, inline = false, className = '' }) {
    const classes = [
        'book-loader',
        fullPage ? 'book-loader-full-page' : '',
        inline ? 'book-loader-inline' : '',
        className
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes,
        role: "status",
        "aria-live": "polite",
        "aria-label": text || 'Loading',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "book-loader-art",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "book-loader-bookshelf",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "book-loader-book book-loader-book-one"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BookLoader.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "book-loader-book book-loader-book-two"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BookLoader.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "book-loader-book book-loader-book-three"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BookLoader.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "book-loader-book book-loader-book-four"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BookLoader.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "book-loader-book book-loader-book-five"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BookLoader.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "book-loader-book book-loader-book-moving"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BookLoader.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/BookLoader.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "book-loader-shelf"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/BookLoader.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/BookLoader.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "book-loader-text",
                children: text
            }, void 0, false, {
                fileName: "[project]/components/ui/BookLoader.tsx",
                lineNumber: 24,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/BookLoader.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/enquiry/dob.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/enquiry/question-validation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildQuestionSchema",
    ()=>buildQuestionSchema,
    "buildQuestionsSchema",
    ()=>buildQuestionsSchema,
    "normalizeQuestions",
    ()=>normalizeQuestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$dob$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/enquiry/dob.ts [app-ssr] (ecmascript)");
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
    let schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim();
    if (question.required) schema = schema.min(1, `${question.label} is required`);
    schema = schema.max(question.max_length, `${question.label} must be ${question.max_length} characters or fewer`);
    if (question.type === 'email') schema = schema.refine((value)=>value === '' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].email().safeParse(value).success, 'Enter a valid email');
    if (question.type === 'date') schema = schema.refine((value)=>value === '' || !Number.isNaN(Date.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$dob$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeDob"])(value))) && (/^\d{4}-\d{2}-\d{2}$/.test(value) || question.field_key === 'dob' && /^\d{2}-\d{2}-\d{4}$/.test(value)), 'Enter a valid date');
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object(Object.fromEntries(questions.map((question)=>[
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
            options,
            section: typeof question.section === 'string' && question.section.trim() ? question.section.trim() : 'Additional Details',
            section_order: Number.isInteger(question.section_order) ? Number(question.section_order) : 99,
            section_description: typeof question.section_description === 'string' ? question.section_description : null
        };
    }) : [];
}
}),
"[project]/components/enquiry/EnquiryForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnquiryForm",
    ()=>EnquiryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BookLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BookLoader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$question$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/enquiry/question-validation.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const DRAFT_KEY = 'eduspray-enquiry-draft-v1';
function makeSections(sections, questions) {
    return [
        ...sections
    ].sort((a, b)=>a.display_order - b.display_order).map((section)=>({
            key: section.id,
            title: section.title,
            description: section.description,
            questions: questions.filter((question)=>question.section_id === section.id).sort((a, b)=>a.display_order - b.display_order)
        }));
}
function EnquiryForm({ initialClientIp }) {
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/form-questions', {
            cache: 'no-store'
        }).then(async (response)=>{
            if (!response.ok) throw new Error();
            const result = await response.json();
            setQuestions(result.data ?? []);
            setSections(result.sections ?? []);
        }).catch(()=>setLoadError(true));
    }, []);
    if (loadError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "admin-alert",
        role: "alert",
        children: "Unable to load the enquiry form. Please refresh and try again."
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 26,
        columnNumber: 25
    }, this);
    if (!questions || !sections) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card enquiry-form-loading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BookLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookLoader"], {
            text: "Loading enquiry form"
        }, void 0, false, {
            fileName: "[project]/components/enquiry/EnquiryForm.tsx",
            lineNumber: 27,
            columnNumber: 82
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 27,
        columnNumber: 39
    }, this);
    if (!sections.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        children: "The enquiry form is not available right now."
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 28,
        columnNumber: 32
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicQuestionForm, {
        questions: questions,
        sections: sections,
        initialClientIp: initialClientIp
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
function DynamicQuestionForm({ questions, sections: configuredSections, initialClientIp }) {
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>makeSections(configuredSections, questions), [
        configuredSections,
        questions
    ]);
    const [focusedField, setFocusedField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [savedDraft, setSavedDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draftChoiceVisible, setDraftChoiceVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const hydratedDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const submissionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('idle');
    const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$question$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildQuestionsSchema"])(questions), [
        questions
    ]);
    const defaultValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Object.fromEntries(questions.map((question)=>[
                question.field_key,
                ''
            ])), [
        questions
    ]);
    const { register, handleSubmit, watch, trigger, reset, formState: { errors, isSubmitting, isValid } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(schema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues
    });
    const values = watch();
    const currentSection = sections[currentStep];
    const requiredQuestions = questions.filter((question)=>question.required);
    const validRequiredCount = requiredQuestions.filter((question)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$question$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildQuestionSchema"])(question).safeParse(String(values[question.field_key] ?? '')).success).length;
    const progress = Math.round((validRequiredCount + (consent ? 1 : 0)) / Math.max(requiredQuestions.length + 1, 1) * 100);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const raw = localStorage.getItem(DRAFT_KEY);
            if (!raw) {
                hydratedDraft.current = true;
                setDraftChoiceVisible(false);
                return;
            }
            const draft = JSON.parse(raw);
            if (draft?.values && (Object.values(draft.values).some(Boolean) || draft.consent)) setSavedDraft(draft);
            else {
                localStorage.removeItem(DRAFT_KEY);
                hydratedDraft.current = true;
                setDraftChoiceVisible(false);
            }
        } catch  {
            hydratedDraft.current = true;
            setDraftChoiceVisible(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hydratedDraft.current) return;
        const hasData = Object.values(values).some((value)=>String(value ?? '').trim()) || consent;
        if (hasData) localStorage.setItem(DRAFT_KEY, JSON.stringify({
            values,
            consent
        }));
        else localStorage.removeItem(DRAFT_KEY);
    }, [
        values,
        consent
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hasData = Object.values(values).some((value)=>String(value ?? '').trim()) || consent;
        if (!hasData) return;
        const warn = (event)=>{
            if (submissionState.current !== 'idle') return;
            event.preventDefault();
            event.returnValue = '';
        };
        window.addEventListener('beforeunload', warn);
        return ()=>window.removeEventListener('beforeunload', warn);
    }, [
        values,
        consent
    ]);
    function resumeDraft() {
        if (!savedDraft) return;
        reset(savedDraft.values);
        setConsent(savedDraft.consent);
        hydratedDraft.current = true;
        setDraftChoiceVisible(false);
    }
    function startOver() {
        localStorage.removeItem(DRAFT_KEY);
        reset(defaultValues);
        setConsent(false);
        setSavedDraft(null);
        hydratedDraft.current = true;
        setDraftChoiceVisible(false);
        setCurrentStep(0);
    }
    function scrollToFirstInvalid(keys) {
        const key = keys.find((item)=>errors[item]) || keys.find((item)=>!String(values[item] ?? '').trim());
        if (!key) return;
        const field = document.getElementsByName(key)[0];
        field?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        field?.focus();
    }
    async function nextStep() {
        const keys = currentSection.questions.map((question)=>question.field_key);
        const valid = await trigger(keys);
        if (!valid) {
            window.setTimeout(()=>scrollToFirstInvalid(keys), 0);
            return;
        }
        setCurrentStep((step)=>Math.min(step + 1, sections.length - 1));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    function previousStep() {
        setCurrentStep((step)=>Math.max(step - 1, 0));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    function fieldProps(key) {
        const question = questions.find((item)=>item.field_key === key);
        const registration = register(key);
        return {
            ...registration,
            onFocus: ()=>setFocusedField(key),
            onChange: (event)=>{
                if (question.type === 'number') {
                    const sanitized = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                    event.target.value = question.number_format === 'integer' ? sanitized.replace('.', '') : sanitized;
                }
                void registration.onChange(event);
            },
            onBlur: (event)=>{
                registration.onBlur(event);
                setFocusedField(null);
            }
        };
    }
    function fieldClass(question) {
        const value = String(values[question.field_key] ?? '');
        const invalid = Boolean(errors[question.field_key]) || question.required && !value.trim();
        const valid = Boolean(value.trim()) && !invalid;
        return `question-control${focusedField === question.field_key ? ' is-focused' : invalid ? ' is-invalid' : valid ? ' is-valid' : ''}`;
    }
    async function onSubmit(answers) {
        submissionState.current = 'submitting';
        try {
            const response = await fetch('/api/enquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    answers,
                    ...answers,
                    terms_accepted: consent,
                    signatureDataUrl: ''
                })
            });
            const text = await response.text();
            const json = text ? JSON.parse(text) : {};
            if (!response.ok) throw new Error(json.error || json.message || `Submission failed with status ${response.status}.`);
            submissionState.current = 'completed';
            localStorage.removeItem(DRAFT_KEY);
            reset(defaultValues);
            setConsent(false);
            setSavedDraft(null);
            if (json.clientIp) sessionStorage.setItem('eduspray-submitted-ip', json.clientIp);
            if (json.enquiryNumber) sessionStorage.setItem('eduspray-enquiry-number', json.enquiryNumber);
            window.location.href = '/enquiry/success';
        } catch (error) {
            submissionState.current = 'idle';
            alert(error instanceof Error ? error.message : 'Unable to submit enquiry.');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            draftChoiceVisible && savedDraft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "draft-prompt",
                role: "dialog",
                "aria-labelledby": "draft-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "draft-title",
                                children: "Resume your enquiry?"
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 64,
                                columnNumber: 121
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We found saved information from an unfinished form on this device."
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 64,
                                columnNumber: 167
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 64,
                        columnNumber: 116
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "draft-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                onClick: startOver,
                                children: "Start over"
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 64,
                                columnNumber: 277
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: resumeDraft,
                                children: "Resume form"
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 64,
                                columnNumber: 344
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 64,
                        columnNumber: 246
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 64,
                columnNumber: 42
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "card grid enquiry-form",
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progress-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            "Step ",
                                            currentStep + 1,
                                            " of ",
                                            sections.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 66,
                                        columnNumber: 73
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            progress,
                                            "% complete"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 66,
                                        columnNumber: 133
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 66,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progress-track",
                                role: "progressbar",
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": progress,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: `${progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                    lineNumber: 66,
                                    columnNumber: 286
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 66,
                                columnNumber: 172
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progress-steps",
                                children: sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: index === currentStep ? 'is-current' : index < currentStep && section.questions.filter((question)=>question.required).every((question)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$question$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildQuestionSchema"])(question).safeParse(String(values[question.field_key] ?? '')).success) ? 'is-complete' : '',
                                        children: [
                                            index + 1,
                                            ". ",
                                            section.title
                                        ]
                                    }, section.key, true, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 66,
                                        columnNumber: 400
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 66,
                                columnNumber: 334
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 66,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-intro",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-eyebrow",
                                children: [
                                    "Section ",
                                    currentStep + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 67,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: currentSection.title
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 67,
                                columnNumber: 98
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: currentSection.description
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 67,
                                columnNumber: 129
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 67,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-grid",
                        children: [
                            currentStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "submission-date",
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 68,
                                        columnNumber: 79
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "field-description",
                                        children: "Generated when this enquiry is submitted."
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 68,
                                        columnNumber: 124
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "question-control",
                                        id: "submission-date",
                                        value: new Intl.DateTimeFormat('en-GB').format(new Date()),
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 68,
                                        columnNumber: 208
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 68,
                                columnNumber: 56
                            }, this),
                            currentSection.questions.map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `field${question.type === 'textarea' ? ' field-full' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: question.field_key,
                                            children: [
                                                question.label,
                                                question.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "required-mark",
                                                    "aria-hidden": "true",
                                                    children: " *"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 554
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                            lineNumber: 68,
                                            columnNumber: 480
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "field-description",
                                            children: question.placeholder || ''
                                        }, void 0, false, {
                                            fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                            lineNumber: 68,
                                            columnNumber: 623
                                        }, this),
                                        question.type === 'textarea' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: fieldClass(question),
                                            id: question.field_key,
                                            rows: 3,
                                            placeholder: question.placeholder ?? '',
                                            "aria-invalid": errors[question.field_key] ? 'true' : 'false',
                                            ...fieldProps(question.field_key)
                                        }, void 0, false, {
                                            fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                            lineNumber: 68,
                                            columnNumber: 726
                                        }, this) : question.type === 'select' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: fieldClass(question),
                                            id: question.field_key,
                                            defaultValue: "",
                                            "aria-invalid": errors[question.field_key] ? 'true' : 'false',
                                            ...fieldProps(question.field_key),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: question.placeholder || 'Select an option'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 1152
                                                }, this),
                                                question.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: option,
                                                        children: option
                                                    }, option, false, {
                                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 1264
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                            lineNumber: 68,
                                            columnNumber: 974
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: fieldClass(question),
                                            id: question.field_key,
                                            type: question.type === 'phone' ? 'tel' : question.type === 'number' ? 'text' : question.type,
                                            inputMode: question.type === 'phone' ? 'numeric' : question.type === 'number' ? question.number_format === 'decimal' ? 'decimal' : 'numeric' : undefined,
                                            step: question.type === 'number' ? question.number_format === 'decimal' ? 'any' : '1' : undefined,
                                            maxLength: question.max_length,
                                            placeholder: question.placeholder ?? '',
                                            "aria-invalid": errors[question.field_key] ? 'true' : 'false',
                                            ...fieldProps(question.field_key)
                                        }, void 0, false, {
                                            fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                            lineNumber: 68,
                                            columnNumber: 1331
                                        }, this),
                                        errors[question.field_key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "error",
                                            children: String(errors[question.field_key]?.message ?? '')
                                        }, void 0, false, {
                                            fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                            lineNumber: 68,
                                            columnNumber: 1947
                                        }, this)
                                    ]
                                }, question.id, true, {
                                    fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                    lineNumber: 68,
                                    columnNumber: 385
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 68,
                        columnNumber: 7
                    }, this),
                    currentStep === sections.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "consent-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: consent,
                                onChange: (event)=>setConsent(event.target.checked)
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 69,
                                columnNumber: 78
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "I agree to the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/terms",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Terms of Use"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 69,
                                        columnNumber: 196
                                    }, this),
                                    " and acknowledge the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/privacy",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Privacy/Data Collection Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 69,
                                        columnNumber: 283
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 69,
                                columnNumber: 175
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 69,
                        columnNumber: 47
                    }, this),
                    currentStep === sections.length - 1 && (!isValid || !consent) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-submit-hint",
                        role: "status",
                        children: !isValid ? 'Complete all required fields to submit.' : 'Accept the Terms of Use and Privacy/Data Collection Policy to submit.'
                    }, void 0, false, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 70,
                        columnNumber: 73
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "step-actions",
                        children: [
                            currentStep > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                onClick: previousStep,
                                disabled: isSubmitting,
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 71,
                                columnNumber: 57
                            }, this),
                            currentStep < sections.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: nextStep,
                                disabled: isSubmitting,
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 71,
                                columnNumber: 183
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "form-submit",
                                type: "submit",
                                disabled: !isValid || !consent || isSubmitting,
                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BookLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookLoader"], {
                                    inline: true,
                                    text: "Submitting..."
                                }, void 0, false, {
                                    fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                    lineNumber: 71,
                                    columnNumber: 374
                                }, this) : 'Submit Enquiry'
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 71,
                                columnNumber: 264
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 71,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-connection-status",
                        "aria-live": "polite",
                        children: [
                            "Network record: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: initialClientIp
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 72,
                                columnNumber: 80
                            }, this),
                            ". This portal collects IP addresses as described in the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/privacy",
                                children: "Privacy/Data Collection Policy"
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 72,
                                columnNumber: 170
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 72,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 65,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=_024dff2c._.js.map