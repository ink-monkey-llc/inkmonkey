'use client'

import React, { useState } from 'react'
import { uploadCustomDesign } from '@/app/actions/images'
import { ErrorToast } from '@/app/toast/error'
import Disclaimer from './disclaimer'

function FileInput({
  setImageData,
  imageData
}: {
  setImageData: (data: { publicID: string; url: string; secure_url: string }) => void
  imageData: { publicID: string; url: string; secure_url: string }
}) {
  const [uploading, setUploading] = useState(false)

  const [selected, setSelected] = useState(false)

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
    const files = e.target.files
    if (files && files.length > 0) {
      const dataUrl = await generateDataUrl(files[0])
      const res = await uploadCustomDesign({ dataUrl, fileName: files[0].name, fileSize: files[0].size })
      if (res.error) {
        ErrorToast({ msg: 'Image upload failed, please try again' })
        console.log('error:', res.error)
        setUploading(false)
        return { status: 'error' }
      } else {
        if (!res.imgData) return { status: 'error' }
        setImageData(res.imgData)
        console.log('success:', res.imgData)
        setUploading(false)
        setSelected(true)
        return { status: 'success', imgData: res.imgData }
      }
    }
  }
  return (
    <div className='px-2 md:w-2/3'>
      {!selected && <Disclaimer />}
      <label htmlFor="upload" className="text-sm">
       {!selected ? 'Select your design file' : 'Design uploaded'}
      </label>
      <input
        accept="image/*"
        onChange={handleChange}
        id="upload"
        className="w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary"
        type="file"
      />
    </div>
  )
}

export default FileInput
