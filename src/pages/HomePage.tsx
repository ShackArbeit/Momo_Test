import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, type Category } from '../types/products'
import './styles/HomePage.css'

const CATEGORIES: { label: Category; icon: string }[] = [
  { label: '家電', icon: '🏠' },
  { label: '美妝', icon: '💄' },
  { label: '服飾', icon: '👗' },
  { label: '食品', icon: '🍱' },
  { label: '3C', icon: '💻' },
  { label: '家居', icon: '🛋️' },
  { label: '母嬰', icon: '🍼' },
  { label: '運動', icon: '🏃' },
]

const BANNERS = [
  { label: '夏日家電特賣', sub: '最高折扣 40%', bg: '#fde8e8', color: '#c0392b', q: '家電' },
  { label: '美妝節限定優惠', sub: '精選品牌全面下殺', bg: '#fef9e7', color: '#d35400', q: '美妝' },
  { label: '3C 新品上市', sub: '最新科技一次擁有', bg: '#eaf4fb', color: '#1a5276', q: '3C' },
]

const hotProducts = products.slice(0, 20)

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      {/* Banner */}
      <div className="banner-row">
        {BANNERS.map(b => (
          <div
            key={b.q}
            className="banner-card"
            style={{ background: b.bg, color: b.color }}
            onClick={() => navigate(`/search?q=${b.q}`)}
          >
            <p className="banner-title">{b.label}</p>
            <p className="banner-sub">{b.sub}</p>
            <span className="banner-cta">立即選購 →</span>
          </div>
        ))}
      </div>

      {/* 分類 */}
      <section className="home-section">
        <h2 className="section-title">商品分類</h2>
        <div className="category-grid">
          {CATEGORIES.map(c => (
            <button
              key={c.label}
              className="category-item"
              onClick={() => navigate(`/search?q=${c.label}`)}
            >
              <span className="category-icon">{c.icon}</span>
              <span className="category-label">{c.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 熱門商品 */}
      <section className="home-section">
        <h2 className="section-title">熱門商品</h2>
        <div className="product-grid">
          {hotProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
