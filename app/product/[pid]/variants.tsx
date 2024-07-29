'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Price from './price'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { ShopifyProduct, VariantByOptions } from '@/lib/shopify/types'
import { extractFirstValues, convertToObjectArray } from '@/app/utils/helpers'
import useAtc from '@/app/hooks/useAtc'
import VariantSelect from './variant-select'
import Quantity from './quantity'
import Customization from './customization'
import Atc from '../../atc'

function Variants({ product }: { product: ShopifyProduct }) {
 const initialOptions = extractFirstValues(product.options)
 const [selectedOptions, setSelectedOptions] = useState(initialOptions)
 const [selectedVariant, setSelectedVariant] = useState<VariantByOptions | null>(null)
 const [customization, setCustomization] = useState<string>('')
 const [quantity, setQuantity] = useState(1)
 const router = useRouter()

 const fetchedVariant = async (variant: Record<string, string>) => {
  return await storeApi.getVariantByOptions({ handle: product.handle, selectedOptions: convertToObjectArray(variant) })
 }

 const { adding, added, addToCart } = useAtc()

 const addAndOpenCart = () => {
  addToCart({
   selectedVariant,
   quantity,
   attributes: [{ key: selectedOptions.Personalization, value: customization ? customization : 'None' }],
  })
  router.push('/cart')
 }

 useEffect(() => {
  fetchedVariant(selectedOptions).then((variant) => setSelectedVariant(variant))
 }, [selectedOptions])

 const handleSelect = async (variant: Record<string, string>) => {
  setSelectedOptions(variant)
 }

 const isCustom = selectedOptions.Personalization !== 'None'
 return (
  <div className='flex flex-col gap-4 min-w-[237px] px-4 mb-8'>
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
   <Atc
    addToCart={addAndOpenCart}
    adding={adding}
    added={added}
   />
  </div>
 )
}

export default Variants
