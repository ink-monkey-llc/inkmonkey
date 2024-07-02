import React from 'react'
import { Trash } from '@/app/icons/trash'

function CartDelete({ handleRemove }: { handleRemove: () => void }) {
 return (
  <div onClick={handleRemove}>
   <Trash className='w-6 h-6 text-quant hover:text-red-500 cursor-pointer' />
  </div>
 )
}

export default CartDelete
