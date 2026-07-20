#!/usr/bin/env node
/**
 * Fetches National Register of Historic Places listings for Massachusetts and
 * groups them by town.
 *
 *   node scripts/fetch-historic.js > historic-data.json
 *
 * SOURCE
 * National Park Service, NRHP locations layer, served from the NPS public
 * ArcGIS endpoint. No key required. Every row is a real, federally listed
 * property — which is the point: cities.ts forbids guessing at local detail,
 * and this is local detail that can be checked against a government register.
 *
 * WHY A PAINTING SITE WANTS THIS
 * The count is a genuine signal about a town's housing: a town with dozens of
 * listed properties has old building stock, which means lead paint, original
 * millwork, and owners who care what a repaint does to a period exterior. It
 * differs per town and cannot be fabricated.
 *
 * WHAT MAY BE CLAIMED FROM IT
 * That the town HAS these listings, and what that implies about its housing.
 * NOT that this business has worked on them, is approved by any commission, or
 * has any relationship to them whatsoever. See the note in regions.ts about the
 * named-institution claims that had to be removed for exactly that reason.
 */
const https = require('https')

const BASE =
  'https://mapservices.nps.gov/arcgis/rest/services/cultural_resources/nrhp_locations/MapServer/0/query'

const get = (url) =>
  new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let d = ''
        res.on('data', (c) => (d += c))
        res.on('end', () => resolve(d))
      })
      .on('error', reject)
  })

async function main() {
  const all = []
  const PAGE = 1000
  for (let offset = 0; ; offset += PAGE) {
    const url =
      `${BASE}?where=${encodeURIComponent("State='MASSACHUSETTS'")}` +
      `&outFields=${encodeURIComponent('RESNAME,City,County')}` +
      `&returnGeometry=false&f=json&resultOffset=${offset}&resultRecordCount=${PAGE}`
    const raw = await get(url)
    let json
    try {
      json = JSON.parse(raw)
    } catch {
      console.error('NPS did not return JSON. First bytes:\n' + raw.slice(0, 200))
      process.exit(1)
    }
    const feats = json.features || []
    all.push(...feats.map((f) => f.attributes))
    console.error(`  fetched ${all.length}...`)
    if (feats.length < PAGE) break
    if (offset > 20000) break // safety stop
  }

  // Group by town. Names come through with inconsistent casing and the odd
  // trailing space, so normalise for the key but keep a display name.
  const byCity = new Map()
  for (const r of all) {
    const city = (r.City || '').trim()
    const name = (r.RESNAME || '').trim()
    if (!city || !name) continue
    const key = city.toLowerCase()
    if (!byCity.has(key)) byCity.set(key, { city, county: (r.County || '').trim(), names: [] })
    byCity.get(key).names.push(name)
  }

  const out = {}
  for (const [key, v] of byCity) {
    out[key] = {
      city: v.city,
      count: v.names.length,
      // A few examples, shortest first — the short ones are the readable ones
      // ("Golden Ball Tavern" over "Peirce, Edward, House--Henderson House of
      // Northeastern University").
      examples: v.names.sort((a, b) => a.length - b.length).slice(0, 3),
    }
  }

  console.error(
    `Grouped ${all.length} listings into ${Object.keys(out).length} Massachusetts towns`
  )
  process.stdout.write(JSON.stringify(out, null, 2))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
