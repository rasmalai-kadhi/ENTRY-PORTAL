'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdminGreeting } from '@/components/admin/AdminGreeting';

type Stats = { total: number; today: number; pastHour: number; recent: Array<{ id: string; enquiry_number: string; name: string; course: string; created_at: string; status: string }> };

export function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = new URLSearchParams();
    if (search.trim()) params.set('search', search.trim());
    setLoadError(false);
    fetch(`/api/admin/stats?${params}`)
      .then(async response => {
        if (response.status === 401) {
          router.replace('/admin/login');
          return;
        }
        if (!response.ok) throw new Error('Unable to load dashboard.');
        setStats(await response.json());
      })
      .catch(() => setLoadError(true));
  }, [router, search]);

  return (
    <main className="container admin-shell">
      <header className="admin-header">
        <div>
          <p className="eyebrow">Eduspray control centre</p>
          <h1><AdminGreeting /></h1>
          <p className="admin-subtitle">Keep track of new student enquiries and follow up with every prospective learner.</p>
        </div>
      </header>

      {loadError ? <div className="admin-alert" role="alert">We could not load the dashboard right now. Please refresh and try again.</div> : null}

      <section className="stat-grid" aria-label="Enquiry overview">
        <div className="admin-stat admin-stat-total">
          <div><span>Total submissions</span><strong>{stats?.total ?? '...'}</strong><small>All submissions received</small></div>
        </div>
        <div className="admin-stat admin-stat-today">
          <div><span>Submissions today</span><strong>{stats?.today ?? '...'}</strong><small>New submissions today</small></div>
        </div>
        <div className="admin-stat admin-stat-rate">
          <div><span>Past hour</span><strong>{stats?.pastHour ?? '...'}</strong><small>Submissions in the last 60 minutes</small></div>
        </div>
      </section>

      <section className="admin-content-card">
        <div className="section-heading">
          <div><p className="section-eyebrow">Inbox</p><h2>Recent submissions</h2></div>
          <Link className="text-link" href="/admin/enquiries">View all enquiries <span aria-hidden="true">→</span></Link>
        </div>
          <div className="table-wrap">
          <table>
            <thead><tr><th>Enquiry ID</th><th>Name</th><th>Course</th><th>Submitted At</th><th>Action</th></tr></thead>
            <tbody>
              {stats?.recent.map(item => <tr key={item.id}><td><Link className="enquiry-number" href={`/admin/enquiries/${item.id}`}>{item.enquiry_number}</Link></td><td><strong className="candidate-name">{item.name}</strong></td><td>{item.course}</td><td>{new Date(item.created_at).toLocaleString()}</td><td><Link className="dashboard-view-button" href={`/admin/enquiries/${item.id}`}>View</Link></td></tr>)}
              {stats && stats.recent.length === 0 ? <tr><td className="empty-state" colSpan={5}>No recent enquiries yet.</td></tr> : null}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
