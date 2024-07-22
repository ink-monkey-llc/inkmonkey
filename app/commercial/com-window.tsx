'use client'
import React from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import NextImage from '../product/[pid]/next-image'
import { Inline, Slideshow } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import imgs from '../content/commercial-imgs'
import { cn } from '../utils/cn'
import { smooch } from '@/lib/fonts'

function ComWindow() {
 return (
  <div className='w-full flex gap-8 pt-8 bg-com-bg  bg-cover pb-12 border-t-8 border-accent-tr '>
   <div className='m-auto flex flex-col xl:flex-row gap-8 w-5/6'>
    <div className='h-[80vh] w-full xl:w-3/5'>
     <Lightbox
      animation={{ fade: 500, swipe: 1000, easing: { swipe: 'cubic-bezier(0.65, 0, 0.35, 1)' } }}
      plugins={[Inline, Slideshow]}
      slideshow={{ autoplay: true, delay: 5000 }}
      open={true}
      styles={{ container: { backgroundColor: 'transparent' }, toolbar: { display: 'none' } }}
      slides={imgs}
      render={{ slide: NextImage, buttonPrev: () => null, buttonNext: () => null }}
      noScroll={{ disabled: true }}
     />
    </div>
    <div className='w-3/4 m-auto xl:w-2/5 justify-center flex flex-col  '>
     <h2 className={cn('text-6xl text-accent p-4 text-balance backdrop-blur-sm rounded-t-md', smooch.className)}>The Industry Leader in Window Graphics</h2>
     <div className='flex flex-col gap-4 p-4 backdrop-blur-sm rounded-b-md'>
      <p className='font-semibold'>
       {`Specializing in commercial and small business applications, we bring over 30 years of design experience to deliver unparalleled window graphic solutions.`}
      </p>
      <p>Our graphics are available in three different vinyl types:</p>
      <ul className='list-disc pl-4 text-txt-secondary'>
       <li>
        <span className='font-bold text-accent'>Perforated Vinyl (80/20 Split): </span>Perfect for vivid graphics and sunlight protection, offering an external
        display with internal visibility, akin to window tinting.
       </li>
       <li>
        <span className='font-bold text-accent'>Clear Vinyl: </span>Ideal for crisp, vibrant images that maintain external visibility, adding a stunning
        stained-glass effect to your windows.
       </li>
       <li>
        <span className='font-bold text-accent'>Frosted Vinyl: </span> Provides a sophisticated, etched glass look, excellent for privacy and elegance.
       </li>
      </ul>
      <div>
       <p className='text-accent text-3xl'>Contact us to get started!</p>
       <p className='text-accent font-bold text-4xl'>inkmonkeyllc@gmail.com</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default ComWindow
