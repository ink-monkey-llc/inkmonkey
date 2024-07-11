'use client'
import React, { useState, useEffect } from 'react'
import { ShopifyProduct, VariantByOptions } from '@/lib/shopify/types'
import Price from '@/app/product/[pid]/price'
import { convertToObjectArray, extractFirstValues } from '@/app/utils/helpers'
import { storeApi } from '@/lib/shopify/storefront-api'
import Customization from './customization'
import { useAtom } from 'jotai'
import { selectedVariantAtom } from '@/app/providers/atoms'
import WindowAtc from './window-atc'
import Quantity from '@/app/product/[pid]/quantity'
import Dimensions from './dimensions/dimensions'

function WindowVariants({ product }: { product: ShopifyProduct }) {
 const [quantity, setQuantity] = useState(1)
 const initialOptions = extractFirstValues(product.options)
 const [selectedOptions, setSelectedOptions] = useState(initialOptions)
 const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)
 const fetchedVariant = async (variant: Record<string, string>) => {
  return await storeApi.getVariantByOptions({ handle: product.handle, selectedOptions: convertToObjectArray(variant) })
 }

 useEffect(() => {
  fetchedVariant(selectedOptions).then((variant) => setSelectedVariant(variant))
 }, [selectedOptions])

 return (
  <div className='relative flex flex-col gap-4 min-w-[237px] px-4'>
   <div className='flex flex-col gap-4 '>
    <div className='sticky top-[96px] pt-4 bg-black border-b border-accent-tr'>
     <Price
      quantity={quantity}
      price={selectedVariant?.price ? selectedVariant?.price.amount : '0'}
     />
    </div>
    <div className='flex flex-col gap-4 '>
     <Dimensions />
     <Customization product={product} />
    </div>
   </div>

   <Quantity
    quantity={quantity}
    setQuantity={setQuantity}
   />
   <WindowAtc />
  </div>
 )
}

export default WindowVariants
