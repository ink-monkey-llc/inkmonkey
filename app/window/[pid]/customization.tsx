'use client'

import React from 'react'
import None from './none'
import { ShopifyProduct } from '@/lib/shopify/types'
import Business from './business/business'
import Text from './text/text'
import { sortWindowVariants } from '@/app/utils/helpers'

function Customization({ product }: { product: ShopifyProduct }) {
 const { businessVariants, textVariant, noneVariant } = sortWindowVariants(product)

 return (
  <div className='flex flex-col gap-2 pr-2 min-w-[237px]'>
   <h2>Personalization Options</h2>
   {noneVariant && <None noneVariant={noneVariant} />}
   {textVariant && <Text textVariant={textVariant} />}
   {businessVariants && <Business variants={businessVariants} />}
  </div>
 )
}

export default Customization
