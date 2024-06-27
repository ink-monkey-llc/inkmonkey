import React from 'react'
import { storeApi } from '@/lib/shopify/storefront-api'
import { ShopifyProduct } from '@/lib/shopify/types'
import Image from 'next/image'
import ProductImage from './product-image'
import Variants from './variants'

async function ProductPage({ params }: { params: { pid: string } }) {
 const { pid } = params
 const product: ShopifyProduct = await storeApi.getProductByHandle({ handle: pid })

 return (
  <div className='flex items-center justify-center w-full h-[100vh]'>
   <div className='w-1/2 h-full pt-12'>
    {/* <Image
     className='max-w-[400px] max-h-[400px]'
     src={product.featuredImage.url}
     alt={product.featuredImage.altText}
     width={500}
     height={500}
    /> */}
    <ProductImage product={product} />
   </div>
   <div className='max-w-1/2 h-full flex flex-col gap-4 pt-12'>
    <h1 className='text-3xl text-accent'>{product.title}</h1>
    <Variants product={product} />
   </div>
  </div>
 )
}

export default ProductPage
