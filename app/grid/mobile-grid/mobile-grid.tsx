import React from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import MobileGridItem from './mobile-grid-item'

function MobileGrid({ collectionName, products }: { collectionName?: string; products: ShopifyProduct[] }) {
 return (
  <div className='grid grid-cols-2 min-[550px]:grid-cols-3 sm:hidden w-full m-auto ml-10 pr-12'>
   {products.map((product) => (
    <MobileGridItem
     key={product.id}
     product={product}
    />
   ))}
  </div>
 )
}

export default MobileGrid
