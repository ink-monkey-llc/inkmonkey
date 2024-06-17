import React from 'react'
import { storeApi } from '@/lib/shopify/storefront-api'
import ProductGrid from '@/app/grid/product-grid'

async function ProductType({ params }: { params: { slug: string } }) {
 const query = decodeURIComponent(params.slug)
 const products = await storeApi.getProductsByType({ productType: query, sortKey: 'TITLE', reverse: false })
 console.log('products:', await products)

 return (
  <div>
   <div>{query}</div>
   <ProductGrid products={products} />
  </div>
 )
}

export default ProductType
