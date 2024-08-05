'use client'
import React, { useEffect, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { useRouter } from 'next/navigation'
import { getRecs } from '@/app/(fonzai)/utils'
import { useAtom, useAtomValue } from 'jotai'
import { promptAtom, selectedFFAtom, recsAtom } from '@/app/providers/fonz-atoms'
import CloseX from '@/app/icons/close-x'
import Link from 'next/link'
import RecsCarousel from './recs-carousel'
function RecsModal() {
 const router = useRouter()
 const ref = useRef(null)
 useOnClickOutside(ref, () => {
  router.push('/fonzai')
 })
 const [prompt, setPrompt] = useAtom(promptAtom)
 const selectedFF = useAtomValue(selectedFFAtom)
 const [recs, setRecs] = useAtom(recsAtom)
 useEffect(() => {
  const fetchRecs = async () => {
   const recs = await getRecs({ userQuery: prompt, productType: selectedFF.id === 'wi' ? 'Truck Back Window Graphics' : 'Vinyl Decal' })
   // console.log('recs', recs)
   setRecs(recs)
  }
  fetchRecs()
 }, [])

 // console.log('recs', recs)

 return (
  <div className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-30 z-50 overflow-hidden backdrop-blur flex justify-center items-center px-8'>
   <div
    ref={ref}
    className='w-full mx-4 max-w-[1000px] rounded-md bg-bg-primary'>
    <div className='flex justify-end rounded-t-md p-1  bg-bg-primary'>
     <Link href={'/fonzai'}>
      <CloseX className='w-6 h-6 rounded-md text-txt-primary' />
     </Link>
    </div>
    <h2 className='ml-8 text-2xl'>While you wait, here are some other designs you might like:</h2>
    <RecsCarousel products={recs} />
   </div>
  </div>
 )
}

export default RecsModal
