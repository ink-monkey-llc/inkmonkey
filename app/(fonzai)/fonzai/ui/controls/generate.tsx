import React from 'react'
import { cn } from '@/utils/cn'
import { useGenerate } from '@/app/hooks/useGenerate'
import { useRouter } from 'next/navigation'

import GenButton from './gen-button'
import FonzPlus from '@/app/icons/fonz-plus'

function Generate() {
 const router = useRouter()
 const { handleGenerate, isLoading } = useGenerate()
 const handleSubmit = async () => {
  handleGenerate()
 }

 return (
  <div
   onClick={handleSubmit}
   className={cn('z-50 p-4 pb-8 border-t border-bg-tertiary bg-bg-primary sticky bottom-0', isLoading && 'opacity-40 pointer-events-none')}>
   <GenButton>
    <div className='flex gap-2 font-semibold justify-center'>
     <FonzPlus />
     Generate
    </div>
   </GenButton>
  </div>
 )
}

export default Generate
