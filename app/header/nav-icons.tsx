import React from 'react'
import { cn } from '../utils/cn'
import CartIcon from '../icons/cart-icon'
import SearchIcon from '../icons/search-icon'

function NavIcons() {
 return (
  <div className='flex gap-6'>
   <SearchIcon className='text-accent w-6 -scale-x-100' />
   <CartIcon className='w-5 text-accent ' />
  </div>
 )
}

export default NavIcons
