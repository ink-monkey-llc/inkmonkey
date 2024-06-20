import React from 'react'
import Spinner from '@/app/spinner/spinner'

function Loading() {
 return (
  <div className='w-full h-[100vh] bg-black'>
   <Spinner />
  </div>
 )
}

export default Loading
