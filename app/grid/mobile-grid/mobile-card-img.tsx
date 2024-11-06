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
  <div className='relative m-auto'>
   <Image
    unoptimized={true}
    className='object-cover'
    style={{
     display: 'auto',
     minWidth: '50px',
    }}
    src={featImgData.image?.url ?? ''}
    alt={featImgData.image?.altText ?? 'Product image'}
    width={140}
    height={140}
    // blurDataURL={featImgData.base64}
    // placeholder='blur'
   />
  </div>
 )
}

export default MobileCardImg
