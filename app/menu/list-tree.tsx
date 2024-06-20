import React from 'react'
import Level from './level'
import { formatPathname } from '../utils/helpers'
import { storeApi } from '@/lib/shopify/storefront-api'
import type { Params } from '../product/[slug]/layout'

type Props = {
 productType: Params
}

async function ListTree({ productType }: Props) {
 const menu = await storeApi.getMenu({ handle: 'concise-menu' })
 const { items } = menu
 const { slug } = productType
 console.log('menu items:', menu.items)
 const title = slug === 'Vinyl-Decal' ? 'Stickers & Decals' : formatPathname(slug)
 return (
  <div>
   <p>{title}</p>
   {items &&
    items.map((item) => (
     <Level
      key={item.id}
      obj={item}
     />
    ))}
  </div>
 )
}

export default ListTree
