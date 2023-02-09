/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
  basePath: isProd ? '/metakrew' : undefined,  
}

module.exports = nextConfig
