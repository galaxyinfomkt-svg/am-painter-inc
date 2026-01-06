/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'ezjjorkzzulmmuyeqhyg.supabase.co' },
      { protocol: 'https', hostname: 'ampainterinc.com' }
    ]
  }
};

export default nextConfig;
