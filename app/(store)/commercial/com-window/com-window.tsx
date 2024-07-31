'use client'
import React from 'react'
import ComCarousel from './com-carousel'
import ComContent from './com-content'

function ComWindow() {
 return (
  <div className='w-full flex gap-8 pt-8 bg-com-bg  bg-cover pb-12 border-t-8 border-accent-tr relative '>
   <ComCarousel />
   <ComContent />
  </div>
 )
}

export default ComWindow
