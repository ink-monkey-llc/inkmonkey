import Sidebar from '@/app/menu/sidebar'

export type Params = {
 slug: string[]
}

export default function ProductLayout({
 children,
 params,
}: Readonly<{
 params: Params
 children: React.ReactNode
}>) {
 return (
  <div className='flex w-full h-full'>
   {/* <Sidebar params={params} /> */}
   {children}
  </div>
 )
}
