'use client'
import React from 'react'
import { useWindowSize } from 'usehooks-ts'
import SimpleImageSlider from 'react-simple-image-slider'

function ImageSlider({ showSlider, images }: { showSlider: boolean; images: string[] }) {
 const imageArr = images.map((img) => ({ url: img }))
 const { width } = useWindowSize()
 const isXs = width < 640
 return (
  <SimpleImageSlider
   style={{
    position: 'absolute',
    width: '200px',
    height: '200px',
    left: 0,
    top: 0,
    opacity: showSlider ? '1' : '0',
    transition: 'opacity 0.3s',
    pointerEvents: showSlider ? 'auto' : 'none',
   }}
   width={200}
   height={200}
   images={imageArr}
   navStyle={2}
   navMargin={2}
   startIndex={1}
   showBullets
   showNavs
  />
 )
}

export default ImageSlider
