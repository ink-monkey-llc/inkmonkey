import React from 'react'
import { tempCategories } from '../content/temp-categories'
import ListTree from './list-tree'
import type { Params } from '../list/[...slug]/layout'

type Props = {
 params: Params
}

function Sidebar({ params }: Props) {
 return (
  <div className='border-r-2 border-border h-[var(--view-height)] overflow-y-scroll min-w-[250px] sticky top-[96px]'>
   <ul className='flex flex-col gap-2 '>
    <ListTree params={params} />
   </ul>
  </div>
 )
}

export default Sidebar
