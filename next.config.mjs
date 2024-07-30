// @ts-check
const FONZ_URL = process.env.FONZ_URL
/** @type {import('next').NextConfig} */
const nextConfig = {
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
