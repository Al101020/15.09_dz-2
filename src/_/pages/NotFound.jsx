import { Link } from 'react-router'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.num}>404</div>
      <div className={styles.label}>Страница не найдена</div>
      <p className={styles.desc}>Такого маршрута не существует</p>
      <Link to="/" className={styles.link}>← на главную</Link>
    </div>
  )
}