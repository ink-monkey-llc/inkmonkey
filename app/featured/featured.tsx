import { storeApi } from '@/lib/shopify/storefront-api'
import React from 'react'

async function Featured({ collectionHandle }: { collectionHandle: string }) {
 const { products, pageInfo, collectionInfo } = await storeApi.getCollectionByHandle({
  handle: collectionHandle,
  sortKey: 'CREATED',
  reverse: false,
  numProducts: 24,
  cursor: '',
  dir: 'next',
  productType: 'Vinyl Decal',
 })

 return (
  <div>
   <h1>{collectionInfo?.title ?? 'Featured'}</h1>
  </div>
 )
}

export default Featured
