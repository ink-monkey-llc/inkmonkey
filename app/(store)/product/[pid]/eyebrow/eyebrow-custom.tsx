import React from 'react'
import localFont from 'next/font/local'
import { EyebrowCustom as EyebrowCustomType } from '@/lib/shopify/types'
import { cn } from '@/utils/cn'
import ColorPicker from './color-picker'

const aachen = localFont({ src: '../../../../fonts/AachenBoldBT.ttf', weight: '700' })

function EyebrowCustom({ eyebrowCustom, setEyebrowCustom }: { eyebrowCustom: EyebrowCustomType; setEyebrowCustom: (arg: EyebrowCustomType) => void }) {
 const demoLen = eyebrowCustom.text.length
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
    <ColorPicker
     eyebrowCustom={eyebrowCustom}
     setEyebrowCustom={setEyebrowCustom}
     label='Font Color'
     id='fontColor'
    />
    <ColorPicker
     eyebrowCustom={eyebrowCustom}
     setEyebrowCustom={setEyebrowCustom}
     label='Background Color'
     id='bgColor'
    />
   </div>
   <div>
    <h2>Preview</h2>
    <div
     style={{ color: eyebrowCustom.fontColor, backgroundColor: eyebrowCustom.bgColor }}
     className={cn(aachen.className, 'flex items-center justify-center text-2xl py-1 h-12 border border-slate-tr', demoLen > 15 && 'text-lg')}>
     {eyebrowCustom.text}
    </div>
   </div>
  </div>
 )
}

export default EyebrowCustom
