import type { Metadata } from 'next'
import Header from '@/app/header/header'
export const metadata: Metadata = {
 title: 'FonzAI - AI design playground',
 description: 'Design and order your own decals, back window graphics, banners, tshirts, and more with our powerful AI design tool "Fonzai"',
}

export default function FonzLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
  <div className='h-app bg-bg-primary'>
   <Header />
   {children}
  </div>
 )
}
