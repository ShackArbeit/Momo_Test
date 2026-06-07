# momo-mock

一個純前端的 momo 電商 mock 專案，使用 React + TypeScript + Vite 實作。

目標是對照 momo 電商首頁的使用流程，完成以下核心內容：

- `/` 首頁
- `/search` 搜尋頁
- `/goods/:id` 商品詳情頁
- 購物車狀態管理
- `localStorage` 持久化
- 簡單 telemetry 記錄

## 專案啟動

```bash
npm install
npm run dev
```

常用指令：

```bash
npm run build
npm run lint
npm run preview
```

## 專案結構

- `src/`：前端主要程式碼
- `docs/ai-logs/`：AI 協作與設計紀錄
- `docs/DissAI/`：對話整理紀錄

## 如何使用 Codex + Claude Code 完成這個專案

這個專案是用「Codex 做架構與決策，Claude Code 做分階段實作」的方式完成。

### 1. 先用 Codex 做架構規劃

先閱讀：

- `docs/ai-logs/01-codex-architecture.md`

Codex 的工作重點是：

- 釐清題目要求
- 決定 route、state management、mock data、telemetry 的做法
- 寫下 tradeoff
- 決定哪些功能先做、哪些功能延後

這一階段不要急著寫大量 UI code，先把架構方向定下來。

### 2. 再用 Claude Code 依 phase 實作

先閱讀：

- `docs/ai-logs/02-claude-implementation.md`

這份文件是總入口，接著依序執行：

1. `docs/ai-logs/Claude_Phase/00-overview.md`
2. `docs/ai-logs/Claude_Phase/01-shell-routing.md`
3. `docs/ai-logs/Claude_Phase/02-catalog-pages.md`
4. `docs/ai-logs/Claude_Phase/03-cart-telemetry.md`
5. `docs/ai-logs/Claude_Phase/04-docs-final-check.md`

每個 phase 的原則是：

- 一次只做一個 phase
- 做完就停下來檢查
- 不要跳步
- 不要在前一個 phase 還沒完成時開始後面的內容

### 3. 實作時的建議順序

#### Phase 0 - 理解題目

- 先看 `00-overview.md`
- 確認題目、路由、mock data、telemetry、限制條件

#### Phase 1 - App shell 與 routing

- 建立 app shell
- 建立 `/`、`/search`、`/goods/:id`
- 先讓頁面可以切換

#### Phase 2 - 商品資料與頁面內容

- 建立 mock catalog data
- 完成首頁、搜尋頁、商品頁
- 先讓列表與詳情能顯示內容

#### Phase 3 - 購物車與 telemetry

- 實作 React Context 購物車
- 透過 `localStorage` 保存狀態
- 記錄 `search`、`product_click`、`add_to_cart`

#### Phase 4 - 文件與收尾

- 補齊架構、取捨、未來工作文件
- 最後跑 build / lint
- 做最終檢查

### 4. 驗收方式

完成每個階段後，建議至少做以下檢查：

- `npm run build` 是否通過
- `/` 是否可正常瀏覽
- `/search?q=...` 是否有結果
- `/goods/:id` 是否可正確開啟
- 加入購物車後是否會保留
- `localStorage` 是否有 telemetry 記錄

## 已知問題與原因

這個專案因為時間限制，仍保留一些已知問題，主要原因是先保核心流程，再保留可交付性。

### 1. 搜尋條件與 mock 資料的對應還不夠完整

- 問題：某些手動輸入的搜尋詞，或特殊分類組合，可能無法 100% 對到 mock data。
- 原因：mock data 是用生成式方式建立，資料正規化與搜尋索引沒有做成完整版本。
- 取捨：時間優先用在 route、頁面、購物車與 telemetry，而不是做完整搜尋引擎。

### 2. mock 文案仍不是完整的商業可用內容

- 問題：部分商品名稱、tag、分類文案仍屬於 mock / placeholder 內容。
- 原因：這個 take-home 的重點是架構與交付，不是資料庫級別的內容整理。
- 取捨：先把可展示、可搜尋、可加入購物車的流程完成。

### 3. telemetry 只有 localStorage 紀錄，沒有分析面板

- 問題：事件會寫進 `localStorage`，但沒有 dashboard、匯出或清理機制。
- 原因：這題只要求簡單 observability，不需要做完整 analytics 系統。
- 取捨：先保留最小可用追蹤能力，避免把時間花在非必要基礎設施上。

### 4. 購物車沒有多分頁同步與進階容錯

- 問題：購物車主要是單頁面狀態 + `localStorage` 持久化，沒有完整的跨分頁同步。
- 原因：這屬於進階體驗，不是 take-home 的核心要求。
- 取捨：先確保最重要的購買流程可用，再把複雜同步留到未來工作。

### 5. 部分 UI 文案仍屬於過渡狀態

- 問題：少數頁面或樣式可能還有尚未完全整理的文案或命名。
- 原因：在 2 小時等級的交付目標下，優先完成核心功能與文件。
- 取捨：如果後續還有時間，再補最後一輪 copy cleanup。

## 文件索引

- `docs/ai-logs/01-codex-architecture.md`
- `docs/ai-logs/02-claude-implementation.md`
- `docs/ai-logs/Claude_Phase/00-overview.md`
- `docs/ai-logs/Claude_Phase/01-shell-routing.md`
- `docs/ai-logs/Claude_Phase/02-catalog-pages.md`
- `docs/ai-logs/Claude_Phase/03-cart-telemetry.md`
- `docs/ai-logs/Claude_Phase/04-docs-final-check.md`
- `docs/DissAI/2026-06-07-dialogue-log.md`

## 備註

如果要接著迭代，建議先從 `docs/ai-logs/` 的文件開始，而不是直接改 UI。這樣比較容易維持目前的架構與交付節奏。
