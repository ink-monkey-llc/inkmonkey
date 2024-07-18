'use client'
import React, { useState } from 'react'
import { ShopifyCollection, ShopifyProduct } from '@/lib/shopify/types'
import { ChevronLeftLong, ChevronRightLong } from '@/app/icons/chevron-long'
import { windowCopy } from '@/app/content/window-copy'
import BannerImg from './banner-img'
import { cn } from '@/app/utils/cn'
import { smooch } from '@/lib/fonts'

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

 return (
  <div className='flex justify-center gap-8 m-auto'>
   <div className='w-1/3 flex flex-col gap-4 mt-4 items-start justify-start'>
    <h2 className={cn('text-6xl text-accent', smooch.className)}> Truck Back Window Graphics</h2>
    <p>{windowCopy}</p>
   </div>
   <div className='flex justify-center items-center '>
    <div
     className='h-full items-center flex'
     onClick={handlePrev}>
     <ChevronLeftLong className='w-24 h-24' />
    </div>
    <div className='flex justify-center items-center p-4 rounded-md bg-black border-2 border-black hover:border-accent transition-all overflow-hidden relative w-[500px] h-[600px]'>
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
     className='h-full items-center flex'
     onClick={handleNext}>
     <ChevronRightLong className='w-24 h-24' />
    </div>
   </div>
  </div>
 )
}

export default BannerContent
