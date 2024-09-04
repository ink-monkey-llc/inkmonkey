import type { Metadata } from 'next'
import { cn } from '@/utils/cn'
import Header from '@/app/header/header'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Toaster } from 'react-hot-toast'
import { outfit } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import metaBase from '@/metadataBase'
import 'react-tooltip/dist/react-tooltip.css'
import '@/app/globals.css'
import ScrollUpBtn from './scroll-up/scroll-up-btn'
import './opengraph-image.png'

export const metadata: Metadata = {
 metadataBase: new URL(metaBase),
 title: 'Ink Monkey',
 description:
  'Discover the ultimate destination for all your sticker and decal needs at Ink Monkey! Specializing in an extensive range of stickers and decals. Design your own decal with our powerful AI design tool "Fonzai", or choose from our countless in-house designs. Get laptops stickers, water bottle stickers, even full wall graphics and vehicle back window graphics made of perforated vinyl, we have everything!',
 category: 'Ecommerce',
 openGraph: {
  title: 'Ink Monkey Vinyl Stickers and Graphics',
  siteName: 'Ink Monkey',
  description:
   'Get laptops stickers, water bottle stickers, even full wall graphics and vehicle back window graphics made of perforated vinyl, we have everything!',
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
  },
 },
}

export default function RootLayout({
 children,
 cart,
}: Readonly<{
 children: React.ReactNode
 cart: React.ReactNode
}>) {
 return (
  <html lang='en'>
   <Analytics />
   <GoogleTagManager gtmId='GTM-M9L5J5H' />
   <body className={cn('relative  m-auto overflow-x-hidden', outfit.className)}>
    <div id='modal-root' />
    <Header />
    <Toaster />
    {cart}
    {children}
    <ScrollUpBtn />
   </body>
   <GoogleAnalytics gaId='G-H1PNDS4GRF' />
  </html>
 )
}
