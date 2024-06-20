import productFragment from '../fragments/product'

export const nextProductByTypeQuery = /* GraphQL */ `
 query ProductsByType($query: String, $cursor: String, $numProducts: Int!, $sortKey: ProductSortKeys = ID, $reverse: Boolean = false) {
  products(first: $numProducts, after: $cursor, reverse: $reverse, sortKey: $sortKey, query: $query) {
   edges {
    node {
     ...product
    }
   }
   pageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
   }
  }
 }
 ${productFragment}
`

export const previousProductByTypeQuery = /* GraphQL */ `
 query ProductsByType($query: String, $cursor: String, $numProducts: Int!, $sortKey: ProductSortKeys = ID, $reverse: Boolean = false) {
  products(last: $numProducts, before: $cursor, reverse: $reverse, sortKey: $sortKey, query: $query) {
   edges {
    node {
     ...product
    }
   }
   pageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
   }
  }
 }
 ${productFragment}
`

export const productByHandleQuery = /* GraphQL */ `
 query ProductByHandle($handle: String!) {
  productByHandle(handle: $handle) {
   ...product
  }
 }
 ${productFragment}
`
