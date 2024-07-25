// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import ComContent from './com-content'
// import Lightbox from 'yet-another-react-lightbox'
// import NextImage from '../product/[pid]/next-image'
// import { Inline, Slideshow } from 'yet-another-react-lightbox/plugins'
// import 'yet-another-react-lightbox/styles.css'
// import 'yet-another-react-lightbox/plugins/thumbnails.css'
// import imgs from '../content/commercial-imgs'
// import { cn } from '../utils/cn'
// import { smooch } from '@/lib/fonts'

// function ComWindow() {
//  return (
//   <div className='w-full flex gap-8 pt-8 bg-com-bg  bg-cover pb-12 border-t-8 border-accent-tr '>
//    <div className='m-auto flex flex-col xl:flex-row gap-8 w-5/6'>
//     <div className='h-[80vh] w-full xl:w-3/5'>
//      <Lightbox
//       animation={{ fade: 500, swipe: 1000, easing: { swipe: 'cubic-bezier(0.65, 0, 0.35, 1)' } }}
//       plugins={[Inline, Slideshow]}
//       slideshow={{ autoplay: true, delay: 5000 }}
//       open={true}
//       styles={{ container: { backgroundColor: 'transparent' }, toolbar: { display: 'none' } }}
//       slides={imgs}
//       render={{ slide: NextImage, buttonPrev: () => null, buttonNext: () => null }}
//       noScroll={{ disabled: true }}
//      />
//     </div>
//     <div className='w-3/4 m-auto xl:w-2/5 justify-center flex flex-col  '>
//      <ComContent />
//     </div>
//    </div>
//   </div>
//  )
// }

// export default ComWindow
