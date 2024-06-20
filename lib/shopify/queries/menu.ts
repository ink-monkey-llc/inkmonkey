import { menuItemFragment } from '../fragments/menu-item'

export const menuQuery = /* GraphQL */ `
 query MenuQuery($handle: String!) {
  menu(handle: $handle) {
   id
   itemsCount
   title
   handle
   items {
    id
    items {
     id
     items {
      id
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
  }
 }
`
