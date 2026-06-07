import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './styles/CartPage.css'

export default function CartPage() {
  const { items, totalCount, totalPrice, removeItem, updateQty, clearCart } = useCart()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <p className="cart-empty-icon">🛒</p>
        <p className="cart-empty-text">購物車是空的</p>
        <button className="cart-go-shop" onClick={() => navigate('/')}>去逛逛</button>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="cart-title">購物車</h1>
        <span className="cart-count">共 {totalCount} 件商品</span>
        <button className="cart-clear-btn" onClick={clearCart}>清空購物車</button>
      </div>

      <div className="cart-body">
        <div className="cart-items">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-img" />
              <div className="cart-item-info">
                <p
                  className="cart-item-name"
                  onClick={() => navigate(`/goods/${product.id}`)}
                >
                  {product.name}
                </p>
                <p className="cart-item-category">{product.category}</p>
              </div>
              <div className="cart-item-qty">
                <button onClick={() => updateQty(product.id, quantity - 1)}>－</button>
                <span>{quantity}</span>
                <button onClick={() => updateQty(product.id, quantity + 1)}>＋</button>
              </div>
              <p className="cart-item-price">${(product.price * quantity).toLocaleString()}</p>
              <button className="cart-item-remove" onClick={() => removeItem(product.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2 className="cart-summary-title">訂單摘要</h2>
          <div className="cart-summary-row">
            <span>商品小計</span>
            <span>${totalPrice.toLocaleString()}</span>
          </div>
          <div className="cart-summary-row">
            <span>運費</span>
            <span>{totalPrice >= 990 ? '免運' : '$60'}</span>
          </div>
          <div className="cart-summary-total">
            <span>合計</span>
            <span>${(totalPrice + (totalPrice >= 990 ? 0 : 60)).toLocaleString()}</span>
          </div>
          <button className="cart-checkout-btn" disabled>
            前往結帳（示意）
          </button>
        </div>
      </div>
    </div>
  )
}
