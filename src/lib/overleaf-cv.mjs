const origin = 'https://www.overleaf.com';
const project = '/project/6ac3b285c9bca0cc1652adaf';
const readPath = '/read/xyzvcmhndffc';

function meta(html, name) {
  for (const tag of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs = Object.fromEntries(Array.from(tag[0].matchAll(/([\w-]+)="([^"]*)"/g), m => [m[1], m[2]]));
    if (attrs.name === name) return (attrs.content ?? '').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
  }
  throw new Error('Missing Overleaf page metadata');
}

// Anonymous read-only access only; no account credentials or editor cookies.
export async function fetchCurrentCV(fetcher = fetch) {
  const cookies = new Map();
  const signal = AbortSignal.timeout(50000);
  async function request(path, body, csrf) {
    const url = new URL(path, origin);
    if (url.origin !== origin) throw new Error('Unexpected Overleaf output location');
    const headers = { Cookie: Array.from(cookies, ([k, v]) => `${k}=${v}`).join('; ') };
    if (body) Object.assign(headers, { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf });
    const response = await fetcher(url.href, {
      method: body ? 'POST' : 'GET', headers, body: body ? JSON.stringify(body) : undefined,
      signal, redirect: 'error', cache: 'no-store',
    });
    for (const cookie of response.headers.getSetCookie()) {
      const pair = cookie.split(';')[0];
      const index = pair.indexOf('=');
      cookies.set(pair.slice(0, index), pair.slice(index + 1));
    }
    if (!response.ok) throw new Error(`Overleaf request failed (${response.status})`);
    return response;
  }
  const entry = await (await request(readPath)).text();
  const grant = meta(entry, 'ol-postUrl');
  if (grant !== `${readPath}/grant`) throw new Error('Unexpected Overleaf access route');
  const access = await (await request(grant, { confirmedByUser: true, tokenHashPrefix: '1f94fe' }, meta(entry, 'ol-csrfToken'))).json();
  if (access.redirect !== project) throw new Error('Unexpected Overleaf project');
  const page = await (await request(project)).text();
  const compile = await (await request(`${project}/compile`, {
    draft: false, stopOnFirstError: true, incrementalCompilesEnabled: true,
  }, meta(page, 'ol-csrfToken'))).json();
  if (compile.status !== 'success') throw new Error('Overleaf compile failed');
  const output = compile.outputFiles?.find(file => file.path === 'output.pdf');
  if (!output?.url?.startsWith(`${project}/build/`) || !output.url.endsWith('/output/output.pdf')) {
    throw new Error('Unexpected Overleaf output location');
  }
  const url = new URL(output.url, origin);
  if (compile.clsiServerId) url.searchParams.set('clsiserverid', compile.clsiServerId);
  if (compile.compileGroup) url.searchParams.set('compileGroup', compile.compileGroup);
  const response = await request(url.href);
  const pdf = await response.arrayBuffer();
  if (pdf.byteLength > 5_000_000 || Buffer.from(pdf).subarray(0, 5).toString() !== '%PDF-') {
    throw new Error('Overleaf did not return a valid PDF');
  }
  return pdf;
}
