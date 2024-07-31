// @ts-check
const FONZ_URL = process.env.FONZ_URL
/** @type {import('next').NextConfig} */
const nextConfig = {
 trailingSlash: false,
 async rewrites() {
  return [
   {
    source: '/fonz/:path*',
    destination: `${FONZ_URL}/fonz/:path*`,
   },
   {
    source: '/fonz',
    destination: `${FONZ_URL}/fonz`,
   },
  ]
 },
 transpilePackages: ['jotai-devtools'],
 experimental: {
  serverActions: {
   bodySizeLimit: '4mb',
  },
 },
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'cdn.shopify.com',
   },
   {
    protocol: 'https',
    hostname: 'res.cloudinary.com',
   },
  ],
 },
}

export default nextConfig
