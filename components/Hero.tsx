'use client';
import { t, type Locale } from '@/lib/i18n';

export default function Hero({ locale }: { locale: Locale }){
  return (
    <section className="hero section">
      <div className="container">
        <h1>{t(locale,'hero_title')}</h1>
        <p style={{margin:'8px 0 20px', color:'#6b7280'}}>{t(locale,'slogan')}</p>
        <div className="cta">
          <a className="btn" href="#pricing">{t(locale,'hero_cta_pricing')}</a>
          <a className="btn outline" href="#contact">{t(locale,'hero_cta_quote')}</a>
        </div>
      </div>
    </section>
  );
}
