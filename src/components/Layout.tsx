import { Outlet } from 'react-router-dom'
import Header from './Header'
import './styles/Layout.css'

export default function Layout() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2024 momo購物網 Mock — 純前端展示用，非真實網站</p>
      </footer>
    </div>
  )
}
