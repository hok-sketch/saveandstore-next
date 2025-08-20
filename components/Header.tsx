'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { t, locales, type Locale } from '@/lib/i18n';

const flagBy: Record<Locale, string> = {
  hy: '🇦🇲',
  ru: '🇷🇺',
  en: '🇬🇧',
};
const labelBy: Record<Locale, string> = {
  hy: 'ARM',
  ru: 'RU',
  en: 'EN',
};

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header container">
      <Link href={`/${locale}`} className="logo">SaveAndStore</Link>
      <button
        className="toggle"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        ☰
      </button>
      <nav style={{ display: open ? 'flex' : undefined }}>
        <a href="#pricing">{t(locale, 'nav_pricing')}</a>
        <a href="#contact">{t(locale, 'nav_contact')}</a>
        <div className="lang" role="group" aria-label="Language">
          {locales.map(l => (
            <Link key={l} href={`/${l}`} aria-label={labelBy[l]}>
              <button
                className="flag-btn"
                aria-pressed={l === locale}
                title={labelBy[l]}
              >
                <span aria-hidden="true">{flagBy[l]}</span>
                <span className="sr-only">{labelBy[l]}</span>
              </button>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
