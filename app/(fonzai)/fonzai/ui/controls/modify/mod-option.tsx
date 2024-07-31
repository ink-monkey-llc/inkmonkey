import React, { use, useEffect } from 'react'
import { cn } from '@/utils/cn'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { cartDataAtom, cartContentsAtom, upscaleAndAddAtom } from '@/app/providers/fonz-atoms'

type ModOptionProps = {
 option: {
  id: string
  label: string
  goBack?: () => void
  makeVariations?: () => void
  upscale?: () => void
  addProductToCart?: any
 }
}

function ModOption({ option }: ModOptionProps) {
 const handleClick = () => {
  if (option.id === 'back') {
   option.goBack && option.goBack()
  }
  if (option.id === 'vars') {
   option.makeVariations && option.makeVariations()
  }
  if (option.id === 'upscale') {
   option.upscale && option.upscale()
  }
  if (option.id === 'purchase') {
   option.addProductToCart && option.addProductToCart()
  }
 }

 return (
  <div className='relative'>
   <div
    onClick={handleClick}
    className={cn(
     'bg-bg-tertiary mx-2 mt-2 py-2 px-2 rounded-md flex items-center justify-between pr-4 cursor-pointer border border-transparent hover:border-accent '
    )}>
    {option.label}
   </div>
  </div>
 )
}

export default ModOption
