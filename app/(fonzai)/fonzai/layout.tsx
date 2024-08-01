import type { Metadata } from 'next'
import '@/app/globals.css'

export const metadata: Metadata = {
 title: 'FonzAI - AI design playground',
 description: 'Design and order your own decals',
}

export default function FonzLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return <div className='h-app bg-bg-primary'>{children}</div>
}
