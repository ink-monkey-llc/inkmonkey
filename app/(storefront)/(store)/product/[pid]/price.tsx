import React from 'react'
import { formatPrice } from '@/utils/helpers'

function Price({ price, quantity }: { price: string; quantity: number }) {
 const totalPrice = Number(price) * quantity

 return <div className='text-4xl font-semibold'>{formatPrice(totalPrice)}</div>
}

export default Price
