'use client'
import React from 'react'
import { ChevronCirc } from '../icons/chevron-circ'
import { cn } from '@/utils/cn'
import { useWindowScroll } from '../hooks/useWindowScroll'

function ScrollUpBtn() {
 const [{ x, y }, scrollTo] = useWindowScroll()
 const handleScroll = () => {
  scrollTo({ top: 0, behavior: 'smooth' })
 }
 return (
  <div
   className={cn(
    'fixed bottom-8 right-8 z-50 cursor-pointer flex items-center justify-center rounded-full bg-backdrop p-1 shadow-md shadow-black/40 opacity-0 pointer-events-none transition-all',
    y && y > 100 && 'opacity-100 pointer-events-auto'
   )}
   onClick={handleScroll}>
   <ChevronCirc
    dir='up'
    className='w-12 h-12 text-white cursor-pointer transition-all hover:text-accent hover:scale-110'
   />
  </div>
 )
}

export default ScrollUpBtn
