import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { MAINTENANCE_BYPASS_COOKIE } from '@/lib/maintenance/security';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(MAINTENANCE_BYPASS_COOKIE);
  return NextResponse.json({ ok: true, message: 'Bypass clearance revoked.' });
}
