import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getMaintenanceSettings } from '@/lib/site-settings';
import {
  MAINTENANCE_BYPASS_COOKIE,
  createBypassToken,
  verifyPassword,
} from '@/lib/maintenance/security';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null) as { password?: string } | null;
    const password = body?.password;

    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { ok: false, error: 'Please enter a password.' },
        { status: 400 }
      );
    }

    const settings = await getMaintenanceSettings();

    // Verify password against stored hash or default password
    const isValid = await verifyPassword(password, settings.maintenance_password_hash);
    if (!isValid) {
      // Artificial delay to prevent brute-force attacks
      await new Promise(resolve => setTimeout(resolve, 600));
      return NextResponse.json(
        { ok: false, error: 'Incorrect maintenance access password. Please try again.' },
        { status: 401 }
      );
    }

    // Generate authenticated bypass token
    const token = await createBypassToken();
    const cookieStore = await cookies();

    cookieStore.set(MAINTENANCE_BYPASS_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return NextResponse.json({
      ok: true,
      message: 'Access granted. Redirecting to portal...',
      redirect: '/',
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: 'An error occurred during verification.' },
      { status: 500 }
    );
  }
}
