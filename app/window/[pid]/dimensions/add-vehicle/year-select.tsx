import React, { useState, useRef } from 'react'
import Chevron, { Direction } from '@/app/icons/chevron'
import { useOnClickOutside } from 'usehooks-ts'
import { getYears } from '@/app/utils/helpers'
import { useAtom } from 'jotai'
import { vehicleYearAtom } from '@/app/providers/atoms'
import { cn } from '@/app/utils/cn'
import '@/app/styles/sort.css'

function YearSelect() {
 const [yearOpen, setYearOpen] = useState(false)
 const [vehicleYear, setVehicleYear] = useAtom(vehicleYearAtom)
 const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  e.stopPropagation()
  setYearOpen(!yearOpen)
 }
 const ref = useRef<HTMLDivElement>(null)
 useOnClickOutside(ref, () => setYearOpen(false))
 const years = getYears()
 return (
  <div className='relative'>
   <div
    onClick={(e) => onClick(e)}
    className='flex flex-col mt-2'>
    <label className='text-txt-secondary text-sm'>Vehicle Year:</label>
    <div className='flex gap-1 px-2 w-max items-center rounded-md border border-slate-tr  bg-bg-tertiary text-txt-secondary'>
     {vehicleYear}
     <Chevron
      className='w-4 h-4 text-txt-secondary'
      direction={yearOpen ? Direction.Up : Direction.Down}
     />
    </div>
   </div>
   <div
    ref={ref}
    className={cn(
     'bg-bg-secondary rounded-md px-1 py-1 cursor-pointer absolute z-20 w-max max-h-48 mt-1 overflow-y-scroll',
     yearOpen ? 'fade-in' : 'fade-out'
    )}>
    {years.map((year) => (
     <div
      onClick={() => {
       setYearOpen(false)
       setVehicleYear(year)
      }}
      key={year}
      className='flex px-1 py-1 cursor-pointer hover:bg-bg-tertiary'>
      <h3>{year}</h3>
     </div>
    ))}
   </div>
  </div>
 )
}

export default YearSelect
