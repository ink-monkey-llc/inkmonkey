import React, { Suspense } from 'react'
import ImageCard from './image-card'
import { ShopifyProduct } from '@/lib/shopify/types'
import Spinner from '../spinner/spinner'

function SliderContent({ products, fonz }: { products: ShopifyProduct[]; fonz?: boolean }) {
 return (
  <div className='w-full bg-bg-primary flex pt-4 px-8 gap-4 '>
   {products.map((product) => (
    <Suspense
     key={product.id}
     fallback={<Spinner />}>
     <ImageCard
      fonz={fonz}
      key={product.id}
      product={product}
     />
    </Suspense>
   ))}
  </div>
 )
}

export default SliderContent
