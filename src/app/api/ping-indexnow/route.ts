import { NextResponse } from 'next/server'
import { CITIES } from '@/data/cities'
import { SERVICES } from '@/data/services'
import { REGIONS } from '@/data/regions'
import { business } from '@/data/business'

const INDEXNOW_KEY = 'ampainter-indexnow-a7b3c2d8e9f1'
const KEY_LOCATION = `${business.url}/${INDEXNOW_KEY}.txt`
const HOST = new URL(business.url).host

/**
 * Pings the IndexNow API with the current sitemap URLs so Bing, Yandex,
 * Seznam, and Naver re-crawl on-demand (Google ignores IndexNow but
 * still follows the sitemap).
 *
 * Trigger after a deploy with content changes:
 *   curl -X POST 'https://ampainterinc.com/api/ping-indexnow' \
 *     -H 'Authorization: Bearer YOUR_INDEXNOW_AUTH'
 *
 * Or set up a Vercel Deploy Hook -> POST to this endpoint.
 *
 * Set env var INDEXNOW_AUTH in Vercel to a long random string to protect
 * the endpoint from abuse. If the env var is unset, the endpoint is
 * disabled (returns 503).
 */
export async function POST(req: Request) {
  const expected = process.env.INDEXNOW_AUTH
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: 'INDEXNOW_AUTH env var not set; endpoint disabled' },
      { status: 503 }
    )
  }

  const auth = req.headers.get('authorization')
  if (auth !== `Bearer ${expected}`) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  }

  // Build the URL list — same set the sitemap publishes
  const urls: string[] = []
  urls.push(`${business.url}/`)
  urls.push(`${business.url}/about/`)
  for (const svc of Object.keys(SERVICES)) urls.push(`${business.url}/services/${svc}/`)
  urls.push(`${business.url}/house-painting-marlborough-ma/`)
  urls.push(`${business.url}/house-painting-worcester-ma/`)
  for (const region of Object.keys(REGIONS)) {
    for (const svc of Object.keys(SERVICES)) {
      urls.push(`${business.url}/region/${region}/${svc}/`)
    }
  }
  for (const city of Object.keys(CITIES)) {
    for (const svc of Object.keys(SERVICES)) {
      urls.push(`${business.url}/${svc}-${city}-ma/`)
    }
  }

  // IndexNow accepts up to 10,000 URLs per request
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    })
    return NextResponse.json({
      ok: res.ok,
      status: res.status,
      submitted: urls.length,
      message: res.ok
        ? 'IndexNow notified — Bing/Yandex will re-crawl shortly'
        : `IndexNow returned ${res.status}`,
    })
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : String(err) },
      { status: 502 }
    )
  }
}
