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
 const paramsProps = params.slug && params.slug[0] != undefined ? { slug: ['all', ...params.slug] } : { slug: ['all'] }
 return (
  <div className='flex w-full h-full'>
   <Sidebar params={paramsProps} />
   {children}
  </div>
 )
}
