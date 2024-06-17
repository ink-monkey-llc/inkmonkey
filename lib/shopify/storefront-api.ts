import { createStorefrontApiClient } from '@shopify/storefront-api-client'

const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION ?? '2024-04'
const STORE_DOMAIN = process.env.NEXT_PUBLIC_STORE_DOMAIN ?? '7c5018-3.myshopify.com'
const STOREFRONT_PUBLIC_ACCESS_TOKEN = process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN

export const shopify = {
 client: createStorefrontApiClient({
  storeDomain: STORE_DOMAIN,
  apiVersion: API_VERSION,
  publicAccessToken: STOREFRONT_PUBLIC_ACCESS_TOKEN,
 }),
}
