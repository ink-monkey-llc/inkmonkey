import React from 'react'
import { cn } from '@/utils/cn'
import productApi from '@/lib/shopify/storefront-api/products'
import { useAtom } from 'jotai'
import { Option } from '@/app/(fonzai)/data/options'
import { selectedFFAtom, productAtom, showSecVarAtom, selectedSizeAtom, selectedSecVarAtom } from '@/app/providers/fonz-atoms'

type FormFactorItemProps = {
 formFactor: Option
 setOpen: (open: boolean) => void
}

function FormFactorItem({ formFactor, setOpen }: FormFactorItemProps) {
 const [product, setProduct] = useAtom(productAtom)
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [showSecVar, setShowSecVar] = useAtom(showSecVarAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [selectedSecVar, setSelectedSecVar] = useAtom(selectedSecVarAtom)

 const handleSelect = async () => {
  const resProduct = await productApi.getProductByHandle({ handle: formFactor.handle })
  console.log('resProduct:', resProduct)
  setProduct(resProduct)
  setSelectedFF(formFactor)
  if (formFactor.variants.length === 1) {
   setSelectedSize(formFactor.variants[0])
  }
  setShowSecVar(false)
  setOpen(false)
 }

 return (
  <div
   onClick={handleSelect}
   key={formFactor.id}
   className={cn('flex justify-between items-center p-2 border-b border-bg-primary cursor-pointer', formFactor.disabled && 'opacity-30 pointer-events-none')}>
   <div>
    <span>{formFactor.label}</span>
    {formFactor.disabled && <p className='text-sm'>Coming Soon</p>}
   </div>
  </div>
 )
}

export default FormFactorItem
