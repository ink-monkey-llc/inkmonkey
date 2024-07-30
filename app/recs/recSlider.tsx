'use client'
import React, { useRef, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Chevron, { Direction } from '../icons/chevron'
import SliderContent from '@/app/featured/slider-content'
import { ShopifyProduct } from '@/lib/shopify/types'

type SliderProps = {
 products: ShopifyProduct[]
}

function RecSlider({ products }: SliderProps) {
 const sliderRef = useRef<HTMLDivElement>(null)
 const { width } = useWindowSize()
 const scrollAmount = width * 0.6
 const [active, setActive] = useState(0)

 //  const titles = collections.map((collection) => collection.collectionInfo?.title)

 const handleClick = (dir: string) => {
  if (dir === 'left') {
   sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }
  if (dir === 'right') {
   sliderRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
 }

 return (
  <div className='flex flex-col w-full  bg-bg-secondary'>
   <div className='relative flex w-full '>
    <button
     onClick={() => handleClick('left')}
     id='left'
     className='absolute h-full bottom-0 p-2 left-0 z-20 flex items-center'>
     <Chevron className='w-16 h-24 text-accent bg-bg-secondary rounded-xl p-2 cursor-pointer opacity-70 hover:opacity-100 transition-all' />
    </button>
    <div
     ref={sliderRef}
     className='w-full  overflow-x-scroll bg-bg-primary pt-4'>
     <SliderContent products={products} />
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

export default RecSlider
