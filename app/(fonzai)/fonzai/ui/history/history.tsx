'use client'
import React from 'react'
import { cn } from '@/utils/cn'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { useAtom } from 'jotai'
import { promptHistoryAtom } from '@/app/providers/fonz-atoms'
import HistoryItem from './history-item'
import MobileHistory from './mobile-history'

function HistList() {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 const [promptHistory] = useAtom(promptHistoryAtom)
 return (
  <div className={cn('w-48 flex flex-col justify-start gap-2 pl-2 overflow-y-scroll h-app', isMobile && 'flex-row h-28')}>
   <span className={cn('flex w-full justify-center pr-6')}>History</span>
   {promptHistory.map(
    (item, i) =>
     item.productId !== '' && (
      <HistoryItem
       key={i}
       item={item}
      />
     )
   )}
  </div>
 )
}

function History() {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 return <>{isMobile ? <MobileHistory /> : <HistList />}</>
}

export default History
