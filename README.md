# SaveAndStore — Next.js (App Router) Starter

Мультиязычный (HY по умолчанию, RU, EN), адаптивный лендинг с секциями:
Hero → Datacenter → Testimonials → Pricing → Calculator → Contacts → Footer.

## Старт
```bash
npm i
npm run dev
# Открыть http://localhost:3000/hy (по умолчанию) | /ru | /en
```

## Структура
- `app/[locale]/page.tsx` — страница с секциями
- `app/[locale]/layout.tsx` — `<html lang>` + глобальные стили
- `lib/i18n.ts` — словари и `t()`
- `components/*` — компоненты блоков
- `app/[locale]/globals.css` — адаптивные стили (mobile-first)

## Языки
Пути: `/hy`, `/ru`, `/en`. Переключатель в шапке меняет сегмент URL.

## Карта
В контактах — OpenStreetMap (iframe). Можно заменить на leaflet позже.

## Настройка тарифов
Редактируйте цены и спецификации в `components/Pricing.tsx` и формулу калькулятора в `components/Calculator.tsx`.
