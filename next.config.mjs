import withBundleAnalyzer from '@next/bundle-analyzer'
// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
 transpilePackages: ['jotai-devtools'],
 redirects: async () => {
  return [
   {
    source: '/backdoor',
    destination: 'https://ink-monkey-backdoor.vercel.app/',
    permanent: true,
   },
  ]
 },
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
   {
    protocol: 'https',
    hostname: 'jumpshare.com',
   },
  ],
 },
}

const bundleAnalyzerConfig = withBundleAnalyzer({
 enabled: process.env.ANALYZE === 'true',
})

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//  enabled: process.env.ANALYZE === 'true',
// })

export default bundleAnalyzerConfig(nextConfig)
