import productFragment from '../fragments/product'

export const productByTypeQuery = `
query ProductsByType($query: String, $sortKey: ProductSortKeys = ID, $reverse: Boolean = false) {
  products(first: 25, reverse:$reverse, sortKey:$sortKey query: $query) {
    edges {
      node {
        ...product
      }
    }
  }
}
${productFragment}
`

export const productByHandleQuery = `
query ProductByHandle($handle: String!) {
  productByHandle(handle: $handle) {
    ...product
  }
}
${productFragment}
`
