'use client'
import React from 'react'
import { cn } from '../../../utils/cn'
import { smooch } from '@/lib/fonts'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

function Contact() {
 return (
  <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}>
   <div className='w-full h-[var(--view-height)] justify-center text-center py-12 flex flex-col'>
    <h1 className={cn('text-6xl text-accent', smooch.className)}>Contact Us</h1>
    <div className='flex max-w-[900px] m-auto mt-8 p-8 bg-bg-primary rounded-md'>
     <div>
      <Map
       className='w-[300px] h-[300px]'
       defaultCenter={{ lat: 37.112833014997754, lng: -93.29811404675552 }}
       defaultZoom={16}
       gestureHandling={'greedy'}
       disableDefaultUI={true}>
       <Marker position={{ lat: 37.112833014997754, lng: -93.29811404675552 }} />
      </Map>
     </div>
     <div className='w-max text-start m-auto p-8'>
      <p className='text-3xl text-accent'>Ink Monkey LLC</p>
      <p>5601 S. Campbell Ave, Suite 106</p>
      <p>Springfield, MO 65810</p>
      <p className='text-xl font-semibold pt-4'>inkmonkeyllc@gmail.com</p>
     </div>
    </div>
   </div>
  </APIProvider>
 )
}

export default Contact
