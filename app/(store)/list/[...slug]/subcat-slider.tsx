'use client'
import Chevron, { Direction } from '@/app/icons/chevron'
import { MenuItem } from '@/lib/shopify/types'
import React from 'react'
import Link from 'next/link'

function SubcatSlider({ subitems }: { subitems: MenuItem[] | undefined }) {
 return (
  <div className='relative'>
   <div className='absolute h-8 flex items-center justify-center top-0 left-0 bg-bg-tertiary z-40'>
    <Chevron
     direction={Direction.Left}
     className='w-6 h-6 text-txt-primary'
    />
   </div>
   <div className='flex relative gap-2 overflow-x-scroll '>
    <div className='flex gap-2 w-full pl-8 pr-12 z-10 '>
     {subitems?.map((item) => (
      <Link
       key={item.id}
       href={item.url}>
       <div
        className='w-max text-nowrap px-3 py-1 rounded-full bg-accent font-bold text-bg-primary'
        key={item.id}>
        {item.title}
       </div>
      </Link>
     ))}
    </div>
   </div>
   <div className='absolute h-8 flex items-center justify-center top-0 right-0 bg-bg-tertiary z-40'>
    <Chevron
     direction={Direction.Right}
     className='w-6 h-6 text-txt-primary'
    />
   </div>
  </div>
 )
}

export default SubcatSlider
