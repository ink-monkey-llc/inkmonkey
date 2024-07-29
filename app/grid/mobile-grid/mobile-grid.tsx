import React from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import MobileGridItem from './mobile-grid-item'

function MobileGrid({ products }: { products: ShopifyProduct[] }) {
 return (
  <div className='flex flex-col sm:hidden w-full m-auto  ml-8'>
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
