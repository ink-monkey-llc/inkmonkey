// @ts-check
const FONZ_URL = process.env.FONZ_URL
/** @type {import('next').NextConfig} */
const nextConfig = {
 async rewrites() {
  return [
   {
    source: '/fonz',
    destination: `${FONZ_URL}/fonz`,
   },
   {
    source: '/fonz/:path+',
    destination: `${FONZ_URL}/fonz/:path+`,
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
