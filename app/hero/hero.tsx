import React from 'react'
import Image from 'next/image'
import { cn } from '../../utils/cn'
import { smooch } from '@/lib/fonts'
import imlogo from '../images/imlogo.jpg'
import HeroCta from './hero-cta'
import './hero.css'

function Hero() {
 return (
  <div className='w-full max-w-[1400px] h-[600px] sm:h-[var(--hero-height)] bg-black flex justify-between items-start overflow-hidden relative'>
   <div className='w-full md:w-auto absolute top-8 z-40 md:top-[30vh] md:left-12 '>
    <h1
     style={{ textShadow: '0px 4px 6px #000' }}
     id='herologo'
     className={cn('text-7xl sm:text-8xl text-accent-bright text-center z-20 xl:text-9xl mb-[20vh] md:mb-16  ', smooch.className)}>
     Ink Monkey
    </h1>
    {/* <ProductTypesXs /> */}
    <HeroCta />
   </div>
   <div
    id='hero-img'
    className='overflow-hidden ml-auto top-[var(--header-height)] absolute md:static '>
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
