'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function MaintenanceBypassBanner() {
  const router = useRouter();
  const [exiting, setExiting] = useState(false);

  async function handleExit() {
    setExiting(true);
    try {
      await fetch('/api/maintenance/revoke', { method: 'POST' });
      router.push('/maintenance');
      router.refresh();
    } catch {
      setExiting(false);
    }
  }

  return (
    <aside className="maintenance-staff-banner" aria-label="Maintenance Bypass Notice">
      <div className="container maintenance-staff-banner-inner">
        <div className="maint-banner-text">
          <span className="maint-banner-icon" aria-hidden="true">⚡</span>
          <strong>Maintenance Mode Active:</strong>
          <span>Viewing via authorized staff bypass clearance.</span>
        </div>
        <div className="maint-banner-actions">
          <Link href="/maintenance" className="maint-banner-link">
            Maintenance Status
          </Link>
          <button
            type="button"
            onClick={handleExit}
            disabled={exiting}
            className="maint-banner-exit"
          >
            {exiting ? 'Exiting...' : 'Exit Bypass'}
          </button>
        </div>
      </div>
    </aside>
  );
}
