import React from 'react'
import TempImage from './temp-image'
import type { ShopifyProduct } from '@/lib/shopify/types'
import image from '@/app/images/temp_main.webp'

type TempGridItemProps = {
 product: ShopifyProduct
}

function TempGridItem({ product }: TempGridItemProps) {
 return (
  <div className='w-[200px] h-[250px] flex flex-col relative justify-end'>
   <TempImage image={image} />
   <h3>{product.title}</h3>
  </div>
 )
}

export default TempGridItem
