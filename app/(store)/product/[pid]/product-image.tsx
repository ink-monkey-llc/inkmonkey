'use client'
import React, { Suspense } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Lightbox from 'yet-another-react-lightbox'
import { Inline, Thumbnails } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import NextImage from './next-image'
import { ShopifyProduct } from '@/lib/shopify/types'
import Description from './description'

function ProductImage({ product, iid = '', thumbs = true }: { product: ShopifyProduct; thumbs: boolean; iid: string }) {
 const { width } = useWindowSize()
 const isAi = product.handle === 'ai-truck-back-window-graphics'
 let aiSlide = [
  {
   src: '',
   height: 0,
   width: 0,
  },
 ]
 if (isAi) {
  aiSlide = [
   {
    src: `https://res.cloudinary.com/dkxssdk96/image/upload/${iid}.png`,
    width: 900,
    height: 300,
   },
  ]
 }
 const slides = product.images.edges.map((edge) => {
  return {
   alt: edge.node.altText,
   src: edge.node.url,
   width: edge.node.width,
   height: edge.node.height,
  }
 })
 const isMd = width > 768
 return (
  <div className=' w-full h-[var(--view-height)] overflow-y-hidden'>
   <Lightbox
    plugins={thumbs ? [Inline, Thumbnails] : [Inline]}
    thumbnails={{ position: isMd ? 'start' : 'bottom' }}
    open={true}
    slides={isAi ? aiSlide : slides}
    render={{ slide: NextImage }}
    noScroll={{ disabled: true }}
   />
  </div>
 )
}

export default ProductImage
