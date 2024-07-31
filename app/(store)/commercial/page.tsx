import { smooch } from '@/lib/fonts'
import React from 'react'
import { cn } from '../../../utils/cn'

function Commercial() {
 return (
  <div className='w-full h-[var(--view-height)] overflow-y-scroll bg-com-bg flex flex-col items-center justify-center'>
   <div className='w-3/4 m-auto'>
    <h2 className={cn('text-6xl text-accent p-4 backdrop-blur-sm rounded-t-md', smooch.className)}>The Industry Leader in Window Graphics</h2>
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
 )
}

export default Commercial
