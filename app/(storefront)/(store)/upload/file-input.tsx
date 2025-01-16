'use client'

import React, { useState, useRef } from 'react'
import { uploadCustomDesign } from '@/app/actions/images'
import { ErrorToast } from '@/app/toast/error'
import { UploadIcon } from '@/app/icons/upload'
import { cn } from '@/utils/cn'

function FileInput({
  setImageData,
  imageData
}: {
  setImageData: (data: { publicID: string; url: string; secure_url: string }) => void
  imageData: { publicID: string; url: string; secure_url: string }
}) {
  const [uploading, setUploading] = useState(false)
  const [selected, setSelected] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const fileTypes = ['jpg', 'jpeg', 'png', 'svg', 'bmp', 'tiff', 'webp']

  const typeString = fileTypes.map((ext) => `.${ext}`).join(",");

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

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length < 1) {
      ErrorToast({ msg: 'Please select a file' })
      return
    }
    if (files.length > 1) {
      ErrorToast({ msg: 'Please select only one file' })
      return
    }
    handleUpload(files)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleUpload(droppedFiles);
  };

  const handleUpload = async (files: File[] | FileList) => {
    setUploading(true)
    const dataUrl = await generateDataUrl(files[0])
    const res = await uploadCustomDesign({ dataUrl, fileName: files[0].name, fileSize: files[0].size })
    if (res.error) {
      ErrorToast({ msg: 'Image upload failed, please try again' })
      console.log('error:', res.error)
      setUploading(false)
      return { status: 'error' }
    } else {
      if (!res.imgData) {
        ErrorToast({ msg: 'Image upload failed, please try again' })
        return { status: 'error' }
      }
      setImageData(res.imgData)
      setUploading(false)
      setSelected(true)
      return { status: 'success', imgData: res.imgData }
    }
  }


  return (
    <div className={cn('relative flex flex-col items-center justify-center h-full gap-2 px-2 w-full my-2')}>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e)}
        className='w-full h-full bg-bg-secondary bg-opacity-20 border-4 border-dashed border-slate-tr rounded-md p-2 flex flex-col items-center justify-center gap-2'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <p className='text-txt-primary text-center text-lg'>Drag and drop {!selected ? 'your design file here' : 'to choose a different image'}</p>
          {!selected && <UploadIcon className='w-10 h-10' />}
          <button type='button' onClick={handleButtonClick} className='bg-bg-secondary bg-opacity-20 border-2 border-accent  rounded-md p-2'>
            <p className='text-txt-primary'>Or click to select a file</p>
          </button>
        </div>
        <input
          type="file"
          id="files"
          name="files"
          multiple
          accept={typeString}
          ref={fileInputRef}
          className="hidden"
          onChange={handleChange}
          onClick={(event) => {
            // Reset the input value to allow selecting the same file again
            (event.target as HTMLInputElement).value = '';
          }}
        />
      </div>
    </ div>
  )
}

export default FileInput
