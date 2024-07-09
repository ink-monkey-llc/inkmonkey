import React from 'react'
import { storeApi } from '@/lib/shopify/storefront-api'
import { ShopifyProduct } from '@/lib/shopify/types'
import { WindowProvider } from '@/app/providers/window-provider'
import WindowVariants from './window-variants'
import ProductImage from '@/app/product/[pid]/product-image'

async function WindowProductPage({ params }: { params: { pid: string } }) {
 const { pid } = params
 const product: ShopifyProduct = await storeApi.getProductByHandle({ handle: pid })

 return (
  <WindowProvider>
   <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-[1400px] m-auto'>
    <div className='w-full md:w-2/3 h-full mb-auto '>
     {/* <Image
     className='max-w-[400px] max-h-[400px]'
     src={product.featuredImage.url}
     alt={product.featuredImage.altText}
     width={500}
     height={500}
    /> */}
     <ProductImage product={product} />
    </div>
    <div className='w-2/3 md:w-1/3 h-full flex flex-col mb-auto gap-4 pt-6 md:pt-12  pb-12'>
     <h1 className='text-3xl text-accent px-4'>{product.title}</h1>
     <WindowVariants product={product} />
    </div>
   </div>
  </WindowProvider>
 )
}

export default WindowProductPage
