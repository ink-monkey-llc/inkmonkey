import { createStorefrontApiClient } from '@shopify/storefront-api-client'
import { productByHandleQuery, productByTypeQuery } from './queries/products'
import { Connection, Image } from './types'

const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION ?? '2024-04'
const STORE_DOMAIN = process.env.NEXT_PUBLIC_STORE_DOMAIN ?? '7c5018-3.myshopify.com'
const STOREFRONT_PUBLIC_ACCESS_TOKEN = process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN

export const client = createStorefrontApiClient({
 storeDomain: STORE_DOMAIN,
 apiVersion: API_VERSION,
 publicAccessToken: STOREFRONT_PUBLIC_ACCESS_TOKEN,
})

const removeEdgesAndNodes = (array: Connection<any>) => {
 return array.edges.map((edge) => edge?.node)
}

export const reshapeImages = (images: Connection<Image>, productTitle: string) => {
 const flattened = removeEdgesAndNodes(images)

 return flattened.map((image) => {
  const filename = image.url.match(/.*\/(.*)\..*/)[1]
  return {
   ...image,
   altText: image.altText || `${productTitle} - ${filename}`,
  }
 })
}

export const storeApi = {
 getProductByHandle: async (args: { handle: string }) => {
  const { data, errors, extensions } = await client.request(productByHandleQuery, {
   variables: {
    handle: args.handle,
   },
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  // console.log('data:', await data)
  return await data.productByHandle
 },

 getProductsByType: async (args: { productType: string; sortKey: string; reverse: boolean }) => {
  const { data, errors, extensions } = await client.request(productByTypeQuery, {
   variables: {
    query: `product_type:${args.productType}`,
    sortKey: args.sortKey,
    reverse: args.reverse,
   },
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  // console.log('data:', await data)
  const products = removeEdgesAndNodes(await data.products)
  return products
 },
}
