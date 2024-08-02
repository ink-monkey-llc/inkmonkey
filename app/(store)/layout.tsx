import { cn } from '../../utils/cn'
import { outfit } from '@/lib/fonts'
import 'react-tooltip/dist/react-tooltip.css'
// import '@/app/globals.css'
import Footer from '../footer/footer'

export default function StoreLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
  <div>
   {children}
   <Footer />
  </div>
 )
}
