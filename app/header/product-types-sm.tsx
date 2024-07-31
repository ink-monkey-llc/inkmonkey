'use client'
import React, { useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Link from 'next/link'
import { cn } from '../../utils/cn'
import { productTypes } from '../content/product-types'
import { ArrowRight } from '../icons/arrow-right'
function ProductTypesSm() {
 const [open, setOpen] = useState(false)
 const { width } = useWindowSize()
 const isXs = width < 640
 return (
  <div className='w-full relative flex-col hidden sm:flex'>
   <div className='justify-center items-end md:hidden flex'>
    <div className={cn('flex flex-row h-max w-auto')}>
     {productTypes.map((type, i) => (
      <Link
       onClick={() => setOpen(!open)}
       key={type.id}
       href={type.url}>
       <div
        className={cn(
         'cursor-pointer border-2 border-t-0 bg-black hover:bg-bg-secondary border-bg-tertiary px-4 py-1 transition-all  flex items-center justify-center gap-2 group',
         i === 0 && 'border-l-2'
        )}
        key={type.id}>
        <h2 className='font-light text-accent-bright text-base  '>{type.label}</h2>
        <ArrowRight className='w-4 h-4  text-accent-bright sm:hidden group-hover:translate-x-2 transition-all' />
       </div>
      </Link>
     ))}
    </div>
   </div>
  </div>
 )
}

export default ProductTypesSm
