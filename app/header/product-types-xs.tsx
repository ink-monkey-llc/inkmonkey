import React from 'react'
import { cn } from '../../utils/cn'
import { productTypes } from '../content/product-types'
import Link from 'next/link'

type ProductType = {
 id: string
 label: string
 queryHandle: string
 url: string
}

function Item({ type, i }: { type: ProductType; i: number }) {
 return (
  <Link href={type.url}>
   <div
    key={type.id + i}
    className={cn(
     'group cursor-pointer border-2 border-t-2 bg-accent hover:bg-bg-secondary border-bg-tertiary px-4 py-2 transition-all flex items-center justify-center gap-2 group',
     i === 0 && 'border-t-2 rounded-t-lg',
     i === productTypes.length - 1 && 'rounded-b-lg'
    )}>
    <h2 className=' text-bg-primary  font-bold text-lg group-hover:text-accent-bright'>{type.label}</h2>
   </div>
  </Link>
 )
}

function ProductTypesXs() {
 return (
  <div className='relative flex sm:hidden z-20 mt-72 gap-1 m-auto flex-col w-max rounded-lg'>
   {productTypes.map((type, i) => (
    <Item
     key={type.id + i}
     type={type}
     i={i}
    />
   ))}
  </div>
 )
}

export default ProductTypesXs
