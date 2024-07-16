import exp from 'constants'
import productFragment from '../fragments/product'

export const searchQuery = /* GraphQL */ `
 query SearchProducts($first: Int, $query: String!, $reverse: Boolean = false, $productType: String = "") {
  search(query: $query, types: PRODUCT, first: $first, reverse: $reverse, productFilters: { productType: $productType }) {
   productFilters {
    type
   }
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

export const searchNextQuery = /* GraphQL */ `
 query SearchProducts($first: Int, $cursor: String, $query: String!, $reverse: Boolean = false, $productType: String = "") {
  search(query: $query, types: PRODUCT, after: $cursor, first: $first, reverse: $reverse, productFilters: { productType: $productType }) {
   productFilters {
    type
   }
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

export const searchPrevQuery = /* GraphQL */ `
 query SearchProducts($first: Int, $cursor: String, $query: String!, $reverse: Boolean = false, $productType: String = "") {
  search(query: $query, types: PRODUCT, before: $cursor, first: $first, reverse: $reverse, productFilters: { productType: $productType }) {
   productFilters {
    type
   }
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

export const searchAllQuery = /* GraphQL */ `
 query SearchAllProducts($first: Int, $query: String!, $cursor: String, $reverse: Boolean = false) {
  search(query: $query, after: $cursor, types: PRODUCT, first: $first, reverse: $reverse) {
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
export const searchAllPrevQuery = /* GraphQL */ `
 query SearchAllProducts($first: Int, $cursor: String, $query: String!, $reverse: Boolean = false) {
  search(query: $query, before: $cursor, types: PRODUCT, first: $first, reverse: $reverse) {
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
