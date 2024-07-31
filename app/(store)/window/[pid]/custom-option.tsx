import React from 'react'
import { ProductVariant } from '@/lib/shopify/types'
import { variantDescription } from '@/app/content/window-variants'

function CustomOption({ variant }: { variant: ProductVariant }) {
 const isDualOption = variant.title === 'Business (logo ready / no logo)'

 return (
  <div key={variant.id}>
   {isDualOption ? (
    <div className='flex flex-col gap-2'>
     <div className='border border-border'>
      Business info only
      <p className='text-sm'>{variantDescription({ title: variant.title, logo: false })}</p>
     </div>
     <div className='border border-border'>
      Business info and logo
      <p className='text-sm'>{variantDescription({ title: variant.title, logo: true })}</p>
     </div>
    </div>
   ) : (
    <div className='border border-border'>
     {variant.title}
     <p className='text-sm'>{variantDescription({ title: variant.title, logo: false })}</p>
    </div>
   )}
  </div>
 )
}

export default CustomOption
