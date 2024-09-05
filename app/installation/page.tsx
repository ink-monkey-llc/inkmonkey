import React from 'react'
import { YouTubeEmbed } from '@next/third-parties/google'

function Installation() {
 return (
  <div className='flex flex-col gap-4 p-8 m-auto w-max bg-bg-secondary rounded-md mt-8'>
   <h1 className='text-3xl font-semibold'>Installing your truck back window graphics</h1>
   <p className='text-txt-secondary max-w-[600px]'>
    Installing your truck back window graphics is a simple process that can be done in minutes. Follow these steps to ensure your window graphics are installed
    correctly:
   </p>
   <YouTubeEmbed
    videoid='0z6JxGT2t4A'
    params='rel=0&controls=1'
   />
  </div>
 )
}

export default Installation
