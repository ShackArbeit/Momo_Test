# Phase 02 — Catalog and Pages 執行記錄

對應 md：`docs/ai-logs/Claude_Phase/02-catalog-pages.md`

## 目標
建立 mock data 與商品瀏覽流程，讓三個頁面都有真實資料。

## 前置作業（本 Phase 開始前）
| 動作 | 說明 |
|---|---|
| 搬移 pages CSS | `src/pages/*.css` → `src/pages/styles/*.css`，更新三個 TSX 的 import |
| 刪除殘留 CSS | 移除 `src/App.css`、`src/components/Header.css`、`src/components/Layout.css`、`src/pages/HomePage.css`、`src/pages/SearchPage.css`、`src/pages/GoodsDetailPage.css` |

## 新增檔案

| 檔案路徑 | 說明 |
|---|---|
| `src/types/products.ts` | Product 型別、600 筆 mock data、searchProducts / getProductById / getProductsByCategory helper |
| `src/components/ProductCard.tsx` | 商品卡片元件（圖、名稱、價格、折扣 badge、評分） |
| `src/components/styles/ProductCard.css` | 商品卡片樣式 |

## 修改檔案

| 檔案路徑 | 修改內容 |
|---|---|
| `src/pages/HomePage.tsx` | 加入 Banner × 3、分類 grid × 8、熱門商品 grid（前 20 筆） |
| `src/pages/styles/HomePage.css` | 更新為完整首頁樣式 |
| `src/pages/SearchPage.tsx` | 讀取 `?q=` 與分類篩選，支援排序（預設／低到高／高到低／評分） |
| `src/pages/styles/SearchPage.css` | 更新為完整搜尋頁樣式 |
| `src/pages/GoodsDetailPage.tsx` | 根據 `:id` 撈取商品，顯示圖片、評分、價格、tags，加入同分類相關商品 |
| `src/pages/styles/GoodsDetailPage.css` | 更新為完整詳情頁樣式 |

## Mock Data 規格
- 總筆數：600 筆
- 分類：家電、美妝、服飾、食品、3C、家居、母嬰、運動（各 75 筆）
- 欄位：id、name、price、originalPrice、category、image、rating、reviewCount、tags
- 圖片：使用 placehold.co 產生佔位圖

## CSS 管理規則（本 Phase 確立）
- `src/components/` 的樣式 → `src/components/styles/`
- `src/pages/` 的樣式 → `src/pages/styles/`
- 不在父層留任何 CSS 檔案

## 此 Phase 未實作（留待後續）
- 購物車邏輯（Phase 03）
- telemetry（Phase 03）
- `加入購物車` 按鈕功能（現為 disabled）
