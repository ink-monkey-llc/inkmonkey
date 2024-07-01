'use client'
import React, { useState, useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import Link from 'next/link'
import CartIcon from '../icons/cart-icon'
import { storeApi } from '@/lib/shopify/storefront-api'
import { Cart } from '@/lib/shopify/types'

function CartIndicator() {
 const [userCartId, setUserCartId] = useLocalStorage('userCartId', { id: '', count: 1 })
 const [cart, setCart] = useState<Cart>()
 const fetchCart = async () => {
  if (!userCartId.id) {
   return
  }
  return await storeApi.getCart(userCartId.id)
 }

 useEffect(() => {
  fetchCart().then((cart) => setCart(cart))
 }, [userCartId.count])
 console.log('cart:', cart)

 const cartCount = cart?.totalQuantity || 0

 return (
  <div className='relative cursor-pointer'>
   <Link href='/cart'>
    <CartIcon className='w-5 text-accent ' />
    {cartCount > 0 && (
     <div className='text-xs font-bold absolute bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center -top-1 -left-2'>{cartCount}</div>
    )}
   </Link>
  </div>
 )
}

export default CartIndicator
