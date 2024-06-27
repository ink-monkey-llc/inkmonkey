import { createStorefrontApiClient } from '@shopify/storefront-api-client'
import { Cart, SelectedOptionInput, ShopifyCart } from './types'
import { productByHandleQuery, nextProductByTypeQuery, previousProductByTypeQuery, variantByOptionsQuery } from './queries/products'
import {
 previousCollectionByHandleQuery,
 nextCollectionByHandleQuery,
 previousCollectionByIdQuery,
 nextCollectionByIdQuery,
 collectionHandleByIdQuery,
} from './queries/collections'
import { Connection, Image, QueryResult, ShopifyProduct, PageInfo, ShopifyMenu, CollectionQueryResult } from './types'
import { menuQuery } from './queries/menu'
import { filterByType } from '@/app/utils/helpers'
import { addToCartMutation, createCartMutation, removeFromCartMutation } from './mutations/cart'
import { create } from 'domain'
import { getCartQuery } from './queries/cart'

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

const reshapeCart = (cart: ShopifyCart): Cart => {
 if (!cart.cost?.totalTaxAmount) {
  cart.cost.totalTaxAmount = {
   amount: '0.0',
   currencyCode: 'USD',
  }
 }

 return {
  ...cart,
  lines: removeEdgesAndNodes(cart.lines),
 }
}

type CollectionArgs = {
 handle: string
 sortKey: string
 reverse: boolean
 numProducts: number
 cursor: string
 dir: string
 productType: string
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
  const productData = { pageInfo, products } as QueryResult
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

 getCollectionByHandle: async (args: CollectionArgs) => {
  // console.log('getCollectionByHandle', args)
  const variables: { handle: string; sortKey: string; reverse: boolean; numProducts: number; cursor?: string; productType: string } = {
   handle: args.handle,
   sortKey: args.sortKey,
   reverse: args.reverse,
   numProducts: args.numProducts,
   productType: args.productType,
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
  if (!data.collectionByHandle) {
   return { products: [], pageInfo: { hasNextPage: false, hasPreviousPage: false, startCursor: null, endCursor: null } }
  }
  const { handle, title, description, updatedAt, seo, image, id } = data.collectionByHandle
  const collectionInfo = { handle, title, description, updatedAt, seo, image, id }
  const pageInfo = data.collectionByHandle.products.pageInfo as PageInfo
  const products = removeEdgesAndNodes(await data.collectionByHandle.products) as ShopifyProduct[]
  const productData = { pageInfo, products, collectionInfo } as QueryResult
  return productData
 },

 getCollectionById: async (args: { id: string; sortKey: string; reverse: boolean; numProducts: number; cursor: string; dir: string }) => {
  const variables: { id: string; sortKey: string; reverse: boolean; numProducts: number; cursor?: string } = {
   id: args.id,
   sortKey: args.sortKey,
   reverse: args.reverse,
   numProducts: args.numProducts,
  }
  if (args.cursor) {
   variables.cursor = args.cursor
  }
  const { data, errors, extensions } = await client.request(args.dir === 'prev' ? previousCollectionByIdQuery : nextCollectionByIdQuery, {
   variables: variables,
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  // console.log('data:', await data)
  const pageInfo = data.collectionById.products.pageInfo as PageInfo
  const products = removeEdgesAndNodes(await data.collectionById.products) as ShopifyProduct[]
  const productData = { pageInfo, products } as QueryResult
  return productData
 },
 getCollectionHandleById: async (args: { id: string }) => {
  const { data, errors, extensions } = await client.request(collectionHandleByIdQuery, {
   variables: {
    id: args.id,
   },
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  // console.log('data:', await data)
  return await data
 },
 getVariantByOptions: async (args: { handle: string; selectedOptions: SelectedOptionInput[] }) => {
  const { data, errors, extensions } = await client.request(variantByOptionsQuery, {
   variables: {
    handle: args.handle,
    selectedOptions: args.selectedOptions,
   },
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  // console.log('data:', await data)
  return await data.product.variantBySelectedOptions
 },

 createCart: async () => {
  const { data, errors, extensions } = await client.request(createCartMutation, {
   variables: {
    lineItems: [],
   },
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  return reshapeCart(data.cartCreate.cart)
 },

 addToCart: async (cartId: string, lines: { merchandiseId: string; quantity: number }[]) => {
  const { data, errors, extensions } = await client.request(addToCartMutation, {
   variables: {
    cartId: cartId,
    lines: lines,
   },
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }

  return reshapeCart(data.cartLinesAdd.cart)
 },

 getCart: async (cartId: string) => {
  const { data, errors, extensions } = await client.request(getCartQuery, {
   variables: {
    cartId: cartId,
   },
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  return reshapeCart(data.cart)
 },

 removeFromCart: async (cartId: string, lineIds: string[]) => {
  const { data, errors, extensions } = await client.request(removeFromCartMutation, {
   variables: {
    cartId: cartId,
    lineIds: lineIds,
   },
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  return reshapeCart(data.cartLinesRemove.cart)
 },
}
