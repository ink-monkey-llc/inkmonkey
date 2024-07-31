import React from 'react'
import { useRouter } from 'next/navigation'
import Arrow from '@/app/icons/arrow'

function Continue() {
 const router = useRouter()

 const handleClick = () => {
  router.back()
 }

 return (
  <div className='flex flex-col gap-4'>
   <button
    onClick={handleClick}
    className='flex items-center gap-2 text-sm text-accent w-max ml-auto hover:text-accent-bright'>
    <Arrow
     className='w-4 h-4'
     direction='left'
    />
    Continue Shopping
   </button>
   <div className='border-t border-border w-full m-auto' />
  </div>
 )
}

export default Continue
