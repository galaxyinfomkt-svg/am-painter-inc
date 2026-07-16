#!/usr/bin/env node
/**
 * Rewrites src/data/cities.ts from Census data, keeping the hand-written
 * local knowledge that already exists.
 *
 *   CENSUS_API_KEY=xxx node scripts/fetch-census.js > /tmp/census.json
 *   node scripts/build-cities.js /tmp/census.json <count>
 *
 * Merge rule, per town:
 *   - Census fields (population, medianHomeValue, medianIncome, pre1980Percent,
 *     county, density, distanceMiles, region, areaType) ALWAYS come from the
 *     API. They overwrite whatever was typed in before, because the typed-in
 *     values were wrong (Framingham was off by 33%).
 *   - Local-knowledge fields (architectureStyle, neighborhoods, challenges,
 *     climate, zipCodes) are CARRIED OVER from the existing file when present
 *     and simply omitted otherwise. They are not in any dataset, so a new town
 *     gets none — the page hides those sections rather than inventing them.
 *
 * Towns are selected by distance from the Hudson shop, nearest first.
 */
const fs = require('fs')
const path = require('path')

const [dataPath, countArg] = process.argv.slice(2)
if (!dataPath) {
  console.error('usage: build-cities.js <census.json> [count]')
  process.exit(1)
}
const COUNT = parseInt(countArg || '143', 10)

const root = path.join(__dirname, '..')
const citiesPath = path.join(root, 'src/data/cities.ts')
const src = fs.readFileSync(citiesPath, 'utf8')
const census = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

// ---- Harvest local knowledge from the current file -------------------------
const existing = new Map()
const body = src.slice(src.indexOf('export const CITIES'))
for (const m of body.matchAll(/^ {2}([a-zA-Z0-9_]+): \{([\s\S]*?)^ {2}\},/gm)) {
  const block = m[2]
  // Quoted values may contain escaped quotes ("St. Mark\'s School area"), so
  // the string patterns must consume \\. pairs rather than stop at the first
  // quote. A naive [^']* here silently truncates and corrupts the output.
  const STR = String.raw`'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"`
  const unesc = (s) => s.replace(/\\(['"\\])/g, '$1')
  const grabArr = (field) => {
    const mm = block.match(new RegExp(`${field}:\\s*\\[([\\s\\S]*?)\\]`))
    if (!mm) return null
    const items = mm[1].match(new RegExp(STR, 'g'))
    if (!items) return null
    return items.map((s) => unesc(s.slice(1, -1)))
  }
  const grabStr = (field) => {
    const mm = block.match(new RegExp(`${field}:\\s*(?:${STR})`))
    if (!mm) return null
    const v = mm[1] ?? mm[2]
    return v == null ? null : unesc(v)
  }
  const name = grabStr('name')
  if (!name) continue
  existing.set(name.toLowerCase(), {
    zipCodes: grabArr('zipCodes'),
    architectureStyle: grabArr('architectureStyle'),
    neighborhoods: grabArr('neighborhoods'),
    challenges: grabArr('challenges'),
    climate: grabStr('climate'),
  })
}
console.error(`Carried local knowledge from ${existing.size} existing towns`)

// ---- Select the N nearest --------------------------------------------------
const picked = census.slice(0, COUNT)

const q = (s) => `'${String(s).replace(/'/g, "\\'")}'`
const arr = (a) => `[${a.map(q).join(', ')}]`

let withLocal = 0
const entries = picked.map((c) => {
  const local = existing.get(c.name.toLowerCase()) || {}
  const lines = [
    `    name: ${q(c.name)},`,
    `    slug: ${q(c.slug)},`,
    `    population: ${c.population},`,
    `    medianHomeValue: ${c.medianHomeValue},`,
  ]
  if (c.medianIncome) lines.push(`    medianIncome: ${c.medianIncome},`)
  lines.push(`    pre1980Percent: ${c.pre1980Percent},`)
  if (c.county) lines.push(`    county: ${q(c.county)},`)
  if (local.zipCodes?.length) lines.push(`    zipCodes: ${arr(local.zipCodes)},`)
  lines.push(`    density: ${c.density},`)
  lines.push(`    distanceMiles: ${c.distanceMiles},`)
  lines.push(`    region: ${q(c.region)},`)
  lines.push(`    areaType: ${q(c.areaType)},`)

  const hasLocal =
    local.architectureStyle?.length ||
    local.neighborhoods?.length ||
    local.challenges?.length ||
    local.climate
  if (hasLocal) withLocal++
  if (local.architectureStyle?.length)
    lines.push(`    architectureStyle: ${arr(local.architectureStyle)},`)
  if (local.neighborhoods?.length) lines.push(`    neighborhoods: ${arr(local.neighborhoods)},`)
  if (local.challenges?.length) lines.push(`    challenges: ${arr(local.challenges)},`)
  if (local.climate) lines.push(`    climate: ${q(local.climate)},`)

  return `  ${c.slug.replace(/-/g, '_')}: {\n${lines.join('\n')}\n  },`
})

// Key must equal slug — URLs are built from the key. Use the slug verbatim.
const entriesFixed = picked.map((c, i) => entries[i].replace(/^ {2}[a-z0-9_]+:/, `  '${c.slug}':`))

const generated = `export const CITIES: Record<string, City> = {
${entriesFixed.join('\n\n')}
};

export const getAllCitySlugs = () => Object.keys(CITIES);
export const getCityBySlug = (slug: string) => CITIES[slug];
`

const head = src.slice(0, src.indexOf('export const CITIES'))
fs.writeFileSync(citiesPath, head + generated)

console.error(
  `Wrote ${picked.length} towns (${withLocal} with local knowledge, ` +
    `${picked.length - withLocal} Census-only) — ${picked.length * 7} city×service pages. ` +
    `Farthest: ${picked[picked.length - 1].name} at ${picked[picked.length - 1].distanceMiles}mi`
)
