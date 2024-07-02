import React from 'react'
import CartContent from './cart-content'
import { Open_Sans, Smooch, Outfit } from 'next/font/google'
import type { Smooch as SmoochType } from '../@cart/(.)cart/page'

export const smooch = Smooch({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-smooch' })

function Cart() {
 return (
  <div>
   <CartContent smooch={smooch} />
  </div>
 )
}

export default Cart
