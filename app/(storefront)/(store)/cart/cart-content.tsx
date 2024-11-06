'use client'
import React, { useState, useEffect, Suspense } from 'react'
import { cn } from '@/utils/cn'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { useLocalStorage } from 'usehooks-ts'
import Continue from './continue'
import LineItem from './line-item'
import { Cart } from '@/lib/shopify/types'
import CartIcon from '@/app/icons/cart-icon'
import Link from 'next/link'
import { smooch } from '@/lib/fonts'
import { formatPrice } from '@/utils/helpers'
import Spinner from '@/app/spinner/spinner'

function CartContent({ isModal }: { isModal: boolean }) {
 const [userCartId, setUserCartId] = useLocalStorage('userCartId', { id: '', count: 1 })
 const [cart, setCart] = useState<Cart>()

 useEffect(() => {
  const fetchCart = async () => {
   const fetchedCart = await storeApi.getCart(userCartId.id)
   //    console.log('fetchedCart:', fetchedCart)
   if (!fetchedCart) {
    return
   }
   setCart(fetchedCart)
  }
  fetchCart()
 }, [userCartId.count])
 //  console.log('cart-content:', cart)
 const lineItems = cart?.lines
 const cartId = cart?.id
 const discountCodes = cart?.discountCodes
 //  const lastProduct = lineItems && lineItems[0].merchandise.product
 return (
  <div>
   <div className={cn('flex flex-col gap-4 px-8 py-4 ', isModal && 'is-modal overflow-y-scroll h-[var(--cart-view)]')}>
    <h2 className={cn('text-accent text-5xl flex gap-4 items-center px-8 pt-4 pb-2 border-b border-border', smooch.className)}>
     <CartIcon className='w-8 text-accent ' /> Cart
    </h2>
    <Continue />
    {lineItems?.map((lineItem) => (
     <LineItem
      cartId={cartId ?? ''}
      key={lineItem.id}
      lineItem={lineItem}
     />
    ))}
   </div>

   <div className={cn('p-8 pt-4 bg-bg-secondary border-t border-border ', isModal && ' fixed bottom-0 left-0 right-0 w-full')}>
    {discountCodes &&
     discountCodes?.length > 0 &&
     discountCodes.map((code) => (
      <p
       key={code.code}
       className='text-center text-txt-secondary'>
       Discount code applied: <span className='text-accent'>{code.code} </span>
      </p>
     ))}
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
      {cart ? 'Checkout | ' + formatPrice(Number(cart?.cost?.totalAmount.amount)) : 'Cart Empty'}
     </Link>
    </div>
   </div>
  </div>
 )
}

export default CartContent
