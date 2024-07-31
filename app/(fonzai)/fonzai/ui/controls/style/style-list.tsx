import React, { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { cn } from '@/utils/cn'
import StyleItem from './style-item'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { styleOptions } from '@/app/(fonzai)/data/style-options'
import { useAtom } from 'jotai'
import { styleOpenAtom } from '@/app/providers/fonz-atoms'

function StyleList() {
 const ref = useRef(null)

 const { isMobile } = useBreakPoints()

 const [styleOpen, setStyleOpen] = useAtom(styleOpenAtom)
 useOnClickOutside(ref, () => {
  setStyleOpen(false)
 })
 return (
  <>
   {styleOpen && (
    <dialog className='fixed left-0 top-0 w-full h-full bg-transparent z-[200] overflow-auto flex justify-center items-center'>
     <div
      ref={ref}
      className={cn(
       'bg-bg-tertiary rounded-md fixed p-2 grid grid-cols-3 gap-2 left-[23%] top-1/4 border border-bg-primary z-[200]',
       isMobile && 'left-[10%]'
      )}>
      {styleOptions.map((item) => (
       <StyleItem
        key={item.id}
        item={item}
       />
      ))}
     </div>
    </dialog>
   )}
  </>
 )
}

export default StyleList
