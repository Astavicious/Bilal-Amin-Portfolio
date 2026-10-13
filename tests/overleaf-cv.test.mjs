import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchCurrentCV } from '../src/lib/overleaf-cv.mjs';

function upstream({ status = 'success', output = '/project/6ac3b285c9bca0cc1652adaf/build/new-build/output/output.pdf', pdf = '%PDF-1.7\ncurrent CV' } = {}) {
  const calls = [];
  const fetch = async (url, options = {}) => {
    calls.push({ url: String(url), options });
    const n = calls.length;
    if (n === 1) return new Response('<meta content="csrf&amp;token" name="ol-csrfToken"><meta name="ol-postUrl" content="/read/xyzvcmhndffc/grant">', { headers: { 'set-cookie': 'overleaf_session2=anonymous; Path=/; HttpOnly' } });
    if (n === 2) {
      assert.match(options.headers.Cookie, /overleaf_session2=anonymous/);
      assert.equal(options.headers['X-CSRF-Token'], 'csrf&token');
      return Response.json({ redirect: '/project/6ac3b285c9bca0cc1652adaf' });
    }
    if (n === 3) return new Response('<meta name="ol-csrfToken" content="project-csrf">');
    if (n === 4) return Response.json({ status, outputFiles: [{ path: 'output.pdf', url: output }], clsiServerId: 'server', compileGroup: 'priority' });
    return new Response(pdf);
  };
  return { fetch, calls };
}

test('uses an anonymous session, compiles saved source and retrieves the new build', async () => {
  const { fetch, calls } = upstream();
  const pdf = await fetchCurrentCV(fetch);
  assert.equal(Buffer.from(pdf).toString(), '%PDF-1.7\ncurrent CV');
  assert.match(calls[4].url, /new-build\/output\/output.pdf/);
  assert.equal(calls[3].options.method, 'POST');
});
test('does not serve an older PDF when compilation fails', async () => {
  const { fetch, calls } = upstream({ status: 'error' });
  await assert.rejects(fetchCurrentCV(fetch), /compile/i);
  assert.equal(calls.length, 4);
});
test('rejects an unexpected output location before sending session cookies', async () => {
  const { fetch, calls } = upstream({ output: 'https://example.com/stolen.pdf' });
  await assert.rejects(fetchCurrentCV(fetch), /output/i);
  assert.equal(calls.length, 4);
});
test('rejects a login/error page returned instead of a PDF', async () => {
  const { fetch } = upstream({ pdf: '<html>Login</html>' });
  await assert.rejects(fetchCurrentCV(fetch), /PDF/i);
});
