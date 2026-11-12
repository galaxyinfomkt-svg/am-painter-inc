import { NextResponse } from 'next/server'
import { business } from './data/business'

// Site-wide maintenance mode.
//
// Every page answers 503 + Retry-After so search engines treat the outage as
// temporary and keep the existing index (a 200 maintenance page would get
// indexed in place of the real content). To bring the site back, revert the
// PR that added this file, or set MAINTENANCE_MODE=off in Vercel and redeploy.
const MAINTENANCE = process.env.MAINTENANCE_MODE !== 'off'

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${business.name} — Under Maintenance</title>
<style>
  :root { color-scheme: light dark; --bg:#faf7f5; --fg:#1f1a17; --muted:#6b625c; --accent:#9b1c1c; --card:#fff; }
  @media (prefers-color-scheme: dark) { :root { --bg:#151211; --fg:#f3eeea; --muted:#b3a9a2; --accent:#e05a5a; --card:#1f1b19; } }
  * { box-sizing: border-box; }
  body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center;
         padding:24px 16px; background:var(--bg); color:var(--fg);
         font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  main { width:100%; max-width:520px; background:var(--card); border-radius:16px; padding:32px 24px;
         text-align:center; box-shadow:0 10px 30px rgba(0,0,0,.08); }
  h1 { font-size:1.6rem; margin:0 0 8px; }
  .brand { color:var(--accent); font-weight:700; letter-spacing:.02em; margin-bottom:20px; }
  p { color:var(--muted); line-height:1.55; margin:0 0 12px; }
  a.btn { display:block; margin-top:20px; padding:14px 18px; border-radius:10px; background:var(--accent);
          color:#fff; font-weight:600; font-size:1.1rem; text-decoration:none; }
  a.mail { display:inline-block; margin-top:14px; color:var(--fg); }
</style>
</head>
<body>
<main>
  <div class="brand">${business.name}</div>
  <h1>We'll be right back</h1>
  <p>Our website is undergoing scheduled maintenance. We're still open for business — call or email us for a free estimate.</p>
  <p lang="pt">Nosso site está em manutenção. Continuamos atendendo normalmente — ligue ou envie um e-mail.</p>
  <a class="btn" href="tel:${business.phoneRaw}">Call ${business.phone}</a>
  <a class="mail" href="mailto:${business.email}">${business.email}</a>
</main>
</body>
</html>`

export function middleware() {
  if (!MAINTENANCE) return NextResponse.next()
  return new NextResponse(html, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '86400',
      'Cache-Control': 'no-store',
    },
  })
}

export const config = {
  // Let build assets, robots.txt and verification files through untouched.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|.*\\.txt$).*)'],
}
