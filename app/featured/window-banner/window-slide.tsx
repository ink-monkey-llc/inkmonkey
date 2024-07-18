'use client'
import { ShopifyProduct } from '@/lib/shopify/types'
import Image, { StaticImageData } from 'next/image'

import { RenderSlideProps, isImageFitCover, isImageSlide, useLightboxProps, useLightboxState, Slide, CustomSlide } from 'yet-another-react-lightbox'

type CustomImageData = StaticImageData & { price: string; prod: ShopifyProduct }

function isNextImage(slide: Slide): slide is CustomImageData {
 return isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number'
}

// type CustomSlide = Slide & { price: string; prod: ShopifyProduct }

interface WindowSlideProps {
 slide: CustomSlide
 offset: number
 rect: DOMRectReadOnly
}

function WindowSlide({ slide, offset, rect }: WindowSlideProps) {
 const {
  on: { click },
  carousel: { imageFit },
 } = useLightboxProps()

 const { price, prod } = slide

 const { currentIndex } = useLightboxState()

 const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)

 if (!isNextImage(slide)) return undefined

 const width = !cover ? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width)) : rect.width

 const height = !cover ? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height)) : rect.height

 return (
  <div style={{ position: 'relative', width, height }}>
   <Image
    fill
    alt=''
    src={slide}
    loading='eager'
    draggable={false}
    style={{
     objectFit: cover ? 'cover' : 'contain',
     cursor: click ? 'pointer' : undefined,
    }}
    sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
    onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
   />
   <div className='px-6 pb-2'>
    <p className=' font-light'>{prod.title}</p>
    <p className='font-bold'>From {price}</p>
    <div className='text-green-600 text-xs flex items-center gap-2'>
     <div className='w-[6px] h-[6px] rounded-full  bg-green-600' />
     In stock
    </div>
   </div>
  </div>
 )
}

export default WindowSlide
