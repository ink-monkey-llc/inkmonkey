import { useRef, useState } from 'react'
import SliderContent from '@/app/featured/slider-content'
import { ChevronLeftLong, ChevronRightLong } from '@/app/icons/chevron-long'
import React from 'react'
import { useWindowSize } from 'usehooks-ts'
import { ShopifyProduct } from '@/lib/shopify/types'

function RecsCarousel({ products }: { products: ShopifyProduct[] }) {
 const { width } = useWindowSize()
 const isXs = width < 640
 const scrollAmount = width * 0.6
 const [active, setActive] = useState(0)
 const sliderRef = useRef<HTMLDivElement>(null)
 const handleClick = (seq: string, dir: string) => {
  if (dir === 'left') {
   sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }
  if (dir === 'right') {
   sliderRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
 }
 return (
  <div className='relative flex w-full overflow-hidden rounded-md'>
   <div
    onClick={() => handleClick('top', 'left')}
    id='left'
    className='absolute h-32 top-1/2 -translate-y-1/2  items-center flex justify-center bg-backdrop-dark rounded-tr-md rounded-br-md cursor-pointer hover:bg-bg-secondary z-30'>
    <ChevronLeftLong className='w-12 h-12 text-txt-primary' />
   </div>
   <div
    ref={sliderRef}
    className='w-full overflow-x-scroll bg-bg-primary'>
    <SliderContent
     fonz={true}
     products={products}
    />
   </div>
   <div
    onClick={() => handleClick('top', 'right')}
    id='right'
    className='absolute right-0 h-32 top-1/2 -translate-y-1/2  items-center flex justify-center bg-backdrop-dark rounded-tl-md rounded-bl-md cursor-pointer hover:bg-bg-secondary z-30'>
    <ChevronRightLong className='w-12 h-12 text-txt-primary' />
   </div>
  </div>
 )
}

export default RecsCarousel
