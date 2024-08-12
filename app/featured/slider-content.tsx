import React, { Suspense } from 'react'
import ImageCard from './image-card'
import { ShopifyProduct } from '@/lib/shopify/types'
import Spinner from '../spinner/spinner'

function SliderContent({ products, fonz }: { products: ShopifyProduct[]; fonz?: boolean }) {
 return (
  <div className='w-full h-[325px] bg-bg-primary flex pt-4 px-8 gap-4 transition-all ease-cubic-custom'>
   {products.map((product) => (
    <ImageCard
     fonz={fonz}
     key={product.id}
     product={product}
    />
   ))}
  </div>
 )
}

export default SliderContent
