'use client'
import React from 'react'
import { cn } from '@/utils/cn'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import NewDesign from './new-design'
import GenerateImage from './product/generate-image'
import Generate from './generate'
import Modify from './modify/modify'
import { useAtom } from 'jotai'
import { generatedAtom } from '@/app/providers/fonz-atoms'

function Controls() {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 const [generated, setGenerated] = useAtom(generatedAtom)
 const isModify = generated.productId && generated.productId != ''
 return (
  <div className={cn('w-1/4 pt-2 relative flex flex-col justify-between ', isMobile && 'w-full')}>
   {isModify ? <Modify /> : <GenerateImage />}
   {isModify ? <NewDesign /> : <Generate />}
  </div>
 )
}

export default Controls
