import React from 'react'
import Image from 'next/image'
import ghostGirl from '@/public/ghost-girl.jpg'
import jedi from '@/public/jedi.jpg'
import dasher from '@/public/dasher.jpg'

function Memorial() {
 return (
  <div className='flex gap-2 max-h-[300px] w-[100vw] max-w-[1100px] px-4'>
   <Image
    className='object-contain '
    src={ghostGirl}
    alt='memorial'
   />
   <Image
    className='max-h-[300px] object-contain '
    src={jedi}
    alt='memorial'
   />
   <Image
    className='object-contain'
    src={dasher}
    alt='memorial'
   />
  </div>
 )
}

export default Memorial
