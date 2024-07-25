import React, { useState } from 'react'
import ComSlide from './com-slide'
import { cn } from '@/app/utils/cn'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import imgs from '../../content/commercial-imgs'
import Chevron, { Direction } from '@/app/icons/chevron'

const items = imgs.map((img) => {
 const imgData = { id: img.id, src: img.src, alt: img.alt }
 return <ComSlide img={imgData} />
})

const CarouselBtn = ({ direction, handleClick }: { direction: 'left' | 'right'; handleClick: (arg: 'left' | 'right') => void }) => {
 return (
  <div
   onClick={() => handleClick(direction)}
   className={cn(
    'absolute top-1/2 transform -translate-y-1/2 cursor-pointer w-12 h-12 rounded-full text-bg-primary text-center bg-txt-primary text-3xl flex items-center justify-center opacity-60 hover:opacity-100 z-20',
    direction === 'left' ? 'left-4' : 'right-4'
   )}>
   <Chevron
    className='w-8 h-8'
    direction={direction === 'left' ? Direction.Left : Direction.Right}
   />
  </div>
 )
}

function ComCarousel() {
 const [mainIndex, setMainIndex] = useState(0)
 const handleClick = (dir: 'left' | 'right') => {
  if (dir === 'left') {
   if (mainIndex === 0) {
    return
   }
   setMainIndex(mainIndex - 1)
  }
  if (dir === 'right') {
   if (mainIndex === items.length - 1) {
    return
   }
   setMainIndex(mainIndex + 1)
  }
 }
 return (
  <>
   <AliceCarousel
    activeIndex={mainIndex}
    animationEasingFunction='cubic-bezier(0.45, 0, 0.55, 1)'
    animationDuration={2000}
    autoPlayInterval={4000}
    infinite
    disableButtonsControls
    disableSlideInfo
    disableDotsControls
    autoPlay
    items={items}
   />
   <CarouselBtn
    handleClick={handleClick}
    direction='left'
   />
   <CarouselBtn
    handleClick={handleClick}
    direction='right'
   />
  </>
 )
}

export default ComCarousel
