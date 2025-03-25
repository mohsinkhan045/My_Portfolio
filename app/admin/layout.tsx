import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Muhammad Mohsin Saleem',
  description: 'Admin dashboard to manage contact form submissions',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 