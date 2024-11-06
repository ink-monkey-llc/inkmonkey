import React from 'react'
import localFont from 'next/font/local'
import { EyebrowCustom as EyebrowCustomType } from '@/lib/shopify/types'
import { cn } from '@/utils/cn'
import ColorPicker from './color-picker'
import CurveShape from './curve-shape'

const aachen = localFont({ src: '../../../../../fonts/AachenBoldBT.ttf', weight: '700' })

function EyebrowCustom({ eyebrowCustom, setEyebrowCustom }: { eyebrowCustom: EyebrowCustomType; setEyebrowCustom: (arg: EyebrowCustomType) => void }) {
 const demoLen = eyebrowCustom.text.length
 return (
  <div className='flex flex-col gap-2'>
   <div>
    <h2>Your Custom Text</h2>
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
    <ColorPicker
     eyebrowCustom={eyebrowCustom}
     setEyebrowCustom={setEyebrowCustom}
     label='Font Color'
     id='fontColor'
    />
    <ColorPicker
     eyebrowCustom={eyebrowCustom}
     setEyebrowCustom={setEyebrowCustom}
     label='Background'
     id='bgColor'
    />
   </div>
   <div>
    <h2>Preview</h2>
    <div
     style={{ color: eyebrowCustom.fontColor, backgroundColor: eyebrowCustom.bgColor }}
     className={cn(
      aachen.className,
      'flex items-center justify-center text-3xl h-12 leading-none border border-slate-tr overflow-hidden text-nowrap',
      demoLen > 10 && 'md:text-xl lg:text-3xl',
      demoLen > 15 && 'md:text-lg lg:text-2xl',
      demoLen > 18 && 'md:text-base lg:text-lg',
      demoLen > 20 && 'md:text-sm lg:text-base'
     )}>
     {eyebrowCustom.text}
    </div>
   </div>
   <div>
    <label htmlFor='note'>Note or Special Instructions</label>
    <input
     value={eyebrowCustom.note}
     onChange={(e) => setEyebrowCustom({ ...eyebrowCustom, note: e.target.value })}
     type='text'
     id='note'
     name='note'
     className='bg-bg-tertiary w-full p-1 rounded-md text-txt-primary'
    />
   </div>
  </div>
 )
}

export default EyebrowCustom
