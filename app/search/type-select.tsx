import React, { useState, useRef, useEffect } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { SearchType, searchTypes } from '@/app/content/search-types'
import '@/app/styles/sort.css'
import { cn } from '@/utils/cn'

function TypeSelect({ query }: { query: string }) {
 const searchParams = useSearchParams()
 const urlType = searchParams.get('type')
 const [open, setOpen] = useState(false)
 const [productType, setProductType] = useState<SearchType>(searchTypes[0])
 const popoverRef = useRef<HTMLDivElement>(null)
 useOnClickOutside(popoverRef, () => setOpen(false))
 const router = useRouter()
 const pathname = usePathname()

 useEffect(() => {
  if (!urlType) {
   setProductType(searchTypes[0])
   return
  }
  setProductType(searchTypes.find((type) => type.id === urlType) as SearchType)
 }, [urlType])

 const handleSelect = (id: string) => {
  setProductType(searchTypes.find((type) => type.id === id) as SearchType)
  router.push(`${pathname}?query=${query}&type=${id}`)
  setOpen(false)
 }

 return (
  <div
   className='w-full max-w-64'
   ref={popoverRef}>
   <div className='flex flex-col ml-4 w-64'>
    <span className='text-lg'>Product Type:</span>
    <div
     onClick={() => setOpen(!open)}
     className='bg-bg-tertiary border border-slate-tr gap-2 flex justify-between items-center rounded-md px-2 py-1 h-[34px] cursor-pointer w-64'>
     <span className='font-sans '>{productType.label}</span>
    </div>
   </div>
   <div
    id='sort-menu'
    className={cn('bg-bg-tertiary mt-1 ml-4 rounded-md px-1 py-1 z-20 absolute w-64 border border-slate-tr', open ? 'fade-in' : 'fade-out')}>
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
