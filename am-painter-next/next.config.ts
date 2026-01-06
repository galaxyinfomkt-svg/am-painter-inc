import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable static export for maximum performance
  output: 'export',

  // Optimize images
  images: {
    unoptimized: true, // For static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ezjjorkzzulmmuyeqhyg.supabase.co',
      },
    ],
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Strict mode for better debugging
  reactStrictMode: true,

  // Trailing slash for better SEO
  trailingSlash: true,
}

export default nextConfig
