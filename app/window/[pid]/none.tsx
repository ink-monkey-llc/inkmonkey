import React, { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { cn } from '@/app/utils/cn'
import { Tooltip } from 'react-tooltip'
import { InfoIcon } from '@/app/icons/info'
import { Check } from '@/app/icons/check'
import { ProductVariant } from '@/lib/shopify/types'
import { useAtom } from 'jotai'
import { selectedVariantAtom } from '@/app/providers/atoms'

type NoneProps = {
 noneVariant: ProductVariant
}

function None({ noneVariant }: NoneProps) {
 const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)
 const [open, setOpen] = useState(false)
 const ref = useRef<HTMLDivElement>(null)
 useOnClickOutside(ref, () => setOpen(false))
 const handleSelect = () => {
  setSelectedVariant(noneVariant)
  setOpen(false)
 }
 const isSelected = selectedVariant?.id === noneVariant.id
 return (
  <div
   onClick={handleSelect}
   className={cn(
    'border-2 border-accent-tr rounded-md px-2 py-1 bg-bg-secondary cursor-pointer flex justify-between items-center hover:border-accent',
    isSelected && 'bg-bg-tertiary border-accent'
   )}>
   <div className='flex gap-2'>
    <Check className={cn('w-6 h-6 text-accent opacity-20 hover:text-accent-bright', isSelected && 'opacity-100')} />
    <h2 className='text-lg'>{noneVariant?.title}</h2>
   </div>
   <InfoIcon
    id='none-info'
    className='cursor-pointer w-6 h-6 text-accent hover:text-accent-bright'
   />
   <Tooltip
    anchorSelect='#none-info'
    opacity={1}
    className='w-max'
    style={{ backgroundColor: 'white', color: '#1A1A1A' }}
    place='top-end'>
    <>
     <span className='font-bold text-xl'>No Customization</span>
     <p className='font-semibold text-lg'>
      Design comes as shown <br /> with no customizations
     </p>
    </>
   </Tooltip>
  </div>
 )
}

export default None
