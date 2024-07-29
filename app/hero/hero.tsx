import React from 'react'
import Image from 'next/image'
import { cn } from '../utils/cn'
import { smooch } from '@/lib/fonts'
import imlogo from '../images/imlogo.jpg'
import HeroCta from './hero-cta'
import ProductTypesXs from '../header/product-types-xs'

function Hero() {
 return (
  <div className='w-full h-[600px] sm:h-[var(--hero-height)] bg-black flex justify-between items-center overflow-hidden'>
   <div className='w-full sm:w-auto'>
    <h1
     id='herologo'
     className={cn('text-8xl text-accent-bright z-20 absolute left-8 top-56 sm:top-72 xl:text-9xl', smooch.className)}>
     Ink Monkey
    </h1>
    <ProductTypesXs /> <HeroCta />
   </div>
   <div className='overflow-hidden top-[var(--header-height)] absolute md:static '>
    <Image
     className='sm:max-w-[800px] sm:max-h-[800px] max-width-[600px] max-height-[600px]'
     src={imlogo}
     alt='Ink Monkey Logo'
    />
   </div>
  </div>
 )
}

export default Hero
