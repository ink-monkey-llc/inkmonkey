import React, { useState } from 'react'
import { cn } from '@/app/utils/cn'
import { getYears } from '@/app/utils/helpers'
import { useAtom } from 'jotai'
import { vehicleYearAtom } from '@/app/providers/atoms'
import YearSelect from './add-vehicle/year-select'

function AddDimensions() {
 const [yearOpen, setYearOpen] = useState(false)
 const [vehicleYear, setVehicleYear] = useAtom(vehicleYearAtom)
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log('e.target.value:', e.target.value)
 }
 const years = getYears()
 return (
  <div>
   <p className='text-sm'>Please enter your vehicle information and the measurements of its back window.</p>
   <YearSelect />
  </div>
 )
}

export default AddDimensions
