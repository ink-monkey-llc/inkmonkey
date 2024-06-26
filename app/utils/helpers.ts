import { ShopifyProduct, ProductOption } from '@/lib/shopify/types'

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
