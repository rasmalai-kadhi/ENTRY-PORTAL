'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { adminSessionRemaining } from '@/lib/auth/session-ttl';
import { Toast } from '@/components/ui/Toast';

export function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [editingDisplayName, setEditingDisplayName] = useState(false);
  const [displayNameInput, setDisplayNameInput] = useState('');
  const [savingDisplayName, setSavingDisplayName] = useState(false);
  const [notice, setNotice] = useState('');
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    fetch('/api/admin/session', { cache: 'no-store' }).then(async response => {
      if (response.ok) {
        const data = await response.json() as { email?: string; displayName?: string };
        setEmail(data.email ?? '');
        setDisplayName(data.displayName ?? '');
        setDisplayNameInput(data.displayName ?? '');
      }
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

  async function saveDisplayName() {
    const newName = displayNameInput.trim();
    if (!newName) return;
    setSavingDisplayName(true);
    try {
      const response = await fetch('/api/admin/session', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayName: newName }),
      });
      if (response.ok) {
        setDisplayName(newName);
        setEditingDisplayName(false);
        setNotice('Display name saved.');
      } else setNotice('Unable to save display name.');
    } catch { setNotice('Unable to save display name.');
    } finally {
      setSavingDisplayName(false);
    }
  }

  async function signOut() {
    if (signingOut) return;
    setSigningOut(true);
    await createClient().auth.signOut();
    router.replace('/admin/login');
  }

  return <><header className="admin-topbar">
    <div className="admin-topbar-inner">
      <Link className="brand-lockup admin-brand" href="/admin" aria-label="Eduspray dashboard"><Image src="/images/logo.png" alt="Eduspray" width={200} height={64} className="brand-mark" /></Link>
      <nav className="admin-nav" aria-label="Admin navigation">
        <Link className={pathname === '/admin' ? 'active' : ''} href="/admin">Dashboard</Link>
        <Link className={pathname === '/admin/enquiries' ? 'active' : ''} href="/admin/enquiries">Enquiries</Link>
        <Link className={pathname === '/admin/questions' ? 'active' : ''} href="/admin/questions">Questions</Link>
      </nav>
      <div className="profile-wrap">
        <button className="profile-button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span className="avatar">{email ? email[0].toUpperCase() : 'A'}</span><span className="profile-label">Profile</span></button>
        {menuOpen && (
          <div className="profile-menu">
            <span>{displayName || email || 'Admin'}</span>
            {editingDisplayName ? (
              <div className="profile-display-name-editor">
                <input
                  autoFocus
                  type="text"
                  value={displayNameInput}
                  onChange={e => setDisplayNameInput(e.target.value)}
                  placeholder="Enter display name"
                  disabled={savingDisplayName}
                />
                <div className="profile-editor-actions">
                  <button onClick={saveDisplayName} disabled={savingDisplayName || !displayNameInput.trim()}>
                    {savingDisplayName ? 'Saving...' : 'Save'}
                  </button>
                  <button onClick={() => { setEditingDisplayName(false); setDisplayNameInput(displayName); }} disabled={savingDisplayName}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <button className="profile-menu-link" onClick={() => { router.push('/admin/settings'); setMenuOpen(false); }}>PDF field mapping</button>
                <button className="profile-menu-link" onClick={() => setEditingDisplayName(true)}>Edit display name</button>
                  <button onClick={signOut} disabled={signingOut}>{signingOut ? 'Signing out...' : 'Log out'}</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  </header>{notice && <Toast message={notice} onClose={() => setNotice('')} />}</>;
}