'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import type { PageInfo } from '@/lib/shopify/types'

type SearchBtnProps = {
 children: React.ReactNode
 pageInfo: PageInfo
 id: string
}

function SearchBtn({ children, id, pageInfo }: SearchBtnProps) {
 const pathname = usePathname()
 const searchParams = useSearchParams()
 const urlType = searchParams.get('type')
 const urlQuery = searchParams.get('query')
 if (!pageInfo) {
  return <p>Loading...</p>
 }
 const href = `${pathname}?${urlType ? `type=${urlType}&` : ''}${urlQuery ? `query=${urlQuery}&` : ''}dir=${id === 'next' ? 'next' : 'prev'}&cursor=${
  id === 'next' ? pageInfo.endCursor : pageInfo.startCursor
 }`

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

export default SearchBtn
