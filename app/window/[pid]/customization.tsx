'use client'

import React, { useState } from 'react'
import None from './none'
import { storeApi } from '@/lib/shopify/storefront-api'
import { ProductVariant, ShopifyProduct } from '@/lib/shopify/types'
import Business from './business/business'
import Text from './text/text'
import { containsId, sortWindowVariants } from '@/app/utils/helpers'
import { selectedVariantAtom, selectedLogoOptionAtom } from '@/app/providers/atoms'
import { useAtom } from 'jotai'

function Customization({ product }: { product: ShopifyProduct }) {
 const [open, setOpen] = useState(false)

 const { businessVariants, textVariant, noneVariant } = sortWindowVariants(product)
 const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)

 const [selectedLogoOption, setSelectedLogoOption] = useAtom(selectedLogoOptionAtom)

 return (
  <div className='flex flex-col gap-2 min-w-[237px]'>
   <h2>Personalization Options</h2>
   {noneVariant && <None noneVariant={noneVariant} />}
   {textVariant && <Text variant={textVariant} />}
   {businessVariants && (
    <Business
     selectedLogoOption={selectedLogoOption}
     setSelectedLogoOption={setSelectedLogoOption}
     variants={businessVariants}
    />
   )}
  </div>
 )
}

export default Customization
