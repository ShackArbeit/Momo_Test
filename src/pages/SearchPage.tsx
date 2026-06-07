import { useSearchParams } from 'react-router-dom'
import './SearchPage.css'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''

  return (
    <div className="search-page">
      <div className="search-header">
        <h1 className="search-title">
          {query ? `「${query}」的搜尋結果` : '搜尋結果'}
        </h1>
        <p className="search-meta">商品列表（Phase 02 會填入 mock data）</p>
      </div>
      <div className="search-body">
        <aside className="search-filters">
          <h3>篩選條件</h3>
          <p className="placeholder-text">分類、價格篩選（Phase 02）</p>
        </aside>
        <section className="search-results">
          <p className="placeholder-text">商品卡片列表（Phase 02）</p>
        </section>
      </div>
    </div>
  )
}
