'use client'
import React, { useState, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import TypeSelect from '@/app/(storefront)/(store)/search/type-select'

function SearchForm() {
 const router = useRouter()
 const searchParams = useSearchParams()
 const prodType = searchParams.get('type')
 const [query, setQuery] = useState('')
 const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
   e.preventDefault()
   if (!query) {
    return
   }
   if (prodType) {
    router.push(`/search?query=${query}&type=${prodType}`)
   } else {
    router.push(`/search?query=${query}`)
   }
  }
 }

 return (
  <div className='w-full p-4 flex justify-center items-start sm:items-center flex-col-reverse sm:flex-row'>
   <div className='w-full sm:w-auto'>
    <label
     className='text-xl text-txt-primary'
     htmlFor='query'>
     Search
    </label>
    <input
     onKeyDown={handleEnter}
     id='query'
     name='query'
     value={query}
     onChange={(e) => setQuery(e.target.value)}
     type='text'
     className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
    />
   </div>
   <TypeSelect query={query} />
  </div>
 )
}

export default SearchForm
