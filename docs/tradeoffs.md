# Trade-offs

## 保留的決策

### 1. Plain CSS over CSS-in-JS / Tailwind
- **選擇**：每個元件對應一個 CSS 檔，統一放在 `styles/` 子資料夾
- **原因**：無額外依賴、build 速度快、範圍清楚
- **代價**：class 命名需自律，無自動 scoping

### 2. React Context + useReducer over Redux / Zustand
- **選擇**：CartContext 直接用內建 API
- **原因**：購物車邏輯規模小，不需要 middleware 或 devtools
- **代價**：若 context consumer 變多，re-render 可能增加（此規模無影響）

### 3. In-memory mock data（型別 + 產生器）over JSON 檔
- **選擇**：`src/types/products.ts` 用 deterministic 亂數產生 600 筆資料
- **原因**：靈活調整欄位、不需維護大型 JSON、可即時調整數量
- **代價**：每次 build 重新產生，無法模擬後端分頁行為

### 4. localStorage telemetry over 真實 analytics
- **選擇**：`logEvent()` 直接 append 到 `localStorage['momo_telemetry']`
- **原因**：純前端限制，無後端可送；結構設計成未來可替換
- **代價**：storage 有上限，無跨裝置、無 retention

### 5. placehold.co 佔位圖 over 真實商品圖
- **選擇**：圖片 URL 用 placehold.co 產生
- **原因**：純前端，無圖片資源；顏色 seed 讓每張圖視覺上不同
- **代價**：視覺呈現不如真實商品圖，需網路連線才能顯示

## 延後的決策

| 功能 | 理由 |
|---|---|
| SSR / 預渲染 | 純前端 SPA 已足夠展示架構，SSR 增加複雜度不符時間限制 |
| 搜尋 debounce | 目前搜尋在導航時觸發，非即時搜尋，不需 debounce |
| 無限捲動 / 分頁 | mock data 已在 client 端，分頁屬過度設計 |
| 測試（Jest / RTL） | 時間限制內優先交付功能；架構已設計成可測試 |
| i18n | 題目為中文介面，無多語言需求 |
| RWD 細節 | 整體版型為桌面優先，手機版留給 future work |
