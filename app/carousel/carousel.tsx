'use client'
import React from 'react'
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import CarouselImage from './carousel-image'
import { images } from '@/lib/carousel-imgs'
import { url } from 'inspector'

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
 <AliceCarousel
  animationEasingFunction='cubic-bezier(0.45, 0, 0.55, 1)'
  animationDuration={5000}
  responsive={{ 0: { items: 2 }, 768: { items: 5 }, 1024: { items: 5 }, 1440: { items: 7 } }}
  infinite
  disableButtonsControls
  disableSlideInfo
  disableDotsControls
  autoPlay
  items={items}
 />
)
export default Carousel
