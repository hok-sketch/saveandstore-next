'use client';
import Link from 'next/link';
import { t, locales, type Locale } from '@/lib/i18n';
import { useState } from 'react';

export default function Header({ locale }: { locale: Locale }){
  const [open, setOpen] = useState(false);
  return (
    <header className="header container">
      <Link href={`/${locale}`} className="logo">SaveAndStore</Link>
      <button className="toggle" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>☰</button>
      <nav style={{display: open ? 'flex' : undefined}}>
        <a href="#pricing">{t(locale,'nav_pricing')}</a>
        <a href="#contact">{t(locale,'nav_contact')}</a>
        <div className="lang" role="group" aria-label="Language">
          {locales.map(l => (
            <Link key={l} href={`/${l}`}>
<<<<<<< HEAD
 <button aria-pressed={l===locale}><span aria-hidden>🌐</span> {l.toUpperCase()}</button>
=======
              <button aria-pressed={l===locale}><span aria-hidden>🌐</span> {l.toUpperCase()}</button>
>>>>>>> 23af227 (feat: initial SaveAndStore Next.js project)
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
