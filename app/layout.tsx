import './globals.css';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { SiteHeader } from '@/components/site/SiteHeader';

export const metadata: Metadata = {
  title: 'Eduspray Enquiry System',
  description: 'Digital enquiry and entry-form management system',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader requestHeaders={await headers()} />{children}</body></html>;
}
