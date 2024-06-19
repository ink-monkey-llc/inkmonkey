'use server'
import type { Image } from '@/lib/shopify/types'
import { getPlaiceholder } from 'plaiceholder'

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
