import React from 'react'
import Image from 'next/image'
import { cn } from '../../../../utils/cn'
import { smooch } from '@/lib/fonts'
import type { ShopifyCollection } from '@/lib/shopify/types'
import logo from '@/public/logo/logo-no-txt.png'

function PageBanner({ query, collectionInfo }: { query: string; collectionInfo?: ShopifyCollection | undefined }) {
 const productTypeHeader = query === 'Vinyl Decal' ? 'Vinyl Stickers & Decals' : query === 'all' ? 'All Products' : query
 const isAll = query === 'all'
 return (
  <div className='w-full bg-bg-primary flex justify-center items-center p-4 relative pl-20 sm:pl-0'>
   {collectionInfo && collectionInfo.image ? (
    <Image
     src={collectionInfo.image.url}
     alt={collectionInfo.image.altText}
     width={100}
     height={100}
    />
   ) : isAll ? (
    <Image
     className='bg-transparent'
     src={logo}
     alt='logo'
     width={100}
     height={100}
    />
   ) : (
    <div className='w-[100px] h-[100px] bg-bg-primary rounded-full'></div>
   )}
   <h2 className={cn('text-accent text-5xl ml-4', smooch.className)}>{collectionInfo ? collectionInfo.title : productTypeHeader}</h2>
   {/* <div className='absolute bottom-0 right-4 w-full max-w-[164px]'>
    <Sort />
   </div> */}
  </div>
 )
}

export default PageBanner
