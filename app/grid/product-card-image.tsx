'use client'

import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import SimpleImageSlider from 'react-simple-image-slider'

import type { ShopifyProduct, Image as ImageType } from '@/lib/shopify/types'

type FeatImageData = {
 base64: string
 img: { src: string; height: number; width: number }
 image: ImageType
}

type ProductCardImageProps = {
 product: ShopifyProduct
 featImgData: FeatImageData
 imgDataArr: FeatImageData[]
}

function ProductCardImage({ product, featImgData, imgDataArr }: ProductCardImageProps) {
 const [showSlider, setShowSlider] = useState(false)
 const [isPending, startTransition] = useTransition()
 const imgData = imgDataArr.map((imgData) => imgData.img.src)
 const handleMouse = (arg: boolean) => {
  startTransition(() => setShowSlider(arg))
 }
 return (
  <div
   onMouseLeave={() => handleMouse(false)}
   onMouseEnter={() => handleMouse(true)}>
   <SimpleImageSlider
    style={{
     position: 'absolute',
     width: '200px',
     height: '200px',
     left: 0,
     top: 0,
     opacity: showSlider ? '1' : '0',
     transition: 'opacity 0.3s',
     pointerEvents: showSlider ? 'auto' : 'none',
    }}
    width={200}
    height={200}
    images={imgData}
    startIndex={1}
    showBullets
    showNavs
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
    {...featImgData.img}
    alt={featImgData.image.altText}
    width={200}
    height={200}
    blurDataURL={featImgData.base64}
    placeholder='blur'
   />
  </div>
 )
}

export default ProductCardImage
