'use client'
import React from 'react'
import { useWindowSize } from 'usehooks-ts'
import Lightbox from 'yet-another-react-lightbox'
import { Inline, Thumbnails } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import NextImage from './next-image'
import { ShopifyProduct } from '@/lib/shopify/types'

function ProductImage({ product }: { product: ShopifyProduct }) {
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
  <div className='w-full h-[var(--view-height)] overflow-y-hidden'>
   <Lightbox
    plugins={[Inline, Thumbnails]}
    thumbnails={{ position: isMd ? 'start' : 'bottom' }}
    open={true}
    slides={slides}
    render={{ slide: NextImage }}
    noScroll={{ disabled: true }}
   />
  </div>
 )
}

export default ProductImage
