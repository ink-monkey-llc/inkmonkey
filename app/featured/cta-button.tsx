import React from 'react'
import { cn } from '@/app/utils/cn'
import Link from 'next/link'
import { ArrowRight } from '../icons/arrow-right'

function CtaButton({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
 return (
  <Link
   className={cn(
    'group flex px-8 py-2 border-2 border-accent bg-bg-secondary text-accent rounded-md cursor-pointer font-semibold hover:bg-accent hover:text-bg-secondary',
    className
   )}
   href={href}>
   {children} <ArrowRight className='w-6 h-6 group-hover:translate-x-3 transition-all' />
  </Link>
 )
}

export default CtaButton
