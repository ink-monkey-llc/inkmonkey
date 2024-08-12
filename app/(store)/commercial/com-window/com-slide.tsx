import React from 'react'
import type { ComImgData } from '@/app/content/commercial-imgs'
import Image from 'next/image'
function ComSlide({ img }: { img: ComImgData }) {
 return (
  <div className='w-[49vw] max-h-[var(--view-height)] overflow-hidden flex items-center '>
   <Image
    className='object-cover w-full object-bottom'
    src={img.src}
    alt={img.alt}
   />
  </div>
 )
}

export default ComSlide
