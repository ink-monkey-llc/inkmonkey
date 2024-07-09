'use client'
import React from 'react'
import Chevron from '../icons/chevron'
import SimpleImageSlider from 'react-simple-image-slider'
import { FeatImageData } from './product-card-image'
import { url } from 'inspector'
// import { tempImgData } from '../content/temp-img-data'

function ImageSlider({ showSlider, images }: { showSlider: boolean; images: string[] }) {
 const imageArr = images.map((img) => ({ url: img }))
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
