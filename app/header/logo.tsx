import React from 'react'
import Link from 'next/link'
import { cn } from '../utils/cn'
import { smooch } from '@/lib/fonts'

function Logo() {
 return (
  <Link href='/'>
   <h2 className={cn('text-2xl text-accent mx-4', smooch.className)}>Ink Monkey</h2>
  </Link>
 )
}

export default Logo
