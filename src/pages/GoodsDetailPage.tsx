import { useParams } from 'react-router-dom'
import './GoodsDetailPage.css'


export default function GoodsDetailPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="goods-detail-page">
      <div className="goods-detail-inner">
        <div className="goods-image-area">
          <div className="goods-image-placeholder">
            商品圖片（Phase 02）
          </div>
        </div>
        <div className="goods-info-area">
          <p className="goods-id-label">商品 ID：{id}</p>
          <h1 className="goods-name">商品名稱（Phase 02 會填入 mock data）</h1>
          <div className="goods-price-area">
            <span className="goods-price">$--</span>
          </div>
          <p className="placeholder-text">商品描述、規格（Phase 02）</p>
          <button className="add-to-cart-btn" disabled>
            加入購物車（Phase 03）
          </button>
        </div>
      </div>
    </div>
  )
}
