import { client, API_VERSION } from './store-api'
import {
 previousCollectionByHandleQuery,
 nextCollectionByHandleQuery,
 previousCollectionByIdQuery,
 nextCollectionByIdQuery,
 collectionHandleByIdQuery,
 fullCollectionByHandleQuery,
 prevFullCollectionByHandleQuery,
} from '../queries/collections'
import { PageInfo, ShopifyProduct, QueryResult } from '../types'
import { removeEdgesAndNodes } from './helpers'
import { dir } from 'console'

type CollectionArgs = {
 handle: string
 sortKey: string
 reverse: boolean
 numProducts: number
 cursor: string
 dir: string
 productType: string
}

const collectionApi = {
 getCollectionByHandle: async (args: CollectionArgs) => {
  const direction = args.dir === 'prev' ? 'before' : 'after'
  // console.log('args:', args)
  let variables: { handle: string; sortKey: string; reverse: boolean; numProducts: number; cursor?: string; dir?: string; productType: string } = {
   handle: args.handle,
   sortKey: args.sortKey,
   reverse: args.reverse,
   numProducts: args.numProducts,
   productType: args.productType,
   [direction]: args.cursor,
  }
  if (args.cursor) {
   variables.cursor = args.cursor
  }
  // console.log('vars:', variables)
  const { data, errors, extensions } = await client.request(args.dir === 'prev' ? previousCollectionByHandleQuery : nextCollectionByHandleQuery, {
   variables: variables,
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log(
    'errors:',
    errors,
    'locations:',
    errors.graphQLErrors ? errors.graphQLErrors[0].locations : null,
    'path:',
    errors.graphQLErrors ? errors.graphQLErrors[0].path : null
   )
   //  throw new Error(errors.message)
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

 getFullCollectionByHandle: async (args: { handle: string; cursor: string; sortKey: string; reverse: boolean; numProducts: number; dir: string }) => {
  const direction = args.dir === 'prev' ? 'before' : 'after'

  let variables: { handle: string; sortKey: string; reverse: boolean; numProducts: number; cursor?: string; dir?: string } = {
   handle: args.handle,
   sortKey: args.sortKey,
   reverse: args.reverse,
   numProducts: args.numProducts,
   [direction]: args.cursor,
  }
  if (args.cursor) {
   variables.cursor = args.cursor
   //  console.log('vars:', variables)
  }
  const { data, errors, extensions } = await client.request(args.dir === 'prev' ? prevFullCollectionByHandleQuery : fullCollectionByHandleQuery, {
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
}

export default collectionApi
