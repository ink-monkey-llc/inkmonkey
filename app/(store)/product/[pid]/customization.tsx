import React from 'react'
import { cn } from '@/utils/cn'
type CustomizationProps = {
 setCustomization: (customization: string) => void
 customization: string
 isCustom: boolean
}

function Customization({ customization, isCustom, setCustomization }: CustomizationProps) {
 return (
  <div className={cn(!isCustom && 'hidden')}>
   <h2>
    Personalization Details <span className='text-xs text-txt-secondary pl-1'> *optional</span> <br /> (name, business info, text color, placement, etc.)
   </h2>
   <textarea
    rows={3}
    onChange={(e) => setCustomization(e.target.value)}
    className='w-full rounded-md border-2 border-bg-tertiary p-2 bg-bg-secondary'
    name='customization'
    id='customization'
    value={customization}
   />
  </div>
 )
}

export default Customization
