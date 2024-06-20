import { createStorefrontApiClient } from '@shopify/storefront-api-client'
import { productByHandleQuery, nextProductByTypeQuery, previousProductByTypeQuery } from './queries/products'
import { previousCollectionByHandleQuery, nextCollectionByHandleQuery } from './queries/collections'
import { Connection, Image, ProductQueryResult, ShopifyProduct, PageInfo, ShopifyMenu } from './types'
import { menuQuery } from './queries/menu'

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

 getProductsByType: async (args: { productType: string; sortKey: string; reverse: boolean; numProducts: number; cursor: string; dir: string }) => {
  const variables: { query: string; sortKey: string; reverse: boolean; numProducts: number; cursor?: string } = {
   query: `product_type:${args.productType}`,
   sortKey: args.sortKey,
   reverse: args.reverse,
   numProducts: args.numProducts,
  }
  if (args.cursor) {
   variables.cursor = args.cursor
  }
  const { data, errors, extensions } = await client.request(args.dir === 'prev' ? previousProductByTypeQuery : nextProductByTypeQuery, {
   variables,
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  // console.log('data:', await data)
  const pageInfo = data.products.pageInfo as PageInfo
  const products = removeEdgesAndNodes(await data.products) as ShopifyProduct[]
  const productData = { pageInfo, products } as ProductQueryResult
  return productData
 },

 getMenu: async (args: { handle: string }) => {
  const { data, errors, extensions } = await client.request(menuQuery, {
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
  const menuData = (await data.menu) as ShopifyMenu
  return menuData
 },

 getCollectionByHandle: async (args: { handle: string; sortKey: string; reverse: boolean; numProducts: number; cursor: string; dir: string }) => {
  const variables: { handle: string; sortKey: string; reverse: boolean; numProducts: number; cursor?: string } = {
   handle: args.handle,
   sortKey: args.sortKey,
   reverse: args.reverse,
   numProducts: args.numProducts,
  }
  if (args.cursor) {
   variables.cursor = args.cursor
  }
  const { data, errors, extensions } = await client.request(args.dir === 'prev' ? previousCollectionByHandleQuery : nextCollectionByHandleQuery, {
   variables: variables,
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  // console.log('data:', await data)
  return await data.collectionByHandle
 },
}
