import { NavLink, Link } from 'react-router'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>Alex<em>.</em>dev</Link>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          end
        >
          Главная
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          О себе
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          Проекты
        </NavLink>
      </div>
    </nav>
  )
}