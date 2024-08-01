import React from 'react'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { ShopifyProduct } from '@/lib/shopify/types'
import { WindowProvider } from '@/app/providers/window-provider'
import WindowVariants from './window-variants'
import ProductImage from '@/app/(store)/product/[pid]/product-image'
import Recs from '@/app/recs/recs'

async function WindowProductPage({ params, searchParams }: { params: { pid: string }; searchParams: { [key: string]: string | string[] | undefined } }) {
 const { pid } = params
 const iid = searchParams.iid ? searchParams.iid.toString() : ''
 const product: ShopifyProduct = await storeApi.getProductByHandle({ handle: pid })
 const isAi = pid === 'ai-truck-back-window-graphics'
 console.log('product:', product)

 return (
  <div className='flex flex-col items-center justify-center w-full max-w-[1400px] m-auto'>
   <WindowProvider>
    <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-[1400px] m-auto'>
     <div className='sm:sticky top-[96px] w-full md:w-2/3 h-full mb-auto '>
      <ProductImage
       thumbs={true}
       product={product}
       iid={iid}
      />
     </div>
     <div className='w-5/6 md:w-1/3 h-full flex flex-col mb-auto pt-6 md:pt-12 pb-4'>
      <h1 className='text-3xl text-accent px-4'>{product.title}</h1>
      <WindowVariants
       iid={isAi ? iid : false}
       product={product}
      />
     </div>
    </div>
   </WindowProvider>
   {!isAi && (
    <Recs
     recsType='win'
     product={product}
    />
   )}
  </div>
 )
}

export default WindowProductPage
