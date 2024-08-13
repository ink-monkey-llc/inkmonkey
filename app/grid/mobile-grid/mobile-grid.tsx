import { cn } from '@/utils/cn'
import React from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import MobileGridItem from './mobile-grid-item'

function MobileGrid({ collectionName, products, isSearch = false }: { collectionName?: string; products: ShopifyProduct[]; isSearch?: boolean }) {
 return (
  <div className={cn('grid grid-cols-2 min-[550px]:grid-cols-3 sm:hidden w-full m-auto ml-10 pr-12', isSearch && 'ml-0 pr-0')}>
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
