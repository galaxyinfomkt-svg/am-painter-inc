const SERVICE_SLUGS = [
  'interior-painting', 'exterior-painting', 'cabinet-refinishing',
  'deck-staining', 'drywall-repair', 'remodeling', 'general-contracting',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Consistent trailing slash for all URLs (prevents duplicate content)
  trailingSlash: true,

  // West Boylston shipped under the object key `westBoylston`, and city URLs
  // are built from the key — so /{service}-westBoylston-ma/ went live and got
  // indexed in camelCase while the kebab-case form 404'd. The key is now the
  // slug, which fixes new URLs but would 404 the 7 indexed camelCase ones.
  // 301 them onto the correct URL so the indexing carries over.
  async redirects() {
    return [
      ...SERVICE_SLUGS.map((service) => ({
        source: `/${service}-westBoylston-ma`,
        destination: `/${service}-west-boylston-ma/`,
        statusCode: 301,
      })),

      // GSC reports 128 "Not found (404)" URLs. City slugs never changed (the
      // 60 originals all survived the expansion to 143), so these are legacy /
      // guessed paths — from older versions of the site and from inbound links
      // that assume conventional URLs. Each 404 is a dead end for a visitor and
      // wasted crawl budget, so point the predictable ones at their real
      // equivalent instead of letting them die.
      //
      // Bare service paths: /interior-painting/ is the URL a human or an
      // external link would guess for a service hub.
      ...SERVICE_SLUGS.map((service) => ({
        source: `/${service}`,
        destination: `/services/${service}/`,
        statusCode: 301,
      })),

      // Conventional pages this site keeps as homepage sections, not routes.
      { source: '/contact', destination: '/#contact', statusCode: 301 },
      { source: '/gallery', destination: '/#portfolio', statusCode: 301 },
      { source: '/portfolio', destination: '/#portfolio', statusCode: 301 },
      { source: '/reviews', destination: '/#reviews', statusCode: 301 },
      { source: '/testimonials', destination: '/#reviews', statusCode: 301 },
      { source: '/estimate', destination: '/quote-calculator/', statusCode: 301 },
      { source: '/quote', destination: '/quote-calculator/', statusCode: 301 },
    ]
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
