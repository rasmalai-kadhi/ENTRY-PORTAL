module.exports = [
"[project]/components/admin/EnquiryList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnquiryList",
    ()=>EnquiryList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Toast.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const pageSize = 20;
const dateOptions = [
    [
        '',
        'All dates'
    ],
    [
        'today',
        'Today'
    ],
    [
        'yesterday',
        'Yesterday'
    ],
    [
        'last7',
        'Last 7 days'
    ],
    [
        'last30',
        'Last 30 days'
    ],
    [
        'last12months',
        'Last 12 months'
    ],
    [
        'custom',
        'Custom range'
    ]
];
function EnquiryList({ title = 'View all enquiries', searchOnly = false }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [deletedNotice, setDeletedNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(searchParams.get('deleted') === '1');
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [datePreset, setDatePreset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [fromDate, setFromDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [toDate, setToDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exportState, setExportState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = window.setTimeout(()=>{
            const params = new URLSearchParams({
                search,
                status,
                datePreset,
                fromDate,
                toDate,
                page: String(page),
                pageSize: String(pageSize)
            });
            setLoading(true);
            fetch(`/api/admin/enquiries?${params}`).then(async (response)=>{
                if (response.status === 401) router.replace('/admin/login');
                else if (response.ok) {
                    const result = await response.json();
                    setRows(result.data);
                    setTotal(result.total);
                }
            }).finally(()=>setLoading(false));
        }, search ? 250 : 0);
        return ()=>window.clearTimeout(timer);
    }, [
        datePreset,
        fromDate,
        page,
        router,
        search,
        status,
        toDate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (searchParams.get('deleted') === '1') router.replace('/admin/enquiries');
    }, [
        router,
        searchParams
    ]);
    const pageCount = Math.max(1, Math.ceil(total / pageSize));
    const activeFilters = Boolean(search || status || datePreset);
    function clearFilters() {
        setSearch('');
        setStatus('');
        setDatePreset('');
        setFromDate('');
        setToDate('');
        setPage(1);
    }
    async function exportCsv() {
        setExportState('loading');
        const params = new URLSearchParams({
            search,
            status,
            datePreset,
            fromDate,
            toDate
        });
        try {
            const response = await fetch(`/api/admin/enquiries/export?${params}`);
            if (!response.ok) throw new Error();
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
            link.click();
            URL.revokeObjectURL(url);
            setExportState('idle');
        } catch  {
            setExportState('error');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "admin-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "admin-header",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Workspace"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/EnquiryList.tsx",
                                lineNumber: 36,
                                columnNumber: 105
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/admin/EnquiryList.tsx",
                                lineNumber: 36,
                                columnNumber: 141
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "admin-subtitle",
                                children: "Find, review, and follow up on every student enquiry."
                            }, void 0, false, {
                                fileName: "[project]/components/admin/EnquiryList.tsx",
                                lineNumber: 36,
                                columnNumber: 157
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/EnquiryList.tsx",
                        lineNumber: 36,
                        columnNumber: 100
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/admin/EnquiryList.tsx",
                    lineNumber: 36,
                    columnNumber: 67
                }, this),
                deletedNotice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                    message: "Enquiry deleted successfully.",
                    onClose: ()=>setDeletedNotice(false)
                }, void 0, false, {
                    fileName: "[project]/components/admin/EnquiryList.tsx",
                    lineNumber: 36,
                    columnNumber: 277
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "filters",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            "aria-label": "Search enquiries",
                            placeholder: searchOnly ? 'Search ID, name, course, mobile, or email' : 'Search by ID, name, course, mobile, or email',
                            value: search,
                            onChange: (event)=>{
                                setPage(1);
                                setSearch(event.target.value);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/admin/EnquiryList.tsx",
                            lineNumber: 36,
                            columnNumber: 392
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            "aria-label": "Date filter",
                            value: datePreset,
                            onChange: (event)=>{
                                setPage(1);
                                setDatePreset(event.target.value);
                            },
                            children: dateOptions.map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: value,
                                    children: label
                                }, value, false, {
                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                    lineNumber: 36,
                                    columnNumber: 794
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/admin/EnquiryList.tsx",
                            lineNumber: 36,
                            columnNumber: 633
                        }, this),
                        datePreset === 'custom' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "From ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            "aria-label": "From date",
                                            type: "date",
                                            value: fromDate,
                                            onChange: (event)=>{
                                                setPage(1);
                                                setFromDate(event.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/EnquiryList.tsx",
                                            lineNumber: 36,
                                            columnNumber: 897
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                    lineNumber: 36,
                                    columnNumber: 885
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "To ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            "aria-label": "To date",
                                            type: "date",
                                            value: toDate,
                                            onChange: (event)=>{
                                                setPage(1);
                                                setToDate(event.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/EnquiryList.tsx",
                                            lineNumber: 36,
                                            columnNumber: 1045
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                    lineNumber: 36,
                                    columnNumber: 1035
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            "aria-label": "Filter by status",
                            value: status,
                            onChange: (event)=>{
                                setPage(1);
                                setStatus(event.target.value);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "All statuses"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                    lineNumber: 36,
                                    columnNumber: 1301
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "submitted",
                                    children: "Submitted"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                    lineNumber: 36,
                                    columnNumber: 1339
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/EnquiryList.tsx",
                            lineNumber: 36,
                            columnNumber: 1181
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-secondary",
                            type: "button",
                            onClick: clearFilters,
                            disabled: !activeFilters,
                            children: [
                                "Clear",
                                activeFilters ? ' *' : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/EnquiryList.tsx",
                            lineNumber: 36,
                            columnNumber: 1392
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary",
                            type: "button",
                            onClick: exportCsv,
                            disabled: exportState === 'loading',
                            children: exportState === 'loading' ? 'Exporting...' : 'Export CSV'
                        }, void 0, false, {
                            fileName: "[project]/components/admin/EnquiryList.tsx",
                            lineNumber: 36,
                            columnNumber: 1530
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/EnquiryList.tsx",
                    lineNumber: 36,
                    columnNumber: 367
                }, this),
                exportState === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                    error: true,
                    message: "Unable to export enquiries.",
                    onClose: ()=>setExportState('idle')
                }, void 0, false, {
                    fileName: "[project]/components/admin/EnquiryList.tsx",
                    lineNumber: 36,
                    columnNumber: 1735
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "admin-content-card table-wrap",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Enquiry ID"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/EnquiryList.tsx",
                                            lineNumber: 36,
                                            columnNumber: 1897
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/EnquiryList.tsx",
                                            lineNumber: 36,
                                            columnNumber: 1916
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Course"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/EnquiryList.tsx",
                                            lineNumber: 36,
                                            columnNumber: 1929
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Submitted At"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/EnquiryList.tsx",
                                            lineNumber: 36,
                                            columnNumber: 1944
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Action"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/EnquiryList.tsx",
                                            lineNumber: 36,
                                            columnNumber: 1965
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                    lineNumber: 36,
                                    columnNumber: 1893
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/EnquiryList.tsx",
                                lineNumber: 36,
                                columnNumber: 1886
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: [
                                    rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "enquiry-number",
                                                        href: `/admin/enquiries/${row.id}`,
                                                        children: row.enquiry_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/EnquiryList.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 2038
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 2034
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "candidate-name",
                                                            children: row.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/EnquiryList.tsx",
                                                            lineNumber: 36,
                                                            columnNumber: 2143
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            className: "table-secondary",
                                                            children: row.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/EnquiryList.tsx",
                                                            lineNumber: 36,
                                                            columnNumber: 2197
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 2139
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: row.course
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 2256
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: new Date(row.created_at).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 2277
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "dashboard-view-button",
                                                        href: `/admin/enquiries/${row.id}`,
                                                        children: "View"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/EnquiryList.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 2333
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 2329
                                                }, this)
                                            ]
                                        }, row.id, true, {
                                            fileName: "[project]/components/admin/EnquiryList.tsx",
                                            lineNumber: 36,
                                            columnNumber: 2017
                                        }, this)),
                                    rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "empty-state",
                                            colSpan: 5,
                                            children: loading ? 'Loading enquiries...' : activeFilters ? 'No enquiries match your filters.' : 'No enquiries have been submitted yet.'
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/EnquiryList.tsx",
                                            lineNumber: 36,
                                            columnNumber: 2458
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/EnquiryList.tsx",
                                        lineNumber: 36,
                                        columnNumber: 2454
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/EnquiryList.tsx",
                                lineNumber: 36,
                                columnNumber: 1993
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/EnquiryList.tsx",
                        lineNumber: 36,
                        columnNumber: 1879
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/admin/EnquiryList.tsx",
                    lineNumber: 36,
                    columnNumber: 1828
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "pagination",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-secondary",
                            disabled: page === 1 || loading,
                            onClick: ()=>setPage(page - 1),
                            children: "Previous"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/EnquiryList.tsx",
                            lineNumber: 36,
                            columnNumber: 2692
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                activeFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "active-filter-indicator",
                                    children: "Filtered"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/EnquiryList.tsx",
                                    lineNumber: 36,
                                    columnNumber: 2834
                                }, this),
                                " Page ",
                                page,
                                " of ",
                                pageCount
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/EnquiryList.tsx",
                            lineNumber: 36,
                            columnNumber: 2810
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-secondary",
                            disabled: page >= pageCount || loading,
                            onClick: ()=>setPage(page + 1),
                            children: "Next"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/EnquiryList.tsx",
                            lineNumber: 36,
                            columnNumber: 2930
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/EnquiryList.tsx",
                    lineNumber: 36,
                    columnNumber: 2664
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/EnquiryList.tsx",
            lineNumber: 36,
            columnNumber: 40
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/admin/EnquiryList.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=components_admin_EnquiryList_tsx_79a727d4._.js.map