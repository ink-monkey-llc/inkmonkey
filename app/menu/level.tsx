import React from 'react'
import { cn } from '../utils/cn'
import type { MenuItem } from '@/lib/shopify/types'
import { storeApi } from '@/lib/shopify/storefront-api'
import Chevron from '../icons/chevron'
import Link from 'next/link'
import { Direction } from '../icons/chevron'
import { Params } from '../product/[...slug]/layout'

type Props = {
 obj: MenuItem
 params: Params
 parent?: string
}

async function Level({ obj, params, parent }: Props) {
 const { slug } = params
 const handle = obj.resource?.handle

 const isUnfolded = handle && slug.includes(handle)
 const isMetaObject = obj.type === 'METAOBJECT'
 const isCollection = obj.type === 'COLLECTION'

 const collectionHandle = async () => {
  if (isMetaObject && !!obj.resource) {
   const id = obj.resource?.fields?.find((field) => field.key === 'top_level_collection')?.value
   const result = await storeApi.getCollectionHandleById({ id: id as string })
   const handle = result?.collection?.handle
   //  console.log('handle:', await handle, 'id:', id, 'obj:', handle === 'military' && obj)
   return handle
  }
 }

 const newUrl = isCollection ? `${parent}/${obj.resource?.handle}` : isMetaObject ? `${parent}/${obj.resource?.handle}` : '/'

 const dir = {
  r: Direction.Right,
  l: Direction.Left,
  u: Direction.Up,
  d: Direction.Down,
 }

 return (
  <div className='pl-2'>
   <Link
    className={cn('flex items-center text-sm', isUnfolded && 'text-accent')}
    href={parent && isUnfolded ? parent : newUrl}>
    {obj.items ? (
     <Chevron
      className='w-4 h-4 mr-1'
      direction={isUnfolded ? dir.d : dir.r}
     />
    ) : (
     <div className='w-4 h-4 mr-1'></div>
    )}
    {obj.title}
   </Link>
   {obj.items &&
    isUnfolded &&
    obj.items.map((item) => (
     <Level
      parent={newUrl}
      params={params}
      key={item.id}
      obj={item}
     />
    ))}
  </div>
 )
}

export default Level
