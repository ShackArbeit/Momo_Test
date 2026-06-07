import { useParams, useNavigate } from 'react-router-dom'
import { getProductById, getProductsByCategory } from '../types/products'
import { useCart } from '../context/CartContext'
import { logEvent } from '../utils/telemetry'
import ProductCard from '../components/ProductCard'
import './styles/GoodsDetailPage.css'

export default function GoodsDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const found = id ? getProductById(id) : undefined

  if (!found) {
    return (
      <div className="goods-not-found">
        <p>找不到此商品（ID：{id}）</p>
        <button onClick={() => navigate('/')}>回首頁</button>
      </div>
    )
  }

  const discount = Math.round((1 - found.price / found.originalPrice) * 100)
  const related = getProductsByCategory(found.category).filter(p => p.id !== found.id).slice(0, 5)

  function handleAddToCart() {
    addItem(found!)
    logEvent({ type: 'add_to_cart', productId: found!.id, productName: found!.name, price: found!.price })
  }

  return (
    <div className="goods-detail-page">
      <div className="goods-detail-inner">
        <div className="goods-image-area">
          <img src={found.image} alt={found.name} className="goods-main-img" />
          {discount > 0 && <span className="goods-discount-badge">折扣 {discount}%</span>}
        </div>

        <div className="goods-info-area">
          <p className="goods-category-tag">{found.category}</p>
          <h1 className="goods-name">{found.name}</h1>

          <div className="goods-rating-row">
            <span className="goods-stars">{'★'.repeat(Math.round(found.rating))}{'☆'.repeat(5 - Math.round(found.rating))}</span>
            <span className="goods-rating-num">{found.rating}</span>
            <span className="goods-review-count">（{found.reviewCount} 則評價）</span>
          </div>

          <div className="goods-price-area">
            <span className="goods-price">${found.price.toLocaleString()}</span>
            <span className="goods-original-price">${found.originalPrice.toLocaleString()}</span>
          </div>

          <div className="goods-tags">
            {found.tags.map(t => (
              <span key={t} className="goods-tag">{t}</span>
            ))}
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            加入購物車
          </button>

          <p className="goods-id-label">商品編號：{found.id}</p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="related-section">
          <h2 className="section-title">同分類商品</h2>
          <div className="related-grid">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
