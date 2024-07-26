import React from 'react'
import Announce from './announce'
import Logo from './logo'
import NavIcons from './nav-icons'
import ProductTypes from './product-types'
import ProductTypesSm from './product-types-sm'
function Header() {
 return (
  <div className='sticky top-0 z-50'>
   <Announce />
   <div className='w-full h-16 bg-black border-b-2 border-bg-tertiary flex items-center justify-between pr-4 sticky z-10'>
    <Logo />
    <ProductTypes />
    <NavIcons />
   </div>
   <ProductTypesSm />
  </div>
 )
}

export default Header
