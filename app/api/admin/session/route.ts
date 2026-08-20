import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';

export async function GET() {
  const context = await getAdminContext();
  return NextResponse.json({ authenticated: Boolean(context), email: context?.user.email ?? null });
}
