'use server'
import { storeApi } from '@/lib/shopify/storefront-api'

export async function getProduct({ query }: { query: string }) {
 const product = await storeApi.getProductByHandle({ handle: query })
 //  console.log('product:', await product)
 return product
}
