'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { adminSessionRemaining } from '@/lib/auth/session-ttl';

export function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch('/api/admin/session', { cache: 'no-store' }).then(async response => {
      if (response.ok) setEmail((await response.json()).email ?? '');
    });
    const supabase = createClient();
    let timer: number | undefined;
    void supabase.auth.getSession().then(({ data }) => {
      if (!data.session) return;
      const remaining = adminSessionRemaining(data.session.access_token);
      if (remaining <= 0) { void supabase.auth.signOut(); router.replace('/admin/login'); return; }
      timer = window.setTimeout(() => { void supabase.auth.signOut(); router.replace('/admin/login'); }, remaining);
    });
    return () => { if (timer !== undefined) window.clearTimeout(timer); };
  }, [router]);

  async function signOut() {
    await createClient().auth.signOut();
    router.replace('/admin/login');
  }

  return <header className="admin-topbar">
    <div className="admin-topbar-inner">
      <Link className="brand-lockup admin-brand" href="/admin" aria-label="Eduspray dashboard"><Image src="/images/logo.png" alt="Eduspray" width={200} height={64} className="brand-mark" /></Link>
      <nav className="admin-nav" aria-label="Admin navigation">
        <Link className={pathname === '/admin' ? 'active' : ''} href="/admin">Dashboard</Link>
        <Link className={pathname === '/admin/enquiries' ? 'active' : ''} href="/admin/enquiries">Enquiries</Link>
        <Link className={pathname === '/admin/questions' ? 'active' : ''} href="/admin/questions">Questions</Link>
      </nav>
      <div className="profile-wrap">
        <button className="profile-button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span className="avatar">{email ? email[0].toUpperCase() : 'A'}</span><span className="profile-label">Profile</span></button>
        {menuOpen && <div className="profile-menu"><span>{email || 'Authenticated admin'}</span><Link className="profile-menu-link" href="/admin/settings" onClick={() => setMenuOpen(false)}>PDF field mapping</Link><button onClick={signOut}>Log out</button></div>}
      </div>
    </div>
  </header>;
}