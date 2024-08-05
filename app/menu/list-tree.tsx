import React from 'react'
import Level from './level'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import type { Params } from '../(store)/list/[...slug]/layout'

type Props = {
 params: Params
 mobile?: boolean
}

async function ListTree({ params, mobile }: Props) {
 const menu = await storeApi.getMenu({ handle: 'concise-menu' })
 const menuitem = menu.items[0]
 const subitem = menuitem.items && menuitem.items[0]
 const { items } = menu
 const { slug } = params
 const thisUrl = `/list/${slug[0]}`

 //  console.log('items:', items)

 return (
  <div className='pb-8'>
   <div className=''>
    {items &&
     items.map((item) => (
      <Level
       parent={thisUrl}
       mobile={mobile}
       params={params}
       key={item.id}
       obj={item}
      />
     ))}
   </div>
  </div>
 )
}

export default ListTree
