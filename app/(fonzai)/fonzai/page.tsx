'use client'
import { FonzProvider } from '@/app/providers/fonz-provider'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { cn } from '@/utils/cn'
import { useWS } from '@/app/hooks/useWS'
import Controls from './ui/controls/controls'
import History from './ui/history/history'
import ImageBox from './ui/image/imagebox'

function Fonz({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
 useWS()
 const { modal } = searchParams
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 return (
  <main className={cn('h-[var(--view-height)] w-full flex bg-bg-primary', isMobile && 'flex-col')}>
   <FonzProvider>
    <Controls />
    <ImageBox />
    <History />
    {/* <StyleList /> */}
    {/* {modal === 'recs' && <RecsModal />} */}
   </FonzProvider>
  </main>
 )
}

export default Fonz
