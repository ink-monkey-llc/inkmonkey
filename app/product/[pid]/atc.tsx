import React from 'react'
import { ArrowRight } from '@/app/icons/arrow-right'

function Atc({ addToCart }: { addToCart: () => Promise<void> }) {
 return (
  <div
   onClick={addToCart}
   className='cursor-pointer group flex items-center justify-center px-4 py-2 border-2 border-bg-tertiary rounded-md'>
   Add To Cart
   <ArrowRight className='w-6 h-6 ml-2 group-hover:translate-x-3 transition-all' />
  </div>
 )
}

export default Atc
