// import React from 'react'
// import { useRouter } from 'next/navigation'

// function SearchField({ type }: { type: string }) {
//  const router = useRouter()
//  const buildUrl = (query: string) => {
//   if (type !== 'all') {
//    return `/search?query=${query}&type=${type}`
//   }
//   return `/search?query=${query}`
//  }
//  const handleSearch = async (formData: FormData) => {
//   const query = formData.get('query')?.toString()
//   if (query === '' || query === null || query === undefined) {
//    return
//   }
//   router.push(buildUrl(query))
//  }
//  return (
//   <form
//    action={handleSearch}
//    className='w-full m-auto max-w-[900px] bg-bg-primary  justify-start items-start p-8 pt-6 flex flex-col gap-2'>
//    <label
//     className='text-xl text-txt-primary'
//     htmlFor='query'>
//     Search
//    </label>
//    <input
//     id='query'
//     name='query'
//     className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
//     type='text'
//    />
//   </form>
//  )
// }

// export default SearchField
