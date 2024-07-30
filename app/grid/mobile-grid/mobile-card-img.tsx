import React from 'react'
import Image from 'next/image'

import type { ShopifyProduct, Image as ImageType } from '@/lib/shopify/types'

export type FeatImageData = {
 image: ImageType
}

type MobileCardImgProps = {
 product: ShopifyProduct
 featImgData: FeatImageData
 imgDataArr: ImageType[]
}

function MobileCardImg({ featImgData }: MobileCardImgProps) {
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
