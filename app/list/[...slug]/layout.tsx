// import Categories from './categories'
import Sidebar from '@/app/menu/sidebar'

// export const dynamic = 'force-dynamic'

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
 if (params.slug[0] === 'all') {
  return null
 }
 return (
  <div className='flex w-full h-full'>
   {/* <Categories /> */}
   <Sidebar params={params} />
   {children}
  </div>
 )
}
