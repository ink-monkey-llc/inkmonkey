import { ProductVariant } from '@/lib/shopify/types'
import React from 'react'

function Business({ variants }: { variants: ProductVariant[] }) {
 return (
  <div>
   {variants.map((variant) => (
    <div key={variant.id}>{variant.title}</div>
   ))}
  </div>
 )
}

export default Business
