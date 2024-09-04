'use client'

import React, { useState, useTransition } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Image from 'next/image'
import ImageSlider from './image-slider'
import { cn } from '@/utils/cn'
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
 const { width } = useWindowSize()
 const [showSlider, setShowSlider] = useState(false)
 const [isPending, startTransition] = useTransition()
 const isCard = product.productType === 'Credit Card Skin'
 const imgData = imgDataArr.map((imgData) => imgData.url)
 const multipleImgs = imgDataArr.length > 1
 const handleMouse = (arg: boolean) => {
  startTransition(() => setShowSlider(arg))
 }
 return (
  <div
   onMouseLeave={() => handleMouse(false)}
   onMouseEnter={() => handleMouse(true)}
   className='relative sm:w-max  sm:h-[200px] '>
   {multipleImgs && (
    <ImageSlider
     images={imgData}
     showSlider={showSlider}
    />
   )}
   <Image
    unoptimized={true}
    className={cn('object-cover', isCard && 'object-contain')}
    style={{
     display: 'auto',
     position: 'absolute',
     minWidth: '200px',
     height: '200px',
     inset: '0',
     opacity: multipleImgs && showSlider ? '0' : '1',
     pointerEvents: multipleImgs && showSlider ? 'none' : 'auto',
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
