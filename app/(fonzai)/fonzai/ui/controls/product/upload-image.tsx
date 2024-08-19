import React, { useState } from 'react'
import { uploadImagePrompt } from '@/app/actions/images'
import { useAtom } from 'jotai'
import ImagePrompt from './image-prompt'
import { imagePromptSelectedAtom, uploadingPromptImgAtom, promptImgDataAtom } from '@/app/providers/fonz-atoms'
import Spinner from '@/app/spinner/spinner'
import { ErrorToast } from '@/app/toast/error'

function UploadImage() {
 const [uploading, setUploading] = useAtom(uploadingPromptImgAtom)
 const [promptImgData, setPromptImgData] = useAtom(promptImgDataAtom)
 const [selected, setSelected] = useAtom(imagePromptSelectedAtom)

 async function generateDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
   const reader = new FileReader()
   reader.onload = () => {
    resolve(reader.result as string)
   }
   reader.onerror = () => {
    reject(new Error('There was an error reading the file.'))
   }
   reader.readAsDataURL(file)
  })
 }

 const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  setUploading(true)
  const files = e.target.files
  if (files && files.length > 0) {
   const dataUrl = await generateDataUrl(files[0])
   const res = await uploadImagePrompt({ dataUrl, fileName: files[0].name, fileSize: files[0].size })
   console.log('res:', res)
   if (res.error) {
    ErrorToast({ msg: 'Image upload failed, please try again' })
    console.log('error:', res.error)
    setUploading(false)
    return { status: 'error' }
   } else {
    if (!res.imgData) return { status: 'error' }
    setPromptImgData(res.imgData)
    console.log('success:', res.imgData)
    setUploading(false)
    setSelected(true)
    return { status: 'success', imgData: res.imgData }
   }
  }
 }

 return (
  <div className='relative flex flex-col gap-2 p-2 w-full'>
   {uploading && (
    <div className='absolute top-0 left-0 w-full h-full bg-backdrop-dark rounded-md flex justify-center items-center'>
     <Spinner
      noMargin
      bright
     />
    </div>
   )}
   <label
    className='pl-2 text-lg'
    htmlFor='image-upload'>
    {selected ? 'Your image prompt:' : 'Upload image prompt'}
   </label>
   {selected ? (
    <ImagePrompt
     imgSrc={promptImgData.url}
     imgAlt='prompt image'
    />
   ) : (
    <input
     onChange={handleChange}
     id='image-upload'
     name='image-upload'
     className='border-2 border-bg-tertiary rounded-md block text-sm text-txt-secondary
      file:mr-3 file:py-2 file:px-2
      file:rounded-l-md file:border-0
      file:text-sm file:font-semibold
      file:bg-bg-tertiary file:text-txt-primary
      hover:file:bg-bg-secondary file:cursor-pointer'
     type='file'
    />
   )}
  </div>
 )
}

export default UploadImage
