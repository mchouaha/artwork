/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.saatchiart.com',
        pathname: '/saatchi/**',
        port:''
      },
    ]
  }
}

module.exports = nextConfig
