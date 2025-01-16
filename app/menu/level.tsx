import React from 'react'
import { cn } from '../../utils/cn'
import type { MenuItem } from '@/lib/shopify/types'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import Chevron from '../icons/chevron'
import Link from 'next/link'
import { Direction } from '../icons/chevron'
import { Params } from '../(storefront)/(store)/list/[...slug]/layout'

type Props = {
  obj: MenuItem
  params: Params
  parent?: string
  mobile?: boolean
}

async function Level({ obj, params, parent, mobile }: Props) {
  const { slug } = params
  const handle = obj.resource?.handle

  const isUnfolded = handle && slug.includes(handle)
  const isMetaObject = obj.type === 'METAOBJECT'
  const isCollection = obj.type === 'COLLECTION'
  const isCurrent = handle && slug[slug.length - 1] === handle


  const newUrl = isCollection ? `${parent}/${obj.resource?.handle}` : isMetaObject ? `${parent}/${obj.resource?.handle}` : '/'

  const dir = {
    r: Direction.Right,
    l: Direction.Left,
    u: Direction.Up,
    d: Direction.Down,
  }

  return (
    <div className='pl-4'>
      <Link
        className={cn('flex items-center rounded-md px-1 hover:bg-bg-secondary', isUnfolded && 'text-accent', isCurrent && 'bg-bg-secondary', mobile && 'text-lg')}
        href={newUrl}>
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
            mobile={mobile}
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
