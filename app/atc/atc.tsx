import React from 'react'
import { cn } from '../utils/cn'
import { ArrowRight } from '@/app/icons/arrow-right'
import Spinner from '@/app/spinner/spinner'

function Atc({ addToCart, adding, added }: { addToCart: () => Promise<void>; adding: boolean; added: boolean }) {
 return (
  <div
   onClick={addToCart}
   className={cn(
    'h-12 cursor-pointer group flex items-center justify-center px-4 py-2 border-2 border-accent rounded-md hover:bg-accent hover:text-bg-secondary hover:font-bold transition-all',
    (adding || added) && 'bg-bg-tertiary hover:bg-bg-tertiary'
   )}>
   {adding ? (
    <Spinner
     small
     bright
    />
   ) : added ? (
    <div className='text-accent'>Item Added To Cart</div>
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
