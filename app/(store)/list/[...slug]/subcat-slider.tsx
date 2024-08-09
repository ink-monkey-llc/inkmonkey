'use client'
import Chevron, { Direction } from '@/app/icons/chevron'
import { MenuItem } from '@/lib/shopify/types'
import { usePathname, useParams } from 'next/navigation'
import React, { useRef } from 'react'
import Link from 'next/link'

function SubcatSlider({ subitems }: { subitems: MenuItem[] | undefined }) {
 const pathname = usePathname()
 const params = useParams()
 const { slug } = params
 const ref = useRef<HTMLDivElement>(null)
 console.log('params:', params, 'pathname:', pathname)

 const handleClick = (dir: 'left' | 'right') => {
  // console.log('ref:', ref)
  const scrollAmount = ref.current && ref.current?.offsetWidth / 2
  const negScrollAmount = ref.current && (ref.current?.offsetWidth / 2) * -1
  // console.log('scrollAmount:', scrollAmount, 'negScrollAmount:', negScrollAmount)
  if (dir === 'right') {
   ref.current?.scrollBy({ left: scrollAmount ?? 0, behavior: 'smooth' })
  }
  if (dir === 'left') {
   ref.current?.scrollBy({ left: negScrollAmount ?? 0, behavior: 'smooth' })
  }
 }

 const url = `/list/${slug[0]}/${slug[1]}/${slug[2]}`

 return (
  <div className='relative w-full flex'>
   <div
    id='left'
    onClick={() => handleClick('left')}
    className='h-12 flex items-center justify-center cursor-pointer bg-bg-secondary z-40'>
    <Chevron
     direction={Direction.Left}
     className='w-6 h-6 text-txt-primary'
    />
   </div>
   <div
    ref={ref}
    style={{ scrollbarColor: '#1a1a1a transparent' }}
    className='flex w-full relative gap-2 overflow-x-scroll '>
    <div className='flex gap-2 w-full z-10 '>
     {subitems?.map((item) => {
      // console.log('item:', item, 'fields:', item.resource?.fields)
      return (
       <Link
        className='flex items-center'
        key={item.id}
        href={`${url}/${item.resource?.handle}`}>
        <div
         className='w-max text-nowrap px-3 py-1 rounded-full bg-accent font-bold text-bg-primary'
         key={item.id}>
         {item.title}
        </div>
       </Link>
      )
     })}
    </div>
   </div>
   <div
    id='right'
    onClick={() => handleClick('right')}
    className=' h-12 flex items-center justify-center cursor-pointer  bg-bg-secondary z-40'>
    <Chevron
     direction={Direction.Right}
     className='w-6 h-6 text-txt-primary'
    />
   </div>
  </div>
 )
}

export default SubcatSlider
