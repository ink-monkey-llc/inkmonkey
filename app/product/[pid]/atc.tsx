import React from 'react'
import { ArrowRight } from '@/app/icons/arrow-right'
import Spinner from '@/app/spinner/spinner'

function Atc({ addToCart, adding, added }: { addToCart: () => Promise<void>; adding: boolean; added: boolean }) {
 return (
  <div
   onClick={addToCart}
   className='h-12 cursor-pointer group flex items-center justify-center px-4 py-2 border-2 border-bg-tertiary rounded-md'>
   {adding ? (
    <Spinner
     small
     bright
    />
   ) : added ? (
    <div className='text-accent-bright'>Item Added To Cart</div>
   ) : (
    <>
     Add To Cart
     <ArrowRight className='w-6 h-6 ml-2 group-hover:translate-x-3 transition-all' />
    </>
   )}
  </div>
 )
}

export default Atc
