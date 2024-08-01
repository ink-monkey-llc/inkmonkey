import React, { Suspense } from 'react'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { ShopifyProduct } from '@/lib/shopify/types'
import RecSlider from './recSlider'
import { searchTypes } from '@/app/content/search-types'
import { filteredHandles } from '@/utils/helpers'
import Spinner from '../spinner/spinner'

async function Recs({ product, recsType }: { product: ShopifyProduct; recsType: string }) {
 const { collections } = product
 if (collections.nodes.length === 0) {
  return <Spinner />
 }
 const handles = collections.nodes.map((node) => node.handle)
 const filtered = filteredHandles(handles)
 //  console.log('filtered:', filtered)

 const filteredType = searchTypes.find((type) => type.id === recsType)

 const { products, pageInfo, collectionInfo } = await storeApi.getCollectionByHandle({
  handle: filtered[0],
  sortKey: 'CREATED',
  reverse: true,
  numProducts: 12,
  cursor: '',
  dir: 'next',
  productType: filteredType?.queryHandle ?? '',
 })

 return (
  <div className='bg-bg-secondary w-full border-t-2 border-accent-tr'>
   <h2 className='text-2xl p-4 pl-8 text-accent'>Some more things you might like:</h2>

   <Suspense fallback={<Spinner />}>
    <RecSlider products={products} />
   </Suspense>
   <div className='inline-block h-12 w-full bg-bg-secondary z-20'> </div>
  </div>
 )
}

export default Recs
