'use client'
import React, { useState, useEffect } from 'react'
import Price from './price'
import { useLocalStorage } from 'usehooks-ts'
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
 const [userCartId, setUserCartId] = useLocalStorage('userCartId', '')
 const [quantity, setQuantity] = useState(1)

 const fetchedVariant = async (variant: Record<string, string>) => {
  return await storeApi.getVariantByOptions({ handle: product.handle, selectedOptions: convertToObjectArray(variant) })
 }

 useEffect(() => {
  fetchedVariant(selectedOptions).then((variant) => setSelectedVariant(variant))
 }, [selectedOptions])

 const handleSelect = async (variant: Record<string, string>) => {
  setSelectedOptions(variant)
 }

 const handleAddToCart = async () => {
  if (!selectedVariant) {
   return
  }
  let cartId = userCartId ? userCartId : ''
  if (!userCartId) {
   const newCart = await storeApi.createCart()
   cartId = newCart.id
   setUserCartId(newCart.id)
  }
  const lines = selectedVariant ? [{ merchandiseId: selectedVariant.id, quantity: quantity }] : []
  const updatedCart = await storeApi.addToCart(cartId, lines)
  console.log('updatedCart:', updatedCart)
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
   <Atc addToCart={handleAddToCart} />
  </div>
 )
}

export default Variants
