import React from 'react'
import { tempCategories } from '../content/temp-categories'
import ListTree from './list-tree'
import type { Params } from '../list/[...slug]/layout'
import { formatPathname } from '../utils/helpers'

type Props = {
 params: Params
}

function Sidebar({ params }: Props) {
 const { slug } = params
 const title = slug[0] === 'Vinyl-Decal' ? 'Stickers & Decals' : slug[0] === 'all' ? 'All Products' : formatPathname(slug[0])

 //  console.log('sidebar params:', params)
 return (
  <div>
   <p className=' px-2 py-2 w-full text-center bg-bg-secondary mb-1 text-sm md:text-base'>{title}</p>
   <div className='border-r-2 border-border h-[var(--view-height)] overflow-y-scroll max-w-[150px] md:min-w-[250px] sticky top-[96px]'>
    <ul className='flex flex-col gap-2  '>
     <ListTree params={params} />
    </ul>
   </div>
  </div>
 )
}

export default Sidebar
