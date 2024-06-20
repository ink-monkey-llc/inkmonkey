import React from 'react'
import { tempCategories } from '../content/temp-categories'
import ListTree from './list-tree'
import type { Params } from '../product/[slug]/layout'

type Props = {
 params: Params
}

function Sidebar({ params }: Props) {
 return (
  <div className='px-4 border-r-2 border-border max-h-[var(--view-height)] overflow-y-scroll min-w-56'>
   <ul className='flex flex-col gap-2 py-4'>
    <ListTree productType={params} />
   </ul>
  </div>
 )
}

export default Sidebar
