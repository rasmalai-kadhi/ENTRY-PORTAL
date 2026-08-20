'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Row = { id: string; enquiry_number: string; name: string; mobile1: string; course: string; created_at: string; status: string };
export function EnquiryList() {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>([]); const [search, setSearch] = useState(''); const [status, setStatus] = useState(''); const [page, setPage] = useState(1); const [total, setTotal] = useState(0);
  useEffect(() => { const params = new URLSearchParams({ search, status, page: String(page) }); fetch(`/api/admin/enquiries?${params}`).then(async response => { if (response.status === 401) router.replace('/admin/login'); else if (response.ok) { const result = await response.json(); setRows(result.data); setTotal(result.total); } }); }, [page, router, search, status]);
  return <main className="container admin-shell"><header className="admin-header"><div><Link href="/admin">Dashboard</Link><h1>Enquiries</h1></div></header><div className="filters"><input aria-label="Search enquiries" placeholder="Search number, name, or mobile" value={search} onChange={event => { setPage(1); setSearch(event.target.value); }} /><select aria-label="Filter by status" value={status} onChange={event => { setPage(1); setStatus(event.target.value); }}><option value="">All statuses</option><option value="submitted">Submitted</option></select></div><section className="card table-wrap"><table><thead><tr><th>Enquiry Number</th><th>Candidate Name</th><th>Mobile</th><th>Course</th><th>Submitted Date</th><th>Status</th><th>Actions</th></tr></thead><tbody>{rows.map(row => <tr key={row.id}><td>{row.enquiry_number}</td><td>{row.name}</td><td>{row.mobile1}</td><td>{row.course}</td><td>{new Date(row.created_at).toLocaleString()}</td><td>{row.status}</td><td className="actions"><Link href={`/admin/enquiries/${row.id}`}>View</Link><a href={`/api/admin/enquiries/${row.id}/pdf`} target="_blank" rel="noreferrer">View PDF</a><a href={`/api/admin/enquiries/${row.id}/download`}>Download</a><a href={`/api/admin/enquiries/${row.id}/pdf`} target="_blank" rel="noreferrer">Print</a></td></tr>)}</tbody></table></section><nav className="pagination"><button className="btn-secondary" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button><span>Page {page} of {Math.max(1, Math.ceil(total / 20))}</span><button className="btn-secondary" disabled={page >= Math.ceil(total / 20)} onClick={() => setPage(page + 1)}>Next</button></nav></main>;
}
