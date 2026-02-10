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
  },

  // Compress responses
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,
}

module.exports = nextConfig
