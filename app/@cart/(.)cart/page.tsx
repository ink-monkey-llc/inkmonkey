import React from 'react'
import Modal from '../../modal/modal'
import { Open_Sans, Smooch, Outfit } from 'next/font/google'
import CartContent from '@/app/cart/cart-content'

export const smooch = Smooch({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-smooch' })

export type Smooch = typeof smooch

function Cart() {
 return (
  <Modal>
   <CartContent
    isModal={true}
    smooch={smooch}
   />
  </Modal>
 )
}

export default Cart
