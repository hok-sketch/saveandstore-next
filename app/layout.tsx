import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SaveAndStore — Servers in Yerevan',
  description: 'SaveAndStore: servers and IT services in Armenia'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hy">
      <body>{children}</body>
    </html>
  );
}
