import React from 'react'
import Level from './level'
import { formatPathname } from '../utils/helpers'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import type { Params } from '../list/[...slug]/layout'

type Props = {
 params: Params
 mobile?: boolean
}

async function ListTree({ params, mobile }: Props) {
 const menu = await storeApi.getMenu({ handle: 'concise-menu' })
 const menuitem = menu.items[0]
 const subitem = menuitem.items && menuitem.items[0]
 const resource = subitem && subitem.resource
 //  console.log('resource:', resource)
 //  console.log('list tree params:', params)
 const { items } = menu
 const { slug } = params
 const title = slug[0] === 'Vinyl-Decal' ? 'Stickers & Decals' : formatPathname(slug[0])
 const thisUrl = `/list/${slug[0]}`

 //  console.log('items:', items)

 return (
  <div>
   {/* <p className='mb-4 px-2 py-2 w-full text-center bg-bg-secondary'>{title}</p> */}
   <div className='md:px-4'>
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
