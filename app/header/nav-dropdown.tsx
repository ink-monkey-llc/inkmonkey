import React from 'react'
import FloatMenu from '@/app/common/float-menu'
import ProductTypes from './product-types'
import { cn } from '@/utils/cn'

function NavDropdown() {
 return (
  <FloatMenu
   target={
    <div
     className={cn(
      'rounded-bl-md sm:rounded-bl-none sm:rounded-tl-md cursor-pointer border-2 hover:bg-bg-secondary border-bg-tertiary px-4 py-1 transition-all'
     )}>
     <h2 className='font-light text-accent lg:text-base'>Our Products</h2>
    </div>
   }>
   <ProductTypes />
  </FloatMenu>
 )
}

export default NavDropdown
