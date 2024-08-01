import React from 'react'
import Image from 'next/image'
import logo from '@/public/img/fonzie-lg-sbtitle.png'

import { ArrowRight } from '@/app/icons/arrow-right'
import Link from 'next/link'
import Mockup from './mockup'

function FonzBanner() {
 return (
  <div className='w-full border-t-8 border-accent-tr px-8 py-4 bg-robot bg-cover bg-center'>
   <div className=' flex max-w-[1000px] m-auto'>
    <div className='w-1/2 flex flex-col gap-4'>
     <Link href='/fonzai'>
      <Image
       className='object-contain w-[400px]'
       src={logo}
       alt='fonzie'
      />
     </Link>
     <h2 className='text-2xl '>Generate your own custom design with our free AI design tool!</h2>
     <div className='flex'>
      <div className='flex flex-col'>
       <p>Designs can be printed on:</p>
       <ul className='list-disc pl-4 text-txt-secondary'>
        <li>Stickers</li>
        <li>Banners</li>
        <li>Prints</li>
        <li>T-shirts</li>
        <li>Mailbox wraps</li>
        <li>Vehicle Window Graphics</li>
       </ul>
      </div>
      <Link
       className='px-6 py-2 m-auto rounded-md border-2 bg-accent border-accent w-max text-xl text-bg-primary font-bold hover:bg-accent-bright hover:text-bg-primary transition-all group flex items-center justify-center gap-2'
       href='/fonzai'>
       Try it out!
       <ArrowRight className='w-6 h-6 text-bg-primary group-hover:translate-x-3 transition-all' />
      </Link>
     </div>
    </div>
    <Mockup />
   </div>
  </div>
 )
}

export default FonzBanner
