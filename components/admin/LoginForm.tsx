'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    const form = new FormData(event.currentTarget);
    const { error: signInError } = await createClient().auth.signInWithPassword({ email: String(form.get('email')), password: String(form.get('password')) });
    if (signInError) setError('Invalid email or password.');
    else router.push('/admin');
    setIsSubmitting(false);
  }

  return <form className="card grid admin-login" onSubmit={submit}>
    <h1>Admin Login</h1>
    <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div>
    <div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" required /></div>
    {error && <p className="error">{error}</p>}
    <button className="btn-primary" disabled={isSubmitting}>{isSubmitting ? 'Signing in...' : 'Sign in'}</button>
  </form>;
}
