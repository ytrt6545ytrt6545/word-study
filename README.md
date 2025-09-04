word-study

最小後端（OpenAI TTS）


需求
- Node.js 18+（必要，提供 fetch 與更佳的串流支援）
- OpenAI API Key

安裝與啟動
1) 安裝依賴
   - `npm install`
2) 設定環境變數
   - 複製 `.env.example` 為 `.env`，填入 `OPENAI_API_KEY`
3) 啟動伺服器
   - `npm start`

前端使用方式
- 在新增/匯入區塊勾選「新增/匯入時自動產生語音」

API 規格
  - Body: `{ "text": "string", "lang": "en-US|zh-TW" (可選), "voice": "alloy" (可選) }`
  - 回傳：`audio/mpeg`（MP3）
- 環境變數可調整：

部署建議
- 可直接將此 Node 伺服器部署到任何支援 Node 的平台（Render/Fly.io/Railway/VPS 等）。

