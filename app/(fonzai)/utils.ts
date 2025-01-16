import { decalPrompt } from '@/app/(fonzai)/data/style-options'

import { getNouns } from '@/lib/compromise'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { Product, ShopifyProduct } from '@/lib/shopify/types'

export const assemblePrompt = (prompt: string, style: string, ar?: string, idCode?: string, imgUrl?: string) => {
  const fullPrompt = () => {
    if (prompt.endsWith('noprefix')) {
      return prompt
    } else {
      if (idCode?.startsWith('de') || idCode?.startsWith('ts')) {
        return `${decalPrompt} ${style} ${prompt}`
      } else if (imgUrl !== '') {
        return `${imgUrl} ${style} ${prompt} --ar ${ar}`
      } else {
        return `${style} ${prompt} --ar ${ar}`
      }
    }
  }
  return fullPrompt()
}

export const dollars = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const getTimeLeft = (cooldownTime: number) => {
  const timeDiff = Date.now() - cooldownTime
  const currTimeLeft = 86400000 - timeDiff
  return currTimeLeft
}

export const getHoursAndMinutes = (currTimeLeft: number) => {
  const hours = Math.floor((currTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((currTimeLeft % (1000 * 60 * 60)) / (1000 * 60))
  return { hours, minutes }
}

type AddToArrayFunction = (arr: number[], val: number) => number[]

export const debounce = (func: AddToArrayFunction, delay: number): AddToArrayFunction => {
  let timeoutId: NodeJS.Timeout | null = null

  return (arr: number[], val: number) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func(arr, val)
    }, delay)

    return arr
  }
}

export const addToArray = debounce((arr: number[], val: number) => {
  if (arr.includes(val)) {
    return arr
  }
  arr.unshift(val)
  if (arr.length >= 8) {
    arr.pop()
  }
  return arr
}, 300)

export const isValidExpiry = (expiresAt: string): boolean => {
  const now = new Date()
  const expiryDate = new Date(expiresAt)
  const timeDifference = expiryDate.getTime() - now.getTime()

  // 24 hours in milliseconds
  const twentyFourHoursInMillis = 24 * 60 * 60 * 1000

  return timeDifference >= twentyFourHoursInMillis
}

export function extractProductId(string: string): string {
  // Split the string by '/'
  const parts = string.split('/')
  // Return the last part
  return parts[parts.length - 1]
}

export async function getRecs(queryObj: { userQuery: string; productType: string }) {
  const { userQuery, productType } = queryObj
  const nouns: () => Promise<string[]> = async () => {
    const result: string[] = await getNouns({ userQuery })
    return result
  }
  const nounsArr = await nouns()
  function createSearchQuery(nounsArr: string[], productType: string) {
    const tagPart = nounsArr.map((noun) => `(tag:${noun})`).join(' OR ')
    let query = ''
    const flatNouns = nounsArr.flat().toString()
    if (nounsArr.length > 0) {
      query = `${tagPart} AND (product_type:${productType})`
    }
    return { query, flatNouns }
  }
  const recs = async () => {
    const { query, flatNouns } = createSearchQuery(nounsArr, productType)
    const searchedProducts = await storeApi.searchProducts({ query: flatNouns, numProducts: 24, reverse: true, productType, dir: 'next', cursor: '' })
    let products = searchedProducts.products
    if (products.length < 1) {
      products = await storeApi
        .getProductsByType({ productType, sortKey: 'CREATED_AT', reverse: true, numProducts: 24, cursor: '', dir: 'next' })
        .then((res) => res.products)
    }
    const prodArray: ShopifyProduct[] = products
    return prodArray
  }

  return await recs()
}
