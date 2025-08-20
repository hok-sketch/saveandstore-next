'use client';
import { t, type Locale } from '@/lib/i18n';

function Plan({ title, price, specs, locale }:{title:string, price:string, specs:string[], locale:Locale}){
  return (
    <article className="plan">
      <h3>{title}</h3>
      <ul>
        {specs.map((s,i)=>(<li key={i}>{s}</li>))}
      </ul>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
        <strong>{price}</strong>
        <a className="btn outline" href="#contact">{t(locale,'order')}</a>
      </div>
    </article>
  );
}

export default function Pricing({ locale }: { locale: Locale }){
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <h2 style={{fontSize:'var(--fs-h2)', marginBottom:12}}>{t(locale,'pricing_title')}</h2>
        <div className="plans">
          <Plan locale={locale} title="Basic" price="$29/mo" specs={["AMD 4 vCPU","8 GB RAM","120 GB SSD","3 TB traffic"]} />
          <Plan locale={locale} title="Pro" price="$59/mo" specs={["AMD 8 vCPU","16 GB RAM","240 GB SSD","6 TB traffic"]} />
          <Plan locale={locale} title="Max" price="$109/mo" specs={["AMD 16 vCPU","32 GB RAM","480 GB SSD","10 TB traffic"]} />
        </div>
      </div>
    </section>
  );
}
