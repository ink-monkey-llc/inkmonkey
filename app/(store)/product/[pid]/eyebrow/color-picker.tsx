import React from 'react'
import { outfit } from '@/lib/fonts'
import { cn } from '@/utils/cn'
import { Dropper } from '@/app/icons/dropper'

function ColorPicker({ eyebrowCustom, setEyebrowCustom, label, id }: { eyebrowCustom: any; setEyebrowCustom: any; label: string; id: string }) {
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (id === 'fontColor') {
   setEyebrowCustom({ ...eyebrowCustom, fontColor: e.target.value })
  }
  if (id === 'bgColor') {
   setEyebrowCustom({ ...eyebrowCustom, bgColor: e.target.value })
  }
 }

 return (
  <>
   <div className='w-full'>
    <h2>{label}</h2>
    <div className='px-1 py-0.5 border-2 border-slate-tr bg-bg-tertiary rounded-md'>
     <input
      type='color'
      name='fontColor'
      id='fontColor'
      className='cursor-pointer w-full h-8 bg-transparent rounded-md color-picker'
      value={id === 'fontColor' ? eyebrowCustom.fontColor : eyebrowCustom.bgColor}
      onChange={handleChange}
     />
    </div>
   </div>
  </>
 )
}

export default ColorPicker
