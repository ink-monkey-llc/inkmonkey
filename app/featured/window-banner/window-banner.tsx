import React from 'react'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { cn } from '@/app/utils/cn'
import { smooch } from '@/lib/fonts'
import { collections } from '@/app/content/featured-collections'
import BannerContent from './banner-content'

async function WindowBanner() {
 const { products, pageInfo, collectionInfo } = await storeApi.getCollectionByHandle({
  handle: collections.window1[0],
  sortKey: 'CREATED',
  reverse: false,
  numProducts: 12,
  cursor: '',
  dir: 'next',
  productType: 'Truck Back Window Graphics',
 })
 return (
  <div className='w-full flex flex-col bg-window-banner bg-cover justify-center items-start p-8 pt-6 relative'>
   <BannerContent
    collectionInfo={collectionInfo}
    products={products}
   />
  </div>
 )
}

export default WindowBanner
