// import Categories from './categories'
import Sidebar from '@/app/menu/sidebar'

// export const dynamic = 'force-dynamic'

export type Params = {
 slug: string[]
}

export default function GridLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 const params = { slug: ['all'] }
 return (
  <div className='flex w-full h-full'>
   {/* <Categories /> */}
   <Sidebar params={params} />
   {children}
  </div>
 )
}
