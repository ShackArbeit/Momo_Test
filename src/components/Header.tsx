import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './styles/Header.css'

export default function Header() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const q = query.trim()
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-momo">momo</span>
          <span className="logo-shop">購物網</span>
        </Link>

        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="請輸入關鍵字搜尋"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="搜尋">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>

        <Link to="/cart" className="cart-btn" aria-label="購物車">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <span className="cart-label">購物車</span>
        </Link>
      </div>

      <nav className="subnav">
        <Link to="/search?q=家電">家電</Link>
        <Link to="/search?q=美妝">美妝</Link>
        <Link to="/search?q=服飾">服飾</Link>
        <Link to="/search?q=食品">食品</Link>
        <Link to="/search?q=3C">3C</Link>
        <Link to="/search?q=家居">家居</Link>
        <Link to="/search?q=母嬰">母嬰</Link>
        <Link to="/search?q=運動">運動</Link>
      </nav>
    </header>
  )
}
