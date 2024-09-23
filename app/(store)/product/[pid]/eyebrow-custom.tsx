import React from 'react'
import localFont from 'next/font/local'
import { EyebrowCustom as EyebrowCustomType } from '@/lib/shopify/types'

const aachen = localFont({ src: '../../../fonts/aachen.ttf' })

function EyebrowCustom({ eyebrowCustom, setEyebrowCustom }: { eyebrowCustom: EyebrowCustomType; setEyebrowCustom: (arg: EyebrowCustomType) => void }) {
 return (
  <div className='flex flex-col gap-2'>
   <div>
    <h2>Text</h2>
    <input
     type='text'
     name='text'
     id='text'
     className='w-full rounded-md  p-1 bg-bg-tertiary text-txt-primary'
     value={eyebrowCustom.text}
     onChange={(e) => setEyebrowCustom({ ...eyebrowCustom, text: e.target.value })}
    />
   </div>
   <div className='flex gap-2'>
    <div className='w-full'>
     <h2>Font Color</h2>
     <input
      type='color'
      name='fontColor'
      id='fontColor'
      className='w-full h-12 bg-transparent rounded-md color-picker'
      value={eyebrowCustom.fontColor}
      onChange={(e) => setEyebrowCustom({ ...eyebrowCustom, fontColor: e.target.value })}
     />
    </div>
    <div className='w-full'>
     <h2>Background Color</h2>
     <input
      type='color'
      name='bgColor'
      id='bgColor'
      className='w-full h-12 bg-transparent rounded-md color-picker'
      value={eyebrowCustom.bgColor}
      onChange={(e) => setEyebrowCustom({ ...eyebrowCustom, bgColor: e.target.value })}
     />
    </div>
   </div>
  </div>
 )
}

export default EyebrowCustom
