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
 //  console.log('params:', params)
 const paramsProps = params.slug && params.slug[0] != undefined ? { slug: ['all', ...params.slug] } : { slug: ['all'] }
 //  console.log('grid layout params:', paramsProps)
 return (
  <div className='flex w-full h-full'>
   {/* <Categories /> */}
   <Sidebar params={paramsProps} />
   {children}
  </div>
 )
}
