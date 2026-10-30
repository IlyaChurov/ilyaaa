# КАДР React

Отдельная учебная React-версия проекта онлайн-кинотеатра. Исходный Flask-проект лабораторных №1–3 не изменён.

## Страницы

1. Главная — `/`
2. Каталог — `/catalog`
3. Страница фильма — `/film/3`
4. Подборки — `/collections`
5. Мой список — `/favorites`
6. О проекте — `/about`

## Запуск на Windows

Простой вариант: дважды нажать `START.bat`.

Через терминал:

```bash
npm install
npm run dev
```

После запуска открыть адрес, который покажет терминал, обычно `http://localhost:5173`.

## Проверка перед сдачей

```bash
npm run lint
npm run build
npm run preview
```

## Render

- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Для маршрутов React используется rewrite `/*` → `/index.html`; он уже описан в `render.yaml`.

## Что реализовано

- React + Vite и React Router;
- шесть страниц;
- поиск, фильтрация и сортировка каталога;
- динамические страницы фильмов;
- личный список на `localStorage`;
- адаптивная вёрстка;
- семантическая разметка и доступность;
- локальные SVG без внешних запросов;
- подготовка к GitHub и Render.
