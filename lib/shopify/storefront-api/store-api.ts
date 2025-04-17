import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import productApi from './products';
import menuApi from './menu';
import collectionApi from './collections';
import variantApi from './variants';
import cartApi from './cart';

export const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION ?? '2024-07';
export const STORE_DOMAIN =
  process.env.NEXT_PUBLIC_STORE_DOMAIN ?? '7c5018-3.myshopify.com';
export const STOREFRONT_PUBLIC_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN;

export const client = createStorefrontApiClient({
  storeDomain: STORE_DOMAIN,
  apiVersion: API_VERSION,
  publicAccessToken: STOREFRONT_PUBLIC_ACCESS_TOKEN,
});

export const storeApi = {
  ...productApi,
  ...menuApi,
  ...collectionApi,
  ...variantApi,
  ...cartApi,
};
