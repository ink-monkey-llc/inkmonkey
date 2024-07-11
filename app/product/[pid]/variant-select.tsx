import React, { useState } from 'react'
import type { ProductOption } from '@/lib/shopify/types'
import Chevron, { Direction } from '@/app/icons/chevron'
import { cn } from '@/app/utils/cn'
import '@/app/styles/sort.css'

type VariantSelectProps = {
 setSelectedOptions: (variant: Record<string, string>) => void
 selectedOptions: Record<string, string>
 option: ProductOption
}

type SelectOptionProps = {
 value: string
 option: ProductOption
 setSelectedOptions: (variant: Record<string, string>) => void
 selectedOptions: Record<string, string>
}

function SelectOption({ value, option, setSelectedOptions, selectedOptions }: SelectOptionProps) {
 const handleClick = () => {
  setSelectedOptions({ ...selectedOptions, [option.name]: value })
 }
 const isSelected = selectedOptions[option.name] === value
 return (
  <div
   onClick={handleClick}
   className={cn('flex px-3 py-1 cursor-pointer hover:bg-bg-secondary', isSelected && 'bg-bg-secondary')}
   key={value}>
   <h3>{value}</h3>
  </div>
 )
}

function VariantSelect({ option, setSelectedOptions, selectedOptions }: VariantSelectProps) {
 const [open, setOpen] = useState(false)
 const handleClick = () => {
  setOpen(!open)
 }

 return (
  <div
   onClick={handleClick}
   className=' relative'
   key={option.id}>
   <h3>{option.name}</h3>
   <div className='bg-bg-tertiary rounded-md px-2 py-1 cursor-pointer mb-1 flex justify-between items-center text-lg border-2 border-accent'>
    {selectedOptions[option.name]}
    <Chevron
     className='w-6 h-6 text-accent'
     direction={open ? Direction.Up : Direction.Down}
    />
   </div>

   <div className={cn('bg-bg-tertiary rounded-md px-1 py-1 cursor-pointer absolute z-20 w-full', open ? 'fade-in' : 'fade-out')}>
    {option.values.map((value) => (
     <SelectOption
      setSelectedOptions={setSelectedOptions}
      selectedOptions={selectedOptions}
      option={option}
      value={value}
      key={value}
     />
    ))}
   </div>
  </div>
 )
}

export default VariantSelect
