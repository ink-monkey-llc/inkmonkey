'use client'

import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import SimpleImageSlider from 'react-simple-image-slider'
import ImageSlider from './image-slider'

import type { ShopifyProduct, Image as ImageType } from '@/lib/shopify/types'

export type FeatImageData = {
 image: ImageType
}

type ProductCardImageProps = {
 product: ShopifyProduct
 featImgData: FeatImageData
 imgDataArr: ImageType[]
}

function ProductCardImage({ product, featImgData, imgDataArr }: ProductCardImageProps) {
 const [showSlider, setShowSlider] = useState(false)
 const [isPending, startTransition] = useTransition()
 const imgData = imgDataArr.map((imgData) => imgData.url)
 const handleMouse = (arg: boolean) => {
  startTransition(() => setShowSlider(arg))
 }
 return (
  <div
   onMouseLeave={() => handleMouse(false)}
   onMouseEnter={() => handleMouse(true)}
   className='relative w-max h-[200px]'>
   <ImageSlider
    images={imgData}
    showSlider={showSlider}
   />
   <Image
    className='object-cover'
    style={{
     display: 'auto',
     position: 'absolute',
     minWidth: '200px',
     height: '200px',
     inset: '0',
     opacity: showSlider ? '0' : '1',
     pointerEvents: showSlider ? 'none' : 'auto',
     transition: 'opacity 0.3s',
    }}
    src={featImgData.image?.url ?? ''}
    alt={featImgData.image?.altText}
    width={200}
    height={200}
    // blurDataURL={featImgData.base64}
    // placeholder='blur'
   />
  </div>
 )
}

export default ProductCardImage
