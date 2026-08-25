'use client';

import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';

type Props = { children: ReactNode; resource: string };
const authorizationDuration = 15 * 60 * 1000;

export function SensitiveAdminGate({ children, resource }: Props) {
  const [status, setStatus] = useState<'checking' | 'required' | 'authorized'>('checking');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    async function checkAuthorization() {
      const client = createClient();
      const { data: { user } } = await client.auth.getUser();
      if (!active) return;
      if (!user?.email) {
        window.location.href = `/admin/login?next=${encodeURIComponent(window.location.pathname)}`;
        return;
      }
      setEmail(user.email);
      const key = `admin-sensitive-auth:${user.id}:${resource}`;
      const authorizedAt = Number(sessionStorage.getItem(key));
      setStatus(authorizedAt && Date.now() - authorizedAt < authorizationDuration ? 'authorized' : 'required');
    }
    void checkAuthorization();
    return () => { active = false; };
  }, [resource]);

  async function verify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const { error: signInError } = await createClient().auth.signInWithPassword({ email, password });
    setPassword('');
    if (signInError) {
      setError('Password verification failed. Access was not granted.');
      return;
    }
    const { data: { user } } = await createClient().auth.getUser();
    if (!user) {
      setError('Your session is no longer valid. Please sign in again.');
      return;
    }
    sessionStorage.setItem(`admin-sensitive-auth:${user.id}:${resource}`, String(Date.now()));
    setStatus('authorized');
  }

  if (status === 'checking') return <main className="container admin-shell"><p>Checking authorization...</p></main>;
  if (status === 'authorized') return <>{children}</>;
  return <main className="container admin-shell"><section className="card sensitive-auth-card"><h1>Verify your identity</h1><p>Enter your current account password to access {resource}.</p><form className="grid" onSubmit={verify}><label className="field">Password<input autoFocus required type="password" value={password} onChange={event => setPassword(event.target.value)} /></label>{error && <p className="error" role="alert">{error}</p>}<Button type="submit">Verify password</Button></form></section></main>;
}
