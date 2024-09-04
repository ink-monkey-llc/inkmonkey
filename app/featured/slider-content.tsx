import React, { Suspense } from 'react'
import ImageCard from './image-card'
import dynamic from 'next/dynamic'
import { ShopifyProduct } from '@/lib/shopify/types'
import Spinner from '../spinner/spinner'

function SliderContent({ products, fonz }: { products: ShopifyProduct[]; fonz?: boolean }) {
 const Card = dynamic(() => import('./image-card'))
 return (
  <div className='w-full h-[335px] bg-bg-primary flex pt-4 px-8 pb-4 gap-4 transition-all ease-cubic-custom'>
   {products.map((product) => (
    <Card
     fonz={fonz}
     key={product.id}
     product={product}
    />
   ))}
  </div>
 )
}

export default SliderContent
