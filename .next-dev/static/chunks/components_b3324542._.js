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
"[project]/components/ui/BookLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookLoader",
    ()=>BookLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BookLoader(param) {
    let { text, fullPage = false, inline = false, className = '' } = param;
    const classes = [
        'book-loader',
        fullPage ? 'book-loader-full-page' : '',
        inline ? 'book-loader-inline' : '',
        className
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes,
        role: "status",
        "aria-live": "polite",
        "aria-label": text || 'Loading',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "book-loader-art",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "book-loader-bookshelf",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "book-loader-book book-loader-book-one"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BookLoader.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "book-loader-book book-loader-book-two"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BookLoader.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "book-loader-book book-loader-book-three"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BookLoader.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "book-loader-book book-loader-book-four"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BookLoader.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "book-loader-book book-loader-book-five"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BookLoader.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = BookLoader;
var _c;
__turbopack_context__.k.register(_c, "BookLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton,
    "SkeletonLine",
    ()=>SkeletonLine,
    "SkeletonRows",
    ()=>SkeletonRows
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loading$2d$skeleton$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-loading-skeleton/dist/index.js [app-client] (ecmascript)");
'use client';
;
;
;
function Skeleton(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loading$2d$skeleton$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Skeleton.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = Skeleton;
function SkeletonLine(param) {
    let { width = '100%', height = 16, className = '' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
        width: width,
        height: height,
        className: className
    }, void 0, false, {
        fileName: "[project]/components/ui/Skeleton.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c1 = SkeletonLine;
function SkeletonRows(param) {
    let { count = 5, columns = 5 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: Array.from({
            length: count
        }, (_, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "skeleton-table-row",
                children: Array.from({
                    length: columns
                }, (_, columnIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                            height: 16
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Skeleton.tsx",
                            lineNumber: 20,
                            columnNumber: 33
                        }, this)
                    }, columnIndex, false, {
                        fileName: "[project]/components/ui/Skeleton.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this))
            }, rowIndex, false, {
                fileName: "[project]/components/ui/Skeleton.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this))
    }, void 0, false);
}
_c2 = SkeletonRows;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Skeleton");
__turbopack_context__.k.register(_c1, "SkeletonLine");
__turbopack_context__.k.register(_c2, "SkeletonRows");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/QuestionsManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionsManager",
    ()=>QuestionsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BookLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BookLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const emptySection = {
    title: '',
    description: '',
    active: true
};
const emptyQuestion = (sectionId, displayOrder)=>({
        field_key: '',
        label: '',
        type: 'text',
        number_format: 'integer',
        required: false,
        allow_alphabets: true,
        allow_numbers: true,
        allow_special_characters: true,
        max_length: 255,
        options: [],
        display_order: displayOrder,
        section_id: sectionId,
        active: true,
        placeholder: ''
    });
const cloneQuestions = (questions)=>questions.map((question)=>({
            ...question,
            options: [
                ...question.options
            ]
        }));
const newId = ()=>crypto.randomUUID();
function QuestionsManager() {
    _s();
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        sections: [],
        questions: []
    });
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(saved);
    const [editingSection, setEditingSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sectionForm, setSectionForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptySection);
    const [editingQuestion, setEditingQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [questionForm, setQuestionForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyQuestion('', 0));
    const [optionsText, setOptionsText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dragged, setDragged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteTarget, setDeleteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteText, setDeleteText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    async function load() {
        try {
            const response = await fetch('/api/admin/form-questions', {
                cache: 'no-store'
            });
            if (!response.ok) {
                setNotice({
                    text: 'Unable to load form configuration.',
                    error: true
                });
                return;
            }
            const data = await response.json();
            var _data_sections, _data_questions;
            const next = {
                sections: (_data_sections = data.sections) !== null && _data_sections !== void 0 ? _data_sections : [],
                questions: cloneQuestions((_data_questions = data.questions) !== null && _data_questions !== void 0 ? _data_questions : [])
            };
            setSaved(next);
            setDraft(next);
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestionsManager.useEffect": ()=>{
            void load();
        }
    }["QuestionsManager.useEffect"], []);
    const hasChanges = JSON.stringify(saved) !== JSON.stringify(draft);
    const questionsIn = (sectionId)=>draft.questions.filter((question)=>question.section_id === sectionId).sort((a, b)=>a.display_order - b.display_order);
    function openSection(section) {
        var _section_id;
        setEditingSection((_section_id = section === null || section === void 0 ? void 0 : section.id) !== null && _section_id !== void 0 ? _section_id : newId());
        setSectionForm(section ? {
            title: section.title,
            description: section.description,
            active: section.active
        } : emptySection);
    }
    function applySection(event) {
        event.preventDefault();
        if (!editingSection || !sectionForm.title.trim()) return;
        setDraft((previous)=>{
            const exists = previous.sections.some((section)=>section.id === editingSection);
            const section = {
                id: editingSection,
                ...sectionForm,
                title: sectionForm.title.trim(),
                display_order: exists ? previous.sections.find((item)=>item.id === editingSection).display_order : (previous.sections.length + 1) * 10
            };
            return {
                ...previous,
                sections: exists ? previous.sections.map((item)=>item.id === editingSection ? section : item) : [
                    ...previous.sections,
                    section
                ]
            };
        });
        setEditingSection(null);
    }
    function openQuestion(question, sectionId) {
        var _draft_sections_;
        var _ref, _ref1;
        const targetSection = (_ref1 = (_ref = sectionId !== null && sectionId !== void 0 ? sectionId : question === null || question === void 0 ? void 0 : question.section_id) !== null && _ref !== void 0 ? _ref : (_draft_sections_ = draft.sections[0]) === null || _draft_sections_ === void 0 ? void 0 : _draft_sections_.id) !== null && _ref1 !== void 0 ? _ref1 : '';
        var _question_id;
        setEditingQuestion((_question_id = question === null || question === void 0 ? void 0 : question.id) !== null && _question_id !== void 0 ? _question_id : newId());
        setQuestionForm(question ? {
            ...question,
            options: [
                ...question.options
            ]
        } : emptyQuestion(targetSection, questionsIn(targetSection).length * 10 + 10));
        var _question_options_join;
        setOptionsText((_question_options_join = question === null || question === void 0 ? void 0 : question.options.join('\n')) !== null && _question_options_join !== void 0 ? _question_options_join : '');
    }
    function applyQuestion(event) {
        event.preventDefault();
        if (!editingQuestion || !questionForm.field_key || !questionForm.label) return;
        const question = {
            ...questionForm,
            id: editingQuestion,
            options: questionForm.type === 'select' ? optionsText.split('\n').map((value)=>value.trim()).filter(Boolean) : []
        };
        setDraft((previous)=>({
                ...previous,
                questions: previous.questions.some((item)=>item.id === editingQuestion) ? previous.questions.map((item)=>item.id === editingQuestion ? question : item) : [
                    ...previous.questions,
                    question
                ]
            }));
        setEditingQuestion(null);
    }
    function updateQuestion(name, value) {
        setQuestionForm((previous)=>({
                ...previous,
                [name]: value
            }));
    }
    function requestDelete(type, id) {
        setDeleteTarget({
            type,
            id
        });
        setDeleteText('');
    }
    function confirmDelete() {
        if (!deleteTarget || deleteText !== 'DELETE') return;
        if (deleteTarget.type === 'section' && questionsIn(deleteTarget.id).length) {
            setNotice({
                text: 'Move all questions out of this section before deleting it.',
                error: true
            });
            setDeleteTarget(null);
            return;
        }
        setDraft((previous)=>deleteTarget.type === 'section' ? {
                sections: previous.sections.filter((section)=>section.id !== deleteTarget.id),
                questions: previous.questions
            } : {
                sections: previous.sections,
                questions: previous.questions.filter((question)=>question.id !== deleteTarget.id)
            });
        setDeleteTarget(null);
    }
    function reorderSections(targetId) {
        if (!dragged || dragged.type !== 'section' || dragged.id === targetId) return;
        setDraft((previous)=>{
            const sections = [
                ...previous.sections
            ];
            const from = sections.findIndex((section)=>section.id === dragged.id);
            const to = sections.findIndex((section)=>section.id === targetId);
            const [item] = sections.splice(from, 1);
            sections.splice(to, 0, item);
            return {
                ...previous,
                sections: sections.map((section, index)=>({
                        ...section,
                        display_order: (index + 1) * 10
                    }))
            };
        });
        setDragged(null);
    }
    function moveQuestion(targetSectionId, targetQuestionId) {
        if (!dragged || dragged.type !== 'question' || dragged.id === targetQuestionId) return;
        setDraft((previous)=>{
            const moved = previous.questions.find((question)=>question.id === dragged.id);
            if (!moved) return previous;
            const source = previous.questions.filter((question)=>question.id !== moved.id);
            const destination = source.filter((question)=>question.section_id === targetSectionId);
            const targetIndex = targetQuestionId ? destination.findIndex((question)=>question.id === targetQuestionId) : destination.length;
            destination.splice(Math.max(targetIndex, 0), 0, {
                ...moved,
                section_id: targetSectionId
            });
            const ordered = [
                ...previous.sections.map((section)=>section.id),
                null
            ].flatMap((sectionId)=>sectionId === targetSectionId ? destination : source.filter((question)=>question.section_id === sectionId)).map((question, index)=>({
                    ...question,
                    display_order: (index + 1) * 10
                }));
            return {
                ...previous,
                questions: ordered
            };
        });
        setDragged(null);
    }
    async function saveChanges() {
        if (saving) return;
        setSaving(true);
        setNotice(null);
        const deletedSections = saved.sections.filter((section)=>!draft.sections.some((item)=>item.id === section.id)).map((section)=>section.id);
        const deletedQuestions = saved.questions.filter((question)=>!draft.questions.some((item)=>item.id === question.id)).map((question)=>question.id);
        try {
            const response = await fetch('/api/admin/form-questions', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sections: draft.sections,
                    questions: draft.questions,
                    deletedSectionIds: deletedSections,
                    deletedQuestionIds: deletedQuestions,
                    deleteConfirmation: deletedSections.length || deletedQuestions.length ? 'DELETE' : undefined
                })
            });
            const result = await response.json();
            if (!response.ok) {
                var _result_error;
                setNotice({
                    text: (_result_error = result.error) !== null && _result_error !== void 0 ? _result_error : 'Unable to save changes.',
                    error: true
                });
                return;
            }
            var _result_sections, _result_questions;
            const next = {
                sections: (_result_sections = result.sections) !== null && _result_sections !== void 0 ? _result_sections : [],
                questions: cloneQuestions((_result_questions = result.questions) !== null && _result_questions !== void 0 ? _result_questions : [])
            };
            setSaved(next);
            setDraft(next);
            setNotice({
                text: 'Changes saved successfully.'
            });
        } catch (e) {
            setNotice({
                text: 'Unable to save changes.',
                error: true
            });
        } finally{
            setSaving(false);
        }
    }
    var _questionForm_section_id, _questionForm_placeholder;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container admin-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "admin-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Form configuration"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 48,
                                columnNumber: 88
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Questions"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 48,
                                columnNumber: 133
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "admin-subtitle",
                                children: "Organize sections and questions shown on the public enquiry form."
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 48,
                                columnNumber: 151
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                        lineNumber: 48,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                onClick: ()=>openSection(),
                                disabled: loading || saving,
                                children: "+ Add Section"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 48,
                                columnNumber: 287
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>openQuestion(),
                                disabled: loading || saving,
                                children: "+ Add Question"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 48,
                                columnNumber: 396
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                        lineNumber: 48,
                        columnNumber: 256
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/QuestionsManager.tsx",
                lineNumber: 48,
                columnNumber: 50
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "admin-content-card questions-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "questions-toolbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: hasChanges ? 'Unsaved changes' : 'All changes saved'
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 49,
                                columnNumber: 95
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                disabled: !hasChanges || saving,
                                onClick: saveChanges,
                                children: saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BookLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookLoader"], {
                                    inline: true,
                                    text: "Saving..."
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 49,
                                    columnNumber: 255
                                }, this) : 'Save Changes'
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 49,
                                columnNumber: 162
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                        lineNumber: 49,
                        columnNumber: 60
                    }, this),
                    notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                        message: notice.text,
                        error: notice.error,
                        onClose: ()=>setNotice(null)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                        lineNumber: 49,
                        columnNumber: 337
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "questions-loading",
                        role: "status",
                        "aria-label": "Loading questions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonLine"], {
                                width: "35%",
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 49,
                                columnNumber: 514
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonLine"], {
                                width: "72%",
                                height: 16
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 49,
                                columnNumber: 554
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonLine"], {
                                width: "92%",
                                height: 16
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 49,
                                columnNumber: 594
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonLine"], {
                                width: "64%",
                                height: 16
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 49,
                                columnNumber: 634
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                        lineNumber: 49,
                        columnNumber: 434
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-sections-tree",
                        children: [
                            draft.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "form-section-editor".concat(section.active ? '' : ' is-disabled'),
                                    draggable: true,
                                    onDragStart: ()=>setDragged({
                                            type: 'section',
                                            id: section.id
                                        }),
                                    onDragOver: (event)=>event.preventDefault(),
                                    onDrop: ()=>reorderSections(section.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                            className: "form-section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "section-eyebrow",
                                                            children: "Section"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 384
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: section.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 426
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: section.description || 'No description'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 450
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 379
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "section-actions",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "status-badge",
                                                            children: section.active ? 'Active' : 'Disabled'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 537
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>openSection(section),
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 615
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>requestDelete('section', section.id),
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 687
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>openQuestion(undefined, section.id),
                                                            children: "+ Question"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 777
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 504
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 50,
                                            columnNumber: 339
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-question-list",
                                            children: [
                                                questionsIn(section.id).map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                        className: "section-question-row",
                                                        draggable: true,
                                                        onDragStart: (event)=>{
                                                            event.stopPropagation();
                                                            setDragged({
                                                                type: 'question',
                                                                id: question.id
                                                            });
                                                        },
                                                        onDragOver: (event)=>event.preventDefault(),
                                                        onDrop: ()=>moveQuestion(section.id, question.id),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: question.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                        lineNumber: 50,
                                                                        columnNumber: 1241
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: [
                                                                            question.field_key,
                                                                            " · ",
                                                                            question.type,
                                                                            " · ",
                                                                            question.required ? 'Required' : 'Optional',
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "question-status-badge ".concat(question.active ? 'is-active' : 'is-inactive'),
                                                                                children: question.active ? 'ACTIVE' : 'INACTIVE'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                                lineNumber: 50,
                                                                                columnNumber: 1368
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                        lineNumber: 50,
                                                                        columnNumber: 1274
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                lineNumber: 50,
                                                                columnNumber: 1236
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "question-actions",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>openQuestion(question),
                                                                        children: "Edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                        lineNumber: 50,
                                                                        columnNumber: 1555
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>requestDelete('question', question.id),
                                                                        children: "Delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                        lineNumber: 50,
                                                                        columnNumber: 1629
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                lineNumber: 50,
                                                                columnNumber: 1521
                                                            }, this)
                                                        ]
                                                    }, question.id, true, {
                                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 965
                                                    }, this)),
                                                !questionsIn(section.id).length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "empty-section",
                                                    onDragOver: (event)=>event.preventDefault(),
                                                    onDrop: ()=>moveQuestion(section.id),
                                                    children: "Drop questions here or add one."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 1775
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 50,
                                            columnNumber: 885
                                        }, this)
                                    ]
                                }, section.id, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 50,
                                    columnNumber: 74
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "form-section-editor unassigned-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                        className: "form-section-header",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "section-eyebrow",
                                                    children: "Not published"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 2048
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Unassigned questions"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 2096
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "These questions are retained but do not appear on the public form."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 2125
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 50,
                                            columnNumber: 2043
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                        lineNumber: 50,
                                        columnNumber: 2003
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-question-list",
                                        children: [
                                            questionsIn('').concat(draft.questions.filter((question)=>question.section_id === null).sort((a, b)=>a.display_order - b.display_order)).map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "section-question-row",
                                                    draggable: true,
                                                    onDragStart: ()=>setDragged({
                                                            type: 'question',
                                                            id: question.id
                                                        }),
                                                    onDragOver: (event)=>event.preventDefault(),
                                                    onDrop: ()=>moveQuestion(null, question.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: question.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                    lineNumber: 50,
                                                                    columnNumber: 2646
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: [
                                                                        question.field_key,
                                                                        " · ",
                                                                        question.type,
                                                                        " · ",
                                                                        question.required ? 'Required' : 'Optional',
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "question-status-badge ".concat(question.active ? 'is-active' : 'is-inactive'),
                                                                            children: question.active ? 'ACTIVE' : 'INACTIVE'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                            lineNumber: 50,
                                                                            columnNumber: 2773
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                    lineNumber: 50,
                                                                    columnNumber: 2679
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 2641
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "question-actions",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>openQuestion(question),
                                                                    children: "Edit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                    lineNumber: 50,
                                                                    columnNumber: 2960
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>requestDelete('question', question.id),
                                                                    children: "Delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                                    lineNumber: 50,
                                                                    columnNumber: 3034
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 2926
                                                        }, this)
                                                    ]
                                                }, question.id, true, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 2409
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "empty-section",
                                                onDragOver: (event)=>event.preventDefault(),
                                                onDrop: ()=>moveQuestion(null),
                                                children: "Drop questions here to unassign."
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                lineNumber: 50,
                                                columnNumber: 3144
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                        lineNumber: 50,
                                        columnNumber: 2213
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 50,
                                columnNumber: 1943
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                        lineNumber: 50,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/QuestionsManager.tsx",
                lineNumber: 49,
                columnNumber: 5
            }, this),
            editingSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "question-dialog",
                    onSubmit: applySection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: draft.sections.some((section)=>section.id === editingSection) ? 'Edit section' : 'Add section'
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 52,
                                    columnNumber: 147
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setEditingSection(null),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 52,
                                    columnNumber: 252
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 52,
                            columnNumber: 114
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "question-form-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "field-full",
                                    children: [
                                        "Title",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            value: sectionForm.title,
                                            onChange: (event)=>setSectionForm((previous)=>({
                                                        ...previous,
                                                        title: event.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 52,
                                            columnNumber: 406
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 52,
                                    columnNumber: 371
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "field-full",
                                    children: [
                                        "Description",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: sectionForm.description,
                                            onChange: (event)=>setSectionForm((previous)=>({
                                                        ...previous,
                                                        description: event.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 52,
                                            columnNumber: 592
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 52,
                                    columnNumber: 551
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: sectionForm.active,
                                            onChange: (event)=>setSectionForm((previous)=>({
                                                        ...previous,
                                                        active: event.target.checked
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 52,
                                            columnNumber: 750
                                        }, this),
                                        " Active"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 52,
                                    columnNumber: 743
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 52,
                            columnNumber: 335
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            children: "Apply to draft"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 52,
                            columnNumber: 921
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                    lineNumber: 52,
                    columnNumber: 56
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/QuestionsManager.tsx",
                lineNumber: 52,
                columnNumber: 24
            }, this),
            editingQuestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "question-dialog",
                    onSubmit: applyQuestion,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: draft.questions.some((question)=>question.id === editingQuestion) ? 'Edit question' : 'Add question'
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 149
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setEditingQuestion(null),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 260
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 53,
                            columnNumber: 116
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "question-form-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Field key",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            pattern: "[A-Za-z][A-Za-z0-9_]*",
                                            value: questionForm.field_key,
                                            disabled: draft.questions.some((question)=>question.id === editingQuestion),
                                            onChange: (event)=>updateQuestion('field_key', event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 396
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 380
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Label",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            value: questionForm.label,
                                            onChange: (event)=>updateQuestion('label', event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 642
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 630
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Section",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: (_questionForm_section_id = questionForm.section_id) !== null && _questionForm_section_id !== void 0 ? _questionForm_section_id : '',
                                            onChange: (event)=>updateQuestion('section_id', event.target.value || null),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Unassigned"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 896
                                                }, this),
                                                draft.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: section.id,
                                                        children: section.title
                                                    }, section.id, false, {
                                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 963
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 773
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 759
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Type",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: questionForm.type,
                                            onChange: (event)=>updateQuestion('type', event.target.value),
                                            children: [
                                                'text',
                                                'number',
                                                'email',
                                                'date',
                                                'textarea',
                                                'select',
                                                'phone'
                                            ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: type
                                                }, type, false, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 1254
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 1061
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 1050
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Max length",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "number",
                                            min: "1",
                                            max: "10000",
                                            value: questionForm.max_length,
                                            onChange: (event)=>updateQuestion('max_length', Number(event.target.value))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 1324
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 1307
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Placeholder",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: (_questionForm_placeholder = questionForm.placeholder) !== null && _questionForm_placeholder !== void 0 ? _questionForm_placeholder : '',
                                            onChange: (event)=>updateQuestion('placeholder', event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 1511
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 1493
                                }, this),
                                questionForm.type === 'select' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "field-full",
                                    children: [
                                        "Options, one per line",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: optionsText,
                                            onChange: (event)=>setOptionsText(event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 1723
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 1672
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: questionForm.active,
                                            onChange: (event)=>updateQuestion('active', event.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 1826
                                        }, this),
                                        " Active"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 1819
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: questionForm.required,
                                            onChange: (event)=>updateQuestion('required', event.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 1970
                                        }, this),
                                        " Required"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 1963
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: questionForm.allow_alphabets,
                                            onChange: (event)=>updateQuestion('allow_alphabets', event.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 2120
                                        }, this),
                                        " Allow alphabets"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 2113
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: questionForm.allow_numbers,
                                            onChange: (event)=>updateQuestion('allow_numbers', event.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 2291
                                        }, this),
                                        " Allow numbers"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 2284
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: questionForm.allow_special_characters,
                                            onChange: (event)=>updateQuestion('allow_special_characters', event.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 53,
                                            columnNumber: 2456
                                        }, this),
                                        " Allow special characters"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 2449
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 53,
                            columnNumber: 344
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            children: "Apply to draft"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 53,
                            columnNumber: 2653
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                    lineNumber: 53,
                    columnNumber: 57
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/QuestionsManager.tsx",
                lineNumber: 53,
                columnNumber: 25
            }, this),
            deleteTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "question-dialog",
                    role: "dialog",
                    "aria-modal": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "Delete ",
                                deleteTarget.type,
                                "?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 54,
                            columnNumber: 123
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                deleteTarget.type === 'section' ? 'A section can only be deleted after all its questions are reassigned.' : 'This question will be permanently deleted when you save changes.',
                                " Type ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "DELETE"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 54,
                                    columnNumber: 344
                                }, this),
                                " to confirm."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 54,
                            columnNumber: 159
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            autoFocus: true,
                            value: deleteText,
                            onChange: (event)=>setDeleteText(event.target.value),
                            placeholder: "Type DELETE",
                            "aria-label": "Type DELETE to confirm"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 54,
                            columnNumber: 383
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dialog-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setDeleteTarget(null),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 54,
                                    columnNumber: 569
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "danger-button",
                                    disabled: deleteText !== 'DELETE',
                                    onClick: confirmDelete,
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 54,
                                    columnNumber: 644
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 54,
                            columnNumber: 537
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                    lineNumber: 54,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/QuestionsManager.tsx",
                lineNumber: 54,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/QuestionsManager.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
_s(QuestionsManager, "x6u/k2SGWhE5SOddG80ark2cevA=");
_c = QuestionsManager;
var _c;
__turbopack_context__.k.register(_c, "QuestionsManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/SensitiveAdminGate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SensitiveAdminGate",
    ()=>SensitiveAdminGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const authorizationDuration = 15 * 60 * 1000;
function SensitiveAdminGate(param) {
    let { children, resource } = param;
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('checking');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensitiveAdminGate.useEffect": ()=>{
            let active = true;
            async function checkAuthorization() {
                const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
                const { data: { user } } = await client.auth.getUser();
                if (!active) return;
                if (!(user === null || user === void 0 ? void 0 : user.email)) {
                    window.location.href = "/admin/login?next=".concat(encodeURIComponent(window.location.pathname));
                    return;
                }
                setEmail(user.email);
                const key = "admin-sensitive-auth:".concat(user.id, ":").concat(resource);
                const authorizedAt = Number(sessionStorage.getItem(key));
                setStatus(authorizedAt && Date.now() - authorizedAt < authorizationDuration ? 'authorized' : 'required');
            }
            void checkAuthorization();
            return ({
                "SensitiveAdminGate.useEffect": ()=>{
                    active = false;
                }
            })["SensitiveAdminGate.useEffect"];
        }
    }["SensitiveAdminGate.useEffect"], [
        resource
    ]);
    async function verify(event) {
        event.preventDefault();
        setError('');
        const { error: signInError } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])().auth.signInWithPassword({
            email,
            password
        });
        setPassword('');
        if (signInError) {
            setError('Password verification failed. Access was not granted.');
            return;
        }
        const { data: { user } } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])().auth.getUser();
        if (!user) {
            setError('Your session is no longer valid. Please sign in again.');
            return;
        }
        sessionStorage.setItem("admin-sensitive-auth:".concat(user.id, ":").concat(resource), String(Date.now()));
        setStatus('authorized');
    }
    if (status === 'checking') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container admin-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    if (status === 'authorized') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container admin-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card sensitive-auth-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Verify your identity"
                }, void 0, false, {
                    fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
                    lineNumber: 55,
                    columnNumber: 96
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "grid",
                    onSubmit: verify,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "field",
                            children: [
                                "Password",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "error",
                            role: "alert",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/admin/SensitiveAdminGate.tsx",
                            lineNumber: 55,
                            columnNumber: 394
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(SensitiveAdminGate, "6qTvSz5VY5MRa3aTJZAK2L2SOVU=");
_c = SensitiveAdminGate;
var _c;
__turbopack_context__.k.register(_c, "SensitiveAdminGate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_b3324542._.js.map