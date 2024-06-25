import React from 'react'
import VariantItem from './variant-item'
import { ShopifyProduct } from '@/lib/shopify/types'

function Variants({ product }: { product: ShopifyProduct }) {
 const variants = product.variants.edges.map((edge) => edge.node)
 //  capture user selections and then product query with variantBySelectedOptions: [SelectedOptionInput!]! https://shopify.dev/docs/api/storefront/2024-04/queries/product
 return (
  <div>
   {product.options.map((option, i) => (
    <div key={option.id}>
     <h2>{option.name}</h2>
     <div className='flex flex-wrap gap-4 mr-12'>
      {option.values.map((value, j) => (
       <VariantItem
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
