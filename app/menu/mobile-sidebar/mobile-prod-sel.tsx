'use client'
import React, { useState } from 'react'
import { cn } from '@/utils/cn'
import { useParams } from 'next/navigation'
import Link from 'next/link'
// import { productTypes } from '@/app/content/product-types'
import Chevron, { Direction } from '@/app/icons/chevron'

function MobileProdSel() {
 const [open, setOpen] = useState(false)
 const { slug } = useParams()
 const handleClick = () => {
  setOpen(!open)
 }

 const productTypes = [
  { id: 'dec', label: 'Stickers & Decals', queryHandle: 'Vinyl Decal', url: '/list/Vinyl-Decal' },
  { id: 'win', label: 'Truck Back Window Graphics', queryHandle: 'Truck Back Window Graphics', url: '/list/Truck-Back-Window-Graphics' },
 ]
 const currentOption = productTypes.find((type) => type.url.includes(slug[0]))

 return (
  <div
   onClick={handleClick}
   className=' relative mb-8 mx-2'>
   <div className='bg-bg-tertiary rounded-md px-2 py-1 cursor-pointer mb-1 flex justify-between items-center text-lg border-2 border-accent'>
    {currentOption?.label}
    <Chevron
     className='w-6 h-6 text-accent'
     direction={open ? Direction.Up : Direction.Down}
    />
   </div>

   <div className={cn('bg-bg-tertiary rounded-md cursor-pointer absolute z-20 w-full border-2 border-accent-tr ', open ? 'fade-in' : 'fade-out')}>
    {productTypes.map((type, i) => (
     <Link
      key={type.id + i}
      href={type.url}>
      <div
       className={cn(
        'group cursor-pointer border-2 border-t-2 bg-bg-secondary rounded-md hover:bg-bg-primary border-bg-tertiary px-4 py-2 transition-all flex items-center justify-center gap-2 group'
       )}>
       <h2 className=' text-txt-primary  font-bold text-lg group-hover:text-accent-bright'>{type.label}</h2>
      </div>
     </Link>
    ))}
   </div>
  </div>
 )
}

export default MobileProdSel
