import { ProductVariant } from '@/lib/shopify/types'
import React from 'react'

function Text({ variant }: { variant: ProductVariant }) {
 return <div>{variant.title}</div>
}

export default Text
