import React from 'react'
import Announce from './announce'
import Link from 'next/link'
import Logo from './logo'
import NavIcons from './nav-icons'
import ProductTypes from './product-types'
import ProductTypesSm from './product-types-sm'
import NavDropdown from './nav-dropdown'
function Header() {
 return (
  <div className='sticky top-0 z-50'>
   <Announce />
   <div className='w-full h-16 bg-black border-b-2 border-bg-tertiary flex items-center justify-between pr-4 sticky z-10'>
    <Logo />
    <div className='h-full  items-end -mb-[3px] hidden sm:flex'>
     <NavDropdown />
     <Link
      href='/fonzai'
      className='rounded-tr-md -ml-[3px] cursor-pointer border-2 hover:bg-bg-secondary border-bg-tertiary px-4 py-1 transition-all'>
      FONZAI AI design playground
     </Link>
    </div>
    <NavIcons />
   </div>
   <div className='h-full items-end -mt-[3px] flex justify-center sm:hidden'>
    <NavDropdown />
    <Link
     href='/fonzai'
     className='rounded-br-md -ml-[3px] cursor-pointer border-2 hover:bg-bg-secondary border-bg-tertiary px-4 py-1 transition-all'>
     FONZAI AI design playground
    </Link>
   </div>
  </div>
 )
}

export default Header
