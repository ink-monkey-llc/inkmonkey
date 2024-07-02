import React from 'react'
import { storeApi } from '@/lib/shopify/storefront-api'
import { ShopifyProduct } from '@/lib/shopify/types'
import { variantDescription } from '@/app/content/window-variants'
import Business from './business'
import Text from './text'
import CustomOption from './custom-option'

function Customization({ product }: { product: ShopifyProduct }) {
 const variants = product.variants.edges.map((edge) => edge.node)
 const businessVariants = variants.filter((variant) => variant.title.includes('Business'))
 const textVariant = variants.find((variant) => variant.title === 'Name / Text')
 const noneVariant = variants.find((variant) => variant.title === 'None')
 console.log('variants:', variants)
 return (
  <div className='flex flex-col gap-2 min-w-[237px]'>
   <div className='border border-border px-2 py-1'>
    <h2 className='text-lg'>{noneVariant?.title}</h2>
    <p className='text-sm'>{noneVariant && variantDescription({ title: noneVariant?.title, logo: false })}</p>
   </div>
   {textVariant && <Text variant={textVariant} />}
   {businessVariants && <Business variants={businessVariants} />}
  </div>
 )
}

export default Customization
