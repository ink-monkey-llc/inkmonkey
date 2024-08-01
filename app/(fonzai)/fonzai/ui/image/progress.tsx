import React from 'react'
import { useAtom } from 'jotai'
import { statusAtom } from '@/app/providers/fonz-atoms'

function Progress() {
 const [status] = useAtom(statusAtom)
 //  const status = '50%'
 return (
  <div className='relative w-1/2  border border-txt-primary m-auto mb-12 rounded-md'>
   <p className='w-full  text-center border-b border-txt-primary p-2 text-white'>Progress: {status}</p>
   <div
    style={{ width: status }}
    className='h-4 bg-txt-primary border-txt-primary '
   />
  </div>
 )
}

export default Progress
