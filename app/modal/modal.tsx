'use client'

import React, { useRef, useEffect, ElementRef, useState, use } from 'react'
import { cn } from '../utils/cn'
import { useOnClickOutside } from 'usehooks-ts'
import { useRouter, usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'
import { useAtom } from 'jotai'
import { modalIsOpenAtom } from '@/app/providers/atoms'
import '@/app/styles/modal.css'

function Modal({ children }: { children: React.ReactNode }) {
 // const [isOpen, setIsOpen] = useAtom(modalIsOpenAtom)
 const [close, setClose] = useState(false)
 const router = useRouter()
 const modalRef = useRef<ElementRef<'dialog'>>(null)
 const containerRef = useRef<ElementRef<'div'>>(null)
 const pathname = usePathname()
 useOnClickOutside(containerRef, () => onDismiss())
 console.log('pathname:', pathname)

 useEffect(() => {
  if (!modalRef.current?.open) {
   modalRef.current?.showModal()
  }
 }, [pathname])

 const onDismiss = () => {
  setClose(true)
  setTimeout(() => {
   modalRef.current?.close()
   router.back()
  }, 500)
 }

 return createPortal(
  <dialog
   ref={modalRef}
   className={cn('modal z-50', close && 'close')}>
   <div
    className='w-full h-full'
    ref={containerRef}>
    {children}
   </div>
   <button onClick={onDismiss}>Close</button>
  </dialog>,
  document.getElementById('modal-root')!
 )
}

export default Modal
