import React from 'react'
import Link from 'next/link'
import { cn } from '../utils/cn'
import { productTypes } from '../content/product-types'
import Btn from './btn'

function ProductTypes() {
 return (
  <div className='h-full flex justify-end items-end'>
   <div className='flex h-max'>
    {productTypes.map((type, i) => (
     <Link
      key={type.id}
      href={type.url}>
      <div
       className={cn(
        'cursor-pointer border-2 border-b-0 border-l-0 hover:bg-bg-secondary border-bg-tertiary px-4 py-1 transition-all',
        i === 0 && 'border-l-2'
       )}
       key={type.id}>
       <h2 className=' font-light text-accent'>{type.label}</h2>
      </div>
     </Link>
    ))}
   </div>
  </div>
 )
}

export default ProductTypes
