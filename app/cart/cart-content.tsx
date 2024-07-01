'use client'
import React, { useState, useEffect, use } from 'react'
import { storeApi } from '@/lib/shopify/storefront-api'
import { useLocalStorage } from 'usehooks-ts'
import LineItem from './line-item'
import { Cart } from '@/lib/shopify/types'

function CartContent() {
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
 }, [])
 console.log('cart:', cart)
 const lineItems = cart?.lines
 return (
  <div>
   CartContent
   {lineItems?.map((lineItem) => (
    <LineItem
     key={lineItem.id}
     lineItem={lineItem}
    />
   ))}
  </div>
 )
}

export default CartContent
