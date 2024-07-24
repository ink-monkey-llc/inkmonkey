import { productByHandleQuery, previousProductByTypeQuery, nextProductByTypeQuery, nextAllProductsQuery, previousAllProductsQuery } from '../queries/products'
import { searchAllPrevQuery, searchAllQuery, searchNextQuery, searchPrevQuery } from '../queries/search'
import { API_VERSION, client } from './store-api'
import { PageInfo, ShopifyProduct, QueryResult } from '../types'
import { removeEdgesAndNodes } from './helpers'

const productApi = {
 getAllProducts: async (args: { numProducts: number; reverse: boolean; dir: string; cursor: string; sortKey: string }) => {
  const variables: { numProducts: number; reverse: boolean; cursor?: string; sortKey: string } = {
   numProducts: args.numProducts,
   reverse: args.reverse,
   sortKey: args.sortKey,
  }
  if (args.cursor) {
   variables.cursor = args.cursor
  }
  console.log('args:', args)
  const { data, errors, extensions } = await client.request(args.dir === 'prev' ? previousAllProductsQuery : nextAllProductsQuery, {
   variables,
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  // console.log('data:', await data)
  const pageInfo = (await data.products.pageInfo) as PageInfo
  const products = removeEdgesAndNodes(await data.products) as ShopifyProduct[]

  const productData = { products, pageInfo }
  return productData
 },

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
 searchProducts: async (args: { query: string; numProducts: number; reverse: boolean; productType: string; dir: string; cursor: string }) => {
  const variables: { query: string; first: number; reverse: boolean; productType: string; cursor?: string } = {
   query: args.query,
   first: args.numProducts,
   reverse: args.reverse,
   productType: args.productType,
  }
  if (args.cursor) {
   variables.cursor = args.cursor
  }
  const { data, errors, extensions } = await client.request(args.dir === 'prev' ? searchPrevQuery : searchNextQuery, {
   variables,
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  console.log('data:', await data)
  const pageInfo = (await data.search.pageInfo) as PageInfo
  const products = removeEdgesAndNodes(await data.search) as ShopifyProduct[]

  const productData = { products, pageInfo }
  return productData
 },

 searchAllProducts: async (args: { query: string; numProducts: number; reverse: boolean; dir: string; cursor: string }) => {
  const variables: { query: string; first: number; reverse: boolean; cursor?: string } = {
   query: args.query,
   first: args.numProducts,
   reverse: args.reverse,
  }
  if (args.cursor) {
   variables.cursor = args.cursor
  }
  const { data, errors, extensions } = await client.request(args.dir === 'prev' ? searchAllPrevQuery : searchAllQuery, {
   variables,
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  console.log('data:', await data)
  const pageInfo = (await data.search.pageInfo) as PageInfo
  const products = removeEdgesAndNodes(await data.search) as ShopifyProduct[]

  const productData = { products, pageInfo }
  return productData
 },
}

export default productApi
