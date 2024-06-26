'use client'
import React, { useState } from 'react'
import Price from './price'
import { storeApi } from '@/lib/shopify/storefront-api'
import VariantItem from './variant-item'
import { ShopifyProduct } from '@/lib/shopify/types'
import { extractFirstValues } from '@/app/utils/helpers'

function Variants({ product }: { product: ShopifyProduct }) {
 const initialOptions = extractFirstValues(product.options)
 const [selectedOptions, setSelectedOptions] = useState(initialOptions)

 return (
  <div>
   <Price price={0} />
   {product.options.map((option, i) => (
    <div key={option.id}>
     <h2>{option.name}</h2>
     <div className='flex flex-wrap gap-4 mr-12'>
      {option.values.map((value, j) => (
       <VariantItem
        setSelectedOptions={setSelectedOptions}
        selectedOptions={selectedOptions}
        option={option}
        value={value}
        key={value}
       />
      ))}
     </div>
    </div>
   ))}
  </div>
 )
}

export default Variants
