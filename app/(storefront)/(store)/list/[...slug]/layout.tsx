import Sidebar from '@/app/menu/sidebar'
import MobileSidebar from '@/app/menu/mobile-sidebar/mobile-sidebar'

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
   <MobileSidebar>
    <Sidebar
     mobile={true}
     params={params}
    />
   </MobileSidebar>
   <Sidebar params={params} />
   {children}
  </div>
 )
}
