/** @type {import('next').NextConfig} */
const nextConfig = {
  // Consistent trailing slash for all URLs (prevents duplicate content)
  trailingSlash: true,

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
