'use client'
import React, { useState } from 'react'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import Image from 'next/image'
import mockup from '@/public/fonzmockup.jpg'

function Mockup() {
 const [open, setOpen] = useState(false)
 return (
  <Link
   href='/fonzai'
   onMouseEnter={() => setOpen(true)}
   onMouseLeave={() => setOpen(false)}
   className='relative overflow-hidden'>
   <Image
    className='border-2 m-auto border-accent object-contain rounded-md'
    src={mockup}
    alt='fonzie'
    width={400}
    height={400}
   />
   <div
    className={cn(
     'absolute top-0 left-0 w-full h-full flex justify-center items-center bg-accent rounded-md bg-opacity-60 opacity-0 transition-all',
     open && 'opacity-100'
    )}>
    <h2 className='text-bg-primary font-bold text-5xl'>Check it out!</h2>
   </div>
  </Link>
 )
}

export default Mockup
