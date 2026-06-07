# 01 - Codex 架構筆記

## 題目理解
- 目標是在 2 小時內完成一個純前端的 momo shop mock。
- 必須包含 `/`、`/search`、`/goods/:id` 三個路由。
- 不串接真實 API，使用 mock data 即可。
- 需要有 component architecture、state management 與簡單 observability。
- 評分重點是交付品質、取捨判斷與可維護性，不是 pixel perfect。

## 架構決策
- 使用 Vite + React + TypeScript + `react-router-dom`。
- 採用頁面導向的輕量架構，不引入過重的 domain 分層。
- 建議以 capability 分區：
  - `app/`：router 與 app shell
  - `features/catalog/`：商品資料、首頁、搜尋頁、商品頁
  - `features/cart/`：購物車 state
  - `shared/`：共用 layout、搜尋列、telemetry helper
- mock data 以小型 in-memory catalog 為主，欄位只保留首頁、搜尋與商品詳情需要的資訊。
- 購物車用 React Context 搭配 `localStorage` 持久化。
- telemetry 只記錄三種事件：`search`、`product_click`、`add_to_cart`，資料同樣寫入 `localStorage`。

## 取捨
- 保留：
  - 簡單路由
  - 本地 mock data
  - Context + `localStorage`
  - 最小 telemetry
- 延後：
  - SSR、cache、pagination
  - 複雜搜尋排序
  - 多分頁同步
  - analytics dashboard
  - 嚴格的視覺還原
- 原因：
  - 這些選擇可以降低失敗風險，讓核心功能先完成。
  - 也足以展示架構思考、state 管理與 observability 意識。

## 延後項目
- 更完整的搜尋篩選與排序。
- 擴充 mock catalog 資料量。
- 抽出更完整的 design tokens 與元件庫。
- 若未來有後端，再把 telemetry 改成真實 analytics。
- 補上搜尋、購物車與路由的測試。

## AI 協作筆記
- 先做最小可行版本，再補必要的 UI 與文件。
- 優先順序是：路由 > 商品瀏覽 > 商品詳情 > 購物車 > telemetry > 視覺修飾。
- 不做沒有明確需求的抽象，避免在時間壓力下過度設計。
- 任何不影響交付的進階想法都先放到 future work。
