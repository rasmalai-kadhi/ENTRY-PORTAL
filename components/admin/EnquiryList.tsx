'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Toast } from '@/components/ui/Toast';

type Row = { id: string; enquiry_number: string; name: string; mobile1: string; email: string; course: string; created_at: string; status: string };
const pageSize = 20;
const dateOptions = [['', 'All dates'], ['today', 'Today'], ['yesterday', 'Yesterday'], ['last7', 'Last 7 days'], ['last30', 'Last 30 days'], ['last12months', 'Last 12 months'], ['custom', 'Custom range']];
export function EnquiryList({ title = 'View all enquiries', searchOnly = false }: { title?: string; searchOnly?: boolean }) {
  const router = useRouter(); const searchParams = useSearchParams(); const [deletedNotice, setDeletedNotice] = useState(searchParams.get('deleted') === '1');
  const [rows, setRows] = useState<Row[]>([]); const [search, setSearch] = useState(''); const [status, setStatus] = useState(''); const [page, setPage] = useState(1); const [total, setTotal] = useState(0);
  const [datePreset, setDatePreset] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [exportState, setExportState] = useState<'idle' | 'loading' | 'error'>('idle');
  useEffect(() => {
    const params = new URLSearchParams({ search, status, datePreset, fromDate, toDate, page: String(page), pageSize: String(pageSize) });
    setLoading(true);
    fetch(`/api/admin/enquiries?${params}`).then(async response => { if (response.status === 401) router.replace('/admin/login'); else if (response.ok) { const result = await response.json(); setRows(result.data); setTotal(result.total); } }).finally(() => setLoading(false));
  }, [datePreset, fromDate, page, router, search, status, toDate]);
  useEffect(() => { if (searchParams.get('deleted') === '1') router.replace('/admin/enquiries'); }, [router, searchParams]);
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const activeFilters = Boolean(search || status || datePreset);
  function clearFilters() { setSearch(''); setStatus(''); setDatePreset(''); setFromDate(''); setToDate(''); setPage(1); }
  async function exportCsv() {
    setExportState('loading');
    const params = new URLSearchParams({ search, status, datePreset, fromDate, toDate });
    try { const response = await fetch(`/api/admin/enquiries/export?${params}`); if (!response.ok) throw new Error(); const blob = await response.blob(); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `enquiries-${new Date().toISOString().slice(0, 10)}.csv`; link.click(); URL.revokeObjectURL(url); setExportState('idle'); } catch { setExportState('error'); }
  }
  return <main className="admin-shell"><div className="container"><header className="admin-header"><div><p className="eyebrow">Workspace</p><h1>{title}</h1><p className="admin-subtitle">Find, review, and follow up on every student enquiry.</p></div></header>{deletedNotice && <Toast message="Enquiry deleted successfully." onClose={() => setDeletedNotice(false)} />}<div className="filters"><input aria-label="Search enquiries" placeholder={searchOnly ? 'Search ID, name, course, mobile, or email' : 'Search by ID, name, course, mobile, or email'} value={search} onChange={event => { setPage(1); setSearch(event.target.value); }} /><select aria-label="Date filter" value={datePreset} onChange={event => { setPage(1); setDatePreset(event.target.value); }} >{dateOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select>{datePreset === 'custom' && <><label>From <input aria-label="From date" type="date" value={fromDate} onChange={event => { setPage(1); setFromDate(event.target.value); }} /></label><label>To <input aria-label="To date" type="date" value={toDate} onChange={event => { setPage(1); setToDate(event.target.value); }} /></label></>}<select aria-label="Filter by status" value={status} onChange={event => { setPage(1); setStatus(event.target.value); }}><option value="">All statuses</option><option value="submitted">Submitted</option></select><button className="btn-secondary" type="button" onClick={clearFilters} disabled={!activeFilters}>Clear{activeFilters ? ' *' : ''}</button><button className="btn-primary" type="button" onClick={exportCsv} disabled={exportState === 'loading'}>{exportState === 'loading' ? 'Exporting...' : 'Export CSV'}</button></div>{exportState === 'error' && <Toast error message="Unable to export enquiries." onClose={() => setExportState('idle')} />}<section className="admin-content-card table-wrap"><table><thead><tr><th>Enquiry ID</th><th>Name</th><th>Course</th><th>Submitted At</th><th>Action</th></tr></thead><tbody>{rows.map(row => <tr key={row.id}><td><Link className="enquiry-number" href={`/admin/enquiries/${row.id}`}>{row.enquiry_number}</Link></td><td><strong className="candidate-name">{row.name}</strong><small className="table-secondary">{row.email}</small></td><td>{row.course}</td><td>{new Date(row.created_at).toLocaleString()}</td><td><Link className="dashboard-view-button" href={`/admin/enquiries/${row.id}`}>View</Link></td></tr>)}{rows.length === 0 && <tr><td className="empty-state" colSpan={5}>{loading ? 'Loading enquiries...' : activeFilters ? 'No enquiries match your filters.' : 'No enquiries have been submitted yet.'}</td></tr>}</tbody></table></section><nav className="pagination"><button className="btn-secondary" disabled={page === 1 || loading} onClick={() => setPage(page - 1)}>Previous</button><span>{activeFilters && <strong className="active-filter-indicator">Filtered</strong>} Page {page} of {pageCount}</span><button className="btn-secondary" disabled={page >= pageCount || loading} onClick={() => setPage(page + 1)}>Next</button></nav></div></main>;
}