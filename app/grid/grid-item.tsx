import React, { Suspense } from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import { reshapeImages } from '@/lib/shopify/storefront-api'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

const getImage = async (src: string) => {
 const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()))
 const {
  metadata: { height, width },
  ...plaiceholder
 } = await getPlaiceholder(buffer, { size: 10 })

 return {
  ...plaiceholder,
  img: { src, height, width },
 }
}

async function GridItem({ product }: { product: ShopifyProduct }) {
 const images = reshapeImages(product.images, product.title)
 const { base64, img } = await getImage(images[0].url)
 return (
  <div className='max-w-[200px] relative'>
   <Image
    className='object-cover'
    {...img}
    alt={images[0].altText}
    width={300}
    height={300}
    blurDataURL={base64}
    placeholder='blur'
   />
   <h3>{product.title}</h3>
  </div>
 )
}

export default GridItem
