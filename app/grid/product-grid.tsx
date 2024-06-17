import React from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import GridItem from './grid-item'

function ProductGrid({ products }: { products: ShopifyProduct[] }) {
 if (!products) {
  return <p>Loading...</p>
 }
 return (
  <div className='flex flex-wrap gap-8 p-4'>
   {products.map((product) => (
    <GridItem
     key={product.id}
     product={product}
    />
   ))}
  </div>
 )
}

export default ProductGrid
