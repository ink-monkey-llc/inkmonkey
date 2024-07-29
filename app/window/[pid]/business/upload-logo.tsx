import React, { useState } from 'react'
import { Alert } from '@/app/icons/alert'
import { Tooltip } from 'react-tooltip'
import { useAtom } from 'jotai'
import { describeLogoAtom, selectedLogoOptionAtom } from '@/app/providers/atoms'
import FileInput from './file-input'
import DescribeLogo from './describe-logo'

type UploadLogoProps = {}

function UploadLogo({}: UploadLogoProps) {
 const [selectedLogoOption, setSelectedLogoOption] = useAtom(selectedLogoOptionAtom)
 const [describeLogo, setDescribeLogo] = useAtom(describeLogoAtom)
 const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSelectedLogoOption(e.target.checked ? e.target.name : null)
 }

 const isDescribe = selectedLogoOption === 'design'

 return (
  <div className='flex flex-col gap-1 mt-3 pt-1 border-t border-accent-tr mb-1'>
   <div className='flex justify-between w-full'>
    <p>
     Logo <span className='text-sm'>(optional)</span>:
    </p>
    <Alert
     id='logo-alert'
     className='w-6 h-6 text-accent-bright'
    />
   </div>
   <div className='flex gap-2'>
    <input
     onChange={(e) => handleSelect(e)}
     checked={selectedLogoOption === 'ready'}
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
     checked={selectedLogoOption === 'jpeg'}
     onChange={(e) => handleSelect(e)}
     type='checkbox'
     id='jpeg'
     name='jpeg'
     className='w-4 h-4 text-accent'
    />
    <label
     htmlFor='jpeg'
     className='text-txt-secondary text-sm'>
     Logo is not a vector image or high resolution .PNG
    </label>
   </div>
   <div className='flex gap-2'>
    <input
     checked={selectedLogoOption === 'design'}
     onChange={(e) => handleSelect(e)}
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
   {isDescribe ? <DescribeLogo /> : <FileInput />}
   <Tooltip
    anchorSelect='#logo-alert'
    opacity={1}
    className='w-max'
    style={{ backgroundColor: 'white', color: '#1A1A1A' }}
    place='top-end'>
    <>
     <span className='font-bold text-xl'>Logo Image Options:</span>
     <ul className='max-w-[70vw] list-outside list-disc flex flex-col gap-2 pl-4'>
      <li className='font-semibold text-lg'>A print-ready logo must be a vector image (. .svg, .ai, .pdf, etc.) or a high resolution .PNG file.</li>
      <li className='font-semibold text-lg'>
       If you have a logo that is not a vector image, we will remake it as a vector image for printing. This will take longer and cost more than a vector image.
      </li>
      <li className='font-semibold text-lg'>
       If you would like a logo designed, choose that option and describe it below. We do charge an extra fee for logo design.
      </li>
     </ul>
    </>
   </Tooltip>
  </div>
 )
}

export default UploadLogo
