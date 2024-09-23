import { Connection, ShopifyCart, Cart, Image } from '../types'

export const removeEdgesAndNodes = (array: Connection<any>) => {
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

export const reshapeCart = (cart: ShopifyCart): Cart => {
 //  console.log('cart:', cart)
 if (!cart || !cart?.cost?.totalTaxAmount) {
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
