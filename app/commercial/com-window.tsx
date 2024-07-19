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
  <div className='w-full bg-bg-primary border-t-8 border-accent-tr'>
   <div>
    <h2 className={cn('text-5xl text-accent p-4', smooch.className)}>The Industry Leader in Window Graphics</h2>
   </div>
   <div className='h-[70vh] w-1/2'>
    <Lightbox
     animation={{ fade: 500, swipe: 1000, easing: { swipe: 'cubic-bezier(0.65, 0, 0.35, 1)' } }}
     plugins={[Inline, Slideshow]}
     slideshow={{ autoplay: true, delay: 5000 }}
     open={true}
     slides={imgs}
     render={{ slide: NextImage, buttonPrev: () => null, buttonNext: () => null, controls: () => null }}
     noScroll={{ disabled: true }}
    />
   </div>
  </div>
 )
}

export default ComWindow
