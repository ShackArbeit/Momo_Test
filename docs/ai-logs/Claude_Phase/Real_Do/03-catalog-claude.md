# Phase 03 — Cart and Telemetry 執行記錄

對應 md：`docs/ai-logs/Claude_Phase/03-cart-telemetry.md`

## 目標
完成購物車 state management 與基本 observability。

## 新增檔案

| 檔案路徑 | 說明 |
|---|---|
| `src/utils/telemetry.ts` | telemetry util：`logEvent()` 寫入 localStorage，`getEvents()` 讀取記錄；支援 `search`、`product_click`、`add_to_cart` 三種事件 |
| `src/context/CartContext.tsx` | React Context + useReducer 購物車狀態；初始化從 localStorage 還原，狀態變動時自動寫回；提供 `addItem`、`removeItem`、`updateQty`、`clearCart` |
| `src/pages/CartPage.tsx` | 購物車頁：空車提示、商品列表（數量加減、刪除）、訂單摘要（小計、運費、合計） |
| `src/pages/styles/CartPage.css` | 購物車頁樣式 |

## 修改檔案

| 檔案路徑 | 修改內容 |
|---|---|
| `src/App.tsx` | 加入 `<CartProvider>` 包覆整個 App；新增 `/cart` 路由 → `CartPage` |
| `src/components/Header.tsx` | 引入 `useCart` 顯示購物車件數 badge；搜尋送出時觸發 `logEvent({ type: 'search' })` |
| `src/components/styles/Header.css` | 新增 `.cart-icon-wrap`、`.cart-badge` 樣式（數字 badge 定位於購物車 icon 右上角） |
| `src/components/ProductCard.tsx` | 點擊商品卡片時觸發 `logEvent({ type: 'product_click' })` |
| `src/pages/GoodsDetailPage.tsx` | 引入 `useCart`；加入購物車按鈕啟用，點擊時呼叫 `addItem()` 並觸發 `logEvent({ type: 'add_to_cart' })` |
| `src/pages/SearchPage.tsx` | 新增 `useEffect`：query 變化時觸發 `logEvent({ type: 'search' })` |

## Telemetry 規格
- 儲存位置：`localStorage['momo_telemetry']`
- 資料格式：JSON array，每筆含 `type`、事件欄位、`timestamp`（ISO 8601）
- 記錄事件：
  - `search`：query 字串
  - `product_click`：productId、productName
  - `add_to_cart`：productId、productName、price

## 購物車規格
- 儲存位置：`localStorage['momo_cart']`
- 重新整理後購物車資料保留
- 同商品加入時數量 +1（不重複建立品項）
- 數量歸零時自動移除品項
- 運費：滿 $990 免運，否則 $60

## CSS 確認
所有 CSS 皆位於 `styles/` 資料夾，無殘留檔案。

## 此 Phase 未實作（範圍外）
- 多裝置同步
- 分析面板
- 事件匯出
- 結帳流程（按鈕為示意）
