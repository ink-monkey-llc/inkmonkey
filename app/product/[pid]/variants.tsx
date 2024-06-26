'use client'
import React, { useState } from 'react'
import Price from './price'
import { storeApi } from '@/lib/shopify/storefront-api'
import { ShopifyProduct, VariantByOptions } from '@/lib/shopify/types'
import { extractFirstValues, convertToObjectArray } from '@/app/utils/helpers'
import VariantSelect from './variant-select'
import Quantity from './quantity'
import Customization from './customization'
import Atc from './atc'

function Variants({ product }: { product: ShopifyProduct }) {
 const initialOptions = extractFirstValues(product.options)
 const [selectedOptions, setSelectedOptions] = useState(initialOptions)
 const [selectedVariant, setSelectedVariant] = useState<VariantByOptions | null>(null)
 const [customization, setCustomization] = useState<string>('')
 const [quantity, setQuantity] = useState(1)

 const fetchedVariant = async (variant: Record<string, string>) => {
  return await storeApi.getVariantByOptions({ handle: product.handle, selectedOptions: convertToObjectArray(variant) })
 }

 const handleSelect = async (variant: Record<string, string>) => {
  setSelectedOptions(variant)
  const variantData = await fetchedVariant(variant)
  setSelectedVariant(variantData)
 }

 const isCustom = selectedOptions.Personalization !== 'None'
 return (
  <div className='flex flex-col gap-4 min-w-[337px]'>
   <Price
    quantity={quantity}
    price={selectedVariant?.price ? selectedVariant?.price.amount : '0'}
   />
   <div>
    {product.options.map((option, i) => (
     <VariantSelect
      setSelectedOptions={handleSelect}
      selectedOptions={selectedOptions}
      option={option}
      key={option.id}
     />
    ))}
   </div>
   <Customization
    isCustom={isCustom}
    setCustomization={setCustomization}
    customization={customization}
   />
   <Quantity
    quantity={quantity}
    setQuantity={setQuantity}
   />
   <Atc />
  </div>
 )
}

export default Variants
