'use client'
import React, { useState, useEffect, Suspense } from 'react'
import { cn } from '../utils/cn'
import { storeApi } from '@/lib/shopify/storefront-api'
import { useLocalStorage } from 'usehooks-ts'
import LineItem from './line-item'
import { Cart } from '@/lib/shopify/types'
import CartIcon from '../icons/cart-icon'
import { Smooch } from '../@cart/(.)cart/page'
import Link from 'next/link'
import { formatPrice } from '../utils/helpers'
import Spinner from '../spinner/spinner'

function CartContent({ smooch, isModal }: { smooch: Smooch; isModal: boolean }) {
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
 const lineItems = cart?.lines
 const cartId = cart?.id
 return (
  <div>
   <div className={cn('flex flex-col gap-4 px-8 py-4 overflow-y-scroll h-[var(--cart-view)]', isModal && 'is-modal')}>
    <h2 className={cn('text-accent text-5xl flex gap-4 items-center px-8 pt-4 pb-2 border-b border-border', smooch.className)}>
     <CartIcon className='w-8 text-accent ' /> Cart
    </h2>
    {lineItems?.map((lineItem) => (
     <LineItem
      cartId={cartId ?? ''}
      key={lineItem.id}
      lineItem={lineItem}
     />
    ))}
   </div>
   <div className='p-8 pt-4 bg-bg-secondary border-t border-border fixed bottom-0 left-0 right-0 w-full'>
    <p className='text-txt-secondary'>Note:</p>
    <textarea
     name='note'
     id='note'
     className='w-full rounded-md border border-slate-tr p-2 bg-bg-tertiary text-txt-primary'
     placeholder='Special instructions for seller'
    />
    <p className='text-xs text-accent mb-4'>Taxes and shipping calculated at checkout.</p>

    <div className='m-auto flex items-center justify-center text-accent w-full max-w-64 h-12 rounded-md border border-accent  text-center hover:bg-accent hover:text-bg-secondary'>
     <Link
      className='w-full h-full flex items-center justify-center'
      href={cart?.checkoutUrl ?? ''}>
      {cart ? 'Checkout | ' + formatPrice(Number(cart?.cost?.totalAmount.amount)) : <Spinner small />}
     </Link>
    </div>
   </div>
  </div>
 )
}

export default CartContent
