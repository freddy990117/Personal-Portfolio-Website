import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  // Background setup
  // 上傳檔案後的操作 : npm install gh-pages --save-dev   => 部屬的名稱 : gh-pages 只安裝在此資料夾 --save-dev
  // 再到 packjsoon 新增 scripts: "deploy": "vite build && gh-pages -d dist"
  // 最後 npm run deploy，即可將檔案上傳至 github
  base: "/", // 這邊要是遠端名稱!!!!!
  plugins: [react()],
});
