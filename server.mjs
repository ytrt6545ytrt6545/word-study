import 'dotenv/config';
import express from 'express';
import OpenAI from 'openai';

const app = express();
const port = process.env.PORT || 3000;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.json({ limit: '2mb' }));

// POST /api/tts { text, lang?, voice? } -> audio/mpeg
app.post('/api/tts', async (req, res) => {
  try {
    const { text, lang, voice } = req.body || {};
    const input = (text || '').toString().trim();
    if (!input) return res.status(400).json({ error: 'Missing text' });

    const model = process.env.OPENAI_TTS_MODEL || 'gpt-4o-mini-tts';
    const selectedVoice = voice || process.env.OPENAI_TTS_VOICE || 'alloy';
    // format can be mp3 or wav; we use mp3 to minimize size
    const format = 'mp3';

    const t0 = Date.now();
    const resp = await openai.audio.speech.create({
      model,
      voice: selectedVoice,
      input,
      format
    });

    const buf = Buffer.from(await resp.arrayBuffer());
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'no-store');
    res.send(buf);
    // simple logging
    console.log(`[TTS] ${input.slice(0, 40)}... -> ${buf.length} bytes in ${Date.now() - t0}ms`);
  } catch (err) {
    console.error('TTS error:', err?.response?.data || err?.message || err);
    res.status(500).json({ error: 'TTS failed' });
  }
});

// Serve static files (index.html) from repo root
app.use(express.static('.'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

