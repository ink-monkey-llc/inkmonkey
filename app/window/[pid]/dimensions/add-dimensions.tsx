import React from 'react'
import { cn } from '@/app/utils/cn'
import YearSelect from './add-vehicle/year-select'
import MakeModel from './add-vehicle/make-model'
import Doors from './add-vehicle/doors'
import WindowDimensions from './add-vehicle/window-dimensions'
// import '@/app/styles/dimensions.css'

function AddDimensions({ hide }: { hide: boolean }) {
 return (
  <div className={cn('flex flex-col add', hide && 'hidden')}>
   <p className='text-xs'>Please enter your vehicle information and the measurements of its back window.</p>
   <YearSelect />
   <MakeModel />
   <Doors />
   <WindowDimensions />
  </div>
 )
}

export default AddDimensions
