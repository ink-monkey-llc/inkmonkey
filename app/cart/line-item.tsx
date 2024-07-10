import React, { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import Image from 'next/image'
import { storeApi } from '@/lib/shopify/storefront-api'
import { CartItem } from '@/lib/shopify/types'
import Quantity from '../cart/cart-quant'
import { formatPrice } from '../utils/helpers'
import CartDelete from './cart-delete'
import Chevron, { Direction } from '../icons/chevron'

function LineItem({ lineItem, cartId }: { lineItem: CartItem; cartId: string }) {
 const [userCartId, setUserCartId] = useLocalStorage('userCartId', { id: '', count: 1 })
 const merch = lineItem.merchandise
 const product = lineItem.merchandise.product
 const price = formatPrice(Number(lineItem.cost.totalAmount.amount))
 const quantity = lineItem.quantity

 const handleQuantity = (num: number) => {
  if (quantity + num < 1) {
   return
  }
  storeApi
   .updateCart(cartId, [{ id: lineItem.id, merchandiseId: merch.id, quantity: quantity + num }])
   .then((cart) => setUserCartId({ id: cart.id, count: cart.totalQuantity }))
 }

 const handleRemove = () => {
  storeApi.removeFromCart(cartId, [lineItem.id]).then((cart) => setUserCartId({ id: cart.id, count: cart.totalQuantity }))
 }

 return (
  <div className='flex flex-col '>
   <div className='flex justify-between text-txt-primary'>
    <div className='flex gap-2 items-center'>
     <Image
      src={product.featuredImage.url}
      alt={product.featuredImage.altText}
      width={80}
      height={80}
     />
     <div className='flex flex-col gap-1'>
      <h3 className='font-base'>{product.title}</h3>
      <div className='font-light text-sm'>{merch.title}</div>
      <div className='text-base font-semibold'>{price}</div>
     </div>
    </div>
    <div className='flex flex-col gap-1 items-center justify-between py-1'>
     <Quantity
      quantity={quantity}
      setQuantity={handleQuantity}
     />
     <CartDelete handleRemove={handleRemove} />
    </div>
   </div>
   <div>
    <p className='flex justify-center items-center text-accent text-sm'>
     Personalization Details
     <Chevron
      className='w-4 h-4 text-accent ml-1'
      direction={Direction.Down}
     />
    </p>
    <div className='flex flex-col gap-2 p-2'>{/* TODO: add personalization details */}</div>
   </div>
   <div className='border-t border-border w-full m-auto mt-2' />
  </div>
 )
}

export default LineItem
