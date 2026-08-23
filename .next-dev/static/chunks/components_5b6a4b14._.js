(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/components/admin/EnquiryDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnquiryDetail",
    ()=>EnquiryDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const hidden = new Set([
    'id',
    'pdf_storage_path',
    'signatureDataUrl'
]);
const groups = [
    [
        'Enquiry Information',
        [
            'enquiry_number',
            'course',
            'created_at',
            'status'
        ]
    ],
    [
        'Personal Details',
        [
            'name',
            'dob',
            'gender',
            'motherName',
            'fatherName'
        ]
    ],
    [
        'Contact Details',
        [
            'address',
            'mobile1',
            'mobile2',
            'email'
        ]
    ],
    [
        'Academic Details',
        [
            'class10Percent',
            'class12Stream',
            'class12Percent',
            'physicsMarks',
            'chemistryMarks',
            'mathsMarks',
            'biologyMarks',
            'csMarks',
            'schoolNameWithState',
            'collegeUniversityName'
        ]
    ],
    [
        'Entrance Examination Details',
        [
            'neetUgScore',
            'neetPgScore',
            'cuetScoreRank',
            'cetScoreRank',
            'clatScoreRank',
            'catScoreRank',
            'jeeMainsCrl',
            'percentile',
            'pcmPercent',
            'pcbPercent'
        ]
    ],
    [
        'Category / Reference',
        [
            'category',
            'reference'
        ]
    ],
    [
        'Other Details',
        [
            'courses',
            'marks'
        ]
    ]
];
const labels = {
    enquiry_number: 'Enquiry ID',
    created_at: 'Submitted At',
    status: 'Status',
    motherName: "Mother's Name",
    fatherName: "Father's Name",
    class10Percent: 'Class 10 Percentage',
    class12Stream: 'Class 12 Stream',
    class12Percent: 'Class 12 Percentage',
    schoolNameWithState: 'School Name and State',
    collegeUniversityName: 'College / University Name',
    neetUgScore: 'NEET UG Score',
    neetPgScore: 'NEET PG Score',
    cuetScoreRank: 'CUET Score / Rank',
    cetScoreRank: 'UG / PG CET Score / Rank',
    clatScoreRank: 'CLAT Score / Rank',
    catScoreRank: 'CAT Score / Percentile',
    jeeMainsCrl: 'JEE Mains CRL',
    pcmPercent: 'PCM Percentage',
    pcbPercent: 'PCB Percentage',
    courses: 'Other Courses',
    marks: 'Other Marks Information',
    reference: 'How did you hear about us?'
};
function EnquiryDetail(param) {
    let { id } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteOpen, setDeleteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteText, setDeleteText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnquiryDetail.useEffect": ()=>{
            fetch("/api/admin/enquiries/".concat(id)).then({
                "EnquiryDetail.useEffect": async (response)=>{
                    if (response.status === 401) router.replace('/admin/login');
                    else if (response.ok) setData((await response.json()).data);
                }
            }["EnquiryDetail.useEffect"]);
        }
    }["EnquiryDetail.useEffect"], [
        id,
        router
    ]);
    async function deleteEnquiry() {
        if (deleteText !== 'DELETE') return;
        const response = await fetch("/api/admin/enquiries/".concat(id), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                confirmation: 'DELETE'
            })
        });
        if (!response.ok) {
            var _error;
            setNotice((_error = (await response.json()).error) !== null && _error !== void 0 ? _error : 'Unable to delete enquiry.');
            return;
        }
        setDeleteOpen(false);
        router.replace('/admin/enquiries?deleted=1');
    }
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "admin-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading-state",
                children: "Loading enquiry details..."
            }, void 0, false, {
                fileName: "[project]/components/admin/EnquiryDetail.tsx",
                lineNumber: 24,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/admin/EnquiryDetail.tsx",
            lineNumber: 24,
            columnNumber: 51
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/admin/EnquiryDetail.tsx",
        lineNumber: 24,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "admin-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "admin-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "back-link",
                                    href: "/admin/enquiries",
                                    children: "← All enquiries"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                    lineNumber: 25,
                                    columnNumber: 105
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: data.enquiry_number
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                    lineNumber: 25,
                                    columnNumber: 179
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "admin-subtitle",
                                    children: "Review the submitted information and generated form."
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                    lineNumber: 25,
                                    columnNumber: 209
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/EnquiryDetail.tsx",
                            lineNumber: 25,
                            columnNumber: 100
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "admin-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "secondary",
                                    href: "/api/admin/enquiries/".concat(id, "/download"),
                                    children: "Download PDF"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                    lineNumber: 25,
                                    columnNumber: 332
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    href: "/api/admin/enquiries/".concat(id, "/pdf"),
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Print PDF"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                    lineNumber: 25,
                                    columnNumber: 426
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "danger-button",
                                    onClick: ()=>{
                                        setDeleteOpen(true);
                                        setDeleteText('');
                                    },
                                    children: "Delete enquiry"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                    lineNumber: 25,
                                    columnNumber: 525
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/EnquiryDetail.tsx",
                            lineNumber: 25,
                            columnNumber: 301
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                    lineNumber: 25,
                    columnNumber: 67
                }, this),
                notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "admin-alert admin-alert-error",
                    role: "alert",
                    children: notice
                }, void 0, false, {
                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                    lineNumber: 25,
                    columnNumber: 668
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "detail-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "detail-sections",
                            children: groups.map((param)=>{
                                let [heading, keys] = param;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "detail-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "detail-card-heading",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "section-eyebrow",
                                                    children: "Submission record"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 920
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: heading
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 978
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                            lineNumber: 25,
                                            columnNumber: 883
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                            children: keys.filter((key)=>!hidden.has(key) && data[key] !== undefined).map((key)=>{
                                                var _labels_key, _data_key;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "data-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            children: (_labels_key = labels[key]) !== null && _labels_key !== void 0 ? _labels_key : key
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                                            lineNumber: 25,
                                                            columnNumber: 1118
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            children: key === 'created_at' ? new Date((_data_key = data[key]) !== null && _data_key !== void 0 ? _data_key : '').toLocaleString() : data[key] || 'Not provided'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                                            lineNumber: 25,
                                                            columnNumber: 1147
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 1082
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                            lineNumber: 25,
                                            columnNumber: 1002
                                        }, this)
                                    ]
                                }, heading, true, {
                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                    lineNumber: 25,
                                    columnNumber: 836
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/admin/EnquiryDetail.tsx",
                            lineNumber: 25,
                            columnNumber: 770
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "pdf-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pdf-panel-heading",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "section-eyebrow",
                                            children: "Document preview"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                            lineNumber: 25,
                                            columnNumber: 1350
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Generated PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                            lineNumber: 25,
                                            columnNumber: 1407
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                    lineNumber: 25,
                                    columnNumber: 1315
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    title: "Generated enquiry PDF",
                                    src: "/api/admin/enquiries/".concat(id, "/pdf")
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                    lineNumber: 25,
                                    columnNumber: 1435
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/EnquiryDetail.tsx",
                            lineNumber: 25,
                            columnNumber: 1284
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                    lineNumber: 25,
                    columnNumber: 739
                }, this),
                deleteOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-backdrop",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "question-dialog",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "delete-enquiry-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "delete-enquiry-title",
                                children: "Delete enquiry?"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                lineNumber: 25,
                                columnNumber: 1685
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "This enquiry and its generated PDF will be permanently deleted. Type ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "DELETE"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                        lineNumber: 25,
                                        columnNumber: 1807
                                    }, this),
                                    " to confirm."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                lineNumber: 25,
                                columnNumber: 1735
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                autoFocus: true,
                                value: deleteText,
                                onChange: (event)=>setDeleteText(event.target.value),
                                placeholder: "Type DELETE",
                                "aria-label": "Type DELETE to confirm"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                lineNumber: 25,
                                columnNumber: 1846
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dialog-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDeleteOpen(false),
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                        lineNumber: 25,
                                        columnNumber: 2032
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "danger-button",
                                        disabled: deleteText !== 'DELETE',
                                        onClick: deleteEnquiry,
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                        lineNumber: 25,
                                        columnNumber: 2092
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/EnquiryDetail.tsx",
                                lineNumber: 25,
                                columnNumber: 2000
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/EnquiryDetail.tsx",
                        lineNumber: 25,
                        columnNumber: 1577
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/admin/EnquiryDetail.tsx",
                    lineNumber: 25,
                    columnNumber: 1545
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/EnquiryDetail.tsx",
            lineNumber: 25,
            columnNumber: 40
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/admin/EnquiryDetail.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
_s(EnquiryDetail, "82NobAVSp7vnCCZC44wepqnwHq8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EnquiryDetail;
var _c;
__turbopack_context__.k.register(_c, "EnquiryDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_5b6a4b14._.js.map