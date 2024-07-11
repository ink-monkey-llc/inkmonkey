import React, { useState, useRef } from 'react'
import Chevron, { Direction } from '@/app/icons/chevron'
import { useOnClickOutside } from 'usehooks-ts'
import { getYears } from '@/app/utils/helpers'
import { useAtom } from 'jotai'
import { doorsAtom } from '@/app/providers/atoms'
import { cn } from '@/app/utils/cn'
import '@/app/styles/sort.css'

function Doors() {
 const [doorsOpen, setDoorsOpen] = useState(false)
 const [doors, setDoors] = useAtom(doorsAtom)
 const doorsOptions = [2, 4]
 const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  e.stopPropagation()
  setDoorsOpen(!doorsOpen)
 }
 const ref = useRef<HTMLDivElement>(null)
 useOnClickOutside(ref, () => setDoorsOpen(false))
 const years = getYears()
 return (
  <div className='relative'>
   <div
    onClick={(e) => onClick(e)}
    className='flex flex-col mt-1'>
    <label className='text-txt-secondary text-sm'>Doors:</label>
    <div className='flex gap-1 px-2 w-max items-center rounded-md border border-slate-tr bg-bg-tertiary text-txt-secondary'>
     {doors}
     <Chevron
      className='w-4 h-4 text-txt-secondary'
      direction={doorsOpen ? Direction.Up : Direction.Down}
     />
    </div>
   </div>
   <div
    ref={ref}
    className={cn(
     'bg-bg-secondary rounded-md px-1 py-1 cursor-pointer absolute z-20 min-w-[46px] max-h-48 mt-1 border border-slate-tr',
     doorsOpen ? 'fade-in' : 'fade-out'
    )}>
    {doorsOptions.map((opt) => (
     <div
      key={opt}
      className='flex px-1 py-1 cursor-pointer w-full hover:bg-bg-tertiary'>
      <h3>{opt}</h3>
     </div>
    ))}
   </div>
  </div>
 )
}

export default Doors
