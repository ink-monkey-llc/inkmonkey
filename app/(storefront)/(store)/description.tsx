'use client'
import React, { useState } from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import { cn } from '@/utils/cn'
import { extractAndCleanDiv } from '@/utils/extract'
import Chevron, { Direction } from '@/app/icons/chevron'

function Description({ product }: { product: ShopifyProduct }) {
 const [open, setOpen] = useState(false)
 const cleanedHtml = extractAndCleanDiv(product.descriptionHtml)
 const descHtml = product.descriptionHtml ? { __html: cleanedHtml } : { __html: '' }
 return (
  <div>
   <div
    onClick={() => setOpen(!open)}
    className='mb-4 mx-2 py-2 px-8 text-xl flex gap-2 items-center cursor-pointer rounded-md bg-bg-primary hover:bg-accent-tr hover:text-accent-bright transition-all '>
    Description
    <Chevron
     className='w-6 h-6 ml-auto'
     direction={open ? Direction.Up : Direction.Down}
    />
   </div>
   <div className={cn(open ? 'p-4 mx-2 mb-4 bg-bg-secondary rounded-md prose prose-invert ' : 'absolute opacity-0 pointer-events-none h-0 overflow-hidden')}>
    <h3>Ink Monkey has stickers, decals, and vinyl graphics for every need. </h3>
    <p>Laptop stickers, water bottle stickers, vehicle back window graphics, credit card skins and more!</p>
    <div
     style={{ color: 'white' }}
     className={cn(open ? 'prose prose-invert dark' : 'absolute opacity-0 pointer-events-none')}
     dangerouslySetInnerHTML={descHtml}></div>
   </div>
  </div>
 )
}

export default Description
