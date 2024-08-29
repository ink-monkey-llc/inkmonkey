import Link from 'next/link'
import React from 'react'

function NotFound() {
 return (
  <div className='flex flex-col items-center justify-center w-full p-24 max-w-[1400px] m-auto'>
   <div className='p-8 bg-bg-primary rounded-md flex flex-col items-center justify-center '>
    <h1 className='text-4xl text-accent-bright'>404</h1>
    <p>The page you are looking for was not found.</p>
    <div className='mt-8 flex flex-col gap-4 max-w-52 w-full mx-auto'>
     <Link
      className='w-full text-center py-2 bg-accent hover:bg-accent-bright text-bg-primary font-bold rounded-md'
      href='/'>
      Home
     </Link>
     <Link
      className='w-full text-center py-2 bg-accent hover:bg-accent-bright text-bg-primary font-bold rounded-md'
      href='/fonzai'>
      Fonzai AI playground
     </Link>
    </div>
   </div>
  </div>
 )
}

export default NotFound
