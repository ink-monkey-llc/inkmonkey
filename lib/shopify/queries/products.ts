import productFragment from '../fragments/product'

export const nextAllProductsQuery = /* GraphQL */ `
 query NextAllProducts($cursor: String, $numProducts: Int!, $reverse: Boolean = false, $sortKey: ProductSortKeys = ID) {
  products(after: $cursor, first: $numProducts, reverse: $reverse, sortKey: $sortKey) {
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
export const previousAllProductsQuery = /* GraphQL */ `
 query PreviousAllProducts($cursor: String, $numProducts: Int!, $reverse: Boolean = false, $sortKey: ProductSortKeys = ID) {
  products(before: $cursor, last: $numProducts, reverse: $reverse, sortKey: $sortKey) {
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
export const productCursorsQuery = /* GraphQL */ `
 query ProductsCursors($query: String) {
  products(first: 240, query: $query) {
   edges {
    cursor
    node {
     handle
     id
     productType
    }
   }
  }
 }
`
export const variantByOptionsQuery = /* GraphQL */ `
 query VariantBySelectedOptions($handle: String, $selectedOptions: [SelectedOptionInput!]!) {
  product(handle: $handle) {
   variantBySelectedOptions(selectedOptions: $selectedOptions) {
    id
    price {
     amount
    }
   }
  }
 }
`
export const variantByIdQuery = /* GraphQL */ `
 query VariantById($id: ID!) {
  node(id: $id) {
   ... on ProductVariant {
    id
    selectedOptions {
     name
     value
    }
    title
    price {
     amount
    }
    product {
     handle
     title
     id
    }
   }
  }
 }
`
