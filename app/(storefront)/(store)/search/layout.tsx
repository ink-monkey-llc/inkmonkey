import React from 'react'

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <div className='flex w-full h-full'>{children}</div>
}

export default Layout
