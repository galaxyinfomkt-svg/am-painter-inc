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
    return SERVICE_SLUGS.map((service) => ({
      source: `/${service}-westBoylston-ma`,
      destination: `/${service}-west-boylston-ma/`,
      statusCode: 301,
    }))
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
