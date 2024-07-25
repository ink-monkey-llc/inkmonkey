import React from 'react'
import { useRouter } from 'next/navigation'
import { searchTypes } from '@/app/content/search-types'
import { insertDashes } from '@/app/utils/helpers'
import { filteredHandles } from '@/app/utils/helpers'
import Arrow from '../icons/arrow'
import { Product } from '@/lib/shopify/types'
import { useAtom } from 'jotai'
import { modalIsOpenAtom } from '@/app/providers/atoms'

function Continue({ lastProduct }: { lastProduct: Product | undefined }) {
 const [isOpen, setIsOpen] = useAtom(modalIsOpenAtom)
 const router = useRouter()
 const collections = lastProduct ? lastProduct.collections.nodes.map((node) => node.handle) : []
 const productType = lastProduct ? lastProduct.productType : ''
 const pathType = productType ? insertDashes(productType) : ''
 const filtered = filteredHandles(collections)
 //  console.log('filtered:', filtered, 'pathType:', pathType)
 const href = filtered.length > 0 ? `/list/${pathType}/${filtered[0]}` : '/list/all'
 const handleClick = () => {
  // setIsOpen(false)
  router.push(href)
 }

 return (
  <div className='flex flex-col gap-4'>
   <button
    onClick={handleClick}
    className='flex items-center gap-2 text-sm text-accent w-max ml-auto hover:text-accent-bright'>
    <Arrow
     className='w-4 h-4'
     direction='left'
    />
    Continue Shopping
   </button>
   <div className='border-t border-border w-full m-auto' />
  </div>
 )
}

export default Continue
