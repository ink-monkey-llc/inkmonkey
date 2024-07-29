'use client'

import React, { useState, useTransition } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Image from 'next/image'
import SimpleImageSlider from 'react-simple-image-slider'
import ImageSlider from '@/app/grid/image-slider'

import type { ShopifyProduct, Image as ImageType } from '@/lib/shopify/types'

export type FeatImageData = {
 image: ImageType
}

type MobileCardImgProps = {
 product: ShopifyProduct
 featImgData: FeatImageData
 imgDataArr: ImageType[]
}

function MobileCardImg({ product, featImgData, imgDataArr }: MobileCardImgProps) {
 const { width } = useWindowSize()
 const [showSlider, setShowSlider] = useState(false)
 const [isPending, startTransition] = useTransition()
 const imgData = imgDataArr.map((imgData) => imgData.url)
 const handleMouse = (arg: boolean) => {
  startTransition(() => setShowSlider(arg))
 }
 return (
  <div className='relative w-[80vw] m-auto'>
   <Image
    className='object-cover'
    style={{
     display: 'auto',
     minWidth: '200px',
    }}
    src={featImgData.image?.url ?? ''}
    alt={featImgData.image?.altText}
    width={400}
    height={400}
    // blurDataURL={featImgData.base64}
    // placeholder='blur'
   />
  </div>
 )
}

export default MobileCardImg
