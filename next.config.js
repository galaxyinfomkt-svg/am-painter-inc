// Retired city slugs — see RETIRED_CITY_SLUGS in src/data/cities.ts for the
// rationale. Duplicated here because next.config.js is CommonJS and cannot
// import the TS data module; keep the two lists in sync (a build-time test
// guards this — see scripts/check-retired-cities.js).
const RETIRED_CITY_SLUGS = [
  'ashland', 'auburn', 'ayer', 'bedford', 'berlin', 'billerica', 'bolton',
  'boxborough', 'boylston', 'carlisle', 'chelmsford', 'clinton', 'dover',
  'fitchburg', 'grafton', 'groton', 'harvard', 'holden', 'holliston',
  'hopkinton', 'lancaster', 'leicester', 'leominster', 'lincoln', 'littleton',
  'maynard', 'medfield', 'medway', 'millbury', 'millis', 'northbridge',
  'oxford', 'paxton', 'princeton', 'rutland', 'sherborn', 'shirley',
  'southborough', 'sterling', 'stow', 'sutton', 'upton', 'wayland',
  'westborough', 'westford', 'west-boylston',
]

// Legacy URL spellings — same towns as above, redirected but not counted as
// separate places. See LEGACY_URL_SLUGS in src/data/cities.ts.
const LEGACY_URL_SLUGS = ['westBoylston']

const SERVICE_SLUGS = [
  'interior-painting', 'exterior-painting', 'cabinet-refinishing',
  'deck-staining', 'drywall-repair', 'remodeling', 'general-contracting',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Consistent trailing slash for all URLs (prevents duplicate content)
  trailingSlash: true,

  // Redirect every retired {service}-{city}-ma URL to its parent service page,
  // so accumulated link equity consolidates there instead of dying in a 404.
  //
  // statusCode: 301 rather than `permanent: true` — the latter emits a 308,
  // which Google treats identically, but 301 is the older and more universally
  // understood permanent signal across crawlers and analytics tooling.
  async redirects() {
    return SERVICE_SLUGS.flatMap((service) =>
      [...RETIRED_CITY_SLUGS, ...LEGACY_URL_SLUGS].map((city) => ({
        source: `/${service}-${city}-ma`,
        destination: `/services/${service}/`,
        statusCode: 301,
      }))
    )
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/msgsndr/**',
      },
      {
        protocol: 'https',
        hostname: 'ezjjorkzzulmmuyeqhyg.supabase.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
    // Optimize image formats for PageSpeed
    formats: ['image/avif', 'image/webp'],
    // Hold optimized image variants in cache for 31 days (immutable assets)
    minimumCacheTTL: 2678400,
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  // Tree-shake icon imports so only the icons actually used are bundled
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
}

module.exports = nextConfig
