import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="banner-placeholder">
        <p>Banner 區塊（Phase 02 會填入商品）</p>
      </div>
      <section className="category-section">
        <h2 className="section-title">商品分類</h2>
        <p className="placeholder-text">分類商品列表（Phase 02 會填入 mock data）</p>
      </section>
      <section className="hot-section">
        <h2 className="section-title">熱門商品</h2>
        <p className="placeholder-text">熱門商品列表（Phase 02 會填入 mock data）</p>
      </section>
    </div>
  )
}
