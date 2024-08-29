'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { cn } from '../../utils/cn'
import { productTypes } from '../content/product-types'

function ProductTypes() {
 return (
  <div className='rounded-b-lg border-2 border-bg-tertiary h-full justify-end items-end md:flex'>
   <div className='flex flex-col h-max'>
    {productTypes.map((type, i) => (
     <a
      className={cn('bg-bg-primary border-b-2 border-bg-tertiary', i === productTypes.length - 1 && 'rounded-b-md border-b-0')}
      key={type.id}
      href={type.url}>
      <div
       className={cn('cursor-pointer  hover:bg-bg-secondary border-bg-tertiary px-4 py-2 transition-all')}
       key={type.id}>
       <h2 className='font-light text-accent text-lg '>{type.label}</h2>
      </div>
     </a>
    ))}
   </div>
  </div>
 )
}

export default ProductTypes
