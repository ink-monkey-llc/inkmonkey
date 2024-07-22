import React from 'react'
import Link from 'next/link'
import PayMethods from './pay-methods'

function Footer() {
 const year = new Date().getFullYear()
 return (
  <div className='w-full flex flex-col gap-2 bg-bg-secondary border-t-2 border-accent-tr p-2  pl-4'>
   <div className='flex justify-between'>
    <div className='flex gap-8 w-1/2 pl-8'>
     <Link href='/'>
      <p className=' text-start text-accent'>Home</p>
     </Link>
     <p>|</p>
     <Link href='/contact'>
      <p className='  text-accent text-start '>Contact</p>
     </Link>
     <p>|</p>
     <Link href='/return-policy'>
      <p className='  text-accent text-start'>Return Policy</p>
     </Link>
    </div>
    <PayMethods />
   </div>
   <p className='text-sm text-txt-secondary text-end pt-4'>Copyright © {year} Ink Monkey LLC</p>
  </div>
 )
}

export default Footer
