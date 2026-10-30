import { Link } from 'react-router-dom'
export default function NotFound(){return <section className="page"><div className="container empty-state"><p className="error-code">404</p><h1>Такого кадра нет</h1><p>Страница была удалена или адрес указан неверно.</p><Link className="btn btn-accent" to="/">На главную</Link></div></section>}
