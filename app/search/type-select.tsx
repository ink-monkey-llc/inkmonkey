'use client'
import React, { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { useRouter, usePathname } from 'next/navigation'
import { SearchType, searchTypes } from '../content/search-types'
import '@/app/styles/sort.css'
import { cn } from '@/app/utils/cn'
import { smooch } from '../cart/page'

function TypeSelect({ query }: { query: string }) {
 const [open, setOpen] = useState(false)
 const [productType, setProductType] = useState<SearchType>(searchTypes[0])
 const popoverRef = useRef<HTMLDivElement>(null)
 useOnClickOutside(popoverRef, () => setOpen(false))
 const router = useRouter()
 const pathname = usePathname()

 const handleSelect = (id: string) => {
  setProductType(searchTypes.find((type) => type.id === id) as SearchType)
  router.push(`${pathname}?query=${query}&type=${id}`)
  setOpen(false)
 }

 return (
  <div ref={popoverRef}>
   <span className='text-xl'>Product Type:</span>
   <button
    onClick={() => setOpen(!open)}
    className='bg-bg-tertiary mt-2 border border-slate-tr gap-2 flex justify-between items-center rounded-md mb-1 px-2 py-1 h-[34px] cursor-pointer w-56'>
    <span className='pl-2 font-sans text-sm'>{productType.label}</span>
   </button>
   <div
    id='sort-menu'
    className={cn('bg-bg-tertiary rounded-md px-1 py-1 z-20 absolute w-56', open ? 'fade-in' : 'fade-out')}>
    {searchTypes.map((type, i) => (
     <div
      onClick={() => handleSelect(type.id)}
      className=' hover:bg-bg-secondary cursor-pointer text-txt-primary px-4 py-1 text-sm rounded-md'
      key={type.id + i}>
      <div>{type.label}</div>
     </div>
    ))}
   </div>
  </div>
 )
}

export default TypeSelect
