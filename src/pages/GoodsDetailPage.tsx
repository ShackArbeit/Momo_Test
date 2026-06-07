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
  const product = id ? getProductById(id) : undefined

  if (!product) {
    return (
      <div className="goods-not-found">
        <p>找不到此商品（ID：{id}）</p>
        <button onClick={() => navigate('/')}>回首頁</button>
      </div>
    )
  }

  const discount = Math.round((1 - product.price / product.originalPrice) * 100)
  const related = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 5)

  function handleAddToCart() {
    addItem(product)
    logEvent({ type: 'add_to_cart', productId: product.id, productName: product.name, price: product.price })
  }

  return (
    <div className="goods-detail-page">
      <div className="goods-detail-inner">
        <div className="goods-image-area">
          <img src={product.image} alt={product.name} className="goods-main-img" />
          {discount > 0 && <span className="goods-discount-badge">折扣 {discount}%</span>}
        </div>

        <div className="goods-info-area">
          <p className="goods-category-tag">{product.category}</p>
          <h1 className="goods-name">{product.name}</h1>

          <div className="goods-rating-row">
            <span className="goods-stars">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
            <span className="goods-rating-num">{product.rating}</span>
            <span className="goods-review-count">（{product.reviewCount} 則評價）</span>
          </div>

          <div className="goods-price-area">
            <span className="goods-price">${product.price.toLocaleString()}</span>
            <span className="goods-original-price">${product.originalPrice.toLocaleString()}</span>
          </div>

          <div className="goods-tags">
            {product.tags.map(t => (
              <span key={t} className="goods-tag">{t}</span>
            ))}
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            加入購物車
          </button>

          <p className="goods-id-label">商品編號：{product.id}</p>
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
