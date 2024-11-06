import React from 'react'
import { getAllResults } from '@/app/actions/survey'
import Link from 'next/link'

type Result = {
 id: string
 json: string
 createdAt: Date
}

async function List() {
 const results = await getAllResults()

 return (
  <div className='flex flex-col gap-2'>
   {results.map((result, i) => {
    const data = JSON.parse(result?.json as string)
    const createdDate = result ? new Date(result?.createdAt) : null
    const createdDateString = createdDate ? createdDate.toLocaleDateString() : ''
    return (
     <Link
      key={result.id}
      className='px-2 py-1 max-w-[200px] truncate bg-bg-tertiary rounded-md hover:bg-accent-tr transition-all'
      href={`/reader/${result.id}`}>
      Survey Result - {i + 1} - {createdDateString}
     </Link>
    )
   })}
  </div>
 )
}

export default List
