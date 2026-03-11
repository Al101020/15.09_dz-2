import { useParams, Link } from 'react-router'
import { projects } from '../data/projects'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) return <div>Проект не найден</div>

  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.back}>← назад к проектам</Link>
      <div className={styles.label}>/projects/{id}</div>
      <h1 className={styles.title}>{project.title}</h1>
      <div className={styles.tags}>{project.tags}</div>

      <div className={styles.infoGrid}>
        <div className={styles.infoBlock}>
          <div className={styles.infoLabel}>Описание</div>
          <p className={styles.infoText}>{project.description}</p>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.infoLabel}>Детали</div>
          <div className={styles.infoRow}>
            <span className={styles.key}>Год:</span>
            <span>{project.year}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.key}>Тип:</span>
            <span>{project.type}</span>
          </div>
        </div>
      </div>

      <div className={styles.codeBlock}>
        <div className={styles.codeLabel}>useParams() — динамический сегмент из URL</div>
        <span className={styles.dim}>{"{ "}</span>
        <span className={styles.keyLabel}>id</span>
        <span className={styles.dim}>{": "}</span>
        <span className={styles.val}>"{id}"</span>
        <span className={styles.dim}>{" }"}</span>
      </div>
    </div>
  )
}