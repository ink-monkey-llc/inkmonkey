import React from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import { reshapeImages } from '@/lib/shopify/storefront-api'
import ProductCardImage from './product-card-image'
import { imageWithPH } from '../actions/images'
import Link from 'next/link'
import { formatPrice } from '../utils/helpers'

async function GridItem({ product }: { product: ShopifyProduct }) {
 const featImage = { image: product.featuredImage, title: product.title }
 const imgs = reshapeImages(product.images, product.title)
 const featImgData = await imageWithPH(featImage.image)
 const imgDataArr = await Promise.all(imgs.map(async (img) => await imageWithPH(img)))
 const amount = Number(product.priceRange.minVariantPrice.amount)
 const isWindow = product.productType === 'Truck Back Window Graphics'
 return (
  <div className='w-[200px] m-auto h-full flex flex-col relative mb-4'>
   <Link href={!isWindow ? `/product/${product.handle}` : `/window/${product.handle}`}>
    <ProductCardImage
     imgDataArr={imgDataArr}
     featImgData={featImgData}
     product={product}
    />
    <div className='px-1 py-2'>
     <p className='text-xs font-light'>{product.title}</p>
     <p className='font-bold'>From {formatPrice(amount)}</p>
     <div className='text-green-600 text-xs flex items-center gap-2'>
      <div className='w-[6px] h-[6px] rounded-full  bg-green-600' />
      In stock
     </div>
    </div>
   </Link>
  </div>
 )
}

export default GridItem
