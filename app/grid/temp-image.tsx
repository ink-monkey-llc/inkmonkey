'use client'

import React, { startTransition, useState } from 'react'
import Image from 'next/image'
import TempSlider from './temp-slider'

type TempImageProps = {
 image: { src: string; height: number; width: number }
}

function TempImage({ image }: TempImageProps) {
 const [showSlider, setShowSlider] = useState(false)
 const handleMouse = (arg: boolean) => {
  startTransition(() => setShowSlider(arg))
 }
 return (
  <div
   onMouseLeave={() => handleMouse(false)}
   onMouseEnter={() => handleMouse(true)}
   className='relative w-max h-[200px]'>
   <TempSlider showSlider={showSlider} />
   <Image
    className='object-cover'
    style={{
     display: 'auto',
     position: 'absolute',
     minWidth: '200px',
     height: '200px',
     inset: '0',
     opacity: showSlider ? '0' : '1',
     pointerEvents: showSlider ? 'none' : 'auto',
     transition: 'opacity 0.3s',
    }}
    src={image.src}
    alt='temp image'
    width={200}
    height={200}
   />
  </div>
 )
}

export default TempImage
