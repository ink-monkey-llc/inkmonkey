import React from 'react'
import { useAtom } from 'jotai'
import { uploadLogo } from '@/app/actions/images'
import Image from 'next/image'
import { selectedLogoFileAtom, logoDataUrlAtom } from '@/app/providers/atoms'

function FileInput() {
 const [file, setFile] = useAtom(selectedLogoFileAtom)
 const [dataUrl, setDataUrl] = useAtom(logoDataUrlAtom)
 function generateDataUrl(file: File, callback: (imageUrl: string) => void) {
  const reader = new FileReader()
  reader.onload = () => callback(reader.result as string)
  reader.readAsDataURL(file)
 }
 const handleReset = () => {
  setDataUrl('')
  setFile(null)
 }
 const handleUpload = async () => {
  if (file) {
   const res = await uploadLogo({ dataUrl, fileName: file.name, fileSize: file.size })
   if (res.error) {
    console.log('error:', res.error)
   } else {
    console.log('success:', res.imgData)
   }
  }
 }
 return (
  <>
   {dataUrl ? (
    <div className=' flex-col w-full h-full bg-bg-tertiary rounded-md flex items-center gap-2 mt-2'>
     <Image
      src={dataUrl}
      alt='logo'
      width={150}
      height={150}
     />
     <div>
      <p
       onClick={handleReset}
       className='cursor-pointer border border-red-400 rounded-md px-2 mb-1 text-sm text-red-400 hover:bg-red-400/20 hover:text-red-500 hover:border-red-500 transition-all'>
       Reset image
      </p>
     </div>
    </div>
   ) : (
    <>
     <label
      htmlFor='logo'
      className='text-sm'>
      Upload logo image:
     </label>
     <input
      accept='image/*'
      onChange={(e) => {
       const files = e.target.files
       if (files && files.length > 0) {
        setFile(files[0])
        generateDataUrl(files[0], setDataUrl)
       }
      }}
      id='logo'
      className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
      placeholder='Upload a logo'
      type='file'
     />
    </>
   )}
  </>
 )
}

export default FileInput
