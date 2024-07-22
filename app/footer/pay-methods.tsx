import React from 'react'
import { Amex, ApplePay, Diners, Discover, Google, Mastercard, Meta, ShopifyPay, Visa } from '@/app/icons/payment'

function PayMethods() {
 return (
  <div className='flex gap-2'>
   <Amex />
   <ApplePay />
   <Diners />
   <Discover />
   <Google />
   <Mastercard />
   <Meta />
   <ShopifyPay />
   <Visa />
  </div>
 )
}

export default PayMethods
