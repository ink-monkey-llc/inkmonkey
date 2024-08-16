'use client'
import React, { useState } from 'react'
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useInteractions, useTransitionStyles } from '@floating-ui/react'
import { cn } from '@/utils/cn'

function FloatMenu({ children, target }: { children: React.ReactNode; target: React.ReactNode }) {
 const [open, setOpen] = useState(false)
 const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
  open: open,
  placement: 'bottom-start',
  onOpenChange: setOpen,
  middleware: [
   offset({
    mainAxis: -2,
   }),
   flip(),
   shift(),
  ],
  whileElementsMounted: autoUpdate,
 })
 const click = useClick(context)
 const dismiss = useDismiss(context)
 const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss])
 const { isMounted, styles } = useTransitionStyles(context)
 return (
  <>
   <div
    ref={refs.setReference}
    {...getReferenceProps()}>
    <div className={cn(isMounted && 'bg-bg-primary')}>{target}</div>
   </div>
   {isMounted && (
    <div
     {...getFloatingProps()}
     ref={refs.setFloating}
     style={{ ...styles, ...floatingStyles }}>
     {children}
    </div>
   )}
  </>
 )
}

export default FloatMenu
