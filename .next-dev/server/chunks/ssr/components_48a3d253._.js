module.exports = [
"[project]/components/admin/PdfMappingEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PdfMappingEditor",
    ()=>PdfMappingEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Toast.tsx [app-ssr] (ecmascript)");
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
const fieldMap = new Map(fields);
function makeMapping(fieldKey, pageWidth, pageHeight, x = 40, y = 40) {
    const label = fieldMap.get(fieldKey) ?? fieldKey;
    return {
        template_id: 'entry-form',
        field_key: fieldKey,
        field_label: label,
        page_number: 1,
        x: Math.max(0, Math.min(pageWidth - 8, x)),
        y: Math.max(0, pageHeight - y - 24),
        width: Math.max(8, Math.min(220, pageWidth - x - 20)),
        height: fieldKey === 'address' ? 50 : 24,
        font_size: 10,
        font_family: 'Helvetica',
        alignment: 'left',
        color: '#000000',
        multiline: fieldKey === 'address',
        rotation: 0
    };
}
function PdfMappingEditor() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pdf, setPdf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mappings, setMappings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pageNumber, setPageNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [fitScale, setFitScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [future, setFuture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [placingField, setPlacingField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteOpen, setDeleteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteText, setDeleteText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const interaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const current = selectedId ? mappings.find((mapping)=>mapping.id === selectedId) : undefined;
    const scale = fitScale * zoom;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        async function loadEditor() {
            const sessionResponse = await fetch('/api/admin/session', {
                cache: 'no-store',
                credentials: 'include'
            });
            const session = await sessionResponse.json().catch(()=>({}));
            if (!sessionResponse.ok || !session.authenticated) {
                window.location.href = '/admin/login?next=/admin/settings';
                throw new Error('Your admin session has expired. Please sign in again.');
            }
            const [pdfjs, mappingsResponse] = await Promise.all([
                __turbopack_context__.A("[project]/node_modules/pdfjs-dist/legacy/build/pdf.mjs [app-ssr] (ecmascript, async loader)"),
                fetch('/api/admin/pdf-mappings', {
                    cache: 'no-store',
                    credentials: 'include'
                })
            ]);
            pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
            if (mappingsResponse.status === 401) {
                window.location.href = '/admin/login?next=/admin/settings';
                throw new Error('Your admin session has expired. Please sign in again.');
            }
            if (!mappingsResponse.ok) throw new Error('Unable to load saved PDF mappings.');
            const result = await mappingsResponse.json();
            if (!active) return;
            const templateResponse = await fetch('/api/admin/pdf-template', {
                cache: 'no-store',
                credentials: 'include'
            });
            if (templateResponse.status === 401) {
                window.location.href = '/admin/login?next=/admin/settings';
                throw new Error('Your admin session has expired. Please sign in again.');
            }
            if (!templateResponse.ok) throw new Error(`Template request failed (${templateResponse.status}).`);
            const templateBytes = await templateResponse.arrayBuffer();
            const document = await pdfjs.getDocument({
                data: templateBytes,
                disableAutoFetch: false
            }).promise;
            const page = await document.getPage(1);
            const viewport = page.getViewport({
                scale: 1
            });
            const hostWidth = stageRef.current?.clientWidth ?? 900;
            const nextFit = Math.min(1, Math.max(.35, (hostWidth - 40) / viewport.width));
            setFitScale(nextFit);
            setPdf({
                document,
                page,
                width: viewport.width,
                height: viewport.height,
                pageCount: document.numPages
            });
            setMappings((result.data ?? []).map((mapping)=>({
                    ...mapping,
                    id: mapping.id ?? `${mapping.field_key}-${mapping.page_number}`
                })));
        }
        loadEditor().catch((error)=>{
            if (active && error instanceof Error && !error.message.includes('session has expired')) setNotice(error.message);
        });
        return ()=>{
            active = false;
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!pdf || !canvasRef.current) return;
        const viewport = pdf.page.getViewport({
            scale
        });
        const canvas = canvasRef.current;
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;
        pdf.page.render({
            canvas,
            canvasContext: canvas.getContext('2d'),
            viewport
        });
    }, [
        pdf,
        scale
    ]);
    async function changePage(nextPage) {
        if (!pdf || nextPage < 1 || nextPage > pdf.pageCount) return;
        const page = await pdf.document.getPage(nextPage);
        const viewport = page.getViewport({
            scale: 1
        });
        setPdf({
            ...pdf,
            page,
            width: viewport.width,
            height: viewport.height
        });
        setPageNumber(nextPage);
        setSelectedId(null);
    }
    function snapshot() {
        setHistory((previous)=>[
                ...previous.slice(-29),
                mappings
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
    function placeField(fieldKey, x = 40, y = 40) {
        if (!pdf || mappings.some((mapping)=>mapping.field_key === fieldKey)) return;
        snapshot();
        const mapping = {
            ...makeMapping(fieldKey, pdf.width, pdf.height, x, y),
            id: `${fieldKey}-${Date.now()}`,
            page_number: pageNumber
        };
        setMappings((previous)=>[
                ...previous,
                mapping
            ]);
        setSelectedId(mapping.id);
        setPlacingField(null);
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
    function pointerEnd() {
        interaction.current = null;
    }
    function undo() {
        const previous = history.at(-1);
        if (!previous) return;
        setFuture((futureState)=>[
                mappings,
                ...futureState
            ]);
        setMappings(previous);
        setHistory(history.slice(0, -1));
        setSelectedId(null);
    }
    function redo() {
        const next = future[0];
        if (!next) return;
        setHistory((previous)=>[
                ...previous,
                mappings
            ]);
        setMappings(next);
        setFuture(future.slice(1));
    }
    async function save() {
        setSaving(true);
        try {
            const response = await fetch('/api/admin/pdf-mappings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    mappings
                })
            });
            setNotice(response.ok ? 'Mappings saved.' : 'Could not save mappings.');
            setTimeout(()=>setNotice(''), 3000);
        } finally{
            setSaving(false);
        }
    }
    function reset() {
        snapshot();
        setMappings([]);
        setSelectedId(null);
    }
    function requestDelete() {
        setDeleteText('');
        setDeleteOpen(true);
    }
    function confirmDelete() {
        if (deleteText !== 'DELETE' || !current) return;
        snapshot();
        setMappings((previous)=>previous.filter((mapping)=>mapping.id !== current.id));
        setSelectedId(null);
        setDeleteOpen(false);
    }
    const pageMappings = mappings.filter((mapping)=>mapping.page_number === pageNumber);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mapping-editor-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mapping-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "back-button",
                                onClick: ()=>router.back(),
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 175,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "PDF field mapping"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 175,
                                columnNumber: 89
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Place submitted values on the original entry form."
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 175,
                                columnNumber: 115
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                        lineNumber: 175,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mapping-toolbar-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-secondary",
                                onClick: undo,
                                disabled: !history.length,
                                children: "Undo"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 176,
                                columnNumber: 48
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-secondary",
                                onClick: redo,
                                disabled: !future.length,
                                children: "Redo"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 176,
                                columnNumber: 137
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-secondary",
                                onClick: reset,
                                disabled: saving,
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 176,
                                columnNumber: 225
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-primary",
                                onClick: save,
                                disabled: saving,
                                children: saving ? 'Saving...' : 'Save mappings'
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 176,
                                columnNumber: 307
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                        lineNumber: 176,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                lineNumber: 174,
                columnNumber: 5
            }, this),
            notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                message: notice,
                onClose: ()=>setNotice('')
            }, void 0, false, {
                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                lineNumber: 178,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mapping-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "mapping-sidebar mapping-fields",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mapping-sidebar-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "section-eyebrow",
                                        children: "Available fields"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 180,
                                        columnNumber: 98
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Form fields"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 180,
                                        columnNumber: 155
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: placingField ? 'Click or drop this field on the PDF.' : 'Click a field, then place it on the current page.'
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 180,
                                        columnNumber: 175
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 180,
                                columnNumber: 57
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field-palette",
                                children: fields.map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        draggable: !mappings.some((mapping)=>mapping.field_key === key),
                                        disabled: mappings.some((mapping)=>mapping.field_key === key),
                                        onDragStart: ()=>setPlacingField(key),
                                        onClick: ()=>setPlacingField(key),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 180,
                                                columnNumber: 582
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: mappings.some((mapping)=>mapping.field_key === key) ? 'Placed' : placingField === key ? 'Place' : 'Add'
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 180,
                                                columnNumber: 602
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 180,
                                        columnNumber: 358
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 180,
                                columnNumber: 297
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                        lineNumber: 180,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mapping-workspace",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mapping-view-toolbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setZoom(Math.max(.5, zoom - .1)),
                                        children: "−"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 181,
                                        columnNumber: 84
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            Math.round(scale * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 181,
                                        columnNumber: 151
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setZoom(Math.min(3, zoom + .1)),
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 181,
                                        columnNumber: 190
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setZoom(1),
                                        children: "Fit to page"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 181,
                                        columnNumber: 256
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "page-controls",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: pageNumber === 1,
                                                onClick: ()=>changePage(pageNumber - 1),
                                                children: "←"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 181,
                                                columnNumber: 343
                                            }, this),
                                            " Page ",
                                            pageNumber,
                                            " of ",
                                            pdf?.pageCount ?? '...',
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: !pdf || pageNumber === pdf.pageCount,
                                                onClick: ()=>changePage(pageNumber + 1),
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 181,
                                                columnNumber: 480
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 181,
                                        columnNumber: 311
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 181,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mapping-stage-scroll",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `mapping-stage${placingField ? ' placing' : ''}`,
                                    ref: stageRef,
                                    onDragOver: (event)=>event.preventDefault(),
                                    onDrop: (event)=>{
                                        event.preventDefault();
                                        if (!placingField || !pdf) return;
                                        const rect = event.currentTarget.getBoundingClientRect();
                                        placeField(placingField, (event.clientX - rect.left) / scale, (event.clientY - rect.top) / scale);
                                    },
                                    onClick: (event)=>{
                                        if (placingField && pdf) {
                                            const rect = event.currentTarget.getBoundingClientRect();
                                            placeField(placingField, (event.clientX - rect.left) / scale, (event.clientY - rect.top) / scale);
                                        } else if (event.target === event.currentTarget) setSelectedId(null);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                            ref: canvasRef
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                            lineNumber: 181,
                                            columnNumber: 1281
                                        }, this),
                                        pageMappings.map((mapping)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `mapping-rect${mapping.id === selectedId ? ' selected' : ''}`,
                                                style: {
                                                    left: mapping.x * scale,
                                                    top: (pdf ? pdf.height - mapping.y - mapping.height : 0) * scale,
                                                    width: mapping.width * scale,
                                                    height: mapping.height * scale,
                                                    color: mapping.color,
                                                    transform: `rotate(${mapping.rotation}deg)`
                                                },
                                                onPointerDown: (event)=>pointerStart(event, mapping, 'move'),
                                                onPointerMove: pointerMove,
                                                onPointerUp: pointerEnd,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: mapping.field_label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 1778
                                                    }, this),
                                                    mapping.id === selectedId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "mapping-resize-handle",
                                                        "aria-label": "Resize mapping",
                                                        onPointerDown: (event)=>pointerStart(event, mapping, 'resize')
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 1842
                                                    }, this)
                                                ]
                                            }, mapping.id, true, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 181,
                                                columnNumber: 1336
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                    lineNumber: 181,
                                    columnNumber: 640
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 181,
                                columnNumber: 602
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                        lineNumber: 181,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "mapping-sidebar mapping-properties",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mapping-sidebar-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "section-eyebrow",
                                        children: "Selected field"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 102
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: current?.field_label ?? 'No field selected'
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 157
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 182,
                                columnNumber: 61
                            }, this),
                            current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mapping-form",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "X",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: current.x.toFixed(2),
                                                onChange: (event)=>updateMapping(current.id, {
                                                        x: Number(event.target.value)
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 266
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 258
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Y",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: current.y.toFixed(2),
                                                onChange: (event)=>updateMapping(current.id, {
                                                        y: Number(event.target.value)
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 416
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 408
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Width",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: current.width.toFixed(2),
                                                onChange: (event)=>updateMapping(current.id, {
                                                        width: Number(event.target.value)
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 570
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 558
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Height",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: current.height.toFixed(2),
                                                onChange: (event)=>updateMapping(current.id, {
                                                        height: Number(event.target.value)
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 733
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 720
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Font size",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                value: current.font_size,
                                                onChange: (event)=>updateMapping(current.id, {
                                                        font_size: Number(event.target.value)
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 901
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 885
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Font family",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: current.font_family,
                                                onChange: (event)=>updateMapping(current.id, {
                                                        font_family: event.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Helvetica"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 1194
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Times-Roman"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 1220
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Courier"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 1248
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 1074
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 1056
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Alignment",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: current.alignment,
                                                onChange: (event)=>updateMapping(current.id, {
                                                        alignment: event.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "left",
                                                        children: "Left"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 1437
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "center",
                                                        children: "Center"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 1471
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "right",
                                                        children: "Right"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 1509
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 1305
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 1289
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Color",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                value: current.color,
                                                onChange: (event)=>updateMapping(current.id, {
                                                        color: event.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 1574
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 1562
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Rotation",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: current.rotation,
                                                onChange: (event)=>updateMapping(current.id, {
                                                        rotation: Number(event.target.value)
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 1719
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 1704
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "mapping-checkbox",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: current.multiline,
                                                onChange: (event)=>updateMapping(current.id, {
                                                        multiline: event.target.checked
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 1900
                                            }, this),
                                            " Multiline text"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 1864
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mapping-property-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-secondary",
                                                onClick: ()=>{
                                                    const copy = {
                                                        ...current,
                                                        id: `${current.field_key}-${Date.now()}`,
                                                        x: current.x + 10,
                                                        y: current.y - 10
                                                    };
                                                    snapshot();
                                                    setMappings((previous)=>[
                                                            ...previous,
                                                            copy
                                                        ]);
                                                    setSelectedId(copy.id);
                                                },
                                                children: "Duplicate"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 2102
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "danger-button",
                                                onClick: requestDelete,
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 2365
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                        lineNumber: 182,
                                        columnNumber: 2060
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 182,
                                columnNumber: 228
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mapping-empty",
                                children: "Select a rectangle on the page to edit its exact PDF coordinates."
                            }, void 0, false, {
                                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                lineNumber: 182,
                                columnNumber: 2453
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                        lineNumber: 182,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                lineNumber: 179,
                columnNumber: 5
            }, this),
            deleteOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "question-dialog",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "delete-mapping-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "delete-mapping-title",
                            children: "Delete PDF mapping?"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                            lineNumber: 184,
                            columnNumber: 160
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "This mapping will be permanently deleted when you save mappings. Type ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "DELETE"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                    lineNumber: 184,
                                    columnNumber: 287
                                }, this),
                                " to confirm."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                            lineNumber: 184,
                            columnNumber: 214
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            autoFocus: true,
                            value: deleteText,
                            onChange: (event)=>setDeleteText(event.target.value),
                            placeholder: "Type DELETE",
                            "aria-label": "Type DELETE to confirm"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                            lineNumber: 184,
                            columnNumber: 326
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dialog-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setDeleteOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                    lineNumber: 184,
                                    columnNumber: 512
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "danger-button",
                                    disabled: deleteText !== 'DELETE',
                                    onClick: confirmDelete,
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                                    lineNumber: 184,
                                    columnNumber: 586
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                            lineNumber: 184,
                            columnNumber: 480
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                    lineNumber: 184,
                    columnNumber: 52
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/PdfMappingEditor.tsx",
                lineNumber: 184,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/PdfMappingEditor.tsx",
        lineNumber: 173,
        columnNumber: 10
    }, this);
}
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
"[project]/components/admin/SensitiveAdminGate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SensitiveAdminGate",
    ()=>SensitiveAdminGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const authorizationDuration = 15 * 60 * 1000;
function SensitiveAdminGate({ children, resource }) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('checking');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        async function checkAuthorization() {
            const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
            const { data: { user } } = await client.auth.getUser();
            if (!active) return;
            if (!user?.email) {
                window.location.href = `/admin/login?next=${encodeURIComponent(window.location.pathname)}`;
                return;
            }
            setEmail(user.email);
            const key = `admin-sensitive-auth:${user.id}:${resource}`;
            const authorizedAt = Number(sessionStorage.getItem(key));
            setStatus(authorizedAt && Date.now() - authorizedAt < authorizationDuration ? 'authorized' : 'required');
        }
        void checkAuthorization();
        return ()=>{
            active = false;
        };
    }, [
        resource
    ]);
    async function verify(event) {
        event.preventDefault();
        setError('');
        const { error: signInError } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])().auth.signInWithPassword({
            email,
            password
        });
        setPassword('');
        if (signInError) {
            setError('Password verification failed. Access was not granted.');
            return;
        }
        const { data: { user } } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])().auth.getUser();
        if (!user) {
            setError('Your session is no longer valid. Please sign in again.');
            return;
        }
        sessionStorage.setItem(`admin-sensitive-auth:${user.id}:${resource}`, String(Date.now()));
        setStatus('authorized');
    }
    if (status === 'checking') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container admin-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Checking authorization..."
        }, void 0, false, {
            fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
            lineNumber: 53,
            columnNumber: 77
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
        lineNumber: 53,
        columnNumber: 37
    }, this);
    if (status === 'authorized') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container admin-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card sensitive-auth-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Verify your identity"
                }, void 0, false, {
                    fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
                    lineNumber: 55,
                    columnNumber: 96
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Enter your current account password to access ",
                        resource,
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
                    lineNumber: 55,
                    columnNumber: 125
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "grid",
                    onSubmit: verify,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "field",
                            children: [
                                "Password",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    autoFocus: true,
                                    required: true,
                                    type: "password",
                                    value: password,
                                    onChange: (event)=>setPassword(event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
                                    lineNumber: 55,
                                    columnNumber: 263
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
                            lineNumber: 55,
                            columnNumber: 230
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "error",
                            role: "alert",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
                            lineNumber: 55,
                            columnNumber: 394
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            children: "Verify password"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
                            lineNumber: 55,
                            columnNumber: 440
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
                    lineNumber: 55,
                    columnNumber: 189
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
            lineNumber: 55,
            columnNumber: 50
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
        lineNumber: 55,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=components_48a3d253._.js.map