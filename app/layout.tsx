import type { Metadata } from 'next'
import { cn } from '@/utils/cn'
import Header from '@/app/header/header'
import { Toaster } from 'react-hot-toast'
import { outfit } from '@/lib/fonts'
import 'react-tooltip/dist/react-tooltip.css'
import '@/app/globals.css'

export const metadata: Metadata = {
 title: 'Ink Monkey',
 description:
  'Discover the ultimate destination for all your decal needs at Ink Monkey! Specializing in an extensive range of decals. Design your own decal with our powerful AI design tool "Fonzai", or choose from our countless in-house designs. From compact laptop stickers to full wall graphics to vehicle back window graphics made of perforated vinyl, we have everything!',
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
   <body className={cn('relative  m-auto overflow-x-hidden', outfit.className)}>
    <div id='modal-root' />
    <Header />
    <Toaster />
    {cart}
    {children}
   </body>
  </html>
 )
}
