import productFragment from '../fragments/product'

export const searchQuery = /* GraphQL */ `
 query SearchProducts($first: Int, $query: String!) {
  search(query: $query, types: PRODUCT, first: $first) {
   productFilters {
    type
   }
   edges {
    node {
     ...product
    }
   }
  }
 }
 ${productFragment}
`
