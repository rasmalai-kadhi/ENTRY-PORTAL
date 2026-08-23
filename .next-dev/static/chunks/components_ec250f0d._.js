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
"[project]/components/admin/QuestionsManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionsManager",
    ()=>QuestionsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const empty = {
    field_key: '',
    label: '',
    type: 'text',
    required: false,
    allow_alphabets: true,
    allow_numbers: true,
    allow_special_characters: true,
    max_length: 255,
    options: [],
    display_order: 0,
    active: true,
    placeholder: ''
};
const clone = (questions)=>questions.map((question)=>({
            ...question,
            options: [
                ...question.options
            ]
        }));
function QuestionsManager() {
    _s();
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingSnapshot, setEditingSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(empty);
    const [optionsText, setOptionsText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragged, setDragged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteTarget, setDeleteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteText, setDeleteText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function load() {
        const response = await fetch('/api/admin/form-questions', {
            cache: 'no-store'
        });
        if (response.ok) {
            var _data;
            const data = clone((_data = (await response.json()).data) !== null && _data !== void 0 ? _data : []);
            setSaved(data);
            setDraft(clone(data));
        } else setNotice({
            text: 'Unable to load questions.',
            error: true
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestionsManager.useEffect": ()=>{
            void load();
        }
    }["QuestionsManager.useEffect"], []);
    const hasChanges = JSON.stringify(saved) !== JSON.stringify(draft);
    const visible = draft.filter((question)=>"".concat(question.field_key, " ").concat(question.label).toLowerCase().includes(search.toLowerCase()));
    function open(question) {
        const value = question ? {
            ...question,
            options: [
                ...question.options
            ]
        } : {
            ...empty,
            display_order: draft.length ? Math.max(...draft.map((item)=>item.display_order)) + 10 : 10
        };
        var _question_id;
        setEditingId((_question_id = question === null || question === void 0 ? void 0 : question.id) !== null && _question_id !== void 0 ? _question_id : "new-".concat(Date.now()));
        setEditingSnapshot(question ? {
            ...question,
            options: [
                ...question.options
            ]
        } : null);
        setForm(value);
        var _question_options_join;
        setOptionsText((_question_options_join = question === null || question === void 0 ? void 0 : question.options.join('\n')) !== null && _question_options_join !== void 0 ? _question_options_join : '');
    }
    function update(name, value) {
        setForm((previous)=>({
                ...previous,
                [name]: value
            }));
    }
    function cancelEdit() {
        if (editingId === null || editingId === void 0 ? void 0 : editingId.startsWith('new-')) setDraft((previous)=>previous.filter((question)=>question.id !== editingId));
        else if (editingSnapshot) setDraft((previous)=>previous.map((question)=>question.id === editingId ? editingSnapshot : question));
        setEditingId(null);
        setEditingSnapshot(null);
        setForm(empty);
        setOptionsText('');
    }
    function applyEdit(event) {
        event.preventDefault();
        if (!editingId) return;
        const question = {
            ...form,
            options: form.type === 'select' ? optionsText.split('\n').map((value)=>value.trim()).filter(Boolean) : [],
            id: editingId
        };
        setDraft((previous)=>previous.some((item)=>item.id === editingId) ? previous.map((item)=>item.id === editingId ? question : item) : [
                ...previous,
                question
            ]);
        setEditingId(null);
        setEditingSnapshot(null);
        setForm(empty);
        setOptionsText('');
    }
    function requestRemove(question) {
        setDeleteTarget(question);
        setDeleteText('');
    }
    function removeConfirmed() {
        if (!deleteTarget || deleteText !== 'DELETE') return;
        if (editingId === deleteTarget.id) cancelEdit();
        setDraft((previous)=>previous.filter((question)=>question.id !== deleteTarget.id));
        setDeleteTarget(null);
        setDeleteText('');
        setNotice({
            text: 'Question marked for deletion. Save Changes to apply it.'
        });
    }
    function drop(targetId) {
        if (!dragged || dragged === targetId) return;
        const next = [
            ...draft
        ];
        const from = next.findIndex((item)=>item.id === dragged);
        const to = next.findIndex((item)=>item.id === targetId);
        const [item] = next.splice(from, 1);
        next.splice(to, 0, item);
        setDraft(next.map((question, index)=>({
                ...question,
                display_order: (index + 1) * 10
            })));
        setDragged(null);
    }
    async function saveChanges() {
        setSaving(true);
        setNotice(null);
        const savedIds = new Set(saved.map((question)=>question.id));
        const deletedIds = saved.filter((question)=>!draft.some((item)=>item.id === question.id)).map((question)=>question.id);
        const questions = draft.map((param)=>{
            let { created_at: _created, updated_at: _updated, ...question } = param;
            return savedIds.has(question.id) ? question : {
                ...question,
                id: undefined
            };
        });
        const response = await fetch('/api/admin/form-questions', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                questions,
                deletedIds,
                deleteConfirmation: deletedIds.length ? 'DELETE' : undefined
            })
        });
        if (!response.ok) {
            var _error;
            setNotice({
                text: (_error = (await response.json()).error) !== null && _error !== void 0 ? _error : 'Unable to save changes.',
                error: true
            });
            setSaving(false);
            return;
        }
        var _data;
        const data = clone((_data = (await response.json()).data) !== null && _data !== void 0 ? _data : []);
        setSaved(data);
        setDraft(clone(data));
        setNotice({
            text: 'Changes saved successfully'
        });
        setSaving(false);
    }
    var _form_placeholder;
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
                                lineNumber: 38,
                                columnNumber: 88
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Questions"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 38,
                                columnNumber: 133
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "admin-subtitle",
                                children: "Manage the questions shown on the public enquiry form."
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 38,
                                columnNumber: 151
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                        lineNumber: 38,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>open(),
                        children: "Add question"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                        lineNumber: 38,
                        columnNumber: 245
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/QuestionsManager.tsx",
                lineNumber: 38,
                columnNumber: 50
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "admin-content-card questions-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "questions-toolbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                "aria-label": "Search questions",
                                placeholder: "Search questions",
                                value: search,
                                onChange: (event)=>setSearch(event.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 39,
                                columnNumber: 95
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "questions-save-area",
                                children: [
                                    hasChanges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "unsaved-indicator",
                                        children: "Unsaved changes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                        lineNumber: 39,
                                        columnNumber: 282
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "secondary",
                                        disabled: !hasChanges || saving,
                                        onClick: saveChanges,
                                        children: saving ? 'Saving...' : 'Save Changes'
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                        lineNumber: 39,
                                        columnNumber: 341
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                lineNumber: 39,
                                columnNumber: 230
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                        lineNumber: 39,
                        columnNumber: 60
                    }, this),
                    notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: notice.error ? 'admin-alert admin-alert-error' : 'admin-alert',
                        role: "status",
                        children: notice.text
                    }, void 0, false, {
                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                        lineNumber: 39,
                        columnNumber: 495
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Order"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                lineNumber: 40,
                                                columnNumber: 53
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Question"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                lineNumber: 40,
                                                columnNumber: 67
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Type"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                lineNumber: 40,
                                                columnNumber: 84
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Required"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                lineNumber: 40,
                                                columnNumber: 97
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Validation"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                lineNumber: 40,
                                                columnNumber: 114
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                lineNumber: 40,
                                                columnNumber: 133
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                lineNumber: 40,
                                                columnNumber: 148
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                        lineNumber: 40,
                                        columnNumber: 49
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 40,
                                    columnNumber: 42
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: visible.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: editingId === question.id ? 'question-row-editing' : '',
                                            draggable: !editingId,
                                            onDragStart: ()=>setDragged(question.id),
                                            onDragOver: (event)=>event.preventDefault(),
                                            onDrop: ()=>drop(question.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 453
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: question.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 477
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            className: "question-key",
                                                            children: question.field_key
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 510
                                                        }, this),
                                                        editingId === question.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "editing-badge",
                                                            children: "Editing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 600
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 473
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: question.type
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 652
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: question.required ? 'Yes' : 'No'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 676
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        question.max_length,
                                                        " chars",
                                                        question.type === 'number' ? ', numeric' : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 719
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "status-badge",
                                                        children: question.active ? 'Active' : 'Disabled'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 806
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 802
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "question-actions",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>open(question),
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 923
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>requestRemove(question),
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 989
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 890
                                                }, this)
                                            ]
                                        }, question.id, true, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 40,
                                            columnNumber: 218
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 40,
                                    columnNumber: 177
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 40,
                            columnNumber: 35
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/QuestionsManager.tsx",
                        lineNumber: 40,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/QuestionsManager.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, this),
            editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "question-dialog",
                    onSubmit: applyEdit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: editingSnapshot ? 'Edit question' : 'Add question'
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 139
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: cancelEdit,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 200
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 42,
                            columnNumber: 106
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
                                            value: form.field_key,
                                            disabled: !!editingSnapshot,
                                            onChange: (event)=>update('field_key', event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 42,
                                            columnNumber: 316
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 300
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Label",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            value: form.label,
                                            onChange: (event)=>update('label', event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 42,
                                            columnNumber: 498
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 486
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Type",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form.type,
                                            onChange: (event)=>{
                                                update('type', event.target.value);
                                                if (event.target.value !== 'select') setOptionsText('');
                                            },
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
                                                    lineNumber: 42,
                                                    columnNumber: 849
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 42,
                                            columnNumber: 610
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 599
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Max length",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "number",
                                            min: "1",
                                            max: "10000",
                                            value: form.max_length,
                                            onChange: (event)=>update('max_length', Number(event.target.value))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 42,
                                            columnNumber: 919
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 902
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "field-full",
                                    children: [
                                        "Placeholder",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: (_form_placeholder = form.placeholder) !== null && _form_placeholder !== void 0 ? _form_placeholder : '',
                                            onChange: (event)=>update('placeholder', event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 42,
                                            columnNumber: 1113
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 1072
                                }, this),
                                form.type === 'select' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "field-full",
                                    children: [
                                        "Options, one per line",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: optionsText,
                                            onChange: (event)=>setOptionsText(event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 42,
                                            columnNumber: 1301
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 1250
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.active,
                                            onChange: (event)=>update('active', event.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 42,
                                            columnNumber: 1404
                                        }, this),
                                        " Active"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 1397
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.required,
                                            onChange: (event)=>update('required', event.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 42,
                                            columnNumber: 1532
                                        }, this),
                                        " Required"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 1525
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.allow_alphabets,
                                            onChange: (event)=>update('allow_alphabets', event.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 42,
                                            columnNumber: 1666
                                        }, this),
                                        " Allow alphabets"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 1659
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.allow_numbers,
                                            onChange: (event)=>update('allow_numbers', event.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 42,
                                            columnNumber: 1821
                                        }, this),
                                        " Allow numbers"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 1814
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.allow_special_characters,
                                            onChange: (event)=>update('allow_special_characters', event.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                                            lineNumber: 42,
                                            columnNumber: 1970
                                        }, this),
                                        " Allow special characters"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 42,
                                    columnNumber: 1963
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 42,
                            columnNumber: 264
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            children: "Apply to draft"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 42,
                            columnNumber: 2151
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                    lineNumber: 42,
                    columnNumber: 51
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/QuestionsManager.tsx",
                lineNumber: 42,
                columnNumber: 19
            }, this),
            deleteTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "question-dialog",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "delete-question-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "delete-question-title",
                            children: "Delete question?"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 43,
                            columnNumber: 163
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "This question will be permanently deleted when you save changes. Type ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "DELETE"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 43,
                                    columnNumber: 288
                                }, this),
                                " to confirm."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 43,
                            columnNumber: 215
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            autoFocus: true,
                            value: deleteText,
                            onChange: (event)=>setDeleteText(event.target.value),
                            placeholder: "Type DELETE",
                            "aria-label": "Type DELETE to confirm"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 43,
                            columnNumber: 327
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
                                    lineNumber: 43,
                                    columnNumber: 513
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "danger-button",
                                    disabled: deleteText !== 'DELETE',
                                    onClick: removeConfirmed,
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                                    lineNumber: 43,
                                    columnNumber: 588
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/QuestionsManager.tsx",
                            lineNumber: 43,
                            columnNumber: 481
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/QuestionsManager.tsx",
                    lineNumber: 43,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/QuestionsManager.tsx",
                lineNumber: 43,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/QuestionsManager.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_s(QuestionsManager, "HDYbXLUyWqiKzqySXtm/SCz93cY=");
_c = QuestionsManager;
var _c;
__turbopack_context__.k.register(_c, "QuestionsManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_ec250f0d._.js.map