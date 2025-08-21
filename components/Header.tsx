// components/Header.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { t, locales, type Locale } from '@/lib/i18n';

const flagBy: Record<Locale, string> = { hy: '🇦🇲', ru: '🇷🇺', en: '🇬🇧' };
const labelBy: Record<Locale, string> = { hy: 'HY', ru: 'RU', en: 'EN' };

type Theme = 'light' | 'dark';
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  return prefers ? 'light' : 'dark';
}

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="header container">
      {/* Кнопка темы (зафиксирована через CSS .theme-toggle) */}
      <button
        className="theme-toggle"
        aria-label={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
        title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
        onClick={() => setTheme(nextTheme)}
      >
        <span aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
      </button>

      <Link href={`/${locale}`} className="logo">SaveAndStore</Link>
      <button className="toggle" aria-expanded={open} onClick={() => setOpen(v => !v)}>☰</button>
      <nav style={{ display: open ? 'flex' : undefined }}>
        <a href="#pricing">{t(locale, 'nav_pricing')}</a>
        <a href="#contact">{t(locale, 'nav_contact')}</a>
        <div className="lang" role="group" aria-label="Language">
          {locales.map((l) => (
            <Link key={l} href={`/${l}`} aria-label={labelBy[l]}>
              <button className="flag-btn" aria-pressed={l === locale} title={labelBy[l]}>
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