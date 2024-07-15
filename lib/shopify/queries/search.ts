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
  }
 }
 ${productFragment}
`
