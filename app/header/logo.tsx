import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { smooch } from '@/lib/fonts'
import { cn } from '../utils/cn'

function Logo() {
 return (
  <Link href='/'>
   <h2 className={cn('text-2xl text-accent mx-4', smooch.className)}>Ink Monkey</h2>
   {/* <Image
    className='bg-transparent'
    src='/logo/logo-only-txt.png'
    alt='logo'
    width={100}
    height={100}
   /> */}
  </Link>
 )
}

export default Logo
