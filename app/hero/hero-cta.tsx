import React from 'react'
import CtaButton from '../featured/cta-button'
import Link from 'next/link'
import { ArrowRight } from '../icons/arrow-right'
import { cn } from '../utils/cn'

function HeroCta() {
 return (
  <div className='flex gap-4 flex-col items-center justify-center ml-24 relative z-40 mt-72'>
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
