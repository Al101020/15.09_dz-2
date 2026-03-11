import { Outlet } from 'react-router'
import Navbar from './Navbar'
import NinjaVolleyball from './NinjaVolleyball'

export default function Layout() {
  return (
    <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <header>
        <Navbar />
      </header>
      <main style={{ flex: 1 }}>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          &copy; {new Date().getFullYear()} My Portfolio · Для статьи про React Router в Skillfactory
        </div>
      </footer>
      <NinjaVolleyball />
    </div>
  )
}