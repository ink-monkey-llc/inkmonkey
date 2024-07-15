import React from 'react'
import Link from 'next/link'
import CartIndicator from './cart-indicator'
import SearchIcon from '../icons/search-icon'

function NavIcons() {
 return (
  <div className='flex items-center gap-6'>
   <div className='flex items-center gap-2'>
    <Link href='/search'>
     <SearchIcon className='text-accent w-6 -scale-x-100' />
    </Link>
   </div>
   <CartIndicator />
  </div>
 )
}

export default NavIcons
