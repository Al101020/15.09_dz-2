import { useNavigate } from 'react-router'
import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.eyebrow}>Портфолио разработчика</div>
        <h1 className={styles.title}>
          Привет,<br />я <em>Александр</em>
        </h1>
        <p className={styles.sub}>
          Frontend-разработчик. Создаю интерфейсы,
          которые работают быстро и выглядят красиво.
        </p>
        <div className={styles.btns}>
          <button className={styles.btnPrimary} onClick={() => navigate('/projects')}>
            Смотреть проекты →
          </button>
          <button className={styles.btnGhost} onClick={() => navigate('/about')}>
            О себе
          </button>
        </div>
      </div>
    </div>
  )
}