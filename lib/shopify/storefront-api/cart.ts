import { client, API_VERSION } from './store-api'
import {
 createCartMutation,
 addToCartMutation,
 editCartItemsMutation,
 removeFromCartMutation,
 cartDiscountMutation,
 createCartDiscountMutation,
} from '../mutations/cart'
import { getCartQuery } from '../queries/cart'
import { Cart } from '../types'
import { reshapeCart } from './helpers'

const cartApi = {
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

 addToCart: async (cartId: string, lines: { merchandiseId: string; quantity: number; attributes: { key: string; value: string }[] }[]) => {
  // console.log('addToCart:', { cartId, lines })
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
  // console.log('data:', await data)
  return reshapeCart(await data.cartLinesAdd.cart)
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

 updateCart: async (cartId: string, lines: { id: string; merchandiseId: string; quantity: number }[]): Promise<Cart> => {
  const { data, errors, extensions } = await client.request(editCartItemsMutation, {
   variables: {
    cartId,
    lines,
   },
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  // console.log('data:', await data)
  return reshapeCart(data.cartLinesUpdate.cart)
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

 updateDiscountCodes: async (cartId: string, discountCodes: string[]) => {
  const { data, errors, extensions } = await client.request(cartDiscountMutation, {
   variables: {
    cartId,
    discountCodes,
   },
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  return { status: 'success', code: data.cartDiscountCodesUpdate.cart.discountCodes[0].code, cartId: data.cartDiscountCodesUpdate.cart.id }
 },
 createCartDiscount: async (discountCodes: string[]) => {
  const { data, errors, extensions } = await client.request(createCartDiscountMutation, {
   variables: {
    discountCodes,
   },
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  return { status: 'success', code: data.cartCreate.cart.discountCodes[0].code, cartId: data.cartCreate.cart.id }
 },
}

export default cartApi
