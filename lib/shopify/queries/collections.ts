import productFragment from '../fragments/product'

export const fullCollectionByHandleQuery = /* GraphQL */ `
 query MyQuery($handle: String!, $cursor: String, $numProducts: Int!, $sortKey: ProductCollectionSortKeys = ID, $reverse: Boolean = false) {
  collectionByHandle(handle: $handle) {
   handle
   title
   updatedAt
   description
   seo {
    description
    title
   }
   image {
    altText
    height
    url
    width
   }
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
export const prevFullCollectionByHandleQuery = /* GraphQL */ `
 query MyQuery($handle: String!, $cursor: String, $numProducts: Int!, $sortKey: ProductCollectionSortKeys = ID, $reverse: Boolean = false) {
  collectionByHandle(handle: $handle) {
   handle
   title
   updatedAt
   description
   seo {
    description
    title
   }
   image {
    altText
    height
    url
    width
   }
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

export const nextCollectionByHandleQuery = /* GraphQL */ `
 query MyQuery(
  $handle: String!
  $cursor: String
  $numProducts: Int!
  $sortKey: ProductCollectionSortKeys = ID
  $reverse: Boolean = false
  $productType: String
 ) {
  collection(handle: $handle) {
   handle
   id
   title
   updatedAt
   seo {
    description
    title
   }
   image {
    altText
    height
    url
    width
   }
   products(first: $numProducts, after: $cursor, reverse: $reverse, sortKey: $sortKey, filters: { productType: $productType }) {
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
 query MyQuery(
  $handle: String!
  $cursor: String
  $numProducts: Int!
  $sortKey: ProductCollectionSortKeys = ID
  $reverse: Boolean = false
  $productType: String
 ) {
  collection(handle: $handle) {
   handle
   id
   title
   updatedAt
   seo {
    description
    title
   }
   image {
    altText
    height
    url
    width
   }
   products(last: $numProducts, before: $cursor, reverse: $reverse, sortKey: $sortKey, filters: { productType: $productType }) {
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

// export const previousCollectionByHandleQuery = /* GraphQL */ `
//  query MyQuery(
//   $handle: String!
//   $cursor: String
//   $numProducts: Int!
//   $sortKey: ProductCollectionSortKeys = ID
//   $reverse: Boolean = false
//   $productType: String
//  ) {
//   collectionByHandle(handle: $handle) {
//    handle
//    title
//    description
//    updatedAt
//    seo {
//     description
//     title
//    }
//    image {
//     altText
//     height
//     url
//     width
//    }
//    id
//    products(last: $numProducts, before: $cursor, reverse: $reverse, sortKey: $sortKey, filters: { productType: $productType }) {
//     edges {
//      node {
//       ...product
//      }
//     }
//     pageInfo {
//      endCursor
//      hasNextPage
//      hasPreviousPage
//      startCursor
//     }
//    }
//   }
//  }
//  ${productFragment}
// `
export const nextCollectionByIdQuery = /* GraphQL */ `
 query MyQuery($id: ID!, $cursor: String, $numProducts: Int!, $sortKey: ProductCollectionSortKeys = ID, $reverse: Boolean = false) {
  collection(id: $id) {
   description
   handle
   title
   description
   updatedAt
   seo {
    description
    title
   }
   image {
    altText
    height
    url
    width
   }
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
   title
   description
   updatedAt
   seo {
    description
    title
   }
   image {
    altText
    height
    url
    width
   }
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
