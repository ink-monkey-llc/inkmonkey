'use client'
import React, { Suspense } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Lightbox from 'yet-another-react-lightbox'
import { Inline, Thumbnails } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import NextImage from './next-image'
import { ShopifyProduct } from '@/lib/shopify/types'

function ProductImage({ product, thumbs = true }: { product: ShopifyProduct; thumbs: boolean }) {
 const { width } = useWindowSize()
 const slides = product.images.edges.map((edge) => {
  return {
   src: edge.node.url,
   width: edge.node.width,
   height: edge.node.height,
  }
 })
 const isMd = width > 768
 return (
  <Suspense fallback={<div className='w-full h-[var(--view-height)] overflow-y-hidden'>Loading...</div>}>
   <div className=' w-full h-[var(--view-height)] overflow-y-hidden'>
    <Lightbox
     plugins={thumbs ? [Inline, Thumbnails] : [Inline]}
     thumbnails={{ position: isMd ? 'start' : 'bottom' }}
     open={true}
     slides={slides}
     render={{ slide: NextImage }}
     noScroll={{ disabled: true }}
    />
   </div>
  </Suspense>
 )
}

export default ProductImage
