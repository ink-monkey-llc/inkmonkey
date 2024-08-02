import React, { useEffect, useState } from 'react'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { cn } from '@/utils/cn'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import Logo from '../logo'
import ModOption from './mod-option'
import InfoBox from './info-box'
import useModOptions from '@/app/hooks/useModOptions'
import { useAtom } from 'jotai'
import { isLoadingAtom, generatedAtom } from '@/app/providers/fonz-atoms'
import { VariantById } from '@/lib/shopify/types'

function Modify() {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
 const [generated] = useAtom(generatedAtom)
 const optionData = useModOptions()
 const [currentVariant, setCurrentVariant] = useState<VariantById>()
 const isUpscaled = generated && generated.isUpscaled

 useEffect(() => {
  const fetchVariant = async () => {
   const variant: VariantById = await storeApi.getVariantById(generated.productId)
   setCurrentVariant(variant)
  }
  fetchVariant()
 }, [generated])

 console.log('currentVariant:', currentVariant)

 return (
  <div className={cn('px-2', isLoading && 'opacity-30 pointer-events-none', isMobile && 'pb-4')}>
   <Logo />
   <InfoBox />
   <ModOption
    price={currentVariant?.price?.amount}
    option={optionData.purchase}
   />
   <div className={cn(isUpscaled && 'opacity-40 pointer-events-none')}>
    <ModOption option={optionData.variations} />
    <ModOption option={optionData.upscale} />
   </div>
   <ModOption option={optionData.back} />
  </div>
 )
}

export default Modify
