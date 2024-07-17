import React from 'react'
import ImageCard from './image-card'
import { ShopifyProduct } from '@/lib/shopify/types'

function SliderContent({ products }: { products: ShopifyProduct[] }) {
 return (
  <div className='w-full bg-bg-primary flex pt-4 px-8 gap-4'>
   {products.map((product) => (
    <ImageCard
     key={product.id}
     product={product}
    />
   ))}
  </div>
 )
}

export default SliderContent
