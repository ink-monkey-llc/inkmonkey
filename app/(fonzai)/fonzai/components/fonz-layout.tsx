'use client'
import React from 'react'
import { useWS } from '../hooks/useWS'
import { cn } from '@/utils/cn'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'

function FonzLayout({ children }: { children: React.ReactNode }) {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 useWS()
 return <div className={cn('h-[var(--view-height)] w-full flex bg-bg-primary', isMobile && 'flex-col')}>{children}</div>
}

export default FonzLayout
