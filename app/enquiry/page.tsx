import { EnquiryForm } from '@/components/enquiry/EnquiryForm';
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientIp } from '@/lib/request/client-ip';
import { getMaintenanceSettings } from '@/lib/site-settings';
import { isMaintenanceActive } from '@/lib/site-settings-shared';
import {
  MAINTENANCE_BYPASS_COOKIE,
  verifyBypassToken,
} from '@/lib/maintenance/security';
import { getAdminContext } from '@/lib/auth/admin';
import { MaintenanceBypassBanner } from '@/components/site/MaintenanceBypassBanner';

export default async function EnquiryPage() {
  const maintenance = await getMaintenanceSettings().catch(() => null);
  const isMaintenance = maintenance && isMaintenanceActive(maintenance);

  let hasBypass = false;
  if (isMaintenance) {
    const cookieStore = await cookies();
    const token = cookieStore.get(MAINTENANCE_BYPASS_COOKIE)?.value;
    hasBypass = await verifyBypassToken(token);

    if (!hasBypass) {
      const admin = await getAdminContext().catch(() => null);
      if (!admin) {
        redirect('/maintenance');
      }
      hasBypass = true;
    }
  }

  const clientIp = getClientIp(await headers());
  return (
    <>
      {isMaintenance && hasBypass && <MaintenanceBypassBanner />}
      <main className="container enquiry-page">
        <h1 className="visually-hidden">Self Declaration Enquiry Form</h1>
        <EnquiryForm initialClientIp={clientIp} />
      </main>
    </>
  );
}
