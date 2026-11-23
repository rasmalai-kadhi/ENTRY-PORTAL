import './globals.css';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { SiteHeader } from '@/components/site/SiteHeader';
import { getClientIp } from '@/lib/request/client-ip';
import { getMaintenanceSettings } from '@/lib/site-settings';

export const metadata: Metadata = {
  title: 'Eduspray Enquiry System',
  description: 'Digital enquiry and entry-form management system',
  icons: { icon: '/images/favicon.png' },
  openGraph: { title: 'Eduspray', description: 'Digital enquiry and entry-form management system' },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const maintenance = await getMaintenanceSettings().catch(() => null);
  return <html lang="en"><body suppressHydrationWarning><SiteHeader clientIp={getClientIp(requestHeaders)} maintenance={maintenance} />{children}</body></html>;
}
