'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Arrow from '../icons/arrow'

function BackButton() {
 const router = useRouter()
 return (
  <button
   onClick={() => router.back()}
   className='flex items-center mr-auto ml-4 mt-2 gap-2 hover:bg-bg-secondary py-0.5 pr-3 pl-1 rounded-md cursor-pointer'>
   <Arrow
    direction='left'
    className='w-6'
   />
   <span className='text-lg'>Back</span>
  </button>
 )
}

export default BackButton
