import { useSearchParams } from 'react-router-dom'
import { useMemo, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { searchProducts, type Category } from '../types/products'
import { logEvent } from '../utils/telemetry'
import './styles/SearchPage.css'

const CATEGORIES: Category[] = ['家電', '美妝', '服飾', '食品', '3C', '家居', '母嬰', '運動']
const SORT_OPTIONS = [
  { value: 'default', label: '預設排序' },
  { value: 'price-asc', label: '價格低到高' },
  { value: 'price-desc', label: '價格高到低' },
  { value: 'rating', label: '評分高到低' },
]

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const activeCategory = CATEGORIES.includes(query as Category) ? (query as Category) : undefined
  const [sort, setSort] = useState('default')

  useEffect(() => {
    if (query) logEvent({ type: 'search', query })
  }, [query])

  const results = useMemo(() => {
    const base = searchProducts(query, activeCategory)
    if (sort === 'price-asc') return [...base].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return [...base].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...base].sort((a, b) => b.rating - a.rating)
    return base
  }, [query, activeCategory, sort])

  return (
    <div className="search-page">
      <div className="search-header">
        <h1 className="search-title">
          {query ? `「${query}」的搜尋結果` : '全部商品'}
        </h1>
        <p className="search-meta">共 {results.length} 筆商品</p>
      </div>

      <div className="search-body">
        <aside className="search-filters">
          <h3>商品分類</h3>
          <ul className="filter-list">
            <li>
              <button
                className={`filter-btn ${!activeCategory ? 'active' : ''}`}
                onClick={() => setSearchParams({})}
              >
                全部
              </button>
            </li>
            {CATEGORIES.map(c => (
              <li key={c}>
                <button
                  className={`filter-btn ${activeCategory === c ? 'active' : ''}`}
                  onClick={() => setSearchParams(c === activeCategory ? {} : { q: c })}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="search-results">
          <div className="sort-bar">
            {SORT_OPTIONS.map(opt => (
              <button
                key={opt.value}
                className={`sort-btn ${sort === opt.value ? 'active' : ''}`}
                onClick={() => setSort(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {results.length === 0 ? (
            <p className="no-results">找不到符合的商品，請試試其他關鍵字。</p>
          ) : (
            <div className="search-product-grid">
              {results.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
