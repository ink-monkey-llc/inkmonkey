import { ShopifyProduct, ProductOption, ProductVariant } from '@/lib/shopify/types'

export function formatPathname(pathname: string): string {
 return pathname.replace(/-/g, ' ')
}

export function formatPrice(price: number): string {
 const dollars = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
 }).format(price)
 return dollars
}

export function filterByType(products: ShopifyProduct[], type: string): ShopifyProduct[] {
 const filteredProducts = products.filter((product) => product.productType === type)
 return filteredProducts
}

export function extractFirstValues(options: ProductOption[]): Record<string, string> {
 return options.reduce((acc, option) => {
  acc[option.name] = option.values[0]
  return acc
 }, {} as Record<string, string>)
}

export function convertToObjectArray(data: Record<string, string>): Array<{ name: string; value: string }> {
 const result = Object.entries(data).map(([key, value]) => ({
  name: key,
  value: value,
 }))
 return result
}

export function containsId(targetString: string, array: ProductVariant[]): boolean {
 return array.some((obj) => obj.id === targetString)
}

export function sortWindowVariants(product: ShopifyProduct) {
 const variants = product.variants.edges.map((edge) => edge.node)
 const businessVariants = variants.filter((variant) => variant.title.includes('Business'))
 const textVariant = variants.find((variant) => variant.title === 'Name / Text')
 const noneVariant = variants.find((variant) => variant.title === 'None')
 return { businessVariants, textVariant, noneVariant }
}

interface KeyValue {
 key: string
 value: string
}

export function transformKey({ key, value }: KeyValue): { newKey: string; value: string } {
 const newKey = key.includes('business') ? key.replace('business', '') : key.includes('text') ? key.replace('text', '') : key

 return { newKey, value }
}

export const currentYear = new Date().getFullYear()

export function getYears() {
 const years = []
 for (let year = currentYear + 1; year >= 1950; year--) {
  years.push(year)
 }
 return years
}
