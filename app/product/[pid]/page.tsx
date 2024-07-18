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
  <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-[1400px] m-auto'>
   <div className='w-full md:w-2/3 h-full'>
    {/* <Image
     className='max-w-[400px] max-h-[400px]'
     src={product.featuredImage.url}
     alt={product.featuredImage.altText}
     width={500}
     height={500}
    /> */}
    <ProductImage
     thumbs={true}
     product={product}
    />
   </div>
   <div className='w-2/3 md:w-1/3 h-full flex flex-col gap-4 pt-6 md:pt-12'>
    <h1 className='text-3xl text-accent px-4'>{product.title}</h1>
    <Variants product={product} />
   </div>
  </div>
 )
}

export default ProductPage
