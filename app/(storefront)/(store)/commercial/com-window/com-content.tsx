import { smooch } from '@/lib/fonts'
import React from 'react'
import { cn } from '@/utils/cn'
import { ArrowRight } from '@/app/icons/arrow-right'
import Link from 'next/link'

function ComContent() {
 return (
  <div className='z-10 absolute flex-col items-center justify-center w-full h-full'>
   <h2
    style={{ textShadow: '0px 4px 6px #000' }}
    className={cn(
     'text-4xl sm:text-5xl md:text-6xl text-txt-primary p-4 text-center rounded-md w-2/3 bg-backdrop backdrop-blur-sm m-auto mt-8 ',
     smooch.className
    )}>
    Industry Leader in Commercial Window Graphics
   </h2>
   <Link
    href={'/commercial'}
    className=' group flex items-center justify-center px-8 py-4 bg-accent text-bg-primary font-semibold rounded-md w-max m-auto mt-2 sm:mt-8 lg:mt-[15vh] cursor-pointer hover:bg-accent-bright hover:text-bg-primary transition-all lg:px-12 lg:py-6 lg:text-xl shadow-md shadow-black/60 '>
    Learn More
    <ArrowRight className='w-6 h-6 ml-2 group-hover:translate-x-3 transition-all md:w-8 md:h-8' />
   </Link>
  </div>
 )
}

export default ComContent
