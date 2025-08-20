'use client';
import { t, type Locale } from '@/lib/i18n';

export default function Footer({ locale }: { locale: Locale }){
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        © {year} {t(locale,'footer_copy')}
      </div>
    </footer>
  );
}
