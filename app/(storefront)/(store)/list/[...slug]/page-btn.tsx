'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { PageInfo } from '@/lib/shopify/types'

type PageBtnProps = {
 children: React.ReactNode
 pageInfo: PageInfo
 id: string
}

function PageBtn({ children, id, pageInfo }: PageBtnProps) {
 const pathname = usePathname()
 let href = pathname
 if (!pageInfo) {
  return <p>Loading...</p>
 }
 if (id === 'next') {
  href = `${pathname}?dir=next&cursor=${pageInfo.endCursor}`
 }
 if (id === 'prev') {
  href = `${pathname}?dir=prev&cursor=${pageInfo.startCursor}`
 }
 return (
  <Link href={href}>
   <button
    className='flex items-center gap-2 text-sm'
    name={id}
    id={id}>
    {children}
   </button>
  </Link>
 )
}

export default PageBtn
