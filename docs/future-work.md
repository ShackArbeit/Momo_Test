# Future Work

## 功能擴充

### 搜尋體驗
- 即時搜尋（debounce input，無需按 Enter）
- 搜尋歷史記錄（localStorage）
- 搜尋建議下拉（autocomplete）
- 多條件篩選（價格區間、評分門檻、標籤）

### 商品頁
- 商品圖片輪播（多張圖）
- 規格選擇（顏色、尺寸）
- 加入追蹤清單（wishlist）
- 商品評論區塊（mock 評論資料）

### 購物車
- 儲存多組收件人地址
- 折扣碼輸入（mock 折扣邏輯）
- 結帳流程頁面（mock 付款步驟）

### Telemetry
- 事件查看介面（dev panel）
- 將 logEvent 替換為真實 analytics SDK（GA4、Mixpanel）
- Session ID 追蹤

## 技術改善

### 效能
- 商品列表虛擬捲動（react-virtual）
- 圖片 lazy load 搭配 IntersectionObserver
- Code splitting（每個 page 獨立 chunk）

### 測試
- 單元測試：`searchProducts()`、`cartReducer`、`logEvent()`
- 元件測試：ProductCard、CartPage（React Testing Library）
- E2E：加入購物車流程、搜尋流程（Playwright）

### 樣式
- 抽出設計 token（color、spacing、typography 變數）
- RWD 手機版適配
- 深色模式

### 架構
- 以 feature 分區重組目錄（`features/catalog/`、`features/cart/`）
- 抽出共用 hooks（`useLocalStorage`、`useTelemetry`）
- 串接真實後端 API 時，以 React Query 管理 server state
