import React from 'react'
import { storeApi } from '@/lib/shopify/storefront-api'
import { ShopifyProduct } from '@/lib/shopify/types'
import Image from 'next/image'
import Price from './price'
import Variants from './variants'

async function ProductPage({ params }: { params: { pid: string } }) {
 const { pid } = params
 const product: ShopifyProduct = await storeApi.getProductByHandle({ handle: pid })

 return (
  <div className='flex items-center justify-center w-full h-full'>
   <div className='w-1/2 h-full'>
    <Image
     className='max-w-[400px] max-h-[400px]'
     src={product.featuredImage.url}
     alt={product.featuredImage.altText}
     width={500}
     height={500}
    />
   </div>
   <div className='w-1/2'>
    <h1 className='text-2xl font-bold'>{product.title}</h1>
    <Variants product={product} />
   </div>
  </div>
 )
}

export default ProductPage
