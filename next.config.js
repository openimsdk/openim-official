/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's2.loli.net',
        port: '',
        pathname: '/2023/05/29/**',
      },
    ],
  },
}

module.exports = nextConfig
