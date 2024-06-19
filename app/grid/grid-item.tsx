import React from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import { reshapeImages } from '@/lib/shopify/storefront-api'
import ProductCardImage from './product-card-image'
import { imageWithPH } from '../actions/images'

async function GridItem({ product }: { product: ShopifyProduct }) {
 const featImage = { image: product.featuredImage, title: product.title }
 const imgs = reshapeImages(product.images, product.title)
 const featImgData = await imageWithPH(featImage.image)
 const imgDataArr = await Promise.all(imgs.map(async (img) => await imageWithPH(img)))
 return (
  <div className='w-[200px] h-[250px] flex flex-col relative justify-end'>
   <ProductCardImage
    imgDataArr={imgDataArr}
    featImgData={featImgData}
    product={product}
   />
   <h3>{product.title}</h3>
  </div>
 )
}

export default GridItem
