'use client'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import CarouselImage from './carousel-image'
import { images } from '@/lib/carousel-imgs'
import { smooch } from '@/lib/fonts'
import { cn } from '../utils/cn'

const items = images.map((img) => {
 const width = 500
 const height = 500
 const imgData = { src: img.src, alt: img.alt, width, height, title: img.title, url: img.url }
 return (
  <CarouselImage
   key={img.alt}
   img={imgData}
  />
 )
})

const Carousel = () => (
 <div className='w-full border-t-8 border-accent-tr bg-bg-primary py-8'>
  <h2 className={cn(smooch.className, 'pl-8 text-4xl md:text-6xl tracking-wide text-accent pb-2 ')}>Tons of Unique Themes:</h2>
  <AliceCarousel
   animationEasingFunction='cubic-bezier(0.45, 0, 0.55, 1)'
   animationDuration={5000}
   responsive={{ 0: { items: 2 }, 768: { items: 4 }, 1024: { items: 5 }, 1440: { items: 7 } }}
   infinite
   disableButtonsControls
   disableSlideInfo
   disableDotsControls
   autoPlay
   items={items}
  />
 </div>
)
export default Carousel
