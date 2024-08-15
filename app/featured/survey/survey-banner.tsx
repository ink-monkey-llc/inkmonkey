import React from 'react'
import Link from 'next/link'
import { ArrowRight } from '@/app/icons/arrow-right'

function SurveyBanner() {
 return (
  <div className='relative -mb-8 sm:-mb-12 z-40 bg-bg-secondary border-y-8 border-accent-bright w-full'>
   <h2 className='text-2xl sm:text-3xl text-accent text-center'>
    Take our
    <Link
     className='text-accent underline hover:text-accent-bright px-2'
     href='/survey'>
     survey
    </Link>
    for a free decal!
   </h2>
   <div className=' sm:w-max px-2 m-auto my-2'>
    <p>
     Give us your feedback on our new website and get a discount code for <span className='font-semibold text-lg text-accent-bright'>100% off</span>
    </p>
    <p>
     {`a vinyl decal up to 5" when you design it with`}{' '}
     <Link
      className='underline'
      href='/fonzai'>
      FONZAI
     </Link>
     {`, our AI design playground.`}
    </p>
    <Link
     className='group border-2 border-accent rounded-md mt-3 text-accent flex items-center justify-center py-2 text-xl sm:text-2xl hover:border-accent-bright hover:text-accent-bright transition-all'
     href='/survey'>
     Take the survey <ArrowRight className='w-6 h-6 sm:w-8 sm:h-8 ml-1 group-hover:translate-x-3 transition-all' />
    </Link>
   </div>
  </div>
 )
}

export default SurveyBanner
