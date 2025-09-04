import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '2mb' }));

// Note: TTS route removed per request

// Serve static files (index.html) from repo root
app.use(express.static('.'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
