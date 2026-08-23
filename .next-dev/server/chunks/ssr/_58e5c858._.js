module.exports = [
"[project]/schemas/enquiry.schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enquirySchema",
    ()=>enquirySchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const enquirySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    course: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Course is required'),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Name is required'),
    dob: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'DOB is required'),
    gender: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'M',
        'F',
        'Other',
        ''
    ]).default(''),
    motherName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Mother name is required'),
    fatherName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Father name is required'),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Address is required'),
    mobile1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{10}$/, 'Enter a 10-digit mobile number'),
    mobile2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((value)=>value === '' || /^\d{10}$/.test(value), 'Enter a 10-digit mobile number or leave blank'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Enter a valid email').or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('')),
    class10Percent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Class 10 marks are required'),
    class12Stream: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    class12Percent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Class 12 marks are required'),
    physicsMarks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    chemistryMarks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    mathsMarks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    biologyMarks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    csMarks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    schoolNameWithState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    neetUgScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    neetPgScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    cuetScoreRank: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    cetScoreRank: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    clatScoreRank: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    catScoreRank: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    jeeMainsCrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    percentile: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    pcmPercent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    pcbPercent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    collegeUniversityName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    courses: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    marks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    reference: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    signatureDataUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('')
});
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$schemas$2f$enquiry$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/schemas/enquiry.schema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
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
const fields = [
    {
        name: "course",
        label: "Which course are you interested in?",
        description: "Tell us the programme you would like to enquire about.",
        placeholder: "e.g. MBBS, BDS, B.Tech"
    },
    {
        name: "name",
        label: "What is your full name?",
        description: "Enter your name as it appears on your official documents.",
        placeholder: "e.g. Ananya Sharma"
    },
    {
        name: "dob",
        label: "What is your date of birth?",
        description: "Choose your date from the calendar.",
        placeholder: "Select your date of birth",
        type: "date"
    },
    {
        name: "gender",
        label: "How should we record your gender?",
        description: "Select the option that applies to you.",
        placeholder: "Select gender"
    },
    {
        name: "motherName",
        label: "What is your mother's name?",
        description: "Please enter full name.",
        placeholder: "e.g. Sunita Sharma"
    },
    {
        name: "fatherName",
        label: "What is your father's name?",
        description: "Please enter full name.",
        placeholder: "e.g. Rajesh Sharma"
    },
    {
        name: "address",
        label: "What is your current address?",
        description: "Include your city, state, and PIN code.",
        placeholder: "House / street, city, state, PIN code",
        fullWidth: true
    },
    {
        name: "mobile1",
        label: "What is your primary mobile number?",
        description: "Use a number where our counsellor can reach you.",
        placeholder: "e.g. 9876543210",
        type: "tel"
    },
    {
        name: "mobile2",
        label: "What is an alternate mobile number?",
        description: "This is optional. Add another reachable number if available.",
        placeholder: "e.g. 9876543210",
        type: "tel"
    },
    {
        name: "email",
        label: "What is your email address?",
        description: "We will use this to contact you about your enquiry.",
        placeholder: "e.g. name@example.com",
        type: "email"
    },
    {
        name: "class10Percent",
        label: "What was your Class 10 percentage?",
        description: "Enter the percentage exactly as shown on your marksheet.",
        placeholder: "e.g. 92.5%"
    },
    {
        name: "class12Stream",
        label: "Which stream did you take in Class 12?",
        description: "Mention your academic stream.",
        placeholder: "e.g. PCB, PCM, Commerce"
    },
    {
        name: "class12Percent",
        label: "What was your aggregate Class 12 percentage?",
        description: "Enter your overall Class 12 percentage.",
        placeholder: "e.g. 88.4%"
    },
    {
        name: "physicsMarks",
        label: "What are your Physics marks?",
        description: "Add marks or percentage, including the maximum if useful.",
        placeholder: "e.g. 88"
    },
    {
        name: "chemistryMarks",
        label: "What are your Chemistry marks?",
        description: "Add marks or percentage, including the maximum if useful.",
        placeholder: "e.g. 91"
    },
    {
        name: "mathsMarks",
        label: "What are your Mathematics marks?",
        description: "Add marks or percentage, including the maximum if useful.",
        placeholder: "e.g. 85"
    },
    {
        name: "biologyMarks",
        label: "What are your Biology marks?",
        description: "Add marks or percentage, including the maximum if useful.",
        placeholder: "e.g. 94"
    },
    {
        name: "csMarks",
        label: "What are your Computer Science marks?",
        description: "Leave this blank if it does not apply.",
        placeholder: "e.g. 90"
    },
    {
        name: "schoolNameWithState",
        label: "What is your school name and state?",
        description: "Include the state so we can identify your institution correctly.",
        placeholder: "e.g. Delhi Public School, Delhi",
        fullWidth: true
    },
    {
        name: "neetUgScore",
        label: "What is your NEET UG score?",
        description: "Enter your score, rank, or write 'Not applicable'.",
        placeholder: "e.g. 650 or AIR 12000"
    },
    {
        name: "neetPgScore",
        label: "What is your NEET PG score?",
        description: "Enter your score, rank, or write 'Not applicable'.",
        placeholder: "e.g. 540 or AIR 8000"
    },
    {
        name: "category",
        label: "What is your category?",
        description: "Use the category shown on your application documents.",
        placeholder: "e.g. General, OBC, SC, ST"
    },
    {
        name: "cuetScoreRank",
        label: "What is your CUET score or rank?",
        description: "Add your score or rank if you have one.",
        placeholder: "e.g. 780 or Rank 1200"
    },
    {
        name: "cetScoreRank",
        label: "What is your UG / PG CET score or rank?",
        description: "Add your score or rank if applicable.",
        placeholder: "e.g. 96 percentile"
    },
    {
        name: "clatScoreRank",
        label: "What is your CLAT score or rank?",
        description: "Add your score or rank if applicable.",
        placeholder: "e.g. 82 or Rank 450"
    },
    {
        name: "catScoreRank",
        label: "What is your CAT score or percentile?",
        description: "Add your score, percentile, or rank if applicable.",
        placeholder: "e.g. 98.2 percentile"
    },
    {
        name: "jeeMainsCrl",
        label: "What is your JEE Mains CRL?",
        description: "Enter your Common Rank List number if applicable.",
        placeholder: "e.g. 12500"
    },
    {
        name: "percentile",
        label: "What is your overall percentile?",
        description: "Add the relevant entrance-exam percentile.",
        placeholder: "e.g. 97.4 percentile"
    },
    {
        name: "pcmPercent",
        label: "What is your PCM percentage?",
        description: "Enter your Physics, Chemistry, and Mathematics percentage.",
        placeholder: "e.g. 86.7%"
    },
    {
        name: "pcbPercent",
        label: "What is your PCB percentage?",
        description: "Enter your Physics, Chemistry, and Biology percentage.",
        placeholder: "e.g. 89.2%"
    },
    {
        name: "collegeUniversityName",
        label: "What is your college or university name?",
        description: "Enter your current or most recent institution.",
        placeholder: "e.g. Delhi University",
        fullWidth: true
    },
    {
        name: "courses",
        label: "Which other courses interest you?",
        description: "List any additional programmes you would like to discuss.",
        placeholder: "e.g. BDS, BAMS, Biotechnology",
        fullWidth: true
    },
    {
        name: "marks",
        label: "Is there any other marks information to share?",
        description: "Add relevant marks not covered above, or leave blank.",
        placeholder: "e.g. Graduation: 72%",
        fullWidth: true
    },
    {
        name: "reference",
        label: "How did you hear about us?",
        description: "Tell us how you found Eduspray.",
        placeholder: "e.g. Google, Instagram, Friend"
    }
];
function EnquiryForm() {
    const [clientIp, setClientIp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Detecting...");
    const { register, handleSubmit, formState: { errors, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$schemas$2f$enquiry$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enquirySchema"]),
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: {
            gender: undefined
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        fetch("/api/client-ip", {
            cache: "no-store"
        }).then((response)=>response.json()).then((result)=>{
            if (active) setClientIp(result.ip || "Unavailable");
        }).catch(()=>{
            if (active) setClientIp("Unavailable");
        });
        return ()=>{
            active = false;
        };
    }, []);
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
            } catch  {
                console.error("Non-JSON API response:", text);
                throw new Error(`Server returned an invalid response (${res.status}). Check the terminal running Next.js.`);
            }
            if (!res.ok) {
                throw new Error(json.error || json.message || `Submission failed with status ${res.status}.`);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "card grid",
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: fields.map(({ name, label, description, placeholder, type, fullWidth })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `field${fullWidth ? " field-full" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: String(name),
                                children: [
                                    label,
                                    requiredFields.has(name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "required-mark",
                                        "aria-hidden": "true",
                                        children: " *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 176,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "field-description",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            name === "gender" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "gender",
                                "aria-invalid": errors[name] ? "true" : "false",
                                defaultValue: "",
                                ...register(name),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        disabled: true,
                                        children: placeholder
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "M",
                                        children: "Male"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "F",
                                        children: "Female"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Other",
                                        children: "Other"
                                    }, void 0, false, {
                                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this) : name === "address" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "address",
                                rows: 3,
                                placeholder: placeholder,
                                "aria-invalid": errors[name] ? "true" : "false",
                                ...register(name)
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: String(name),
                                type: type ?? "text",
                                inputMode: name === "mobile1" || name === "mobile2" ? "numeric" : undefined,
                                maxLength: name === "mobile1" || name === "mobile2" ? 10 : undefined,
                                placeholder: placeholder,
                                "aria-invalid": errors[name] ? "true" : "false",
                                ...name === "mobile1" || name === "mobile2" ? mobileRegister(name) : register(name)
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 190,
                                columnNumber: 15
                            }, this),
                            errors[name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "error",
                                children: String(errors[name]?.message ?? "")
                            }, void 0, false, {
                                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this)
                        ]
                    }, name, true, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                className: "form-submit",
                type: "submit",
                disabled: isSubmitting,
                children: isSubmitting ? "Submitting..." : "Submit Enquiry"
            }, void 0, false, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-connection-status",
                "aria-live": "polite",
                children: [
                    "Connection detected: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: clientIp
                    }, void 0, false, {
                        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                        lineNumber: 214,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/enquiry/EnquiryForm.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/enquiry/EnquiryForm.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_58e5c858._.js.map