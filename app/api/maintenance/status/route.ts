import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getMaintenanceSettings } from '@/lib/site-settings';
import { isMaintenanceActive, isMaintenanceScheduled } from '@/lib/site-settings-shared';
import {
  MAINTENANCE_BYPASS_COOKIE,
  verifyBypassToken,
} from '@/lib/maintenance/security';

export async function GET() {
  const settings = await getMaintenanceSettings();
  const cookieStore = await cookies();
  const token = cookieStore.get(MAINTENANCE_BYPASS_COOKIE)?.value;
  const isBypassed = await verifyBypassToken(token);

  return NextResponse.json({
    active: isMaintenanceActive(settings),
    scheduled: isMaintenanceScheduled(settings),
    message: settings.maintenance_message,
    start: settings.maintenance_start,
    end: settings.maintenance_end,
    password_protection_enabled: settings.password_protection_enabled,
    is_bypassed: isBypassed,
  }, {
    headers: { 'Cache-Control': 'no-store' }
  });
}
