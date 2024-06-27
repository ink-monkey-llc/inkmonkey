import React from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import NextImage from './next-image'
import { ShopifyProduct } from '@/lib/shopify/types'

function ProductImage({ product }: { product: ShopifyProduct }) {
 const slides = product.images.edges.map((edge) => {
  return {
   src: edge.node.url,
   width: edge.node.width,
   height: edge.node.height,
  }
 })
 return (
  <Lightbox
   open={true}
   slides={slides}
   render={{ slide: NextImage }}
  />
 )
}

export default ProductImage
