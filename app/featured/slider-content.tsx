import React, { Suspense } from 'react'
import ImageCard from './image-card'
import { ShopifyProduct } from '@/lib/shopify/types'
import Spinner from '../spinner/spinner'

function SliderContent({ products }: { products: ShopifyProduct[] }) {
 return (
  <div className='w-full bg-bg-primary flex pt-4 px-8 gap-4 '>
   {products.map((product) => (
    <Suspense fallback={<Spinner />}>
     <ImageCard
      key={product.id}
      product={product}
     />
    </Suspense>
   ))}
  </div>
 )
}

export default SliderContent
