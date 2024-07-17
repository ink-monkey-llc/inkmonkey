'use client'
import React, { useRef, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Chevron, { Direction } from '../icons/chevron'
import SliderContent from './slider-content'
import { ShopifyProduct, ShopifyCollection } from '@/lib/shopify/types'
import { cn } from '../utils/cn'
import Link from 'next/link'

type SliderProps = {
 collections: {
  products: ShopifyProduct[]
  collectionInfo: ShopifyCollection | undefined
 }[]
 type: string
}

function Slider({ collections, type }: SliderProps) {
 const sliderRef = useRef<HTMLDivElement>(null)
 const { width } = useWindowSize()
 const scrollAmount = width * 0.6
 const [active, setActive] = useState(0)

 const titles = collections.map((collection) => collection.collectionInfo?.title)

 const handleClick = (dir: string) => {
  if (dir === 'left') {
   sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }
  if (dir === 'right') {
   sliderRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
 }

 const linkPath = ` list/${type === 'decals' ? 'Vinyl-Decal' : type === 'windows' ? 'Truck-Back-Window-Graphics' : ''}/${
  collections[active].collectionInfo?.handle
 }`

 return (
  <div className='flex flex-col w-full bg-bg-secondary'>
   <div className='flex justify-start gap-[1px] '>
    {titles.map((title, i) => (
     <div
      key={title}
      className={cn(
       'pb-1 pt-2 px-8 rounded-t-lg cursor-pointer opacity-50 text-txt-secondary bg-bg-primary hover:opacity-80 transition-all',
       active === i && 'bg-bg-primary text-txt-primary opacity-100'
      )}
      onClick={() => setActive(i)}>
      {title}
     </div>
    ))}
   </div>
   <div className='flex justify-end bg-bg-primary pt-4 pr-4'>
    <Link
     className='bg-bg-primary w-max text-sm text-accent hover:text-accent-bright underline flex items-center'
     href={linkPath}>
     All {titles[active]}
     <Chevron
      direction={Direction.Right}
      className='w-4 h-4 '
     />
    </Link>
   </div>
   <div className='relative flex w-full'>
    <button
     onClick={() => handleClick('left')}
     id='left'
     className='absolute h-full bottom-0 p-2 left-0 z-20 flex items-center'>
     <Chevron className='w-16 h-24 text-accent bg-bg-secondary rounded-xl p-2 cursor-pointer opacity-70 hover:opacity-100 transition-all' />
    </button>
    <div
     ref={sliderRef}
     className='w-full  overflow-x-scroll bg-bg-primary'>
     <SliderContent products={collections[active].products} />
    </div>
    <button
     onClick={() => handleClick('right')}
     id='right'
     className='absolute h-full bottom-0 right-0 p-2 flex items-center'>
     <Chevron
      className='w-16 h-24 text-accent bg-bg-secondary rounded-xl p-2 cursor-pointer  opacity-70 hover:opacity-100 transition-all'
      direction={Direction.Right}
     />
    </button>
   </div>
  </div>
 )
}

export default Slider
