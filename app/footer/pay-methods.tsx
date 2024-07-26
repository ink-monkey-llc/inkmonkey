import React from 'react'
import { Amex, ApplePay, Diners, Discover, Google, Mastercard, Meta, ShopifyPay, Visa } from '@/app/icons/payment'

function PayMethods() {
 return (
  <div className='flex flex-row gap-2 justify-end'>
   <div className='flex gap-2'>
    <Amex />
    <ApplePay />
    <Diners />
    <Discover />
   </div>
   <div className='flex gap-2'>
    <Google />
    <Mastercard />
    <ShopifyPay />
    <Visa />
   </div>
  </div>
 )
}

export default PayMethods
