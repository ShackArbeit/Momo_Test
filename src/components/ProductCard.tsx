import { useNavigate } from 'react-router-dom'
import type { Product } from '../types/products'
import './styles/ProductCard.css'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const navigate = useNavigate()
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <div className="product-card" onClick={() => navigate(`/goods/${product.id}`)}>
      <div className="product-card-img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {discount > 0 && <span className="discount-badge">{discount}折</span>}
      </div>
      <div className="product-card-body">
        <p className="product-card-name">{product.name}</p>
        <div className="product-card-price-row">
          <span className="product-card-price">${product.price.toLocaleString()}</span>
          <span className="product-card-original">${product.originalPrice.toLocaleString()}</span>
        </div>
        <div className="product-card-meta">
          <span className="product-card-rating">★ {product.rating}</span>
          <span className="product-card-reviews">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  )
}
