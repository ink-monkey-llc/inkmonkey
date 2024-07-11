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
    <div className='sticky top-[96px] w-full md:w-2/3 h-full mb-auto '>
     <ProductImage product={product} />
    </div>
    <div className='w-2/3 md:w-1/3 h-full flex flex-col mb-auto pt-6 md:pt-12 pb-4'>
     <h1 className='text-3xl text-accent px-4'>{product.title}</h1>
     <WindowVariants product={product} />
    </div>
   </div>
  </WindowProvider>
 )
}

export default WindowProductPage
