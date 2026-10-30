# Проверка проекта

## Автоматические проверки

```bash
npm install
npm run lint
npm run build
npm run preview
```

## Страницы для Lighthouse

Проверить в Chrome DevTools → Lighthouse → Mobile:

- `/`
- `/catalog`
- `/film/3`
- `/collections`
- `/favorites`
- `/about`

Для чистого результата использовать production-режим `npm run build` + `npm run preview`, режим инкогнито и отключённые расширения.

Цель по каждой странице: Performance, Accessibility, Best Practices и SEO — не ниже 90.
