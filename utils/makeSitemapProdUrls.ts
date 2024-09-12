import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { HandlesResponse, SitemapProduct } from '@/lib/shopify/types'

const productHandles = async (after: string, hasNextPage: boolean, isFirst: boolean, accumulatedProducts: SitemapProduct[] = []) => {
 if (hasNextPage) {
  const nextPage: HandlesResponse = await storeApi.getProductHandles({ after, first: 250, isFirst: false })
  const prodArr = nextPage.nodes
  return productHandles(nextPage.pageInfo.endCursor, nextPage.pageInfo.hasNextPage, false, [...accumulatedProducts, ...prodArr])
 }
 if (isFirst) {
  const firstPage: HandlesResponse = await storeApi.getProductHandles({ after: '', first: 250, isFirst: true })
  const prodArr = firstPage.nodes
  return productHandles(firstPage.pageInfo.endCursor, firstPage.pageInfo.hasNextPage, false, [...accumulatedProducts, ...prodArr])
 }
 return accumulatedProducts
}

export async function makeSitemapProdUrls() {
 let urls: string[] = []
 const handles = await productHandles('', false, true)
 handles.forEach((handle) => {
  if (handle.productType === 'Truck Back Window Graphics') {
   urls.push(`/window/${handle.handle}`)
  }
  if (handle.productType !== 'Truck Back Window Graphics') {
   urls.push(`/product/${handle.handle}`)
  }
 })
 console.log('urls:', urls)
 return urls
}

export const siteMapProdUrls = async () => await makeSitemapProdUrls()
