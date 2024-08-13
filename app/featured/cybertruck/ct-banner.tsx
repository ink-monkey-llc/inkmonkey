import React from 'react'
import Image from 'next/image'
import { ctCopy, ctHeading } from '@/app/content/ct-copy'

function CtBanner() {
 return (
  <div className='w-full flex flex-col lg:flex-row justify-center relative bg-bg-secondary border-t-8 p-4 pt-24 border-accent-tr'>
   <div className='relative '>
    <Image
     className='absolute -top-48 left-1/2 -translate-x-1/2'
     src='/ct/ctlogo.png'
     alt='cybertruck'
     width={600}
     height={400}
    />
    <Image
     className='m-auto border-2 border-accent-tr rounded-sm'
     src='/ct/ct-gif.gif'
     alt='cybertruck'
     width={830}
     height={800}
    />
   </div>
   <div className='relative lg:max-w-52 mx-4 rounded-xl border border-gray-200/20 p-2 pt-1 mt-2 lg:mt-0'>
    <Image
     className='absolute top-0 left-0 w-full hidden lg:block '
     src='/ct/shine-overlay.png'
     width={208}
     height={208}
     alt=''
    />
    <h2 className='text-yellow-300 italic text-center mb-2 leading-tight'>{ctHeading}</h2>
    <p className='text-xs mb-2'>{ctCopy[0]}</p>
    <p className='text-xs '>{ctCopy[1]}</p>
   </div>
  </div>
 )
}

export default CtBanner
