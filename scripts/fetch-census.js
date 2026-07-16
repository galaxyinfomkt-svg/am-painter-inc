#!/usr/bin/env node
/**
 * Regenerates the Census-sourced fields of src/data/cities.ts.
 *
 *   CENSUS_API_KEY=xxxx node scripts/fetch-census.js > /tmp/cities-data.json
 *
 * Sources (both free, both public):
 *   - ACS 2023 5-year detailed tables  — population, median home value,
 *     median household income, year-structure-built buckets
 *   - 2023 Gazetteer county-subdivision file — land area + official centroid
 *
 * Why this file exists: the original city data was typed in by hand and was
 * materially wrong (Framingham's median home value was off by 33%, and
 * `pre1978Percent` clustered on 50/55/60/65 across 41 of 60 towns — a
 * signature of eyeballing, since real census data does not bunch on round
 * fives). Anything shown to a resident as a fact about their own town has to
 * be reproducible, so it is fetched rather than authored.
 *
 * The API key is NOT stored in the repo and is NOT needed at build or run
 * time — values are baked into cities.ts as literals. This runs by hand when
 * a new ACS vintage lands.
 */
const https = require('https')

const KEY = process.env.CENSUS_API_KEY
if (!KEY) {
  console.error('Set CENSUS_API_KEY. Get one free at https://api.census.gov/data/key_signup.html')
  process.exit(1)
}

// Hudson shop — 74 Broad St, Hudson MA 01749
const SHOP = { lat: 42.3917, lon: -71.5677 }

const ACS_VARS = [
  'NAME',
  'B01003_001E', // total population
  'B25077_001E', // median home value (owner-occupied)
  'B19013_001E', // median household income
  'B25034_001E', // housing units: total
  'B25034_002E', // built 2020 or later
  'B25034_003E', // built 2010-2019
  'B25034_004E', // built 2000-2009
  'B25034_005E', // built 1990-1999
  'B25034_006E', // built 1980-1989
]

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

function haversineMiles(aLat, aLon, bLat, bLon) {
  const R = 3958.8
  const toRad = (x) => (x * Math.PI) / 180
  const dLat = toRad(bLat - aLat)
  const dLon = toRad(bLon - aLon)
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h))
}

// ACS uses large negative sentinels (-666666666 etc.) for "no data".
const num = (v) => {
  const n = Number(v)
  return Number.isFinite(n) && n >= 0 ? n : null
}

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

// Region assignment. Geographic, from county + distance to Boston — not a
// judgment about the town itself.
function regionFor(county, lat, lon) {
  const toBoston = haversineMiles(lat, lon, 42.3601, -71.0589)
  if (county === 'Worcester') return toBoston < 35 ? 'worcester-county' : 'central-ma'
  if (county === 'Essex') return 'north-shore'
  if (['Suffolk', 'Norfolk'].includes(county)) return 'greater-boston'
  if (county === 'Middlesex') return toBoston < 12 ? 'greater-boston' : 'metrowest'
  return 'metrowest'
}

// areaType from real population density, not vibes.
function areaTypeFor(density) {
  if (density >= 5000) return 'urban'
  if (density >= 1500) return 'suburban'
  if (density >= 500) return 'semi-rural'
  return 'rural'
}

async function main() {
  const acsUrl =
    `https://api.census.gov/data/2023/acs/acs5?get=${ACS_VARS.join(',')}` +
    `&for=county%20subdivision:*&in=state:25%20county:*&key=${KEY}`
  const raw = await get(acsUrl)
  if (!raw.trim().startsWith('[')) {
    console.error('Census API did not return JSON. First bytes:\n' + raw.slice(0, 200))
    process.exit(1)
  }
  const acs = JSON.parse(raw)
  const idx = Object.fromEntries(acs[0].map((h, i) => [h, i]))

  const gazRaw = await get(
    'https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2023_Gazetteer/2023_gaz_cousubs_25.txt'
  )
  const gaz = new Map()
  for (const line of gazRaw.split('\n').slice(1)) {
    const c = line.split('\t').map((x) => x.trim())
    if (c.length < 11) continue
    const m = c[3].match(/^(.*?) (town|city|Town city)$/)
    if (!m) continue
    gaz.set(m[1].trim().toLowerCase(), {
      sqmi: parseFloat(c[7]),
      lat: parseFloat(c[9]),
      lon: parseFloat(c[10]),
    })
  }

  const out = []
  for (const row of acs.slice(1)) {
    const m = row[0].match(/^(.*?) (town|city|Town city) ?, (.*?) County/)
    if (!m) continue
    const name = m[1].trim()
    const county = m[3].trim()
    const g = gaz.get(name.toLowerCase())
    if (!g || !g.sqmi) continue

    const population = num(row[idx.B01003_001E])
    const medianHomeValue = num(row[idx.B25077_001E])
    const medianIncome = num(row[idx.B19013_001E])
    const units = num(row[idx.B25034_001E])
    if (!population || !medianHomeValue || !units) continue

    // Everything NOT in a post-1980 bucket was built 1979 or earlier.
    const newer = [2, 3, 4, 5, 6].reduce(
      (s, i) => s + (num(row[idx[`B25034_00${i}E`]]) ?? 0),
      0
    )
    const pre1980Percent = Math.round((100 * (units - newer)) / units)
    const density = Math.round(population / g.sqmi)
    const distanceMiles = Math.round(haversineMiles(SHOP.lat, SHOP.lon, g.lat, g.lon) * 10) / 10

    out.push({
      name,
      slug: slugify(name),
      population,
      medianHomeValue,
      ...(medianIncome ? { medianIncome } : {}),
      pre1980Percent,
      county,
      density,
      distanceMiles,
      region: regionFor(county, g.lat, g.lon),
      areaType: areaTypeFor(density),
    })
  }

  out.sort((a, b) => a.distanceMiles - b.distanceMiles)
  console.error(
    `Fetched ${out.length} Massachusetts towns with complete data ` +
      `(nearest: ${out[0].name} ${out[0].distanceMiles}mi, ` +
      `143rd: ${out[142]?.name} ${out[142]?.distanceMiles}mi)`
  )
  process.stdout.write(JSON.stringify(out, null, 2))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
