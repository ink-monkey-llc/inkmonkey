'use server'
import type { Image } from '@/lib/shopify/types'
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary'
import { getPlaiceholder } from 'plaiceholder'
import uploadImage from '@/lib/cloudinary'
import { FormEvent } from 'react'
import { error } from 'console'

export const getImage = async (src: string) => {
 const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()))
 const {
  metadata: { height, width },
  ...plaiceholder
 } = await getPlaiceholder(buffer, { size: 10 })

 return {
  ...plaiceholder,
  img: { src, height, width },
 }
}

export const imageWithPH = async (image: Image) => {
 const { base64, img } = await getImage(image.url)
 return {
  image: image,
  base64,
  img,
 }
}

export const uploadLogo = async (imgData: { dataUrl: string; fileName: string; fileSize: number }) => {
 const { dataUrl, fileName, fileSize } = imgData
 if (!dataUrl) {
  return { error: 'No image data' }
 }
 if (fileSize > 30000000) {
  return { error: 'File size is too large' }
 }
 const res = await uploadImage(dataUrl)
 //  console.log('res:', res)
 if (res.error) {
  return { error: res.error }
 }
 return { success: true, imgData: res }
}
