// app/[locale]/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { locales, defaultLocale, type Locale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'SaveAndStore — Servers in Yerevan',
  description: 'SaveAndStore: servers and IT services in Armenia',
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const locale = locales.includes(params.locale) ? params.locale : defaultLocale;
  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} />
        {children}
      </body>
    </html>
  );
}