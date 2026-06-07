# Architecture

## 技術選型
| 項目 | 選擇 | 原因 |
|---|---|---|
| 框架 | React 19 + TypeScript | 題目方向，型別安全降低 runtime 錯誤 |
| 建構工具 | Vite | 開發速度快，HMR 即時 |
| 路由 | react-router-dom v7 | 標準 SPA 路由方案 |
| 樣式 | CSS Modules（plain CSS） | 無額外依賴，快速可交付 |
| 狀態管理 | React Context + useReducer | 購物車規模不需 Redux |
| 持久化 | localStorage | 純前端限制下最簡方案 |

## 目錄結構
```
src/
  components/         # 共用元件
    styles/           # 元件樣式（統一在 styles/ 內）
  context/            # React Context（CartContext）
  pages/              # 頁面元件
    styles/           # 頁面樣式（統一在 styles/ 內）
  types/              # TypeScript 型別 + mock data + helper
  utils/              # 工具函式（telemetry）
```

## 路由結構
```
/               → HomePage     首頁（banner、分類、熱門商品）
/search?q=...   → SearchPage   搜尋頁（篩選、排序、結果列表）
/goods/:id      → GoodsDetailPage  商品詳情（圖片、資訊、相關商品）
/cart           → CartPage     購物車（數量調整、訂單摘要）
/*              → redirect /
```

## 資料流
```
src/types/products.ts
  └─ 600 筆 mock data（in-memory）
  └─ searchProducts() / getProductById() / getProductsByCategory()
        │
        ├─ HomePage（熱門商品前 20 筆）
        ├─ SearchPage（query + category 篩選 + 排序）
        └─ GoodsDetailPage（by id + 同分類相關商品）

CartContext（React Context + useReducer）
  └─ localStorage['momo_cart'] ← 持久化
        │
        ├─ Header（顯示 totalCount badge）
        ├─ GoodsDetailPage（addItem）
        └─ CartPage（removeItem、updateQty、clearCart）

telemetry（utils/telemetry.ts）
  └─ localStorage['momo_telemetry'] ← append-only log
        │
        ├─ search：Header 搜尋送出、SearchPage query 變化
        ├─ product_click：ProductCard 點擊
        └─ add_to_cart：GoodsDetailPage 加入購物車
```

## 元件關係
```
App
└─ CartProvider
   └─ BrowserRouter
      └─ Layout（Header + <Outlet> + Footer）
         ├─ HomePage
         │   └─ ProductCard × n
         ├─ SearchPage
         │   └─ ProductCard × n
         ├─ GoodsDetailPage
         │   └─ ProductCard × n（相關商品）
         └─ CartPage
```
