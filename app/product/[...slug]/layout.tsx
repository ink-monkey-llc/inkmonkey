import Categories from './categories'
import Sidebar from '@/app/menu/sidebar'

export type Params = {
 slug: string[]
}

export default function GridLayout({
 children,
 params,
}: Readonly<{
 params: Params
 children: React.ReactNode
}>) {
 return (
  <div className='flex w-full h-full'>
   {/* <Categories /> */}
   <Sidebar params={params} />
   {children}
  </div>
 )
}
