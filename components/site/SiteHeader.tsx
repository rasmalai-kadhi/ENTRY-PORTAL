'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function SiteHeader({ clientIp }: { clientIp: string }) {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a className="brand-lockup site-brand-logo" href="/enquiry" aria-label="Eduspray home"><Image src="/images/logo.png" alt="Eduspray" width={200} height={64} className="brand-mark" /></a>
        <span className="client-ip" title="Your network address">IP: {clientIp}</span>
      </div>
    </header>
  );
}
