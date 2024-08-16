import React from 'react'
import Link from 'next/link'
import { ArrowRight } from '../icons/arrow-right'
import { cn } from '../../utils/cn'

function HeroCta() {
 return (
  <div
   id='hero-cta'
   className='pt-32 sm:pt-0 flex gap-4 flex-col items-center justify-center w-full relative z-40 '>
   <Link
    className={cn(
     'group flex items-center px-8 py-3 text-xl w-max border-2 border-bg-secondary bg-accent-bright rounded-md cursor-pointer font-semibold hover:bg-accent-bright text-bg-secondary'
    )}
    href='/list/all'>
    All Products <ArrowRight className='w-8 h-8 group-hover:translate-x-3 transition-all' />
   </Link>
  </div>
 )
}

export default HeroCta
