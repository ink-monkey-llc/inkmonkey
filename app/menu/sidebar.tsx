import React from 'react'
import { cn } from '../../utils/cn'
import ListTree from './list-tree'
import type { Params } from '../(storefront)/(store)/list/[...slug]/layout'
import { formatPathname } from '../../utils/helpers'
import MobileProdSel from './mobile-sidebar/mobile-prod-sel'

type Props = {
 params: Params
 mobile?: boolean
}

function Sidebar({ params, mobile }: Props) {
 const { slug } = params
 const title = slug[0] === 'Vinyl-Decal' ? 'Stickers & Decals' : slug[0] === 'all' ? 'All Products' : formatPathname(slug[0])

 return (
  <div className={cn('hidden sm:block relative', mobile && 'block sm:hidden')}>
   {mobile && <MobileProdSel />}
   <div
    className={cn(
     'border-r-2 border-border h-[var(--sidebar-sm-height)] md:h-[var(--view-height)] overflow-y-scroll min-w-[200px] md:min-w-[250px] sticky top-[130px] md:top-[96px]',
     mobile && 'h-[var(--mobile-drawer-height)]'
    )}>
    {!mobile && <p className='px-2 py-2 w-full text-center bg-bg-secondary mb-1 text-sm md:text-base '>{title}</p>}
    <ul className='flex flex-col gap-2 items-start '>
     <ListTree
      mobile={mobile}
      params={params}
     />
    </ul>
   </div>
  </div>
 )
}

export default Sidebar
