import React from 'react'
import { cn } from '@/utils/cn'
import { formatPrice } from '@/utils/helpers'
import { useAtom } from 'jotai'
import { selectedImageAtom, generatedAtom } from '@/app/providers/fonz-atoms'

type ModOptionProps = {
 price?: string
 option: {
  id: string
  label: string
  goBack?: () => void
  makeVariations?: () => void
  upscale?: () => void
  addProductToCart?: any
 }
}

function ModOption({ option, price }: ModOptionProps) {
 const [selectedImage] = useAtom(selectedImageAtom)
 const [generated] = useAtom(generatedAtom)
 const isAtc = option.id === 'purchase'
 const isSingle = selectedImage.img?.label !== '' || generated.isUpscaled
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

 const totalPrice = formatPrice(Number(price))

 return (
  <div className='relative'>
   <div
    onClick={handleClick}
    className={cn(
     'bg-bg-tertiary mx-2 mt-2 py-2 px-2 rounded-md flex items-center justify-center pr-4 cursor-pointer border border-transparent hover:border-accent ',
     isAtc && 'flex-col text-accent'
    )}>
    {isAtc && isSingle && <p className=''>{totalPrice}</p>}
    <p className='sm:text-sm'>{option.label}</p>
   </div>
  </div>
 )
}

export default ModOption
