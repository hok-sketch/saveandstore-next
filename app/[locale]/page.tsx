'use client';
import { t, type Locale } from '@/lib/i18n';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Datacenter from '@/components/Datacenter';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Calculator from '@/components/Calculator';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'hy';

  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero locale={locale} />
        <Datacenter locale={locale} />
        <Testimonials locale={locale} />
        <Pricing locale={locale} />
        <Calculator locale={locale} />
        <Contacts locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
