import React from 'react'
import Image from 'next/image'
import logo from '@/public/img/fonzie-lg-sbtitle.png'

import { ArrowRight } from '@/app/icons/arrow-right'
import Link from 'next/link'
import Mockup from './mockup'

function FonzBanner() {
 return (
  <div className='w-full border-t-0 border-accent-tr px-8 md:px-4 pt-6 bg-robot bg-cover bg-center'>
   <div className=' flex flex-col  m-auto md:flex-row md:max-w-full max-w-[400px] lg:max-w-[900px] '>
    <div className='flex flex-col gap-4 mb-4 md:w-1/2 pr-4'>
     <Link href='/fonzai'>
      <Image
       className='object-contain p-4 m-auto w-[400px] rounded-md border-2 border-transparent hover:bg-accent-tr hover:border-accent-tr transition-all hover:shadow-md hover:shadow-black/80'
       src={logo}
       alt='fonzie'
      />
     </Link>
     <h2 className='text-2xl '>Generate your own custom design with our free AI design tool!</h2>
     <div className='flex flex-col sm:flex-row m-auto sm:m-0'>
      <div className='flex gap-2 flex-col mt-4'>
       <p>Designs can be printed on:</p>
       <div className='flex sm:flex-col'>
        <ul className='list-disc pl-4 text-txt-secondary'>
         <li>Stickers</li>
         <li>Banners</li>
         <li>Prints</li>
        </ul>
        <ul className='list-disc pl-4 text-txt-secondary ml-4 sm:ml-0'>
         <li>T-shirts</li>
         <li>Mailbox wraps</li>
         <li>Vehicle Window Graphics</li>
        </ul>
       </div>
      </div>
      <Link
       className='px-6 py-2 md:px-2 lg:px-6 m-auto rounded-md border-2 bg-accent border-accent w-full sm:w-max text-xl text-bg-primary font-bold hover:bg-accent-bright hover:text-bg-primary transition-all group flex items-center justify-center gap-2 my-8 sm:my-auto shadow-lg shadow-black'
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
