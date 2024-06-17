import React from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import { reshapeImages } from '@/lib/shopify/storefront-api'
import Image from 'next/image'

function GridItem({ product }: { product: ShopifyProduct }) {
 if (!product) {
  return <p>Loading...</p>
 }
 const imgs = reshapeImages(product.images, product.title)
 return (
  <div className='max-w-[200px] relative'>
   <Image
    className='object-cover'
    src={imgs[0].url}
    alt={imgs[0].altText}
    width={300}
    height={300}
   />
   <h3>{product.title}</h3>
  </div>
 )
}

export default GridItem
