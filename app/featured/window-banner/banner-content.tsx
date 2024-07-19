'use client'
import React, { useState } from 'react'
import { ShopifyCollection, ShopifyProduct } from '@/lib/shopify/types'
import { ChevronLeftLong, ChevronRightLong } from '@/app/icons/chevron-long'
import { windowCopy } from '@/app/content/window-copy'
import BannerImg from './banner-img'
import { cn } from '@/app/utils/cn'
import { smooch } from '@/lib/fonts'
import CtaButton from '../cta-button'

function BannerContent({ products }: { collectionInfo: ShopifyCollection | undefined; products: ShopifyProduct[] }) {
 const [active, setActive] = useState(0)
 const prod = products[active]

 const handleNext = () => {
  if (active + 1 === products.length) {
   return
  }
  setActive(active + 1)
 }

 const handlePrev = () => {
  if (active - 1 < 0) {
   return
  }
  setActive(active - 1)
 }

 const noPrev = active === 0
 const noNext = active === products.length - 1

 return (
  <div className='flex justify-center gap-8 m-auto'>
   <div className='w-1/3 flex flex-col gap-4 mt-4 items-start justify-start'>
    <h2 className={cn('text-6xl text-accent', smooch.className)}> Truck Back Window Graphics</h2>
    <p>{windowCopy}</p>
    <ul className='list-disc pl-4 text-txt-secondary'>
     <li>High Quality Perforated Vinyl</li>
     <li>OEM Eco-Solvent Ink</li>
     <li>Durable and Long Lasting</li>
     <li>Step by Step Installation Instructions</li>
     <li>{`You can see out, but they can't see in`}</li>
    </ul>
    <CtaButton
     className='mt-4'
     href='/list/Truck-Back-Window-Graphics'
    />
   </div>
   <div className='flex justify-center items-center '>
    <div
     className={cn(
      'h-full items-center flex backdrop-blur-sm bg-backdrop rounded-tl-md rounded-bl-md cursor-pointer hover:bg-bg-secondary',
      noPrev && 'opacity-30'
     )}
     onClick={handlePrev}>
     <ChevronLeftLong className='w-24 h-24 -mr-6 -ml-6' />
    </div>
    <div className='z-20 flex justify-center items-center p-4 rounded-md bg-black border-2 border-black hover:border-accent transition-all overflow-hidden relative w-[500px] h-[600px]'>
     {products.map((product, i) => (
      <BannerImg
       active={active}
       ind={i}
       key={product.id}
       prod={product}
      />
     ))}
    </div>
    <div
     className={cn(
      'h-full items-center flex  backdrop-blur-sm bg-backdrop rounded-tr-md rounded-br-md cursor-pointer hover:bg-bg-secondary',
      noNext && 'opacity-30'
     )}
     onClick={handleNext}>
     <ChevronRightLong className='w-24 h-24 -ml-6 -mr-6' />
    </div>
   </div>
  </div>
 )
}

export default BannerContent
