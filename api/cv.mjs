import { fetchCurrentCV } from '../src/lib/overleaf-cv.mjs';

export const config = { maxDuration: 60 };
let pending;

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).end();
  }
  try {
    // Coalesce simultaneous visitors without caching an older compiled version.
    pending ??= fetchCurrentCV().finally(() => { pending = undefined; });
    const pdf = await pending;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="Bilal-Amin-CV.pdf"');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    return req.method === 'HEAD' ? res.status(200).end() : res.status(200).send(Buffer.from(pdf));
  } catch {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Retry-After', '10');
    return res.status(503).send('The latest CV is temporarily unavailable. Please try again shortly.');
  }
}
