'use client'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { cn } from '@/utils/cn'
import { DevTools } from 'jotai-devtools'
import { useWS } from './hooks/useWS'
import Controls from './ui/controls/controls'
import History from './ui/history/history'
import ImageBox from './ui/image/imagebox'
import 'jotai-devtools/styles.css'

function Fonz({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
 useWS()
 const { modal } = searchParams
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 return (
  <main className={cn('h-[var(--view-height)] w-full flex bg-bg-primary', isMobile && 'flex-col')}>
   <DevTools />
   <Controls />
   <ImageBox />
   <History />
   {/* <StyleList /> */}
   {/* {modal === 'recs' && <RecsModal />} */}
  </main>
 )
}

export default Fonz
