'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    const form = new FormData(event.currentTarget);
    const client = createClient();
    const { error: signInError } = await client.auth.signInWithPassword({ email: String(form.get('email')), password: String(form.get('password')) });
    if (signInError) setError('Invalid email or password.');
    else {
      const sessionResponse = await fetch('/api/admin/session', { cache: 'no-store' });
      if (!sessionResponse.ok || !(await sessionResponse.json()).authenticated) {
        await client.auth.signOut();
        setError('This account is authenticated but is not authorized for the admin panel.');
      } else router.push(new URLSearchParams(window.location.search).get('next') || '/admin');
    }
    setIsSubmitting(false);
  }

  return <form className="card grid admin-login" onSubmit={submit}>
    <h1>Admin Login</h1>
    <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div>
    <div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" required /></div>
    {error && <p className="error">{error}</p>}
    <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Signing in...' : 'Sign in'}</Button>
  </form>;
}
