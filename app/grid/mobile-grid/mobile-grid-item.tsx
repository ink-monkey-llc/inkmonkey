import React from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import Link from 'next/link'
import { formatPrice } from '@/utils/helpers'
import MobileCardImg from './mobile-card-img'

function MobileGridItem({ product }: { product: ShopifyProduct }) {
 const featImage = { image: product.featuredImage, title: product.title }
 const imgs = product.images.edges.map((edge) => edge.node)

 const amount = Number(product.priceRange.minVariantPrice.amount)
 const isWindow = product.productType === 'Truck Back Window Graphics'
 return (
  <div className='w-[200px] justify-start h-[250px] flex flex-col relative mb-4 items-center'>
   <Link href={!isWindow ? `/product/${product.handle}` : `/window/${product.handle}`}>
    <MobileCardImg
     imgDataArr={imgs}
     featImgData={featImage}
     product={product}
    />
    <div className='px-1 py-2 '>
     <p className='text-xs font-light w-[140px]'>{product.title}</p>
     <p className='font-bold'>From {formatPrice(amount)}</p>
     <div className='text-green-600 text-xs flex items-center gap-2'>
      <div className='w-[6px] h-[6px] rounded-full  bg-green-600' />
      In stock
     </div>
    </div>
   </Link>
  </div>
 )
}

export default MobileGridItem
