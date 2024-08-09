import imageFragment from './image'
import seoFragment from './seo'

const productFragment = /* GraphQL */ `
 fragment product on Product {
  id
  collections(first: 10) {
   nodes {
    handle
   }
  }
  handle
  availableForSale
  title
  description
  descriptionHtml
  options {
   id
   name
   values
  }
  productType
  priceRange {
   maxVariantPrice {
    amount
    currencyCode
   }
   minVariantPrice {
    amount
    currencyCode
   }
  }
  variants(first: 80) {
   edges {
    node {
     id
     title
     availableForSale
     selectedOptions {
      name
      value
     }
     price {
      amount
      currencyCode
     }
    }
   }
  }
  featuredImage {
   ...image
  }
  images(first: 20) {
   edges {
    node {
     ...image
    }
   }
  }
  seo {
   ...seo
  }
  tags
  updatedAt
 }
 ${imageFragment}
 ${seoFragment}
`

export default productFragment
