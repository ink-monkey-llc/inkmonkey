// @ts-check
const fonzUrl = 'https://fonz-store.vercel.app/'
/** @type {import('next').NextConfig} */
const nextConfig = {
 async rewrites() {
  return [
   {
    source: '/fonz/:match*',
    destination: `${fonzUrl}/:match*`,
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
