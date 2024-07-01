import React from 'react'
import Image from 'next/image'
import { CartItem } from '@/lib/shopify/types'

function LineItem({ lineItem }: { lineItem: CartItem }) {
 const product = lineItem.merchandise.product
 return (
  <div className='flex gap-2 text-txt-primary'>
   <Image
    src={product.featuredImage.url}
    alt={product.featuredImage.altText}
    width={80}
    height={80}
   />
   <div className='flex flex-col gap-1'>
    <h3>{product.title}</h3>
    <div className='text-xs'>
     {lineItem.quantity} x {lineItem.cost.totalAmount.amount}
    </div>
   </div>
  </div>
 )
}

export default LineItem
