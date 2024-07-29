import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import React from 'react'
import Slider from './slider'
import { cn } from '../utils/cn'
import { smooch } from '@/lib/fonts'

async function Featured({ collectionHandles, productsAmount, type }: { collectionHandles: string[]; productsAmount: number; type: string }) {
 const getColl = async (handle: string, firstCursor?: string | null) => {
  // if (firstCursor) console.log('getColl', handle, firstCursor)
  const { products, pageInfo, collectionInfo } = await storeApi.getCollectionByHandle({
   handle,
   sortKey: 'CREATED',
   reverse: false,
   numProducts: productsAmount,
   dir: firstCursor ? 'next' : '',
   cursor: firstCursor ? firstCursor : '',
   productType: 'Vinyl Decal',
  })
  const seq = !firstCursor ? 'first' : 'last'
  return { products, collectionInfo, pageInfo, seq }
 }

 const collections = await Promise.all(
  collectionHandles.map(async (handle) => {
   const first = await getColl(handle)
   const second = await getColl(handle, first.pageInfo.endCursor)
   //  console.log('second:', second.seq)
   return { first, second }
  })
 )

 const title = type === 'decals' ? 'Vinyl Decals' : type === 'windows' ? 'Truck Back Window Graphics' : ''

 return (
  <div className='w-full border-t-8 border-accent-tr'>
   {/* <div className='w-full hidden sm:block h-20  -mt-20'></div> */}
   <div className='w-full bg-bg-secondary'>
    <h2 className={cn('text-4xl md:text-5xl text-accent pl-8 pt-8 pb-8', smooch.className)}>Featured {title} Collections:</h2>
    <Slider
     type={type}
     collections={collections}
    />
   </div>
  </div>
 )
}

export default Featured
