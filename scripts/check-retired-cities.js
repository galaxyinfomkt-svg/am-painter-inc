#!/usr/bin/env node
/**
 * Guards the two places retired-city slugs are declared:
 *   - src/data/cities.ts   → RETIRED_CITY_SLUGS (source of truth)
 *   - next.config.js       → RETIRED_CITY_SLUGS (drives the 301s)
 *
 * next.config.js is CommonJS and can't import the TS module, so the list is
 * duplicated. If the two drift, retired URLs either 404 (missing redirect) or
 * a live city silently loses its page to a redirect. Both are bad enough to
 * fail the build over.
 *
 * Also asserts the two sets are disjoint: no slug may be both live and retired.
 */
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const citiesSrc = fs.readFileSync(path.join(root, 'src/data/cities.ts'), 'utf8')
const configSrc = fs.readFileSync(path.join(root, 'next.config.js'), 'utf8')

// NOTE: these patterns accept camelCase ([a-zA-Z0-9_]), not just lowercase.
// A `westBoylston` key once slipped past a lowercase-only regex and silently
// shipped 7 camelCase URLs. Keep these permissive.
function extractList(src, name) {
  const m = src.match(new RegExp(`${name}\\s*=\\s*\\[([\\s\\S]*?)\\]`))
  if (!m) throw new Error(`Could not find ${name}`)
  return new Set(m[1].match(/'([a-zA-Z0-9-]+)'/g)?.map((s) => s.slice(1, -1)) ?? [])
}

function extractLiveCities(src) {
  const start = src.indexOf('export const CITIES')
  if (start === -1) throw new Error('Could not find CITIES')
  const body = src.slice(start)
  return new Set([...body.matchAll(/^ {2}([a-zA-Z0-9_]+): \{/gm)].map((m) => m[1]))
}

// City URLs are built from the CITIES object KEY, not the `slug` field. If the
// two disagree (key `westBoylston` vs slug `west-boylston`), the generated URL
// follows the key and the slug-shaped URL 404s. Enforce key === slug so the
// mismatch can't come back.
function checkKeysMatchSlugs(src) {
  const body = src.slice(src.indexOf('export const CITIES'))
  const problems = []
  for (const m of body.matchAll(/^ {2}([a-zA-Z0-9_]+): \{([\s\S]*?)^ {2}\},/gm)) {
    const key = m[1]
    const slug = m[2].match(/slug:\s*"([^"]+)"/)?.[1]
    if (slug && slug !== key) problems.push(`${key} (slug: "${slug}")`)
    if (!/^[a-z0-9-]+$/.test(key)) problems.push(`${key} is not url-safe lowercase`)
  }
  return problems
}

// Both lists feed the redirect map; compare their union so a slug moving
// between them isn't reported as a mismatch.
const retiredData = new Set([
  ...extractList(citiesSrc, 'RETIRED_CITY_SLUGS'),
  ...extractList(citiesSrc, 'LEGACY_URL_SLUGS'),
])
const retiredConfig = new Set([
  ...extractList(configSrc, 'RETIRED_CITY_SLUGS'),
  ...extractList(configSrc, 'LEGACY_URL_SLUGS'),
])
const live = extractLiveCities(citiesSrc)

const errors = []

const onlyData = [...retiredData].filter((s) => !retiredConfig.has(s))
const onlyConfig = [...retiredConfig].filter((s) => !retiredData.has(s))
if (onlyData.length) {
  errors.push(`In cities.ts but NOT in next.config.js (these URLs will 404): ${onlyData.join(', ')}`)
}
if (onlyConfig.length) {
  errors.push(`In next.config.js but NOT in cities.ts: ${onlyConfig.join(', ')}`)
}

const both = [...retiredData].filter((s) => live.has(s))
if (both.length) {
  errors.push(`Slug is BOTH live and retired (page would be shadowed by a 301): ${both.join(', ')}`)
}

const keyProblems = checkKeysMatchSlugs(citiesSrc)
if (keyProblems.length) {
  errors.push(
    `CITIES key must equal its slug and be url-safe (URLs are built from the key): ${keyProblems.join(', ')}`
  )
}

if (errors.length) {
  console.error('✗ retired-city check failed:\n')
  for (const e of errors) console.error('  - ' + e)
  process.exit(1)
}

console.log(
  `✓ retired-city check: ${live.size} live cities, ${retiredData.size} retired, lists in sync`
)
