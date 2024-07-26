import type { Metadata } from 'next'
import { cn } from './utils/cn'
import Header from './header/header'
import { Toaster } from 'react-hot-toast'
import { open_sans, outfit, smooch } from '@/lib/fonts'
import 'react-tooltip/dist/react-tooltip.css'
import './globals.css'
import Footer from './footer/footer'

export const metadata: Metadata = {
 title: 'Ink Monkey',
 description:
  'Discover the ultimate destination for all your decal needs at Ink Monkey! Specializing in an extensive range of decals, we cater to both custom requests and our unique in-house designs. From compact laptop stickers to full wall graphics to vehicle back window graphics made of perforated vinyl, we have everything!',
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
   <body className={cn('relative max-w-[1800px] m-auto overflow-x-hidden', outfit.className)}>
    <div id='modal-root' />
    <Header />
    <Toaster />
    {cart}
    {children}
    <Footer />
   </body>
  </html>
 )
}
