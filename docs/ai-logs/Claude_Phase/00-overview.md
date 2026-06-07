# 00 - Overview

請先閱讀這一份，再開始後續 phase。

## 請先理解
- 這是一個純前端的 momo mock take-home。
- 你的工作不是做完整商業系統，而是做出可交付、可說明的核心前端。
- 所有資料都來自 mock data，不可打真實 API。

## 題目內容
- 這是一份 Frontend Take Home Evaluation，題目 A 是 Mocking momoshop。
- 目標是參考 momo 電商網站，做一個純前端的 mock 版本。
- 不可呼叫真實 momo API，所有資料都要使用 mock data。
- 必須至少支援以下路由：
  - `/`：首頁
  - `/search`：搜尋頁
  - `/goods/:id`：商品詳情頁
- 可自行決定 component architecture、routing 結構、state management strategy、mock data structure。
- 購物車可以使用 React Context 搭配 `localStorage`。
- 需要簡單 observability / telemetry，至少記錄：
  - `search`
  - `product_click`
  - `add_to_cart`
- 視覺上不要求 pixel perfect，但整體風格要像 momo 電商首頁。
- 這份 take-home 也在看開發流程、架構思考、取捨與 AI 協作效率。

## 參考網站
- https://www.momoshop.com.tw/brand/Main.jsp

## 共同限制
- 純前端，不串接真實 API。
- 以 2 小時內可完成為最高優先。
- 不做過度設計，先完成核心功能與可說明的架構。
- mock data 數量請維持在 500 到 1000 筆之間。

## 執行方式
- 依序執行 phase。
- 每個 phase 完成後先檢查再往下做。
- 如果時間緊，優先保留核心購物流程與文件可讀性。
- 下一個 phase 只在這一份讀完且理解後才開始。

## 輸入
- 讀完這份 overview。
- 讀完上一個 phase 的輸出與目前專案狀態。

## 輸出
- 釐清題目與限制。
- 接著開始下一個 phase。

## 禁止事項
- 不要開始寫完整產品。
- 不要一次把全部功能做完。
- 不要把 mock data 量做太少或過大。
