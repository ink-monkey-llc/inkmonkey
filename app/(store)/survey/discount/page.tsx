'use client'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import React, { useState } from 'react'
import { useLocalStorage, useCopyToClipboard } from 'usehooks-ts'

function Discount() {
 const [discountAuth] = useLocalStorage('discountAuth', { authorized: false })
 const [copied, setCopied] = useState(false)
 const [, copy] = useCopyToClipboard()
 if (!discountAuth.authorized) {
  return (
   <div className='text-2xl text-accent h-main w-full flex justify-center items-start pt-48'>
    Please complete the
    <Link
     className='underline px-2'
     href='/survey'>
     survey
    </Link>
    to receive your discount
   </div>
  )
 }
 const handleCopy = () => {
  copy('SURVEY824').then(() => setCopied(true))
  setTimeout(() => setCopied(false), 1000)
 }
 return (
  <div className='h-main w-full flex justify-center items-center'>
   <div className='p-8 bg-bg-primary rounded-md max-w-[600px] m-auto'>
    <h1 className='text-2xl text-accent'>Thank you for completing the survey!</h1>
    <p className={cn('text-txt-secondary opacity-0 text-sm text-center', copied && 'opacity-1')}>Copied to clipboard!</p>
    <div
     onClick={handleCopy}
     className='px-3 py-1 bg-bg-tertiary rounded-md text-xl mb-6 w-max m-auto hover:bg-bg-secondary cursor-pointer'>
     SURVEY824
    </div>

    <div className='w-max m-auto'>
     <p className='mt-2 text-txt-secondary'>Enter this code at checkout to get 1 free</p>
     <p className='text-white text-lg'>{`3", 4", or 5" contour-cut decal`}</p>
     <p className='text-txt-secondary '>
      generated with our AI design tool{` `}
      <Link
       href='/fonzai'
       className='underline text-accent-bright'>
       FONZAI.
      </Link>
     </p>
    </div>
   </div>
  </div>
 )
}

export default Discount
