import React, { useState } from 'react'
import { Plus } from '@/app/icons/plus'
import { Minus } from '@/app/icons/minus'

function Quantity({ quantity, setQuantity }: { quantity: number; setQuantity: (num: number) => void }) {
 const handleQuantity = (num: number) => {
  if (quantity + num < 1) {
   return
  }
  setQuantity(quantity + num)
 }
 return (
  <div>
   <h1>Quantity</h1>
   <div className='flex border-2 border-bg-tertiary w-max rounded-md text-lg'>
    <div
     onClick={() => handleQuantity(-1)}
     className='flex items-center border-r-2 border-bg-tertiary p-2 text-2xl cursor-pointer'>
     <Minus className='w-6 h-6' />
    </div>
    <div className='py-2 px-4'>{quantity}</div>
    <div
     onClick={() => handleQuantity(1)}
     className='flex items-center border-l-2 border-bg-tertiary p-2 text-2xl cursor-pointer'>
     <Plus className='w-6 h-6' />
    </div>
   </div>
  </div>
 )
}

export default Quantity
