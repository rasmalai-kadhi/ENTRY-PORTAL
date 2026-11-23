import { AdminMaintenancePanel } from '@/components/admin/AdminMaintenancePanel';
import { getAdminContext } from '@/lib/auth/admin';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance Mode | Eduspray Admin',
  description: 'Manage portal maintenance mode, schedules, and password protection.',
};

export default async function AdminMaintenancePage() {
  if (!(await getAdminContext())) {
    redirect('/admin/login');
  }

  return (
    <main className="container admin-shell settings-page">
      <header className="admin-header">
        <div>
          <p className="eyebrow">Portal Administration</p>
          <h1>Maintenance Mode &amp; Access Control</h1>
          <p className="admin-subtitle">
            Configure system maintenance windows, announcements, and password-protected staff bypass.
          </p>
        </div>
      </header>
      <AdminMaintenancePanel />
    </main>
  );
}
