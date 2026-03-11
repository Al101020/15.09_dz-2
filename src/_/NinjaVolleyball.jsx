import { useEffect, useState, useRef } from 'react'
import styles from './NinjaVolleyball.module.css'

export default function NinjaVolleyball() {
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0, vx: 0, vy: 0 })

  const [positions, setPositions] = useState({
    ballX: 100,
    ballY: 100,
    p1X: 100,
    p2X: 100,
    p1Jump: false,
    p2Jump: false,
    isInteracting: false
  })

  const stateRef = useRef({
    x: 100,
    y: 100,
    vx: 3,
    vy: 0,
    gravity: 0.15,
    p1X: 100,
    p2X: 100,
    p1v: 0,
    p2v: 0,
    p1Jump: false,
    p2Jump: false
  })

  useEffect(() => {
    const handleMouse = (e) => {
      const m = mouseRef.current
      m.vx = e.clientX - m.px
      m.vy = e.clientY - m.py
      m.px = e.clientX
      m.py = e.clientY
      m.x = e.clientX
      m.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useEffect(() => {
    let frame
    const update = () => {
      const s = stateRef.current
      const container = containerRef.current
      const m = mouseRef.current
      if (!container) return

      const W = container.clientWidth
      const H = container.clientHeight
      const groundY = H - 96

      s.vy += s.gravity
      s.x += s.vx
      s.y += s.vy

      const dx = s.x + 20 - m.x
      const dy = s.y + 20 - m.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      let interacting = false

      if (dist < 80) {
        interacting = true
        const force = (80 - dist) / 80

        s.vx += (dx / dist) * force * 0.8
        s.vy += (dy / dist) * force * 0.8

        const cappedMVX = Math.max(-20, Math.min(20, m.vx))
        const cappedMVY = Math.max(-20, Math.min(20, m.vy))
        s.vx += cappedMVX * 0.1 * force
        s.vy += cappedMVY * 0.1 * force
      }

      m.vx *= 0.5
      m.vy *= 0.5

      const spring = 0.05
      const damp = 0.8

      const targetP1 = Math.max(40, Math.min(W * 0.45, s.x - 16 + (s.vx * 4)))
      const diff1 = targetP1 - s.p1X
      if (Math.abs(diff1) > 2) {
        s.p1v += diff1 * spring
      }
      s.p1v *= damp
      s.p1X = Math.max(20, Math.min(W * 0.48, s.p1X + s.p1v))

      const targetP2Rel = Math.max(40, Math.min(W * 0.45, (W - s.x) - 16 - (s.vx * 4)))
      const diff2 = targetP2Rel - s.p2X
      if (Math.abs(diff2) > 2) {
        s.p2v += diff2 * spring
      }
      s.p2v *= damp
      s.p2X = Math.max(20, Math.min(W * 0.48, s.p2X + s.p2v))

      const maxV = 8
      const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy)
      if (speed > maxV) {
        s.vx = (s.vx / speed) * maxV
        s.vy = (s.vy / speed) * maxV
      }

      if (Math.abs(s.vx) < 1.5) s.vx = s.vx > 0 ? 1.5 : -1.5

      if (s.y < 0) { s.y = 0; s.vy = Math.abs(s.vy) * 0.4; }
      if (s.y > groundY) { s.y = groundY; s.vy = -Math.abs(s.vy) * 0.4; if (Math.abs(s.vy) < 2) s.vy = -5; }
      if (s.x < 10) { s.x = 10; s.vx = Math.abs(s.vx) * 0.7; }
      if (s.x > W - 60) { s.x = W - 60; s.vx = -Math.abs(s.vx) * 0.7; }

      if (Math.abs(s.x - s.p1X) < 50 && s.y > groundY - 100 && !s.p1Jump && s.vx <= 0) {
        s.p1Jump = true
        s.vy = -8.0 - Math.random() * 3.0
        s.vx = 3.0 + Math.random() * 3.0
        setTimeout(() => { s.p1Jump = false; }, 500)
      }

      if (Math.abs((W - s.x) - (s.p2X + 32)) < 50 && s.y > groundY - 100 && !s.p2Jump && s.vx >= 0) {
        s.p2Jump = true
        s.vy = -8.0 - Math.random() * 3.0
        s.vx = -3.0 - Math.random() * 4.0
        setTimeout(() => { s.p2Jump = false; }, 500)
      }

      setPositions({
        ballX: s.x,
        ballY: s.y,
        p1X: s.p1X,
        p2X: s.p2X,
        p1Jump: s.p1Jump,
        p2Jump: s.p2Jump,
        isInteracting: interacting
      })
      frame = requestAnimationFrame(update)
    }
    update()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className={styles.court} ref={containerRef}>
      <div className={`${styles.player} ${styles.p1} ${positions.p1Jump ? styles.jump : ''}`} style={{ left: `${positions.p1X}px` }}>
        <div className={styles.ninja}>
          <div className={styles.eyes}><div className={styles.eye} /><div className={styles.eye} /></div>
          <div className={styles.headband} />
        </div>
      </div>
      <div className={`${styles.player} ${styles.p2} ${positions.p2Jump ? styles.jump : ''}`} style={{ right: `${positions.p2X}px` }}>
        <div className={styles.ninja}>
          <div className={styles.eyes}><div className={styles.eye} /><div className={styles.eye} /></div>
          <div className={styles.headband} />
        </div>
      </div>
      <div className={`${styles.ball} ${positions.isInteracting ? styles.ballPulse : ''}`} style={{ left: positions.ballX, top: positions.ballY }}>
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={styles.reactLogo}>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </div>
    </div>
  )
}
