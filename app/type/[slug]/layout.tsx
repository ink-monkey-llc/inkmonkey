import Categories from './categories'

export default function GridLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
  <div className='w-full h-full'>
   <Categories />
   {children}
  </div>
 )
}
