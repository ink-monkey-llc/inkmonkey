import { Metadata } from 'next'

export const metadata: Metadata = {
 title: 'Contact Us',
 description: 'Contact Us at Ink Monkey LLC',
}
export default function ContactLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return <div>{children}</div>
}
