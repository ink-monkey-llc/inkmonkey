import React from 'react'
import { cn } from '@/app/utils/cn'
import type { ProductOption } from '@/lib/shopify/types'

type VariantItemProps = {
 setSelectedOptions: (variant: Record<string, string>) => void
 selectedOptions: Record<string, string>
 option: ProductOption
 value: string
}

function VariantItem({ value, option, setSelectedOptions, selectedOptions }: VariantItemProps) {
 const handleClick = () => {
  setSelectedOptions({ ...selectedOptions, [option.name]: value })
 }
 const isSelected = selectedOptions[option.name] === value
 return (
  <div
   onClick={handleClick}
   className={cn('flex p-2 w-max border border-bg-tertiary cursor-pointer', isSelected && 'border-accent')}
   key={value}>
   <h3>{value}</h3>
  </div>
 )
}

export default VariantItem
