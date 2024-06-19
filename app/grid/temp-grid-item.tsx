import React from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import TempImage from './temp-image'
// import { reshapeImages } from '@/lib/shopify/storefront-api'
// import ProductCardImage from './product-card-image'
// import { imageWithPH } from '../actions/images'
import { formatPrice } from '@/app/utils/helpers'
import image from '@/app/images/temp_main.webp'

async function TempGridItem({ product }: { product: ShopifyProduct }) {
 //  const featImage = { image: product.featuredImage, title: product.title }
 //  const imgs = reshapeImages(product.images, product.title)
 //  const featImgData = await imageWithPH(featImage.image)
 //  const imgDataArr = await Promise.all(imgs.map(async (img) => await imageWithPH(img)))
 const amount = Number(product.priceRange.minVariantPrice.amount)
 return (
  <div className='w-[200px] h-full flex flex-col relative'>
   {/* <ProductCardImage
    imgDataArr={imgDataArr}
    featImgData={featImgData}
    product={product}
   />*/}
   <TempImage image={image} />
   <div className='px-1 py-2'>
    <p className='text-xs font-light'>{product.title}</p>
    <p className='font-bold'>From {formatPrice(amount)}</p>
    <div className='text-green-600 text-xs flex items-center gap-2'>
     <div className='w-[6px] h-[6px] rounded-full  bg-green-600' />
     In stock
    </div>
   </div>
  </div>
 )
}

export default TempGridItem
