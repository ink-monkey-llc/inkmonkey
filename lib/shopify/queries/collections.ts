import productFragment from '../fragments/product'

export const nextCollectionByHandleQuery = /* GraphQL */ `
 query MyQuery($handle: String!, $cursor: String, $numProducts: Int!, $sortKey: ProductCollectionSortKeys = ID, $reverse: Boolean = false) {
  collectionByHandle(handle: $handle) {
   description
   handle
   id
   products(first: $numProducts, after: $cursor, reverse: $reverse, sortKey: $sortKey) {
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
 }
 ${productFragment}
`
export const previousCollectionByHandleQuery = /* GraphQL */ `
 query MyQuery($handle: String!, $cursor: String, $numProducts: Int!, $sortKey: ProductCollectionSortKeys = ID, $reverse: Boolean = false) {
  collectionByHandle(handle: $handle) {
   description
   handle
   id
   products(last: $numProducts, before: $cursor, reverse: $reverse, sortKey: $sortKey) {
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
 }
 ${productFragment}
`
export const nextCollectionByIdQuery = /* GraphQL */ `
 query MyQuery($id: ID!, $cursor: String, $numProducts: Int!, $sortKey: ProductCollectionSortKeys = ID, $reverse: Boolean = false) {
  collection(id: $id) {
   description
   handle
   id
   products(first: $numProducts, after: $cursor, reverse: $reverse, sortKey: $sortKey) {
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
 }
 ${productFragment}
`

export const previousCollectionByIdQuery = /* GraphQL */ `
 query MyQuery($id: ID!, $cursor: String, $numProducts: Int!, $sortKey: ProductCollectionSortKeys = ID, $reverse: Boolean = false) {
  collection(id: $id) {
   description
   handle
   id
   products(last: $numProducts, before: $cursor, reverse: $reverse, sortKey: $sortKey) {
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
 }
 ${productFragment}
`
export const collectionHandleByIdQuery = /* GraphQL */ `
 query CollectionHandleById($id: ID!) {
  collection(id: $id) {
   handle
  }
 }
`
