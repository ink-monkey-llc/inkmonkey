import { InfoIcon } from '@/app/icons/info'
import { Check } from '@/app/icons/check'
import { ProductVariant } from '@/lib/shopify/types'
import React from 'react'
import { Tooltip } from 'react-tooltip'
import { cn } from '@/app/utils/cn'
import BusinessForm from './business-form'
import { containsId } from '@/app/utils/helpers'
import { useAtom } from 'jotai'
import { selectedVariantAtom } from '@/app/providers/atoms'

type BusinessProps = {
 variants: ProductVariant[]
 selectedLogoOption: string | null
 setSelectedLogoOption: (option: string | null) => void
}

function Business({ variants, selectedLogoOption, setSelectedLogoOption }: BusinessProps) {
 const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)
 const handleSelect = () => {
  setSelectedVariant(isSelected ? null : variants[0])
 }

 const isSelected = selectedVariant?.id ? containsId(selectedVariant?.id, variants) : false

 return (
  <div
   className={cn('flex flex-col border-2 border-accent-tr rounded-md px-2 py-1 bg-bg-secondary cursor-pointer', isSelected && 'bg-bg-tertiary border-accent')}>
   <div
    onClick={handleSelect}
    className={cn('flex justify-between items-center hover:border-accent', isSelected && 'bg-bg-tertiary border-accent')}>
    <div className='flex gap-2 items-center'>
     <Check className={cn('w-6 h-6 text-accent opacity-20 hover:text-accent-bright', isSelected && 'opacity-100')} />
     <h2>Business Info / Advertisement</h2>
    </div>
    <InfoIcon
     id='business-info'
     className='cursor-pointer w-6 h-6 text-accent hover:text-accent-bright'
    />
    <Tooltip
     anchorSelect='#business-info'
     opacity={1}
     style={{ backgroundColor: 'white', color: '#1A1A1A' }}
     className='w-max'
     place='top-end'>
     <>
      <span className='font-bold text-xl'>Business Info / Advertisement</span>

      <p className='font-semibold text-lg'>
       Add your business info to the design, <br />
       with or without a logo
      </p>
     </>
    </Tooltip>
   </div>
   {isSelected && (
    <BusinessForm
     selectedLogoOption={selectedLogoOption}
     setSelectedLogoOption={setSelectedLogoOption}
    />
   )}
  </div>
 )
}

export default Business

// {variants.map((variant) => (
//   <div key={variant.id}>{variant.title}</div>
//  ))}
