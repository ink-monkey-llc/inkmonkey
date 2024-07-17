import { storeApi } from '@/lib/shopify/storefront-api'
import React from 'react'
import Slider from './slider'
import { cn } from '../utils/cn'
import { smooch } from '@/lib/fonts'

async function Featured({ collectionHandles, productsAmount, type }: { collectionHandles: string[]; productsAmount: number; type: string }) {
 const collections = await Promise.all(
  collectionHandles.map(async (handle) => {
   const { products, pageInfo, collectionInfo } = await storeApi.getCollectionByHandle({
    handle,
    sortKey: 'CREATED',
    reverse: false,
    numProducts: productsAmount,
    cursor: '',
    dir: 'next',
    productType: 'Vinyl Decal',
   })
   return { products, collectionInfo }
  })
 )

 const title = type === 'decals' ? 'Vinyl Decals' : type === 'windows' ? 'Truck Back Window Graphics' : ''

 return (
  <div className='w-full bg-bg-secondary'>
   <h2 className={cn('text-4xl text-accent pl-8 py-6', smooch.className)}>Featured Collections - {title}</h2>
   <Slider
    type={type}
    collections={collections}
   />
  </div>
 )
}

export default Featured
