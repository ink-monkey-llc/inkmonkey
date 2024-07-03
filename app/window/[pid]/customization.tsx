'use client'

import React, { useState, useEffect } from 'react'
import None from './none'
import { storeApi } from '@/lib/shopify/storefront-api'
import { ProductVariant, ShopifyProduct } from '@/lib/shopify/types'
import { variantDescription } from '@/app/content/window-variants'
import Business from './business/business'
import Text from './text/text'
import CustomOption from './custom-option'
import { containsId } from '@/app/utils/helpers'

function Customization({ product }: { product: ShopifyProduct }) {
 const [open, setOpen] = useState(false)

 const variants = product.variants.edges.map((edge) => edge.node)
 const businessVariants = variants.filter((variant) => variant.title.includes('Business'))
 const textVariant = variants.find((variant) => variant.title === 'Name / Text')
 const noneVariant = variants.find((variant) => variant.title === 'None')
 console.log('variants:', variants)

 const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(noneVariant ? noneVariant : null)

 return (
  <div className='flex flex-col gap-2 min-w-[237px]'>
   <h2>Personalization Options</h2>
   {noneVariant && (
    <None
     setSelectedVariant={setSelectedVariant}
     isSelected={selectedVariant?.id === noneVariant.id}
     noneVariant={noneVariant}
    />
   )}
   {textVariant && (
    <Text
     setSelectedVariant={setSelectedVariant}
     isSelected={selectedVariant?.id === textVariant.id}
     variant={textVariant}
    />
   )}
   {businessVariants && (
    <Business
     setSelectedVariant={setSelectedVariant}
     isSelected={selectedVariant?.id ? containsId(selectedVariant?.id, businessVariants) : false}
     variants={businessVariants}
    />
   )}
  </div>
 )
}

export default Customization
