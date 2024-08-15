'use client'
import { cn } from '@/utils/cn'
import Image from 'next/image'
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
    <h1 className='text-2xl mb-2 text-accent text-center'>Thank you for completing the survey!</h1>{' '}
    <p className='text-txt-secondary'>
     Use our AI design playground,{' '}
     <Link
      href='/fonzai'
      className='underline text-lg text-accent-bright'>
      FONZAI
     </Link>{' '}
     to design a <span className='text-lg font-bold text-white'>free</span> contour-cut decal
    </p>
    <p className='text-txt-secondary mt-2 text-center'>Just enter this code at checkout:</p>
    <p className={cn('text-txt-secondary opacity-0 text-sm text-center', copied && 'opacity-1')}>Copied to clipboard!</p>
    <div
     onClick={handleCopy}
     className='px-3 py-1 bg-bg-tertiary rounded-md text-xl mb-6 w-max m-auto hover:bg-bg-secondary cursor-pointer'>
     SURVEY824
    </div>
    <div className='w-max m-auto'>
     <p className='text-white text-lg'>{`Available decal sizes: 3", 4", or 5"`}</p>
    </div>
    <Image
     className='m-auto mt-4 rounded-md'
     src='/disc-ss.png'
     alt='discount code screenshot'
     width={400}
     height={400}
    />
   </div>
  </div>
 )
}

export default Discount
