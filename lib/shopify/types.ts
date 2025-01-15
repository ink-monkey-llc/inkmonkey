export type Maybe<T> = T | null

export type Connection<T> = {
 edges: Array<Edge<T>>
}

export type Edge<T> = {
 node: T
}

export type Cart = Omit<ShopifyCart, 'lines'> & {
 lines: CartItem[]
}

export type CartItem = {
 id: string
 attributes: { key: string; value: string }[]
 quantity: number
 cost: {
  totalAmount: Money
 }
 merchandise: {
  id: string
  title: string
  selectedOptions: {
   name: string
   value: string
  }[]
  product: Product
 }
}

export type Collection = ShopifyCollection & {
 path: string
}

export type Image = {
 url: string
 altText: string
 width: number
 height: number
}

export interface FeaturedImage extends Image {
 image: Image
 title: string
}

export type Menu = {
 title: string
 path: string
}

export type Money = {
 amount: string
 currencyCode?: string
}

export type Page = {
 id: string
 title: string
 handle: string
 body: string
 bodySummary: string
 seo?: SEO
 createdAt: string
 updatedAt: string
}

export type Product = Omit<ShopifyProduct, 'variants' | 'images'> & {
 variants: ProductVariant[]
 images: Image[]
}

export type ProductOption = {
 id: string
 name: string
 values: string[]
}

export type ProductVariant = {
 id: string
 title: string
 availableForSale: boolean
 selectedOptions: {
  name: string
  value: string
 }[]
 price: Money
 metafield: {
  value: string
 }
}

export type VariantById = {
 id: string
 selectedOptions: {
  name: string
  value: string
 }
 title: string
 price: {
  amount: string
 }
 product: {
  handle: string
  title: string
  id: string
 }
}

export type SEO = {
 title: string
 description: string
}

export type ShopifyCart = {
 id: string
 checkoutUrl: string
 discountCodes: {
  code: string
  applicable: boolean
 }[]
 cost: {
  subtotalAmount: Money
  totalAmount: Money
  totalTaxAmount: Money
 }
 lines: Connection<CartItem>
 totalQuantity: number
}

export type SelectedOptionInput = {
 name: string
 value: string
}

export type VariantByOptions = {
 id: string
 price: { amount: string }
 metafield?: { value: string }
}

export type ShopifyCollection = {
 id: string
 handle: string
 title: string
 description: string
 seo: SEO
 updatedAt: string
 image: Image
 products: Connection<ProductWithPageInfo>
}

export type CollectionQueryResult = {
 pageInfo: PageInfo
 products: ShopifyProduct[]
 collectionInfo: ShopifyCollection
}

export type ShopifyProduct = {
 metafield: any
 id: string
 collections: {
  nodes: {
   handle: string
  }[]
 }
 handle: string
 availableForSale: boolean
 title: string
 description: string
 descriptionHtml: string
 options: ProductOption[]
 productType: string
 priceRange: {
  maxVariantPrice: Money
  minVariantPrice: Money
 }
 variants: Connection<ProductVariant>
 featuredImage: Image
 images: Connection<Image>
 seo: SEO
 tags: string[]
 updatedAt: string
}

export type ProductWithPageInfo = ShopifyProduct & {
 pageInfo: PageInfo
}

export type ShopifyCartOperation = {
 data: {
  cart: ShopifyCart
 }
 variables: {
  cartId: string
 }
}

export type ShopifyCreateCartOperation = {
 data: { cartCreate: { cart: ShopifyCart } }
}

export type ShopifyAddToCartOperation = {
 data: {
  cartLinesAdd: {
   cart: ShopifyCart
  }
 }
 variables: {
  cartId: string
  lines: {
   merchandiseId: string
   quantity: number
  }[]
 }
}

export type ShopifyRemoveFromCartOperation = {
 data: {
  cartLinesRemove: {
   cart: ShopifyCart
  }
 }
 variables: {
  cartId: string
  lineIds: string[]
 }
}

export type ShopifyUpdateCartOperation = {
 data: {
  cartLinesUpdate: {
   cart: ShopifyCart
  }
 }
 variables: {
  cartId: string
  lines: {
   id: string
   merchandiseId: string
   quantity: number
  }[]
 }
}

export type ShopifyCollectionOperation = {
 data: {
  collection: ShopifyCollection
 }
 variables: {
  handle: string
 }
}

export type ShopifyCollectionProductsOperation = {
 data: {
  collection: {
   products: Connection<ShopifyProduct>
  }
 }
 variables: {
  handle: string
  reverse?: boolean
  sortKey?: string
 }
}

export type ShopifyCollectionsOperation = {
 data: {
  collections: Connection<ShopifyCollection>
 }
}

export type ShopifyResource = {
 id: string
 handle: string
 fields?: {
  value: string | string[]
  key: string
 }[]
}

export type MenuItem = {
 id: string
 items?: MenuItem[]
 resourceId: string
 tags?: string[]
 type: string
 resource?: ShopifyResource
 title: string
 url: string
}

export type ShopifyMenu = {
 id: string
 handle: string
 itemsCount: number
 title: string
 items: MenuItem[]
}

export type ShopifyPageOperation = {
 data: { pageByHandle: Page }
 variables: { handle: string }
}

export type ShopifyPagesOperation = {
 data: {
  pages: Connection<Page>
 }
}

export type ShopifyProductOperation = {
 data: { product: ShopifyProduct }
 variables: {
  handle: string
 }
}

export type ShopifyProductRecommendationsOperation = {
 data: {
  productRecommendations: ShopifyProduct[]
 }
 variables: {
  productId: string
 }
}

export type ShopifyProductsOperation = {
 data: {
  products: Connection<ShopifyProduct>
 }
 variables: {
  query?: string
  reverse?: boolean
  sortKey?: string
 }
}

export type PageInfo = {
 endCursor: Maybe<string>
 hasNextPage: boolean
 hasPreviousPage: boolean
 startCursor: Maybe<string>
}

export type QueryResult = {
 pageInfo: PageInfo
 products: ShopifyProduct[]
 collectionInfo?: ShopifyCollection
}

export type Vehicle = {
 make: string
 model: string
 year: number
 doors: number
}

export type Window = {
 a: string
 b: string
 c: string
}

export type FeaturedCollection = {
 products: ShopifyProduct[]
 collectionInfo: ShopifyCollection | undefined
 pageInfo: PageInfo
 seq: string
}

export type SitemapProduct = {
 handle: string
 productType: string
}

export type HandlesPageInfo = {
 endCursor: string
 hasNextPage: boolean
}

export type HandlesNodes = {
 nodes: SitemapProduct[]
}

export type HandlesResponse = {
 nodes: SitemapProduct[]
 pageInfo: HandlesPageInfo
}

export type EyebrowCustom = {
 bgColor: string
 fontColor: string
 text: string
 note: string
}

export const eyebrowCustomDefault = {
 bgColor: '#B40e0e',
 fontColor: '#FFFFFF',
 text: '',
 note: '',
}
