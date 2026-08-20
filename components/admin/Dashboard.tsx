'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

type Stats = { total: number; today: number; recent: Array<{ id: string; enquiry_number: string; name: string; course: string; created_at: string; status: string }> };

export function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  useEffect(() => { fetch('/api/admin/stats').then(async response => { if (response.status === 401) router.replace('/admin/login'); else if (response.ok) setStats(await response.json()); }); }, [router]);
  async function signOut() { await createClient().auth.signOut(); router.replace('/admin/login'); }

  return <main className="container admin-shell">
    <header className="admin-header"><div><p className="eyebrow">Eduspray</p><h1>Admin Dashboard</h1></div><button className="btn-secondary" onClick={signOut}>Sign out</button></header>
    <div className="stat-grid"><div className="card"><span>Total submissions</span><strong>{stats?.total ?? '...'}</strong></div><div className="card"><span>Today's submissions</span><strong>{stats?.today ?? '...'}</strong></div></div>
    <section className="card"><div className="section-heading"><h2>Recent submissions</h2><Link className="btn-primary" href="/admin/enquiries">View all</Link></div><div className="table-wrap"><table><thead><tr><th>Enquiry Number</th><th>Candidate Name</th><th>Course</th><th>Submitted Date</th><th>Status</th></tr></thead><tbody>{stats?.recent.map(item => <tr key={item.id}><td><Link href={`/admin/enquiries/${item.id}`}>{item.enquiry_number}</Link></td><td>{item.name}</td><td>{item.course}</td><td>{new Date(item.created_at).toLocaleString()}</td><td>{item.status}</td></tr>)}</tbody></table></div></section>
  </main>;
}
