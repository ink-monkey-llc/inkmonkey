'use client'
import React, { useState, useEffect } from 'react'
import { ShopifyProduct, VariantByOptions } from '@/lib/shopify/types'
import Price from '@/app/product/[pid]/price'
import { convertToObjectArray, extractFirstValues } from '@/app/utils/helpers'
import { storeApi } from '@/lib/shopify/storefront-api'
import Customization from './customization'

function WindowVariants({ product }: { product: ShopifyProduct }) {
 const [quantity, setQuantity] = useState(1)
 const initialOptions = extractFirstValues(product.options)
 const [selectedOptions, setSelectedOptions] = useState(initialOptions)
 const [selectedVariant, setSelectedVariant] = useState<VariantByOptions | null>(null)
 const fetchedVariant = async (variant: Record<string, string>) => {
  return await storeApi.getVariantByOptions({ handle: product.handle, selectedOptions: convertToObjectArray(variant) })
 }

 console.log('product:', product)

 useEffect(() => {
  fetchedVariant(selectedOptions).then((variant) => setSelectedVariant(variant))
 }, [selectedOptions])

 return (
  <div className='flex flex-col gap-4 min-w-[237px] px-4'>
   <Price
    quantity={quantity}
    price={selectedVariant?.price ? selectedVariant?.price.amount : '0'}
   />
   <Customization product={product} />
  </div>
 )
}

export default WindowVariants