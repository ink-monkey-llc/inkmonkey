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
import Description from './description'

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
   siteName: 'Ink Monkey',
   description: product.description,
   images: [product.featuredImage?.url ?? '', ...product.images.edges.map((edge) => edge.node.url)],
  },
 }
}

async function ProductPage({ params }: { params: { pid: string } }) {
 const { pid } = params
 const product: ShopifyProduct = await storeApi.getProductByHandle({ handle: pid })

 const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Product', 'Decal'],
  name: product.title,
  image: product.featuredImage?.url ?? '',
  description: product.description,
  sku: product.handle,
  brand: {
   '@type': 'Thing',
   name: 'Ink Monkey',
  },
  offers: {
   '@type': 'Offer',
   availability: 'https://schema.org/InStock',
   price: product.priceRange.minVariantPrice.amount,
   priceCurrency: product.priceRange.minVariantPrice.currencyCode,
  },
 }

 return (
  <div className='flex flex-col items-center justify-center w-full max-w-[1400px] m-auto'>
   <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
   />
   <BackButton />
   <div className='flex flex-col md:flex-row items-start justify-center w-full max-w-[1400px] m-auto'>
    <div className='flex items-start w-full md:w-2/3 h-full'>
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
     <Description product={product} />
    </div>
   </div>
   {/* <Description product={product} /> */}
   <Recs
    recsType='dec'
    product={product}
   />
  </div>
 )
}

export default ProductPage
