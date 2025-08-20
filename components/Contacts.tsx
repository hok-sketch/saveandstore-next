'use client';
import { t, type Locale } from '@/lib/i18n';
import { useEffect } from 'react';

export default function Contacts({ locale }: { locale: Locale }){
  useEffect(()=>{
    // noop
  },[]);

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 style={{fontSize:'var(--fs-h2)', marginBottom:12}}>{t(locale,'contacts_title')}</h2>
        <div className="layout">
          <form className="form">
            <label>{t(locale,'form_name')}<input required placeholder=""/></label>
            <label>{t(locale,'form_contact')}<input required placeholder=""/></label>
            <label>{t(locale,'form_message')}<textarea rows={4} placeholder=""></textarea></label>
            <button className="btn">{t(locale,'form_submit')}</button>
          </form>
          <div className="map">
            <iframe title="Yerevan map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=44.44,40.14,44.56,40.22&layer=mapnik&marker=40.177,44.513"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div>
            <p><strong>{t(locale,'contacts_address')}:</strong> Yerevan, Armenia</p>
            <p><strong>{t(locale,'contacts_hours')}:</strong> Mon–Fri 09:00–18:00</p>
            <p><strong>{t(locale,'contacts_payments')}:</strong> Armenian banks, Cards, IDram, Crypto</p>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              <a className="btn outline" href="https://t.me/">Telegram</a>
              <a className="btn outline" href="https://wa.me/">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
