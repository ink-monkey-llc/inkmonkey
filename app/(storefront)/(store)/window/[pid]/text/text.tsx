import { ProductVariant } from '@/lib/shopify/types'
import React from 'react'
import { cn } from '@/utils/cn'
import TextForm from './text-form'
import { Check } from '@/app/icons/check'
import { InfoIcon } from '@/app/icons/info'
import { Tooltip } from 'react-tooltip'
import { useAtom } from 'jotai'
import { selectedVariantAtom } from '@/app/providers/atoms'
import { initialSelectedVariant } from '@/app/content/initial-values'

type TextProps = {
 textVariant: ProductVariant
}

function Text({ textVariant }: TextProps) {
 const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)

 const isSelected = selectedVariant?.id === textVariant.id
 const handleSelect = () => {
  setSelectedVariant(isSelected ? initialSelectedVariant : textVariant)
 }
 return (
  <div
   className={cn(
    'flex flex-col border-2 border-accent-tr rounded-md px-2 pb-2 pt-1 bg-bg-secondary cursor-pointer',
    isSelected && 'bg-bg-tertiary border-accent'
   )}>
   <div
    onClick={handleSelect}
    className={cn('flex justify-between items-center hover:border-accent')}>
    <div className='flex gap-2'>
     <Check className={cn('w-6 h-6 text-accent opacity-20 hover:text-accent-bright', isSelected && 'opacity-100')} />
     {textVariant.title}
    </div>
    <InfoIcon
     id='text-info'
     className={cn('cursor-pointer w-6 h-6 text-accent hover:text-accent-bright')}
    />
    <Tooltip
     anchorSelect='#text-info'
     opacity={1}
     className='w-max'
     style={{ backgroundColor: 'white', color: '#1A1A1A' }}
     place='top-end'>
     <>
      <span className='font-bold text-xl'>{textVariant.title}</span>
      <p className='font-semibold text-lg'>
       Add custom text to the design <br /> (like your name or a slogan)
      </p>
     </>
    </Tooltip>
   </div>
   {isSelected && <TextForm />}
  </div>
 )
}

export default Text
