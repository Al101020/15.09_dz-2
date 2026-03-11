import styles from './About.module.css'

const stack = [
  'React',
  'TypeScript',
  'Node.js',
  'CSS · Tailwind',
  'Git · CI/CD'
]

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.label}>/about</div>
      <h2 className={styles.title}>О себе</h2>

      <div className={styles.content}>
        <div className={styles.textSection}>
          <p>
            Занимаюсь разработкой уже 4 года.<br />
            Специализируюсь на React и современном JavaScript-стеке.
          </p>
          <p>
            Люблю чистый код, хорошую типографику и интерфейсы, которые не требуют инструкции.
          </p>
        </div>

        <div className={styles.stackSection}>
          <div className={styles.stackLabel}>Стек</div>
          <div className={styles.stackList}>
            {stack.map(item => (
              <div key={item} className={styles.stackItem}>
                <span>{item}</span>
                <div className={styles.dot} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}