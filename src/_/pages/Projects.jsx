import { Link } from 'react-router'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <div className={styles.label}>/projects</div>
          <h1 className={styles.title}>Проекты</h1>
        </div>
        <div className={styles.count}>0{projects.length} работы</div>
      </div>
      <div className={styles.list}>
        {projects.map(project => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className={styles.card}
          >
            <div className={styles.cardTitle}>{project.title}</div>
            <div className={styles.cardArrow}>→</div>
          </Link>
        ))}
      </div>
    </div>
  )
}