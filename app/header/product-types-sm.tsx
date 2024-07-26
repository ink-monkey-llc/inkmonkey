'use client'
import React, { useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Link from 'next/link'
import { cn } from '../utils/cn'
import { productTypes } from '../content/product-types'
import { ChevronLongDown } from '../icons/chevron-long-down'
function ProductTypesSm() {
 const [open, setOpen] = useState(false)
 const { width } = useWindowSize()
 const isXs = width < 640
 return (
  <div className='w-full relative flex flex-col'>
   <div
    onClick={() => setOpen(!open)}
    className='group w-full border-b-2 bg-black border-bg-tertiary sm:border-none flex justify-center cursor-pointer hover:bg-bg-secondary'>
    <ChevronLongDown
     className={cn('w-12 h-12 sm:hidden text-accent-bright group-hover:translate-y-2 transition-all', open && 'rotate-180 group-hover:-translate-y-2 ')}
    />
   </div>
   <div className='justify-center items-end md:hidden flex '>
    <div className={cn('flex flex-col sm:flex-row h-max top-12', isXs && 'absolute', isXs && !open && 'hidden')}>
     {productTypes.map((type, i) => (
      <Link
       onClick={() => setOpen(!open)}
       key={type.id}
       href={type.url}>
       <div
        className={cn(
         'cursor-pointer border-2 border-t-0 bg-black hover:bg-bg-secondary border-bg-tertiary px-4 py-1 transition-all ',
         i === 0 && 'border-l-2'
        )}
        key={type.id}>
        <h2 className='font-light text-accent-bright text-2xl sm:text-base'>{type.label}</h2>
       </div>
      </Link>
     ))}
    </div>
   </div>
  </div>
 )
}

export default ProductTypesSm
