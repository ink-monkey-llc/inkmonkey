import React, { useState, useRef } from 'react'
import { cn } from '@/app/utils/cn'
import { Alert } from '@/app/icons/alert'
import { Tooltip } from 'react-tooltip'

function UploadLogo() {
 const ref = useRef<HTMLDivElement>(null)
 return (
  <div className='flex flex-col gap-1 pt-4'>
   <div className='flex justify-between w-full'>
    <label
     htmlFor='logo'
     className='text-txt-secondary text-sm'>
     Logo:
    </label>
    <Alert
     id='logo-alert'
     className='w-6 h-6 text-accent-bright'
    />
   </div>
   <div className='flex gap-2'>
    <input
     type='checkbox'
     name='ready'
     id='ready'
     className='w-4 h-4 text-accent'
    />
    <label
     htmlFor='ready'
     className='text-txt-secondary text-sm'>
     Logo is print-ready
    </label>
   </div>
   <div className='flex gap-2'>
    <input
     type='checkbox'
     id='jpeg'
     name='jpeg'
     className='w-4 h-4 text-accent'
    />
    <label
     htmlFor='jpeg'
     className='text-txt-secondary text-sm'>
     Logo is not a vector image
    </label>
   </div>
   <div className='flex gap-2'>
    <input
     type='checkbox'
     name='design'
     id='design'
     className='w-4 h-4 text-accent'
    />
    <label
     htmlFor='design'
     className='text-txt-secondary text-sm'>
     I need a logo designed
    </label>
   </div>

   <input
    id='logo'
    className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
    placeholder='Upload a logo'
    type='file'
   />
   <Tooltip
    anchorSelect='#logo-alert'
    opacity={1}
    className='w-max'
    style={{ backgroundColor: 'white', color: '#1A1A1A' }}
    place='top-end'>
    <>
     <span className='font-bold text-xl'>Logo Image Options:</span>
     <p className='font-semibold text-lg'>
      {/* TODO: Add logo image options */}
      Design comes as shown <br /> with no customizations
     </p>
    </>
   </Tooltip>
  </div>
 )
}

export default UploadLogo
