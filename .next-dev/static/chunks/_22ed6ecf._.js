(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/enquiry/question-validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildQuestionSchema",
    ()=>buildQuestionSchema,
    "buildQuestionsSchema",
    ()=>buildQuestionsSchema,
    "normalizeQuestions",
    ()=>normalizeQuestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
function characterPattern(question) {
    let pattern = '';
    if (question.allow_alphabets) pattern += 'A-Za-z';
    if (question.allow_numbers) pattern += '0-9';
    if (question.allow_special_characters) pattern += '\\s\\p{P}';
    return pattern ? new RegExp("^[".concat(pattern, "]*$"), 'u') : null;
}
function isPercentage(question) {
    return question.type === 'number' && /percent(age)?/i.test("".concat(question.field_key, " ").concat(question.label));
}
function buildQuestionSchema(question) {
    let schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim();
    if (question.required) schema = schema.min(1, "".concat(question.label, " is required"));
    schema = schema.max(question.max_length, "".concat(question.label, " must be ").concat(question.max_length, " characters or fewer"));
    if (question.type === 'email') schema = schema.refine((value)=>value === '' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].email().safeParse(value).success, 'Enter a valid email');
    if (question.type === 'date') schema = schema.refine((value)=>value === '' || !Number.isNaN(Date.parse(value)) && /^\d{4}-\d{2}-\d{2}$/.test(value), 'Enter a valid date');
    if (question.type === 'number') schema = schema.refine((value)=>value === '' || /^\d+(\.\d+)?$/.test(value), 'Enter a valid number');
    if (question.type === 'phone') schema = schema.refine((value)=>value === '' || /^\d{10}$/.test(value), 'Enter a 10-digit phone number');
    if (question.type === 'select') schema = schema.refine((value)=>value === '' || question.options.includes(value), 'Select a valid option');
    const pattern = characterPattern(question);
    if (pattern) schema = schema.refine((value)=>value === '' || pattern.test(value), "".concat(question.label, " contains unsupported characters"));
    if (isPercentage(question)) schema = schema.refine((value)=>value === '' || Number(value) >= 0 && Number(value) <= 100, 'Enter a percentage from 0 to 100');
    return schema;
}
function buildQuestionsSchema(questions) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object(Object.fromEntries(questions.map((question)=>[
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button(param) {
    let { children, variant = 'primary', href, className = '', target, rel, type = 'button', ...props } = param;
    const classes = "ui-button ui-button-".concat(variant, " ").concat(className).trim();
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/enquiry/EnquiryForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnquiryForm",
    ()=>EnquiryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$question$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/enquiry/question-validation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const requiredFields = new Set([
    "course",
    "name",
    "dob",
    "gender",
    "motherName",
    "fatherName",
    "address",
    "mobile1",
    "email",
    "class10Percent",
    "class12Percent"
]);
function EnquiryForm() {
    _s();
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnquiryForm.useEffect": ()=>{
            fetch('/api/form-questions', {
                cache: 'no-store'
            }).then({
                "EnquiryForm.useEffect": async (response)=>{
                    if (!response.ok) throw new Error();
                    var _data;
                    setQuestions((_data = (await response.json()).data) !== null && _data !== void 0 ? _data : []);
                }
            }["EnquiryForm.useEffect"]).catch({
                "EnquiryForm.useEffect": ()=>setLoadError(true)
            }["EnquiryForm.useEffect"]);
        }
    }["EnquiryForm.useEffect"], []);
    if (loadError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "admin-alert",
        role: "alert",
        children: "Unable to load the enquiry form. Please refresh and try again."
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 30,
        columnNumber: 25
    }, this);
    if (!questions) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        children: "Loading enquiry form..."
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 31,
        columnNumber: 26
    }, this);
    if (!questions.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        children: "The enquiry form is not available right now."
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 32,
        columnNumber: 33
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicQuestionForm, {
        questions: questions
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
_s(EnquiryForm, "5oX452046ACnGeoBKIcvKsvEVJY=");
_c = EnquiryForm;
function DynamicQuestionForm(param) {
    let { questions } = param;
    _s1();
    const [clientIp, setClientIp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Detecting...");
    const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$question$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildQuestionsSchema"])(questions);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(schema),
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: Object.fromEntries(questions.map({
            "DynamicQuestionForm.useForm": (question)=>[
                    question.field_key,
                    ''
                ]
        }["DynamicQuestionForm.useForm"]))
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DynamicQuestionForm.useEffect": ()=>{
            fetch("/api/client-ip", {
                cache: "no-store"
            }).then({
                "DynamicQuestionForm.useEffect": (response)=>response.json()
            }["DynamicQuestionForm.useEffect"]).then({
                "DynamicQuestionForm.useEffect": (result)=>setClientIp(result.ip || "Unavailable")
            }["DynamicQuestionForm.useEffect"]).catch({
                "DynamicQuestionForm.useEffect": ()=>setClientIp("Unavailable")
            }["DynamicQuestionForm.useEffect"]);
        }
    }["DynamicQuestionForm.useEffect"], []);
    async function onSubmit(answers) {
        try {
            const response = await fetch("/api/enquiries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    answers,
                    ...answers,
                    signatureDataUrl: ""
                })
            });
            const text = await response.text();
            const json = text ? JSON.parse(text) : {};
            if (!response.ok) throw new Error(json.error || json.message || "Submission failed with status ".concat(response.status, "."));
            if (json.clientIp) sessionStorage.setItem("eduspray-submitted-ip", json.clientIp);
            window.location.href = "/enquiry/success";
        } catch (error) {
            alert(error instanceof Error ? error.message : "Unable to submit enquiry.");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "card grid",
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: questions.map((question)=>{
                    var _errors_question_field_key;
                    var _question_placeholder, _question_placeholder1, _errors_question_field_key_message;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "field".concat(question.type === 'textarea' ? ' field-full' : ''),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: question.field_key,
                                children: [
                                    question.label,
                                    question.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "required-mark",
                                        "aria-hidden": "true",
                                        children: " *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 51,
                                        columnNumber: 295
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 51,
                                columnNumber: 221
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "field-description",
                                children: question.placeholder || ''
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 51,
                                columnNumber: 364
                            }, this),
                            question.type === 'textarea' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: question.field_key,
                                rows: 3,
                                placeholder: (_question_placeholder = question.placeholder) !== null && _question_placeholder !== void 0 ? _question_placeholder : '',
                                "aria-invalid": errors[question.field_key] ? "true" : "false",
                                ...register(question.field_key)
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 51,
                                columnNumber: 467
                            }, this) : question.type === 'select' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: question.field_key,
                                defaultValue: "",
                                "aria-invalid": errors[question.field_key] ? "true" : "false",
                                ...register(question.field_key),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: question.placeholder || 'Select an option'
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 51,
                                        columnNumber: 823
                                    }, this),
                                    question.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: option,
                                            children: option
                                        }, option, false, {
                                            fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                            lineNumber: 51,
                                            columnNumber: 925
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 51,
                                columnNumber: 680
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: question.field_key,
                                type: question.type === 'phone' ? 'tel' : question.type,
                                inputMode: question.type === 'phone' || question.type === 'number' ? 'numeric' : undefined,
                                maxLength: question.max_length,
                                placeholder: (_question_placeholder1 = question.placeholder) !== null && _question_placeholder1 !== void 0 ? _question_placeholder1 : '',
                                "aria-invalid": errors[question.field_key] ? "true" : "false",
                                ...register(question.field_key)
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 51,
                                columnNumber: 992
                            }, this),
                            errors[question.field_key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "error",
                                children: String((_errors_question_field_key_message = (_errors_question_field_key = errors[question.field_key]) === null || _errors_question_field_key === void 0 ? void 0 : _errors_question_field_key.message) !== null && _errors_question_field_key_message !== void 0 ? _errors_question_field_key_message : '')
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 51,
                                columnNumber: 1374
                            }, this)
                        ]
                    }, question.id, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 51,
                        columnNumber: 126
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 51,
                columnNumber: 72
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "form-submit",
                type: "submit",
                disabled: isSubmitting,
                children: isSubmitting ? "Submitting..." : "Submit Enquiry"
            }, void 0, false, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 51,
                columnNumber: 1471
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-connection-status",
                "aria-live": "polite",
                children: [
                    "Connection detected: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: clientIp
                    }, void 0, false, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 51,
                        columnNumber: 1679
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 51,
                columnNumber: 1601
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
_s1(DynamicQuestionForm, "GID/59SFYQLlpZbAZ9injRrM/08=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c1 = DynamicQuestionForm;
function EnquiryForm() {
    _s2();
    const [clientIp, setClientIp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Detecting...");
    const { register, handleSubmit, formState: { errors, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(enquirySchema),
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: {
            gender: undefined
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnquiryForm.useEffect": ()=>{
            let active = true;
            fetch("/api/client-ip", {
                cache: "no-store"
            }).then({
                "EnquiryForm.useEffect": (response)=>response.json()
            }["EnquiryForm.useEffect"]).then({
                "EnquiryForm.useEffect": (result)=>{
                    if (active) setClientIp(result.ip || "Unavailable");
                }
            }["EnquiryForm.useEffect"]).catch({
                "EnquiryForm.useEffect": ()=>{
                    if (active) setClientIp("Unavailable");
                }
            }["EnquiryForm.useEffect"]);
            return ({
                "EnquiryForm.useEffect": ()=>{
                    active = false;
                }
            })["EnquiryForm.useEffect"];
        }
    }["EnquiryForm.useEffect"], []);
    const mobileRegister = (name)=>{
        const registration = register(name);
        return {
            ...registration,
            onChange: (event)=>{
                event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10);
                registration.onChange(event);
            }
        };
    };
    const onSubmit = async (data)=>{
        try {
            const res = await fetch("/api/enquiries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    signatureDataUrl: ""
                })
            });
            // -------------------------------------------------------
            // Read response safely.
            // Prevents "Unexpected end of JSON input"
            // -------------------------------------------------------
            const text = await res.text();
            let json = {};
            try {
                json = text ? JSON.parse(text) : {};
            } catch (e) {
                console.error("Non-JSON API response:", text);
                throw new Error("Server returned an invalid response (".concat(res.status, "). Check the terminal running Next.js."));
            }
            if (!res.ok) {
                throw new Error(json.error || json.message || "Submission failed with status ".concat(res.status, "."));
            }
            // -------------------------------------------------------
            // Success
            // -------------------------------------------------------
            if (json.clientIp) {
                sessionStorage.setItem("eduspray-submitted-ip", json.clientIp);
            }
            window.location.href = "/enquiry/success";
        } catch (error) {
            console.error("SUBMISSION ERROR:", error);
            alert(error instanceof Error ? error.message : "Unable to submit enquiry.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "card grid",
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: fields.map((param)=>{
                    let { name, label, description, placeholder, type, fullWidth } = param;
                    var _errors_name;
                    var _errors_name_message;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "field".concat(fullWidth ? " field-full" : ""),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: String(name),
                                children: [
                                    label,
                                    requiredFields.has(name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "required-mark",
                                        "aria-hidden": "true",
                                        children: " *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 167,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "field-description",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            name === "gender" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "gender",
                                "aria-invalid": errors[name] ? "true" : "false",
                                defaultValue: "",
                                ...register(name),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        disabled: true,
                                        children: placeholder
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "M",
                                        children: "Male"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "F",
                                        children: "Female"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Other",
                                        children: "Other"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this) : name === "address" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "address",
                                rows: 3,
                                placeholder: placeholder,
                                "aria-invalid": errors[name] ? "true" : "false",
                                ...register(name)
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: String(name),
                                type: type !== null && type !== void 0 ? type : "text",
                                inputMode: name === "mobile1" || name === "mobile2" ? "numeric" : undefined,
                                maxLength: name === "mobile1" || name === "mobile2" ? 10 : undefined,
                                placeholder: placeholder,
                                "aria-invalid": errors[name] ? "true" : "false",
                                ...name === "mobile1" || name === "mobile2" ? mobileRegister(name) : register(name)
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this),
                            errors[name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "error",
                                children: String((_errors_name_message = (_errors_name = errors[name]) === null || _errors_name === void 0 ? void 0 : _errors_name.message) !== null && _errors_name_message !== void 0 ? _errors_name_message : "")
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this)
                        ]
                    }, name, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "form-submit",
                type: "submit",
                disabled: isSubmitting,
                children: isSubmitting ? "Submitting..." : "Submit Enquiry"
            }, void 0, false, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-connection-status",
                "aria-live": "polite",
                children: [
                    "Connection detected: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: clientIp
                    }, void 0, false, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 205,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s2(EnquiryForm, "+9wJbx8Qg6hq4fDP30gy590adtg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c2 = EnquiryForm;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "EnquiryForm");
__turbopack_context__.k.register(_c1, "DynamicQuestionForm");
__turbopack_context__.k.register(_c2, "EnquiryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_22ed6ecf._.js.map