import React from 'react'
import { cn } from '@/utils/cn'

function SurveyProgress({ progress }: { progress: number }) {
 const showProgress = progress > 0 ? true : false
 return (
  <div
   className={cn(
    'sticky border-2 border-txt-secondary rounded-md w-full mx-auto mt-2 bg-black hidden top-[100px] sm:w-[600px] sm:fixed sm:bottom-3 sm:top-auto md:sticky md:top-[100px]',
    showProgress && 'block'
   )}>
   <div className='border-b-2 border-txt-secondary flex justify-center '>
    <span className=' px-2 text-sm'>Progress: {progress}%</span>
   </div>
   <div
    style={{ width: `${progress}%` }}
    className='h-4 bg-txt-secondary border-t-2 border-txt-secondary w-0'></div>
  </div>
 )
}

export default SurveyProgress
