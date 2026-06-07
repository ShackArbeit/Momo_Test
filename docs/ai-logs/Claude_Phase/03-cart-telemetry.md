# 03 - Cart and Telemetry

請只做這一個 phase，做完就停止。
開始前先確認 `02-catalog-pages.md` 已完成。

## 目標
- 完成購物車 state management 與基本 observability。

## 請先理解
- 這一階段是把互動與記錄補上。
- 不要把 telemetry 做成分析平台，只要能記錄事件即可。

## 請執行
- 用 React Context 建立購物車狀態。
- 讓購物車資料可透過 `localStorage` 保存與回復。
- 實作 `add_to_cart`。
- 實作 telemetry util，記錄：
  - `search`
  - `product_click`
  - `add_to_cart`
- telemetry 直接寫入 `localStorage`，不要再做分析系統。
- mock data 數量維持在 500 到 1000 筆之間，不要改成更少。

## 交付標準
- 加入購物車後狀態會更新。
- 重新整理後購物車仍存在。
- 指定事件會被記錄。

## 輸入
- 已完成的商品頁與搜尋流程
- 可用的商品資料與商品 id

## 輸出
- 可用的購物車
- 可查的 telemetry log

## 禁止事項
- 不要做多裝置同步。
- 不要做分析面板。
- 不要做事件匯出。

## 完成後停止
- 這個 phase 只做最小可用版本。
- 不要做多裝置同步、分析面板或事件匯出。
- 不要跳到文件 phase，先確認購物車與 telemetry 正常。
