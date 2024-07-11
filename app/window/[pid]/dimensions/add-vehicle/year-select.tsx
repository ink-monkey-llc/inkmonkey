import React, { useState } from 'react'
import Chevron, { Direction } from '@/app/icons/chevron'
import { useAtom } from 'jotai'
import { vehicleYearAtom } from '@/app/providers/atoms'

function YearSelect() {
 const [yearOpen, setYearOpen] = useState(false)
 const [vehicleYear, setVehicleYear] = useAtom(vehicleYearAtom)
 const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  e.preventDefault()
  setYearOpen(!yearOpen)
 }
 return (
  <div
   onClick={(e) => onClick(e)}
   className='flex flex-col'>
   <label className='text-txt-secondary text-sm'>Vehicle Year:</label>
   <div className='flex gap-1 px-2 w-max items-center rounded-md border border-slate-tr  bg-bg-tertiary text-txt-secondary'>
    {vehicleYear}
    <Chevron
     className='w-4 h-4 text-txt-secondary'
     direction={yearOpen ? Direction.Up : Direction.Down}
    />
   </div>
  </div>
 )
}

export default YearSelect
