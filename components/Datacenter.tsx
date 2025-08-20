'use client';
import { t, type Locale } from '@/lib/i18n';

export default function Datacenter({ locale }: { locale: Locale }){
  return (
    <section className="section dc">
      <div className="container">
        <h2 style={{fontSize:'var(--fs-h2)', marginBottom:12}}>{t(locale,'dc_title')}</h2>
        <div className="grid">
          <div><ul><li>{t(locale,'dc_1')}</li></ul></div>
          <div><ul><li>{t(locale,'dc_2')}</li></ul></div>
          <div><ul><li>{t(locale,'dc_3')}</li></ul></div>
          <div><ul><li>{t(locale,'dc_4')}</li></ul></div>
        </div>
      </div>
    </section>
  );
}
