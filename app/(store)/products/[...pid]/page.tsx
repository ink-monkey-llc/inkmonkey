import React from 'react'
import { permanentRedirect } from 'next/navigation'
import { ShopifyProduct } from '@/lib/shopify/types'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'

async function Products({ params }: { params: { pid: string[] } }) {
 const { pid } = params
 const product: ShopifyProduct = await storeApi.getProductByHandle({ handle: pid[0] })
 const isWindow = product.productType === 'Truck Back Window Graphics'
 if (isWindow) {
  permanentRedirect(`/window/${pid[0]}`)
  return <div>Loading...</div>
 }
 permanentRedirect(`/product/${pid[0]}`)
 return <div>Loading...</div>
}

export default Products
