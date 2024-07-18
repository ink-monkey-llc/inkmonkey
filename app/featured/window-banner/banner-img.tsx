import React, { Suspense } from 'react'
import Image from 'next/image'
import { Image as ImgType } from '@/lib/shopify/types'
import { ShopifyProduct } from '@/lib/shopify/types'
import { formatPrice } from '@/app/utils/helpers'
import Link from 'next/link'

function BannerImg({ prod, ind, active }: { prod: ShopifyProduct; ind: number; active: number }) {
 const amount = Number(prod.priceRange.minVariantPrice.amount)

 return (
  <Link
   style={{ transform: `translateX(${(ind - active) * 100}%)`, transition: 'transform 0.3s' }}
   className='absolute top-0 right-0 bottom-0 p-4'
   href={`/window/${prod.handle}`}>
   <Image
    src={prod.featuredImage.url}
    alt={prod.featuredImage.altText}
    width={500}
    height={500}
   />
   <div className='px-2 pb-2 max-w-[485px]'>
    <p className=' font-light'>{prod.title}</p>
    <p className='font-bold'>From {formatPrice(amount)}</p>
    <div className='text-green-600 text-xs flex items-center gap-2'>
     <div className='w-[6px] h-[6px] rounded-full  bg-green-600' />
     In stock
    </div>
   </div>
  </Link>
 )
}

export default BannerImg
