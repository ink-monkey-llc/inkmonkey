import React from 'react'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { promptImgDataAtom, imagePromptSelectedAtom } from '@/app/providers/fonz-atoms'

function ImagePrompt({ imgSrc, imgAlt }: { imgSrc: string; imgAlt: string }) {
 const [promptImgData, setPromptImgData] = useAtom(promptImgDataAtom)
 const [selected, setSelected] = useAtom(imagePromptSelectedAtom)
 const handleClear = () => {
  setPromptImgData({ publicID: '', url: '', secure_url: '' })
  setSelected(false)
 }

 return (
  <div className='flex-col w-full justify-center items-center'>
   <Image
    className='m-auto object-contain'
    src={imgSrc}
    alt={imgAlt ?? 'Alt text'}
    width={250}
    height={250}
   />
   <div
    onClick={handleClear}
    className='cursor-pointer px-2 mt-2 text-sm border-2 border-txt-secondary rounded-md w-max m-auto text-txt-secondary'>
    Clear image
   </div>
  </div>
 )
}

export default ImagePrompt
