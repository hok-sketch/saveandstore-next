'use client';
import { t, type Locale } from '@/lib/i18n';

function Card({ name, company, text }: {name:string, company:string, text:string}){
  return (
    <article className="card">
      <p style={{marginTop:0}}>{text}</p>
      <p style={{marginBottom:0, color:'#6b7280'}}><strong>{name}</strong> — {company}</p>
    </article>
  );
}

export default function Testimonials({ locale }: { locale: Locale }){
  return (
    <section className="section testimonials">
      <div className="container">
        <h2 style={{fontSize:'var(--fs-h2)', marginBottom:12}}>{t(locale,'testimonials_title')}</h2>
        <div className="cards">
          <Card name="Arman" company="IT startup, Yerevan" text="Все стабильно и быстро. Перенесли прод без простоев." />
          <Card name="Mariam" company="Fintech, Armenia" text="Поддержка отвечает 24/7, помогли с миграцией." />
          <Card name="Vahagn" company="Game dev" text="Гибкие апгрейды — удобно под пиковые нагрузки." />
        </div>
      </div>
    </section>
  );
}
