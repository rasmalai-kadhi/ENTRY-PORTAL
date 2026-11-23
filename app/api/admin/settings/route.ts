import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';
import { getMaintenanceSettings, saveMaintenanceSettings } from '@/lib/site-settings';
import { hashPassword } from '@/lib/maintenance/security';
import type { MaintenanceSettings } from '@/lib/site-settings-shared';

function cleanDate(value: unknown) {
  if (value === null || value === '' || value === undefined) return null;
  const date = new Date(String(value));
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

export async function GET() {
  if (!await getAdminContext()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const settings = await getMaintenanceSettings();
    return NextResponse.json({
      ...settings,
      maintenance_password_hash: undefined,
      has_custom_password: Boolean(settings.maintenance_password_hash && settings.maintenance_password_hash.trim().length > 0),
    }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return NextResponse.json({ error: 'Unable to load site settings.' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const admin = await getAdminContext();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  if (!body || typeof body.maintenance_enabled !== 'boolean') {
    return NextResponse.json({ error: 'Invalid maintenance settings.' }, { status: 400 });
  }
  const start = cleanDate(body.maintenance_start);
  const end = cleanDate(body.maintenance_end);
  if (start === undefined || end === undefined) {
    return NextResponse.json({ error: 'Enter valid maintenance dates.' }, { status: 400 });
  }
  if (start && end && new Date(end) <= new Date(start)) {
    return NextResponse.json({ error: 'End time must be after start time.' }, { status: 400 });
  }
  const message = String(body.maintenance_message ?? '').trim().slice(0, 500);

  const updates: Partial<MaintenanceSettings> = {
    maintenance_enabled: body.maintenance_enabled,
    maintenance_message: message,
    maintenance_start: start,
    maintenance_end: end,
    password_protection_enabled: typeof body.password_protection_enabled === 'boolean' ? body.password_protection_enabled : true,
  };

  if (typeof body.maintenance_password === 'string' && body.maintenance_password.trim().length > 0) {
    const trimmedPass = body.maintenance_password.trim();
    if (trimmedPass.length < 4) {
      return NextResponse.json({ error: 'Maintenance password must be at least 4 characters long.' }, { status: 400 });
    }
    updates.maintenance_password_hash = await hashPassword(trimmedPass);
  }

  try {
    const saved = await saveMaintenanceSettings(updates);
    return NextResponse.json({
      ...saved,
      maintenance_password_hash: undefined,
      has_custom_password: Boolean(saved.maintenance_password_hash && saved.maintenance_password_hash.trim().length > 0),
    });
  } catch {
    return NextResponse.json({ error: 'Unable to save site settings.' }, { status: 500 });
  }
}