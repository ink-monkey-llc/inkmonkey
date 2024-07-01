'use client'

import React, { useRef, useEffect, ElementRef, useState } from 'react'
import { cn } from '../utils/cn'
import { useOnClickOutside } from 'usehooks-ts'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'
import '@/app/styles/modal.css'

function Modal({ children }: { children: React.ReactNode }) {
 const [close, setClose] = useState(false)
 const router = useRouter()
 const modalRef = useRef<ElementRef<'dialog'>>(null)
 const containerRef = useRef<ElementRef<'div'>>(null)

 useOnClickOutside(containerRef, () => onDismiss())

 useEffect(() => {
  if (!modalRef.current?.open) {
   modalRef.current?.showModal()
  }
 }, [])

 const onDismiss = () => {
  setClose(true)
  setTimeout(() => {
   router.back()
  }, 500)
 }
 return createPortal(
  <dialog
   ref={modalRef}
   className={cn('modal', close && 'close')}
   onClose={onDismiss}>
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
