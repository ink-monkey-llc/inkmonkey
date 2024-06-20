export const menuItemFragment = /* GraphQL */ `
 fragment menuItem on MenuItem {
  id
  items {
   ...menuItem
  }
  title
  url
  resourceId
  tags
  type
  resource {
   ... on Collection {
    id
    handle
   }
   ... on Metaobject {
    id
    handle
    fields {
     value
     key
    }
   }
  }
 }
`
