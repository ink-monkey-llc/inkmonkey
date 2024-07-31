import React from 'react'
import SideSide from './imgs/side-side'
import UpDown from './imgs/up-down'
import WindowImg from './imgs/window-img'
import { InfoIcon } from '@/app/icons/info'
import { Tooltip } from 'react-tooltip'
import { useAtom } from 'jotai'
import { sideAAtom, sideBAtom, sideCAtom } from '@/app/providers/atoms'

function WindowDimensions() {
 const [sideA, setSideA] = useAtom(sideAAtom)
 const [sideB, setSideB] = useAtom(sideBAtom)
 const [sideC, setSideC] = useAtom(sideCAtom)

 const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSideA(e.target.value)
 }
 const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSideB(e.target.value)
 }
 const handleChangeC = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSideC(e.target.value)
 }

 return (
  <div className='py-2'>
   <div className='mb-2 flex justify-between'>
    <p className='text-sm text-txt-secondary'>Window Measurements:</p>
    <InfoIcon
     id='window-info'
     className='cursor-pointer w-6 h-6 text-accent hover:text-accent-bright'
    />
    <Tooltip
     anchorSelect='#window-info'
     opacity={1}
     className='w-max'
     style={{ backgroundColor: 'white', color: '#1A1A1A' }}
     place='top-end'>
     <>
      <span className='font-bold text-xl'>Window Measurements</span>
      <p className='font-semibold text-lg'>
       Measure the width at the top, bottom,
       <br /> and the height of the window.
       <br />
       Measure from edge to edge. <br />
       Enter the measurements in inches.
      </p>
     </>
    </Tooltip>
   </div>
   <div className='flex gap-2 justify-center  px-4'>
    <div className='flex items-center gap-2'>
     <input
      value={sideB}
      onChange={handleChangeB}
      className='w-12 h-min rounded-md border border-slate-tr px-2 bg-bg-tertiary text-txt-primary'
      type='number'
      id='b'
      placeholder='0'
     />
     <UpDown />
    </div>
    <div className=' flex flex-col gap-2 items-center'>
     <input
      value={sideA}
      onChange={handleChangeA}
      className='w-12 rounded-md border border-slate-tr px-2 bg-bg-tertiary text-txt-primary'
      type='number'
      id='a'
      placeholder='0'
     />
     <SideSide />
     <WindowImg className='w-full m-auto' />
     <SideSide />
     <input
      value={sideC}
      onChange={handleChangeC}
      id='c'
      className='w-12 rounded-md border border-slate-tr px-2 bg-bg-tertiary text-txt-primary'
      type='number'
      placeholder='0'
     />
    </div>
   </div>
  </div>
 )
}

export default WindowDimensions
