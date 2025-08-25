/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/landing/:path*',
        destination: 'https://gofastbackend.onrender.com/tripwell/landing/:path*',
      },
    ];
  },
}

module.exports = nextConfig
