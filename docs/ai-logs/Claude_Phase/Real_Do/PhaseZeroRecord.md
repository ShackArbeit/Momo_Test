# Phase 01 — Shell and Routing 執行記錄

對應 md：`docs/ai-logs/Claude_Phase/01-shell-routing.md`

## 目標
建立 app shell、layout 與 routing，讓三個路由可正常進入。

## 新增與修改的檔案

### 新增
| 檔案路徑 | 說明 |
|---|---|
| `src/components/Header.tsx` | 包含 logo、搜尋欄、購物車按鈕、subnav 分類連結 |
| `src/components/styles/Header.css` | Header 樣式 |
| `src/components/Layout.tsx` | 共用版型，使用 `<Outlet />` 渲染子頁面 |
| `src/components/styles/Layout.css` | Layout 樣式 |
| `src/pages/HomePage.tsx` | 首頁骨架（banner、分類、熱門商品佔位） |
| `src/pages/HomePage.css` | 首頁樣式 |
| `src/pages/SearchPage.tsx` | 搜尋頁（讀取 `?q=` 參數、左側篩選、右側結果佔位） |
| `src/pages/SearchPage.css` | 搜尋頁樣式 |
| `src/pages/GoodsDetailPage.tsx` | 商品詳情頁（讀取 `:id` 參數、圖片/資訊佔位） |
| `src/pages/GoodsDetailPage.css` | 商品詳情頁樣式 |

### 修改
| 檔案路徑 | 修改內容 |
|---|---|
| `src/App.tsx` | 改寫為 BrowserRouter + Routes，設定三個路由 + 404 redirect |
| `src/index.css` | 改寫為 momo 風格的全域 reset |

### 搬移（舊路徑保留空檔）
| 原路徑 | 新路徑 |
|---|---|
| `src/components/Header.css` | `src/components/styles/Header.css` |
| `src/components/Layout.css` | `src/components/styles/Layout.css` |

## 路由結構
```
/               → HomePage
/search?q=...   → SearchPage
/goods/:id      → GoodsDetailPage
/*              → redirect to /
```

## 此 phase 未實作（留待後續）
- mock data（Phase 02）
- 購物車邏輯（Phase 03）
- telemetry（Phase 03）
