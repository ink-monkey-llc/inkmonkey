import React from 'react'
import Image from 'next/image'
import { cn } from '../utils/cn'
import { smooch } from '@/lib/fonts'
import imlogo from '../images/imlogo.jpg'

function Hero() {
 return (
  <div className='w-full h-[80vh] bg-black flex justify-between items-center px-8 overflow-hidden'>
   <div>
    <h1
     id='herologo'
     className={cn('text-8xl text-accent-bright z-20 absolute top-72 xl:text-9xl', smooch.className)}>
     Ink Monkey
    </h1>
   </div>
   <div className='overflow-hidden'>
    <Image
     className='max-w-[800px] max-h-[800px]'
     src={imlogo}
     alt='Ink Monkey Logo'
    />
   </div>
  </div>
 )
}

export default Hero
