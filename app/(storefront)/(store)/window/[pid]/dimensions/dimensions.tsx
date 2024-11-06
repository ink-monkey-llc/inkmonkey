import React from 'react'
import { cn } from '@/utils/cn'
import { Check } from '@/app/icons/check'
import { useAtom } from 'jotai'
import { isStandardSizeAtom } from '@/app/providers/atoms'
import AddDimensions from './add-dimensions'

function Dimensions() {
 const [isStandardSize, setIsStandardSize] = useAtom(isStandardSizeAtom)
 const handleSelectStandard = () => {
  setIsStandardSize(true)
 }
 const handleSelectCustom = () => {
  setIsStandardSize(false)
 }
 return (
  <div>
   <p>Size</p>
   <div className='flex flex-col gap-2'>
    <div
     onClick={() => handleSelectStandard()}
     className={cn(
      'flex gap-2 items-center border-2 border-accent-tr rounded-md px-2 pb-2 pt-1 bg-bg-secondary cursor-pointer',
      isStandardSize && 'bg-bg-tertiary border-accent'
     )}>
     <Check className={cn('w-6 h-6 text-accent opacity-20 hover:text-accent-bright', isStandardSize && 'opacity-100')} />
     {`Standard Size (18" x 68")`}
    </div>
    <div
     onClick={() => handleSelectCustom()}
     className={cn(
      'flex flex-col gap-2 items-center border-2 border-accent-tr rounded-md px-2 pb-2 pt-1 bg-bg-secondary cursor-pointer',
      !isStandardSize && 'bg-bg-tertiary border-accent'
     )}>
     <div className='flex flex-col gap-1 w-full'>
      <div className='flex gap-2'>
       <Check className={cn('w-6 h-6 text-accent opacity-20 hover:text-accent-bright', !isStandardSize && 'opacity-100')} />
       Enter your window measurements
      </div>
      <p className='text-xs ml-8 text-accent'>*Highly recommended for best results</p>
     </div>
     <AddDimensions hide={isStandardSize} />
    </div>
   </div>
  </div>
 )
}

export default Dimensions
