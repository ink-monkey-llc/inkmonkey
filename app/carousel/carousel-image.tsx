import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { cn } from '../../utils/cn'
import { smooch } from '@/lib/fonts'

type CarouselImage = {
 src: StaticImageData
 alt: string
 width: number
 height: number
 title: string
 url: string
}

function CarouselImage({ img }: { img: CarouselImage }) {
 const [hover, setHover] = useState(false)

 const isEntertain = img.alt === 'entertain'

 return (
  <Link
   href={img.url}
   className={cn('relative')}
   onMouseEnter={() => setHover(true)}
   onMouseLeave={() => setHover(false)}>
   <Image
    className='p-2'
    key={img.alt}
    src={img.src}
    alt={img.alt ?? 'Carousel Image'}
    width={img.width}
    height={img.height}
   />
   <div
    className={cn(
     'absolute w-full h-full inset-0 bg-backdrop flex items-center border-2 border-accent-tr rounded-md',
     hover && 'card-show',
     !hover && 'card-hide'
    )}>
    <h2 className={cn('text-xl w-full leading-tight sm:text-5xl text-center text-accent-bright text-wrap', smooch.className, isEntertain && 'text-base')}>
     {img.title}
    </h2>
   </div>
  </Link>
 )
}

export default CarouselImage
