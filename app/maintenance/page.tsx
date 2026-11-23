import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getMaintenanceSettings } from '@/lib/site-settings';
import {
  MAINTENANCE_BYPASS_COOKIE,
  verifyBypassToken,
} from '@/lib/maintenance/security';
import { MaintenanceView } from '@/components/site/MaintenanceView';

export const metadata: Metadata = {
  title: 'System Maintenance | Eduspray Enquiry Portal',
  description: 'The enquiry portal is currently undergoing scheduled maintenance. Please check back shortly.',
};

export default async function MaintenancePage() {
  const settings = await getMaintenanceSettings();
  const cookieStore = await cookies();
  const token = cookieStore.get(MAINTENANCE_BYPASS_COOKIE)?.value;
  const isBypassed = await verifyBypassToken(token);

  return <MaintenanceView settings={settings} initialIsBypassed={isBypassed} />;
}
