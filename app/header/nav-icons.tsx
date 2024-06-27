import React from 'react'
import { cn } from '../utils/cn'
import CartIcon from '../icons/cart-icon'
import CartIndicator from './cart-indicator'
import SearchIcon from '../icons/search-icon'

function NavIcons() {
 return (
  <div className='flex gap-6'>
   <SearchIcon className='text-accent w-6 -scale-x-100' />
   <CartIndicator />
  </div>
 )
}

export default NavIcons
