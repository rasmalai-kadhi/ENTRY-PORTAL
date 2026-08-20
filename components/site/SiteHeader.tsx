'use client';

import { AdminHeader } from '@/components/admin/AdminHeader';
import { usePathname } from 'next/navigation';

export function SiteHeader({ clientIp }: { clientIp: string }) {
  const pathname = usePathname();
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) return <AdminHeader />;

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a className="brand-lockup" href="/enquiry"><span className="brand-mark">E</span><span><strong>eduspray</strong><small>Enquiry portal</small></span></a>
        <span className="client-ip" title="Your network address">IP: {clientIp}</span>
      </div>
    </header>
  );
}
