'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { isMaintenanceScheduled, type MaintenanceSettings } from '@/lib/site-settings-shared';

export function SiteHeader({ clientIp, maintenance }: { clientIp: string; maintenance: MaintenanceSettings | null }) {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;
  const isMaintPage = pathname === '/maintenance';
  const scheduled = !isMaintPage && maintenance && isMaintenanceScheduled(maintenance);

  return (
    <><header className="site-header"><div className="container site-header-inner"><a className="brand-lockup site-brand-logo" href="/enquiry" aria-label="Eduspray home"><Image src="/images/logo.png" alt="Eduspray" width={200} height={64} className="brand-mark" /></a><span className="client-ip" title="Your network address">IP: {clientIp}</span></div></header>{scheduled && <div className="maintenance-banner"><div className="container"><strong>Scheduled maintenance:</strong> {maintenance.maintenance_message || 'The enquiry portal will be temporarily unavailable.'}<span>Start: {new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(maintenance.maintenance_start!))}{maintenance.maintenance_end ? ` | End: ${new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(maintenance.maintenance_end))}` : ''}</span></div></div>}</>
  );
}
