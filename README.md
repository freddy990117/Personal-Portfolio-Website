這個專案是我第一個完整使用 React 編寫的自我介紹網頁，目的是展示我的個人資訊、項目經驗與聯絡方式，並作為我的作品集。
專案中使用了以下技術：
1.我使用 createBrowserRouter 和 RouterProvider 組件來管理各個網頁的路由設定(例如首頁、履歷、專案頁)。這樣的路由管理方式提高了應用的可維護性與擴展性，管理起來更清晰簡單。
2.我使用 useNavigate 來實現程式化導航。在首頁，我透過 useNavigate 傳入路徑字串(map + nav.path)，根據操作自動跳轉到相應的頁面，從而更新應用的 URL 並渲染對應內容。
3.我在專案中使用 SCSS 運用了巢狀結構來清晰地表達 DOM 元素與其樣式之間的關聯。此外，我利用 SCSS 的靈活性來實現響應式設計，使得頁面在不同裝置下都能有良好的顯示效果。
