import type { Metadata } from 'next';
import { AdminHeader } from '@/components/admin/AdminHeader';

export const metadata: Metadata = {
  title: 'Eduspray Admin',
  description: 'Admin dashboard for Eduspray enquiry management',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
}
