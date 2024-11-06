import React from 'react'
import { Plus } from '@/app/icons/plus'
import { Minus } from '@/app/icons/minus'

function Quantity({ quantity, setQuantity }: { quantity: number; setQuantity: (num: number) => void }) {
 return (
  <div>
   <div className='flex border-2 border-quant w-max rounded-md'>
    <div
     onClick={() => setQuantity(-1)}
     className='flex items-center border-r-2 border-quant px-1 text-lg cursor-pointer'>
     <Minus className='w-4 h-4' />
    </div>
    <div className=' px-2'>{quantity}</div>
    <div
     onClick={() => setQuantity(1)}
     className='flex items-center border-l-2 border-quant px-1 text-lg cursor-pointer'>
     <Plus className='w-4 h-4' />
    </div>
   </div>
  </div>
 )
}

export default Quantity
