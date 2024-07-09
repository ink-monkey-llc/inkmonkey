import React from 'react'
import Link from 'next/link'
import { ShopifyProduct } from '@/lib/shopify/types'
import TempImage from './temp-image'
import { formatPrice } from '@/app/utils/helpers'
import image from '@/app/images/temp_main.webp'

async function TempGridItem({ product }: { product: ShopifyProduct }) {
 const amount = Number(product.priceRange.minVariantPrice.amount)
 const isWindow = product.productType === 'Truck Back Window Graphics'
 return (
  <div className='w-[200px] m-auto h-full flex flex-col relative'>
   <Link href={!isWindow ? `/product/${product.handle}` : `/window/${product.handle}`}>
    <TempImage image={image} />
    <div className='px-1 py-2'>
     <p className='text-xs font-light'>{product.title}</p>
     <p className='font-bold'>From {formatPrice(amount)}</p>
     <div className='text-green-600 text-xs flex items-center gap-2'>
      <div className='w-[6px] h-[6px] rounded-full  bg-green-600' />
      In stock
     </div>
    </div>
   </Link>
  </div>
 )
}

export default TempGridItem
