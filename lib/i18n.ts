export type Locale = 'hy' | 'ru' | 'en';

export const locales: Locale[] = ['hy', 'ru', 'en'];
export const defaultLocale: Locale = 'hy';

type Dict = Record<string, string>;

const hy: Dict = {
  slogan: "Վստահելի սերվերներ Երևանում",
  nav_pricing: "Տարաֆներ",
  nav_contact: "Կապ",
  hero_title: "Հայկական IT ընկերություն Երևանում. Մինչև X տարվա փորձ",
  hero_cta_pricing: "Տարաֆներ",
  hero_cta_quote: "Ստանալ առաջարկ",
  dc_title: "Yerevan Datacenter",
  dc_1: "Սեփական ստոյկեր Երևանում",
  dc_2: "N+1 պահուստավորում",
  dc_3: "DDoS պաշտպանություն",
  dc_4: "AMD սերվերներ",
  testimonials_title: "Հաճախորդների կարծիքներ",
  advantages_title: "Մեր առավելությունները",
  adv_1: "Աջակցություն 24/7",
  adv_2: "Ճկուն վճարում",
  adv_3: "Տեղային հոստինգ",
  adv_4: "Անմիջական թարմացում",
  pricing_title: "Թափանցիկ գներ. Թարմացում ցանկացած պահին",
  order: "Պատվիրել",
  calc_title: "Հաշվիչ",
  contacts_title: "Կոնտակտներ",
  contacts_address: "Հասցե",
  contacts_hours: "Ժամեր",
  contacts_payments: "Վճարման մեթոդներ",
  contacts_quick: "Արագ կապ",
  form_name: "Անուն",
  form_contact: "Email / Հեռախոս",
  form_message: "Հաղորդագրություն",
  form_submit: "Ստանալ առաջարկ",
  footer_copy: "SaveAndStore. Երևան, Հայաստան"
};

const ru: Dict = {
  slogan: "Надежные серверы в Ереване",
  nav_pricing: "Тарифы",
  nav_contact: "Контакты",
  hero_title: "Армянская IT‑компания в Ереване. Более X лет опыта",
  hero_cta_pricing: "Тарифы на серверы",
  hero_cta_quote: "Получить предложение",
  dc_title: "Yerevan Datacenter",
  dc_1: "Собственные стойки в Ереване",
  dc_2: "Резервирование N+1",
  dc_3: "DDoS‑защита",
  dc_4: "Серверы на AMD",
  testimonials_title: "Отзывы клиентов",
  advantages_title: "Наши преимущества",
  adv_1: "Поддержка 24/7",
  adv_2: "Гибкая оплата",
  adv_3: "Локальный хостинг",
  adv_4: "Апгрейд в любой момент",
  pricing_title: "Прозрачные цены. Обновление в любой момент",
  order: "Заказать",
  calc_title: "Калькулятор",
  contacts_title: "Контакты",
  contacts_address: "Адрес",
  contacts_hours: "Часы работы",
  contacts_payments: "Способы оплаты",
  contacts_quick: "Быстрая связь",
  form_name: "Имя",
  form_contact: "Email / Телефон",
  form_message: "Сообщение",
  form_submit: "Получить предложение",
  footer_copy: "SaveAndStore. Ереван, Армения"
};

const en: Dict = {
  slogan: "Reliable servers in Yerevan",
  nav_pricing: "Pricing",
  nav_contact: "Contacts",
  hero_title: "Armenian IT company in Yerevan. Over X years of experience",
  hero_cta_pricing: "Server plans",
  hero_cta_quote: "Get a quote",
  dc_title: "Yerevan Datacenter",
  dc_1: "Own racks in Yerevan",
  dc_2: "N+1 redundancy",
  dc_3: "DDoS protection",
  dc_4: "AMD servers",
  testimonials_title: "Client reviews",
  advantages_title: "Our advantages",
  adv_1: "24/7 support",
  adv_2: "Flexible payment",
  adv_3: "Local hosting",
  adv_4: "Upgrade anytime",
  pricing_title: "Transparent pricing. Upgrade anytime",
  order: "Order",
  calc_title: "Calculator",
  contacts_title: "Contacts",
  contacts_address: "Address",
  contacts_hours: "Hours",
  contacts_payments: "Payment methods",
  contacts_quick: "Quick contact",
  form_name: "Name",
  form_contact: "Email / Phone",
  form_message: "Message",
  form_submit: "Get a quote",
  footer_copy: "SaveAndStore. Yerevan, Armenia"
};

export const dict: Record<Locale, Dict> = { hy, ru, en };

export function t(locale: Locale, key: string): string {
  return (dict[locale] && dict[locale][key]) || key;
}
