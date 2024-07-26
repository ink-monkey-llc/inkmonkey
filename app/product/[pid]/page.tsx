import React, { Suspense } from 'react'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { ShopifyProduct } from '@/lib/shopify/types'
import Image from 'next/image'
import ProductImage from './product-image'
import Variants from './variants'
import Recs from '@/app/recs/recs'
import Spinner from '@/app/spinner/spinner'

async function ProductPage({ params }: { params: { pid: string } }) {
 const { pid } = params
 const product: ShopifyProduct = await storeApi.getProductByHandle({ handle: pid })

 return (
  <div className='flex flex-col items-center justify-center w-full max-w-[1400px] m-auto'>
   <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-[1400px] m-auto'>
    <div className='w-full md:w-2/3 h-full'>
     <Suspense fallback={<Spinner />}>
      <ProductImage
       thumbs={true}
       product={product}
      />
     </Suspense>
    </div>
    <div className='w-2/3 md:w-1/3 h-full flex flex-col gap-4 pt-6 md:pt-12'>
     <h1 className='text-3xl text-accent px-4'>{product.title}</h1>
     <Variants product={product} />
    </div>
   </div>
   <Recs
    recsType='dec'
    product={product}
   />
  </div>
 )
}

export default ProductPage
