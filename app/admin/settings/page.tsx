import { DocumentSettingsPreview } from '@/components/admin/DocumentSettingsPreview';
import { getAdminContext } from '@/lib/auth/admin';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Document & PDF Settings | Eduspray Admin',
  description: 'Inspect computer-generated bill output and print preview calibration.',
};

export default async function SettingsPage() {
  if (!await getAdminContext()) redirect('/admin/login');
  return (
    <main className="container admin-shell settings-page">
      <header className="admin-header">
        <div>
          <p className="eyebrow">Admin settings</p>
          <h1>Document &amp; PDF Engine</h1>
          <p className="admin-subtitle">
            Inspect computer-generated bill output and live print preview calibration.
          </p>
        </div>
      </header>
      <DocumentSettingsPreview />
    </main>
  );
}

