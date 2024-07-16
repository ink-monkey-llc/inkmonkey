import React from 'react'
import Modal from '../../modal/modal'
import CartContent from '@/app/cart/cart-content'

function Cart() {
 return (
  <Modal>
   <CartContent isModal={true} />
  </Modal>
 )
}

export default Cart
