'use client';
import { t, type Locale } from '@/lib/i18n';
import { useMemo, useState } from 'react';

export default function Calculator({ locale }: { locale: Locale }){
  const [cpu, setCpu] = useState(4);
  const [ram, setRam] = useState(8);
  const [ssd, setSsd] = useState(120);

  const price = useMemo(()=>{
    // simple demo formula
    return Math.round(10 + cpu*3 + ram*0.8 + ssd*0.05);
  },[cpu,ram,ssd]);

  return (
    <section className="section calc">
      <div className="container">
        <h2 style={{fontSize:'var(--fs-h2)', marginBottom:12}}>{t(locale,'calc_title')}</h2>
        <form className="form" onSubmit={(e)=>e.preventDefault()}>
          <label>CPU
            <select value={cpu} onChange={e=>setCpu(Number(e.target.value))}>
              {[2,4,8,16,32].map(v=><option key={v} value={v}>{v} vCPU</option>)}
            </select>
          </label>
          <label>RAM
            <select value={ram} onChange={e=>setRam(Number(e.target.value))}>
              {[4,8,16,32,64].map(v=><option key={v} value={v}>{v} GB</option>)}
            </select>
          </label>
          <label>SSD
            <select value={ssd} onChange={e=>setSsd(Number(e.target.value))}>
              {[120,240,480,960].map(v=><option key={v} value={v}>{v} GB</option>)}
            </select>
          </label>
        </form>
        <div style={{marginTop:12,display:'flex',gap:12,alignItems:'center'}}>
          <div><strong>~ ${price}/mo</strong></div>
          <a className="btn" href="#contact">{t(locale,'hero_cta_quote')}</a>
        </div>
      </div>
    </section>
  );
}
