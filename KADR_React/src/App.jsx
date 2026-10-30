import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import Film from './pages/Film.jsx'
import Collections from './pages/Collections.jsx'
import Favorites from './pages/Favorites.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

const titles = { '/': 'КАДР — онлайн-кинотеатр', '/catalog': 'Каталог — КАДР', '/collections': 'Подборки — КАДР', '/favorites': 'Мой список — КАДР', '/about': 'О проекте — КАДР' }
export default function App() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('kadr-favorites') || '[]'))
  const location = useLocation()
  useEffect(() => { localStorage.setItem('kadr-favorites', JSON.stringify(favorites)) }, [favorites])
  useEffect(() => { document.title = location.pathname.startsWith('/film/') ? 'Фильм — КАДР' : (titles[location.pathname] || 'Страница не найдена — КАДР'); window.scrollTo(0, 0) }, [location.pathname])
  const toggleFavorite = (id) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  return <Routes><Route element={<Layout favoritesCount={favorites.length} />}><Route index element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} /><Route path="catalog" element={<Catalog favorites={favorites} toggleFavorite={toggleFavorite} />} /><Route path="film/:id" element={<Film favorites={favorites} toggleFavorite={toggleFavorite} />} /><Route path="collections" element={<Collections favorites={favorites} toggleFavorite={toggleFavorite} />} /><Route path="favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} /><Route path="about" element={<About />} /><Route path="*" element={<NotFound />} /></Route></Routes>
}
