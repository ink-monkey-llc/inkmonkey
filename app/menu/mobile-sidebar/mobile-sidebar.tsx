'use client'
import React, { useRef } from 'react'
import { cn } from '../../../utils/cn'
import { useOnClickOutside } from 'usehooks-ts'
import { HamburgerIcon } from '@/app/icons/hamburger'
import { Close } from '@/app/icons/close'
import { useAtom, atom } from 'jotai'

const mobileSidebarAtom = atom(false)

function MobileSidebar({ children }: { children: React.ReactNode }) {
 const [open, setOpen] = useAtom(mobileSidebarAtom)
 const ref = useRef<HTMLDivElement>(null)
 //  const [open, setOpen] = useState(false)
 useOnClickOutside(ref, () => setOpen(false))

 return (
  <div className='h-[var(--view-height)]  fixed top-[96px] flex flex-col items-start justify-start bg-bg-secondary min-[768px]:hidden w-12 z-50'>
   <HamburgerIcon
    onClick={() => setOpen(!open)}
    className='w-12 h-12 p-2 text-accent cursor-pointer ml-auto'
   />
   <div
    ref={ref}
    className={cn('absolute h-[var(--view-height)] bg-bg-secondary z-50 animate-slide w-[60vw] -translate-x-full ', open && 'translate-x-0')}>
    <div className='flex items-center justify-end w-full'>
     {open ? (
      <Close
       onClick={() => setOpen(false)}
       className='w-12 h-12 p-2 text-accent cursor-pointer '
      />
     ) : (
      <HamburgerIcon
       onClick={() => setOpen(!open)}
       className='w-12 h-12 p-2 text-accent cursor-pointer ml-auto'
      />
     )}
    </div>
    <div className={cn('opacity-0', open && 'opacity-100 animate-slide')}>{children}</div>
   </div>
  </div>
 )
}

export default MobileSidebar
