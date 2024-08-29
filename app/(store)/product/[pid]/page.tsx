import React, { Suspense } from 'react'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { redirect } from 'next/navigation'
import { ShopifyProduct } from '@/lib/shopify/types'
import ProductImage from './product-image'
import Variants from './variants'
import Recs from '@/app/recs/recs'
import Spinner from '@/app/spinner/spinner'
import { ResolvingMetadata, Metadata } from 'next'
import Arrow from '@/app/icons/arrow'
import BackButton from '@/app/common/back-button'

type MetaProps = {
 params: { pid: string }
 searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: MetaProps, parent: ResolvingMetadata): Promise<Metadata> {
 const { pid } = params
 const product: ShopifyProduct = await storeApi.getProductByHandle({ handle: pid })

 return {
  title: product.title,
  description: product.description,
  openGraph: {
   title: product.title,
   description: product.description,
   images: [product.featuredImage?.url ?? '', ...product.images.edges.map((edge) => edge.node.url)],
  },
 }
}

async function ProductPage({ params }: { params: { pid: string } }) {
 const { pid } = params
 const product: ShopifyProduct = await storeApi.getProductByHandle({ handle: pid })

 return (
  <div className='flex flex-col items-center justify-center w-full max-w-[1400px] m-auto'>
   <BackButton />
   <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-[1400px] m-auto'>
    <div className='w-full md:w-2/3 h-full'>
     <Suspense fallback={<Spinner />}>
      <ProductImage
       thumbs={true}
       iid={''}
       product={product}
      />
     </Suspense>
     <div />
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
