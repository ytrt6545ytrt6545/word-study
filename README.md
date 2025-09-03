word-study

最小後端（OpenAI TTS）

本專案已加入一個簡單的 Node 伺服器與 `/api/tts` 端點，使用 OpenAI 的神經語音將文字轉為 MP3，供前端自動產生並快取語音使用。

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
   - 伺服器在 `http://localhost:3000`，同時提供靜態檔案與 `/api/tts` 端點

前端使用方式
- 在新增/匯入區塊勾選「新增/匯入時自動產生語音」
- TTS API URL 預設為 `/api/tts`；若部署到其他網域請改填完整 URL

API 規格
- `POST /api/tts`
  - Body: `{ "text": "string", "lang": "en-US|zh-TW" (可選), "voice": "alloy" (可選) }`
  - 回傳：`audio/mpeg`（MP3）
- 環境變數可調整：
  - `OPENAI_TTS_MODEL`（預設 `gpt-4o-mini-tts`）
  - `OPENAI_TTS_VOICE`（預設 `alloy`）

部署建議
- 可直接將此 Node 伺服器部署到任何支援 Node 的平台（Render/Fly.io/Railway/VPS 等）。
- 或改用 Serverless（Vercel/Netlify/Cloudflare Workers）實作同名端點 `/api/tts`，前端無須改動。

