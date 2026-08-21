(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/config/pdf-field-coordinates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "manualPdfFieldCoordinates",
    ()=>manualPdfFieldCoordinates,
    "manualPdfMappings",
    ()=>manualPdfMappings
]);
const manualPdfFieldCoordinates = [
    [
        'date',
        'Submission Date',
        150,
        750,
        100,
        16,
        10,
        false
    ],
    [
        'course',
        'Course',
        350,
        850,
        180,
        16,
        10,
        false
    ],
    [
        'name',
        'Full Name',
        60,
        600.1700185,
        220,
        16,
        10,
        false
    ],
    [
        'dob',
        'Date of Birth',
        415,
        682.1700185,
        120,
        16,
        10,
        false
    ],
    [
        'gender',
        'Gender',
        500,
        657.1700185,
        70,
        16,
        10,
        false
    ],
    [
        'motherName',
        "Mother's Name",
        115,
        630.1700185,
        180,
        16,
        10,
        false
    ],
    [
        'fatherName',
        "Father's Name",
        115,
        607.1700185,
        180,
        16,
        10,
        false
    ],
    [
        'address',
        'Address',
        80,
        572.1700185,
        420,
        50,
        10,
        true
    ],
    [
        'mobile1',
        'Primary Mobile',
        150,
        527.1700185,
        150,
        16,
        10,
        false
    ],
    [
        'mobile2',
        'Alternate Mobile',
        350,
        527.1700185,
        150,
        16,
        10,
        false
    ],
    [
        'email',
        'Email',
        90,
        497.1700185,
        320,
        16,
        10,
        false
    ],
    [
        'class10Percent',
        'Class 10 Percentage',
        150,
        462.1700185,
        100,
        16,
        10,
        false
    ],
    [
        'class12Stream',
        'Class 12 Stream',
        250,
        437.1700185,
        120,
        16,
        10,
        false
    ],
    [
        'class12Percent',
        'Class 12 Percentage',
        420,
        437.1700185,
        100,
        16,
        10,
        false
    ],
    [
        'physicsMarks',
        'Physics Marks',
        95,
        407.1700185,
        100,
        16,
        9,
        false
    ],
    [
        'chemistryMarks',
        'Chemistry Marks',
        245,
        407.1700185,
        100,
        16,
        9,
        false
    ],
    [
        'mathsMarks',
        'Mathematics Marks',
        370,
        407.1700185,
        100,
        16,
        9,
        false
    ],
    [
        'biologyMarks',
        'Biology Marks',
        470,
        407.1700185,
        100,
        16,
        9,
        false
    ],
    [
        'csMarks',
        'Computer Science Marks',
        520,
        407.1700185,
        65,
        16,
        9,
        false
    ],
    [
        'schoolNameWithState',
        'School Name and State',
        160,
        377.1700185,
        300,
        16,
        9,
        false
    ],
    [
        'neetUgScore',
        'NEET UG Score',
        130,
        337.1700185,
        150,
        16,
        9,
        false
    ],
    [
        'neetPgScore',
        'NEET PG Score',
        395,
        337.1700185,
        150,
        16,
        9,
        false
    ],
    [
        'category',
        'Admission Category',
        150,
        312.1700185,
        150,
        16,
        9,
        false
    ],
    [
        'cuetScoreRank',
        'CUET Score / Rank',
        150,
        287.1700185,
        150,
        16,
        9,
        false
    ],
    [
        'cetScoreRank',
        'UG / PG CET Score / Rank',
        390,
        287.1700185,
        150,
        16,
        9,
        false
    ],
    [
        'clatScoreRank',
        'CLAT Score / Rank',
        150,
        262.1700185,
        150,
        16,
        9,
        false
    ],
    [
        'reference',
        'How did you hear about us?',
        120,
        212.1700185,
        250,
        16,
        9,
        false
    ],
    [
        'catScoreRank',
        'CAT Score / Percentile',
        420,
        152.1700185,
        150,
        16,
        9,
        false
    ],
    [
        'jeeMainsCrl',
        'JEE Mains CRL',
        140,
        122.1700185,
        150,
        16,
        9,
        false
    ],
    [
        'percentile',
        'Overall Percentile',
        410,
        122.1700185,
        150,
        16,
        9,
        false
    ],
    [
        'pcmPercent',
        'PCM Percentage',
        120,
        92.1700185,
        150,
        16,
        9,
        false
    ],
    [
        'pcbPercent',
        'PCB Percentage',
        300,
        92.1700185,
        150,
        16,
        9,
        false
    ],
    [
        'collegeUniversityName',
        'College / University',
        170,
        67.1700185,
        300,
        16,
        9,
        false
    ],
    [
        'courses',
        'Other Courses',
        120,
        37.1700185,
        200,
        16,
        9,
        false
    ],
    [
        'marks',
        'Other Marks Information',
        340,
        37.1700185,
        200,
        16,
        9,
        false
    ],
    [
        'enquiryNumber',
        'Enquiry ID',
        430,
        12.1700185,
        140,
        16,
        9,
        false
    ]
];
const manualPdfMappings = manualPdfFieldCoordinates.map((param)=>{
    let [field_key, field_label, x, y, width, height, font_size, multiline] = param;
    return {
        template_id: 'entry-form',
        field_key,
        field_label,
        page_number: 1,
        x,
        y,
        width,
        height,
        font_size,
        font_family: 'Helvetica',
        alignment: 'left',
        color: '#000000',
        multiline,
        rotation: 0
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/PdfPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PdfPreview",
    ()=>PdfPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function PdfPreview(param) {
    let { url, pageNumber, width, height } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfPreview.useEffect": ()=>({
                "PdfPreview.useEffect": ()=>{
                    if (url) URL.revokeObjectURL(url);
                }
            })["PdfPreview.useEffect"]
    }["PdfPreview.useEffect"], [
        url
    ]);
    if (!url) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pdf-preview-loading",
        children: "Generating preview..."
    }, void 0, false, {
        fileName: "[project]/components/admin/PdfPreview.tsx",
        lineNumber: 12,
        columnNumber: 20
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
        className: "pdf-preview-frame",
        title: "Generated PDF preview",
        src: "".concat(url, "#page=").concat(pageNumber, "&toolbar=0"),
        style: {
            width,
            height
        }
    }, void 0, false, {
        fileName: "[project]/components/admin/PdfPreview.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_s(PdfPreview, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PdfPreview;
var _c;
__turbopack_context__.k.register(_c, "PdfPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/PdfMappingTestEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PdfMappingTestEditor",
    ()=>PdfMappingTestEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$pdf$2d$field$2d$coordinates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/pdf-field-coordinates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$PdfPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/PdfPreview.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const fields = [
    [
        'date',
        'Submission Date'
    ],
    [
        'enquiryNumber',
        'Enquiry ID'
    ],
    [
        'course',
        'Course'
    ],
    [
        'name',
        'Full Name'
    ],
    [
        'dob',
        'Date of Birth'
    ],
    [
        'gender',
        'Gender'
    ],
    [
        'motherName',
        "Mother's Name"
    ],
    [
        'fatherName',
        "Father's Name"
    ],
    [
        'address',
        'Address'
    ],
    [
        'mobile1',
        'Primary Mobile'
    ],
    [
        'mobile2',
        'Alternate Mobile'
    ],
    [
        'email',
        'Email'
    ],
    [
        'class10Percent',
        'Class 10 Percentage'
    ],
    [
        'class12Stream',
        'Class 12 Stream'
    ],
    [
        'class12Percent',
        'Class 12 Percentage'
    ],
    [
        'physicsMarks',
        'Physics Marks'
    ],
    [
        'chemistryMarks',
        'Chemistry Marks'
    ],
    [
        'mathsMarks',
        'Mathematics Marks'
    ],
    [
        'biologyMarks',
        'Biology Marks'
    ],
    [
        'csMarks',
        'Computer Science Marks'
    ],
    [
        'schoolNameWithState',
        'School Name and State'
    ],
    [
        'neetUgScore',
        'NEET UG Score'
    ],
    [
        'neetPgScore',
        'NEET PG Score'
    ],
    [
        'category',
        'Admission Category'
    ],
    [
        'cuetScoreRank',
        'CUET Score / Rank'
    ],
    [
        'cetScoreRank',
        'UG / PG CET Score / Rank'
    ],
    [
        'clatScoreRank',
        'CLAT Score / Rank'
    ],
    [
        'catScoreRank',
        'CAT Score / Percentile'
    ],
    [
        'jeeMainsCrl',
        'JEE Mains CRL'
    ],
    [
        'percentile',
        'Overall Percentile'
    ],
    [
        'pcmPercent',
        'PCM Percentage'
    ],
    [
        'pcbPercent',
        'PCB Percentage'
    ],
    [
        'collegeUniversityName',
        'College / University'
    ],
    [
        'courses',
        'Other Courses'
    ],
    [
        'marks',
        'Other Marks Information'
    ],
    [
        'reference',
        'How did you hear about us?'
    ],
    [
        'signatureDataUrl',
        'Signature'
    ]
];
const sample = {
    enquiryNumber: 'ENQ-2026-0042',
    date: '21/08/2026',
    course: 'MBBS',
    name: 'Rahul Sharma',
    dob: '15/08/2005',
    gender: 'M',
    motherName: 'Sunita Sharma',
    fatherName: 'Rajesh Sharma',
    address: '42 Green Park, New Delhi, Delhi - 110016',
    mobile1: '9876543210',
    mobile2: '9812345678',
    email: 'rahul@example.com',
    class10Percent: '94%',
    class12Stream: 'Science',
    class12Percent: '91%',
    physicsMarks: '88',
    chemistryMarks: '92',
    mathsMarks: '95',
    biologyMarks: '90',
    csMarks: '87',
    schoolNameWithState: 'DPS RK Puram, Delhi',
    neetUgScore: '682',
    neetPgScore: 'N/A',
    category: 'General',
    cuetScoreRank: '98.4 percentile',
    cetScoreRank: 'N/A',
    clatScoreRank: 'N/A',
    catScoreRank: 'N/A',
    jeeMainsCrl: 'N/A',
    percentile: '98.4',
    pcmPercent: '92%',
    pcbPercent: '91%',
    collegeUniversityName: 'Delhi University',
    courses: 'NEET preparation',
    marks: 'Strong Biology',
    reference: 'Google search',
    signatureDataUrl: ''
};
function withId(mapping, index) {
    var _mapping_id;
    return {
        ...mapping,
        id: (_mapping_id = mapping.id) !== null && _mapping_id !== void 0 ? _mapping_id : "".concat(mapping.field_key, "-").concat(index)
    };
}
function cloneMappings(mappings) {
    return mappings.map((mapping)=>({
            ...mapping
        }));
}
function PdfMappingTestEditor() {
    _s();
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const interaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const renderTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pdf, setPdf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mappings, setMappings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [savedMappings, setSavedMappings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pageNumber, setPageNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [fitScale, setFitScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [previewUrl, setPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [future, setFuture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const scale = fitScale * zoom;
    const current = mappings.find((mapping)=>mapping.id === selectedId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfMappingTestEditor.useEffect": ()=>{
            let active = true;
            async function load() {
                var _result_data, _stageRef_current;
                const [pdfjs, mappingResponse, templateResponse] = await Promise.all([
                    __turbopack_context__.A("[project]/node_modules/pdfjs-dist/legacy/build/pdf.mjs [app-client] (ecmascript, async loader)"),
                    fetch('/api/admin/pdf-mappings', {
                        cache: 'no-store'
                    }),
                    fetch('/api/admin/pdf-template', {
                        cache: 'no-store'
                    })
                ]);
                if (!mappingResponse.ok || !templateResponse.ok) throw new Error('Unable to load the PDF mapping test.');
                const result = await mappingResponse.json();
                const bytes = await templateResponse.arrayBuffer();
                pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
                const document = await pdfjs.getDocument({
                    data: bytes
                }).promise;
                const page = await document.getPage(1);
                const viewport = page.getViewport({
                    scale: 1
                });
                const nextMappings = (((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.length) ? result.data : __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$pdf$2d$field$2d$coordinates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["manualPdfMappings"]).map(withId);
                if (!active) return;
                setPdf({
                    document,
                    width: viewport.width,
                    height: viewport.height,
                    pageCount: document.numPages
                });
                var _stageRef_current_clientWidth;
                setFitScale(Math.min(1, Math.max(.35, (((_stageRef_current_clientWidth = (_stageRef_current = stageRef.current) === null || _stageRef_current === void 0 ? void 0 : _stageRef_current.clientWidth) !== null && _stageRef_current_clientWidth !== void 0 ? _stageRef_current_clientWidth : 900) - 36) / viewport.width)));
                setMappings(cloneMappings(nextMappings));
                setSavedMappings(cloneMappings(nextMappings));
                setLoading(false);
            }
            load().catch({
                "PdfMappingTestEditor.useEffect": (error)=>{
                    if (active) {
                        setNotice(error instanceof Error ? error.message : 'Unable to load editor.');
                        setLoading(false);
                    }
                }
            }["PdfMappingTestEditor.useEffect"]);
            return ({
                "PdfMappingTestEditor.useEffect": ()=>{
                    active = false;
                }
            })["PdfMappingTestEditor.useEffect"];
        }
    }["PdfMappingTestEditor.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfMappingTestEditor.useEffect": ()=>{
            if (!mappings.length || !pdf) return;
            if (renderTimer.current) clearTimeout(renderTimer.current);
            renderTimer.current = setTimeout({
                "PdfMappingTestEditor.useEffect": async ()=>{
                    const response = await fetch('/api/admin/pdf-mapping/preview', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            enquiry: sample,
                            mappings
                        })
                    });
                    if (!response.ok) {
                        setNotice('Preview generation failed.');
                        return;
                    }
                    const nextUrl = URL.createObjectURL(await response.blob());
                    setPreviewUrl({
                        "PdfMappingTestEditor.useEffect": (previous)=>{
                            if (previous) URL.revokeObjectURL(previous);
                            return nextUrl;
                        }
                    }["PdfMappingTestEditor.useEffect"]);
                }
            }["PdfMappingTestEditor.useEffect"], 180);
            return ({
                "PdfMappingTestEditor.useEffect": ()=>{
                    if (renderTimer.current) clearTimeout(renderTimer.current);
                }
            })["PdfMappingTestEditor.useEffect"];
        }
    }["PdfMappingTestEditor.useEffect"], [
        mappings,
        pdf
    ]);
    function snapshot() {
        setHistory((previous)=>[
                ...previous.slice(-29),
                cloneMappings(mappings)
            ]);
        setFuture([]);
    }
    function updateMapping(id, patch) {
        snapshot();
        setMappings((previous)=>previous.map((mapping)=>mapping.id === id ? {
                    ...mapping,
                    ...patch
                } : mapping));
    }
    function pointerStart(event, mapping, mode) {
        event.stopPropagation();
        if (mode === 'move') snapshot();
        setSelectedId(mapping.id);
        interaction.current = {
            id: mapping.id,
            mode,
            startX: event.clientX,
            startY: event.clientY,
            original: {
                ...mapping
            }
        };
        event.currentTarget.setPointerCapture(event.pointerId);
    }
    function pointerMove(event) {
        const active = interaction.current;
        if (!active || !pdf) return;
        const dx = (event.clientX - active.startX) / scale;
        const dy = (event.clientY - active.startY) / scale;
        const original = active.original;
        setMappings((previous)=>previous.map((mapping)=>{
                if (mapping.id !== active.id) return mapping;
                if (active.mode === 'move') return {
                    ...mapping,
                    x: Math.max(0, Math.min(pdf.width - mapping.width, original.x + dx)),
                    y: Math.max(0, Math.min(pdf.height - mapping.height, original.y - dy))
                };
                return {
                    ...mapping,
                    width: Math.max(8, Math.min(pdf.width - original.x, original.width + dx)),
                    height: Math.max(8, Math.min(pdf.height - original.y, original.height - dy)),
                    y: Math.max(0, original.y - dy)
                };
            }));
    }
    function undo() {
        const previous = history.at(-1);
        if (!previous) return;
        setFuture((next)=>[
                cloneMappings(mappings),
                ...next
            ]);
        setMappings(cloneMappings(previous));
        setHistory(history.slice(0, -1));
    }
    function redo() {
        const next = future[0];
        if (!next) return;
        setHistory((previous)=>[
                ...previous,
                cloneMappings(mappings)
            ]);
        setMappings(cloneMappings(next));
        setFuture(future.slice(1));
    }
    async function save() {
        const response = await fetch('/api/admin/pdf-mappings', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mappings
            })
        });
        if (response.ok) {
            setSavedMappings(cloneMappings(mappings));
            setNotice('Mappings saved to Supabase.');
        } else setNotice('Could not save mappings.');
    }
    function resetSaved() {
        snapshot();
        setMappings(cloneMappings(savedMappings));
        setSelectedId(null);
    }
    function resetDefaults() {
        snapshot();
        setMappings(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$pdf$2d$field$2d$coordinates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["manualPdfMappings"].map(withId));
        setSelectedId(null);
    }
    async function changePage(next) {
        if (!pdf || next < 1 || next > pdf.pageCount) return;
        const page = await pdf.document.getPage(next);
        const viewport = page.getViewport({
            scale: 1
        });
        setPdf({
            ...pdf,
            width: viewport.width,
            height: viewport.height
        });
        setPageNumber(next);
        setSelectedId(null);
    }
    function changeNumber(key, value) {
        if (!current) return;
        const number = Number(value);
        if (Number.isFinite(number)) updateMapping(current.id, {
            [key]: number
        });
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mapping-editor-page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mapping-loading",
            children: "Loading PDF mapping test..."
        }, void 0, false, {
            fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
            lineNumber: 110,
            columnNumber: 61
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
        lineNumber: 110,
        columnNumber: 23
    }, this);
    const pageMappings = mappings.filter((mapping)=>mapping.page_number === pageNumber);
    var _pdf_pageCount, _pdf_width, _pdf_height, _pdf_width1, _pdf_height1, _current_field_label;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mapping-editor-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mapping-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "back-link",
                                href: "/admin",
                                children: "← Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 113,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dev-badge",
                                children: "TEST / DEVELOPMENT"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 113,
                                columnNumber: 106
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "PDF mapping calibration"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 113,
                                columnNumber: 157
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Changes are preview-only until you explicitly save mappings."
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 113,
                                columnNumber: 189
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                        lineNumber: 113,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mapping-toolbar-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-secondary",
                                onClick: undo,
                                disabled: !history.length,
                                children: "Undo"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 113,
                                columnNumber: 303
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-secondary",
                                onClick: redo,
                                disabled: !future.length,
                                children: "Redo"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 113,
                                columnNumber: 392
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-secondary",
                                onClick: resetSaved,
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 113,
                                columnNumber: 480
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-secondary",
                                onClick: resetDefaults,
                                children: "Reset all"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 113,
                                columnNumber: 549
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-primary",
                                onClick: save,
                                children: "Save mapping"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 113,
                                columnNumber: 625
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                        lineNumber: 113,
                        columnNumber: 262
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                lineNumber: 113,
                columnNumber: 5
            }, this),
            notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mapping-notice",
                children: notice
            }, void 0, false, {
                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                lineNumber: 114,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mapping-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "mapping-sidebar mapping-fields",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mapping-sidebar-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "section-eyebrow",
                                        children: "Sample enquiry"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 116,
                                        columnNumber: 98
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Rahul Sharma"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 116,
                                        columnNumber: 153
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Fixed data only. This page never creates an enquiry or uploads a file."
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 116,
                                        columnNumber: 174
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 116,
                                columnNumber: 57
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sample-data",
                                children: Object.entries(sample).filter((param)=>{
                                    let [key, value] = param;
                                    return key !== 'signatureDataUrl' && value;
                                }).map((param)=>{
                                    let [key, value] = param;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: key
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 116,
                                                columnNumber: 409
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: String(value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 116,
                                                columnNumber: 429
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 116,
                                        columnNumber: 394
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 116,
                                columnNumber: 257
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                        lineNumber: 116,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mapping-workspace",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mapping-view-toolbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setZoom(Math.max(.5, zoom - .1)),
                                        children: "−"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 117,
                                        columnNumber: 84
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            Math.round(scale * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 117,
                                        columnNumber: 151
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setZoom(Math.min(3, zoom + .1)),
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 117,
                                        columnNumber: 190
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setZoom(1),
                                        children: "Fit to page"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 117,
                                        columnNumber: 256
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "page-controls",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: pageNumber === 1,
                                                onClick: ()=>changePage(pageNumber - 1),
                                                children: "←"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 117,
                                                columnNumber: 343
                                            }, this),
                                            " Page ",
                                            pageNumber,
                                            " of ",
                                            (_pdf_pageCount = pdf === null || pdf === void 0 ? void 0 : pdf.pageCount) !== null && _pdf_pageCount !== void 0 ? _pdf_pageCount : '...',
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: !pdf || pageNumber === pdf.pageCount,
                                                onClick: ()=>changePage(pageNumber + 1),
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 117,
                                                columnNumber: 480
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 117,
                                        columnNumber: 311
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 117,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mapping-stage-scroll",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mapping-stage",
                                    ref: stageRef,
                                    style: {
                                        width: ((_pdf_width = pdf === null || pdf === void 0 ? void 0 : pdf.width) !== null && _pdf_width !== void 0 ? _pdf_width : 0) * scale,
                                        height: ((_pdf_height = pdf === null || pdf === void 0 ? void 0 : pdf.height) !== null && _pdf_height !== void 0 ? _pdf_height : 0) * scale
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$PdfPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PdfPreview"], {
                                            url: previewUrl,
                                            pageNumber: pageNumber,
                                            width: ((_pdf_width1 = pdf === null || pdf === void 0 ? void 0 : pdf.width) !== null && _pdf_width1 !== void 0 ? _pdf_width1 : 0) * scale,
                                            height: ((_pdf_height1 = pdf === null || pdf === void 0 ? void 0 : pdf.height) !== null && _pdf_height1 !== void 0 ? _pdf_height1 : 0) * scale
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                            lineNumber: 117,
                                            columnNumber: 767
                                        }, this),
                                        pageMappings.map((mapping)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mapping-rect".concat(mapping.id === selectedId ? ' selected' : ''),
                                                style: {
                                                    left: mapping.x * scale,
                                                    top: (pdf.height - mapping.y - mapping.height) * scale,
                                                    width: mapping.width * scale,
                                                    height: mapping.height * scale,
                                                    color: mapping.color
                                                },
                                                onPointerDown: (event)=>pointerStart(event, mapping, 'move'),
                                                onPointerMove: pointerMove,
                                                onPointerUp: ()=>{
                                                    interaction.current = null;
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: mapping.field_label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 1336
                                                    }, this),
                                                    mapping.id === selectedId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "mapping-resize-handle",
                                                        "aria-label": "Resize mapping",
                                                        onPointerDown: (event)=>pointerStart(event, mapping, 'resize')
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 1400
                                                    }, this)
                                                ]
                                            }, mapping.id, true, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 117,
                                                columnNumber: 921
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                    lineNumber: 117,
                                    columnNumber: 640
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 117,
                                columnNumber: 602
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                        lineNumber: 117,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "mapping-sidebar mapping-properties",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mapping-sidebar-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "section-eyebrow",
                                        children: "Field controls"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 102
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: (_current_field_label = current === null || current === void 0 ? void 0 : current.field_label) !== null && _current_field_label !== void 0 ? _current_field_label : 'Select a field'
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 157
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 118,
                                columnNumber: 61
                            }, this),
                            current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mapping-form",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Field",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: current.field_key,
                                                onChange: (event)=>{
                                                    const found = mappings.find((mapping)=>mapping.field_key === event.target.value);
                                                    if (found) setSelectedId(found.id);
                                                },
                                                children: fields.map((param)=>{
                                                    let [key, label] = param;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: key,
                                                        children: label
                                                    }, key, false, {
                                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 474
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 118,
                                                columnNumber: 267
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 255
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Page",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                max: pdf === null || pdf === void 0 ? void 0 : pdf.pageCount,
                                                value: current.page_number,
                                                onChange: (event)=>changeNumber('page_number', event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 118,
                                                columnNumber: 550
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 539
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "X",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: current.x,
                                                onChange: (event)=>changeNumber('x', event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 118,
                                                columnNumber: 714
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 706
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Y",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: current.y,
                                                onChange: (event)=>changeNumber('y', event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 118,
                                                columnNumber: 829
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 821
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Width",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: current.width,
                                                onChange: (event)=>changeNumber('width', event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 118,
                                                columnNumber: 948
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 936
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Height",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: current.height,
                                                onChange: (event)=>changeNumber('height', event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 118,
                                                columnNumber: 1076
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 1063
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Font size",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                value: current.font_size,
                                                onChange: (event)=>changeNumber('font_size', event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 118,
                                                columnNumber: 1209
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 1193
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Alignment",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: current.alignment,
                                                onChange: (event)=>updateMapping(current.id, {
                                                        alignment: event.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "left",
                                                        children: "Left"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 1488
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "center",
                                                        children: "Center"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 1522
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "right",
                                                        children: "Right"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 1560
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 118,
                                                columnNumber: 1356
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 1340
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Color",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                value: current.color,
                                                onChange: (event)=>updateMapping(current.id, {
                                                        color: event.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 118,
                                                columnNumber: 1625
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 1613
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "mapping-checkbox",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: current.multiline,
                                                onChange: (event)=>updateMapping(current.id, {
                                                        multiline: event.target.checked
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                                lineNumber: 118,
                                                columnNumber: 1791
                                            }, this),
                                            " Multiline"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                        lineNumber: 118,
                                        columnNumber: 1755
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 118,
                                columnNumber: 225
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mapping-empty",
                                children: "Click a field rectangle in the preview to edit its position."
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                                lineNumber: 118,
                                columnNumber: 1955
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                        lineNumber: 118,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
                lineNumber: 115,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/PdfMappingTestEditor.tsx",
        lineNumber: 112,
        columnNumber: 10
    }, this);
}
_s(PdfMappingTestEditor, "OMSSags+f+TnA5650qI3A1NnaJE=");
_c = PdfMappingTestEditor;
var _c;
__turbopack_context__.k.register(_c, "PdfMappingTestEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b6281af2._.js.map