'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch('/api/admin/session', { cache: 'no-store' }).then(async response => {
      if (response.ok) setEmail((await response.json()).email ?? '');
    });
  }, []);

  async function signOut() {
    await createClient().auth.signOut();
    router.replace('/admin/login');
  }

  return <header className="admin-topbar">
    <div className="admin-topbar-inner">
      <Link className="brand-lockup admin-brand" href="/admin"><span className="brand-mark">E</span><span><strong>eduspray</strong><small>Admin portal</small></span></Link>
      <nav className="admin-nav" aria-label="Admin navigation">
        <Link className={pathname === '/admin' ? 'active' : ''} href="/admin">Dashboard</Link>
        <Link className={pathname === '/admin/enquiries' ? 'active' : ''} href="/admin/enquiries">Enquiries</Link>
        <Link className={pathname === '/admin/search' ? 'active' : ''} href="/admin/search">Search</Link>
      </nav>
      <div className="profile-wrap">
        <button className="profile-button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span className="avatar">{email ? email[0].toUpperCase() : 'A'}</span><span className="profile-label">Profile</span><span aria-hidden="true">⌄</span></button>
        {menuOpen && <div className="profile-menu"><span>{email || 'Authenticated admin'}</span><button onClick={signOut}>Log out</button></div>}
      </div>
    </div>
  </header>;
}