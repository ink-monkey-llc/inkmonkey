import React from 'react'
import GridItem from '../grid/grid-item'
import ImageCard from './image-card'
import { storeApi } from '@/lib/shopify/storefront-api'

async function Slider({ collectionHandle }: { collectionHandle: string }) {
 const { products, pageInfo } = await storeApi.getCollectionByHandle({
  handle: collectionHandle,
  sortKey: 'CREATED',
  reverse: false,
  numProducts: 24,
  cursor: '',
  dir: 'next',
  productType: 'Vinyl Decal',
 })

 return (
  <div className='w-full bg-bg-primary flex overflow-x-scroll pt-8 gap-4'>
   {products.map((product) => (
    <ImageCard product={product} />
   ))}
  </div>
 )
}

export default Slider
