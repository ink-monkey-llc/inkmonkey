'use client'
import React, { useRef, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Chevron, { Direction } from '../icons/chevron'
import { ChevronLeftLong, ChevronRightLong } from '../icons/chevron-long'
import SliderContent from './slider-content'
import { ShopifyProduct, ShopifyCollection, PageInfo, FeaturedCollection } from '@/lib/shopify/types'
import { cn } from '../utils/cn'
import Link from 'next/link'

type SliderProps = {
 collections: {
  first: FeaturedCollection
  second: FeaturedCollection
 }[]
 type: string
}

function Slider({ collections, type }: SliderProps) {
 //  console.log('collections:', collections)
 const sliderRef = useRef<HTMLDivElement>(null)
 const nextRef = useRef<HTMLDivElement>(null)
 const { width } = useWindowSize()
 const scrollAmount = width * 0.6
 const [active, setActive] = useState(0)

 const handleClick = (seq: string, dir: string) => {
  if (seq === 'top') {
   if (dir === 'left') {
    sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
   }
   if (dir === 'right') {
    sliderRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
   }
  } else if (seq === 'btm') {
   if (dir === 'left') {
    nextRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
   }
   if (dir === 'right') {
    nextRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
   }
  }
 }

 const firstArr = collections.map((col) => col.first)
 const secondArr = collections.map((col) => col.second)
 const titles = firstArr.map((collection) => collection.collectionInfo?.title)

 const linkPath = ` list/${type === 'decals' ? 'Vinyl-Decal' : type === 'windows' ? 'Truck-Back-Window-Graphics' : ''}/${
  collections[active].first.collectionInfo?.handle
 }`

 return (
  <div className='flex flex-col w-full bg-bg-secondary'>
   <div className='flex justify-center gap-[1px] '>
    {titles.map((title, i) => (
     <div
      key={title}
      className={cn(
       'pb-2 pt-4 px-8 rounded-t-lg cursor-pointer opacity-40 text-accent bg-bg-primary hover:opacity-80 transition-all underline text-lg',
       active === i && 'bg-bg-primary text-accent opacity-100'
      )}
      onClick={() => setActive(i)}>
      {title}
     </div>
    ))}
   </div>
   <div className='flex justify-end bg-bg-primary py-4 pr-4'>
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
   <div className='relative flex flex-col w-full'>
    <div className='relative flex w-full'>
     <div
      onClick={() => handleClick('top', 'left')}
      id='left'
      className='absolute h-[330px] items-center flex justify-center bg-backdrop-dark rounded-tr-md rounded-br-md cursor-pointer hover:bg-bg-secondary z-30'>
      <ChevronLeftLong className='w-24 h-24 -mr-4 -ml-4 text-txt-primary' />
     </div>
     <div
      ref={sliderRef}
      className='w-full  overflow-x-scroll bg-bg-primary'>
      <SliderContent products={firstArr[active].products} />
     </div>
     <div
      onClick={() => handleClick('top', 'right')}
      id='right'
      className='absolute right-0 h-[330px] items-center flex justify-center bg-backdrop-dark rounded-tl-md rounded-bl-md cursor-pointer hover:bg-bg-secondary z-30'>
      <ChevronRightLong className='w-24 h-24 -mr-4 -ml-4 text-txt-primary' />
     </div>
    </div>
    <div className='relative flex w-full pt-3 bg-bg-primary border-t-2 border-accent'>
     <div
      onClick={() => handleClick('btm', 'left')}
      id='left'
      className='absolute h-[330px] items-center flex justify-center bg-backdrop-dark rounded-tr-md rounded-br-md cursor-pointer hover:bg-bg-secondary z-30'>
      <ChevronLeftLong className='w-24 h-24 -mr-4 -ml-4 text-txt-primary' />
     </div>
     <div
      ref={nextRef}
      className='w-full  overflow-x-scroll bg-bg-primary'>
      {secondArr[active].products && <SliderContent products={secondArr[active]?.products} />}
     </div>
     <div
      onClick={() => handleClick('btm', 'right')}
      id='right'
      className='absolute right-0 h-[330px] items-center flex justify-center bg-backdrop-dark rounded-tl-md rounded-bl-md cursor-pointer hover:bg-bg-secondary z-30'>
      <ChevronRightLong className='w-24 h-24 -mr-4 -ml-4 text-txt-primary' />
     </div>
    </div>
   </div>
  </div>
 )
}

export default Slider
