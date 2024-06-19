import React from 'react'
import Image from 'next/image'

type TempImageProps = {
 image: { src: string; height: number; width: number }
}

function TempImage({ image }: TempImageProps) {
 return (
  <Image
   className='object-cover'
   style={{
    display: 'auto',
    position: 'absolute',
    minWidth: '200px',
    height: '200px',
    inset: '0',
   }}
   src={image.src}
   alt='temp image'
   width={200}
   height={200}
  />
 )
}

export default TempImage
