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
    if (question.type === 'date') schema = schema.refine((value)=>value === '' || !Number.isNaN(Date.parse(value)) && /^\d{4}-\d{2}-\d{2}$/.test(value), 'Enter a valid date');
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
            options
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$question$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/enquiry/question-validation.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function EnquiryForm({ initialClientIp }) {
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/form-questions', {
            cache: 'no-store'
        }).then(async (response)=>{
            if (!response.ok) throw new Error();
            setQuestions((await response.json()).data ?? []);
        }).catch(()=>setLoadError(true));
    }, []);
    if (loadError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "admin-alert",
        role: "alert",
        children: "Unable to load the enquiry form. Please refresh and try again."
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 14,
        columnNumber: 25
    }, this);
    if (!questions) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        children: "Loading enquiry form..."
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 15,
        columnNumber: 26
    }, this);
    if (!questions.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        children: "The enquiry form is not available right now."
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 16,
        columnNumber: 33
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicQuestionForm, {
        questions: questions,
        initialClientIp: initialClientIp
    }, void 0, false, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
function DynamicQuestionForm({ questions, initialClientIp }) {
    const [focusedField, setFocusedField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$enquiry$2f$question$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildQuestionsSchema"])(questions);
    const { register, handleSubmit, watch, formState: { errors, isSubmitting, isValid } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(schema),
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: Object.fromEntries(questions.map((question)=>[
                question.field_key,
                ''
            ]))
    });
    const values = watch();
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
        try {
            const response = await fetch("/api/enquiries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    answers,
                    ...answers,
                    terms_accepted: consent,
                    signatureDataUrl: ""
                })
            });
            const text = await response.text();
            const json = text ? JSON.parse(text) : {};
            if (!response.ok) throw new Error(json.error || json.message || `Submission failed with status ${response.status}.`);
            if (json.clientIp) sessionStorage.setItem("eduspray-submitted-ip", json.clientIp);
            if (json.enquiryNumber) sessionStorage.setItem("eduspray-enquiry-number", json.enquiryNumber);
            window.location.href = "/enquiry/success";
        } catch (error) {
            alert(error instanceof Error ? error.message : "Unable to submit enquiry.");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "card grid",
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: questions.map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 39,
                                        columnNumber: 295
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 39,
                                columnNumber: 221
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "field-description",
                                children: question.placeholder || ''
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 39,
                                columnNumber: 364
                            }, this),
                            question.type === 'textarea' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: fieldClass(question),
                                id: question.field_key,
                                rows: 3,
                                placeholder: question.placeholder ?? '',
                                "aria-invalid": errors[question.field_key] ? "true" : "false",
                                ...fieldProps(question.field_key)
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 39,
                                columnNumber: 467
                            }, this) : question.type === 'select' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: fieldClass(question),
                                id: question.field_key,
                                defaultValue: "",
                                "aria-invalid": errors[question.field_key] ? "true" : "false",
                                ...fieldProps(question.field_key),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: question.placeholder || 'Select an option'
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 39,
                                        columnNumber: 893
                                    }, this),
                                    question.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: option,
                                            children: option
                                        }, option, false, {
                                            fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                            lineNumber: 39,
                                            columnNumber: 1005
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 39,
                                columnNumber: 715
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: fieldClass(question),
                                id: question.field_key,
                                type: question.type === 'phone' ? 'tel' : question.type === 'number' ? 'text' : question.type,
                                inputMode: question.type === 'phone' ? 'numeric' : question.type === 'number' ? question.number_format === 'decimal' ? 'decimal' : 'numeric' : undefined,
                                step: question.type === 'number' ? question.number_format === 'decimal' ? 'any' : '1' : undefined,
                                maxLength: question.max_length,
                                placeholder: question.placeholder ?? '',
                                "aria-invalid": errors[question.field_key] ? "true" : "false",
                                ...fieldProps(question.field_key)
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 39,
                                columnNumber: 1072
                            }, this),
                            errors[question.field_key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "error",
                                children: String(errors[question.field_key]?.message ?? '')
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 39,
                                columnNumber: 1688
                            }, this)
                        ]
                    }, question.id, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 39,
                        columnNumber: 126
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 39,
                columnNumber: 72
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "consent-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: consent,
                        onChange: (event)=>setConsent(event.target.checked)
                    }, void 0, false, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 39,
                        columnNumber: 1816
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
                                lineNumber: 39,
                                columnNumber: 1934
                            }, this),
                            " and acknowledge the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/privacy",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Privacy/Data Collection Policy"
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 39,
                                columnNumber: 2021
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 39,
                        columnNumber: 1913
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 39,
                columnNumber: 1785
            }, this),
            (!isValid || !consent) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-submit-hint",
                role: "status",
                children: !isValid ? 'Complete all required fields to submit.' : 'Accept the Terms of Use and Privacy/Data Collection Policy to submit.'
            }, void 0, false, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 39,
                columnNumber: 2150
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                className: "form-submit",
                type: "submit",
                disabled: !isValid || !consent || isSubmitting,
                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "submit-spinner",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                            lineNumber: 39,
                            columnNumber: 2441
                        }, this),
                        " Submitting..."
                    ]
                }, void 0, true) : "Submit Enquiry"
            }, void 0, false, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 39,
                columnNumber: 2329
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
                        lineNumber: 39,
                        columnNumber: 2614
                    }, this),
                    ". This portal collects IP addresses as described in the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/privacy",
                        children: "Privacy/Data Collection Policy"
                    }, void 0, false, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 39,
                        columnNumber: 2704
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 39,
                columnNumber: 2541
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=_9621d682._.js.map