export const menuQuery = /* GraphQL */ `
 query MenuQuery($handle: String!) {
  menu(handle: $handle) {
   id
   itemsCount
   title
   items {
    id
    title
    url
    resourceId
    items {
     id
     items {
      items {
       items {
        id
        resourceId
        tags
        type
        url
        title
       }
       id
       resourceId
       tags
       title
       type
       url
      }
      id
      resourceId
      tags
      title
      type
      url
     }
     resourceId
     tags
     title
     type
     url
    }
    tags
    type
   }
  }
 }
`
