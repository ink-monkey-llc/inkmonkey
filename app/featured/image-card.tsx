import React from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import Image from 'next/image'
import { reshapeImages } from '@/lib/shopify/storefront-api'
import { imageWithPH } from '../actions/images'
import Link from 'next/link'
import { formatPrice } from '../utils/helpers'

async function ImageCard({ product }: { product: ShopifyProduct }) {
 const amount = Number(product.priceRange.minVariantPrice.amount)
 const isWindow = product.productType === 'Truck Back Window `Graphics'
 return (
  <div className='min-w-[200px] m-auto h-[300px] flex flex-col relative mb-4'>
   <Link href={!isWindow ? `/product/${product.handle}` : `/window/${product.handle}`}>
    <div className='relative w-max h-[200px]'>
     <Image
      className='object-cover'
      style={{
       display: 'auto',
       position: 'absolute',
       minWidth: '200px',
       height: '200px',
       inset: '0',
      }}
      src={product.featuredImage.url}
      alt={product.featuredImage.altText}
      width={200}
      height={200}
     />
    </div>
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

export default ImageCard
