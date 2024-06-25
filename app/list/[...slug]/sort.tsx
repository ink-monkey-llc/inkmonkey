'use client'
import React, { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { useRouter, usePathname } from 'next/navigation'
import SortIcon from '@/app/icons/sort'
import { sortOptions, SortOption } from '@/app/content/sortOptions'
import '../../styles/sort.css'
import { cn } from '../../utils/cn'

function Sort() {
 const [open, setOpen] = useState(false)

 const [sort, setSort] = useState<SortOption>(sortOptions[0])
 const popoverRef = useRef<HTMLDivElement>(null)
 useOnClickOutside(popoverRef, () => setOpen(false))
 const router = useRouter()
 const pathname = usePathname()

 const handleSort = (id: string) => {
  const selectedOption = sortOptions.find((option) => option.id === id)
  if (selectedOption) {
   setSort(selectedOption)
   setOpen(false)
   router.push(`${pathname}?sort=${id}`)
  }
 }

 return (
  <div
   ref={popoverRef}
   className=' w-full py-1 relative ml-auto mr-4 max-w-32'>
   Sort by:
   <button
    onClick={() => setOpen(!open)}
    className='bg-bg-tertiary gap-2 flex justify-between items-center rounded-md  px-2 py-1 cursor-pointer w-full max-w-[164px]'>
    <span className='pl-2'>{sort.label}</span> <SortIcon />
   </button>
   <div
    id='sort-menu'
    className={cn('bg-bg-tertiary rounded-md px-1 py-1 z-20 absolute w-full', open ? 'fade-in' : 'fade-out')}>
    {sortOptions.map((option, i) => (
     <div
      onClick={() => handleSort(option.id)}
      className=' hover:bg-bg-secondary cursor-pointer text-txt-primary px-4 py-1 text-sm rounded-md'
      key={option.value}>
      <div>{option.label}</div>
     </div>
    ))}
   </div>
  </div>
 )
}

export default Sort
