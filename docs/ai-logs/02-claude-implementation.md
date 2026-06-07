# 02 - Claude 實作總覽

這份文件只做總入口，不要一次把全部內容丟給 Claude Code。

## 執行原則
- 一次只做一個 phase。
- 每個 phase 做完就停下來檢查。
- 先完成能展示的核心功能，再補文件與收尾。
- mock data 數量請控制在 500 到 1000 筆之間。
- 不要少於 500 筆，也不要超過 1000 筆。
- 執行下一個 phase 前，先確認上一個 phase 已完成。

## 題目與參考
- 題目：Frontend Take Home Evaluation A 題，Mocking momoshop。
- 目標：用純前端做一個 momo 電商 mock 版本。
- 參考網站：https://www.momoshop.com.tw/brand/Main.jsp

## 必要要求
- 不可串接真實 momo API。
- 必須支援：
  - `/`
  - `/search`
  - `/goods/:id`
- 需要 mock data structure。
- 需要 component architecture。
- 需要 state management strategy。
- 購物車可用 React Context + `localStorage`。
- 需要 telemetry，至少記錄：
  - `search`
  - `product_click`
  - `add_to_cart`
- 視覺上要像 momo 電商首頁，但不追求 pixel perfect。

## Phase 清單
1. [00-overview.md](./Claude_Phase/00-overview.md)
2. [01-shell-routing.md](./Claude_Phase/01-shell-routing.md)
3. [02-catalog-pages.md](./Claude_Phase/02-catalog-pages.md)
4. [03-cart-telemetry.md](./Claude_Phase/03-cart-telemetry.md)
5. [04-docs-final-check.md](./Claude_Phase/04-docs-final-check.md)

## 建議順序
- 先讀 `00-overview.md`
- 再依序執行 `01` 到 `04`
- 如果時間不夠，先保留 `01` 到 `03`，`04` 最後補
- 每次只開一份 phase 文件，不要同時執行多份。
