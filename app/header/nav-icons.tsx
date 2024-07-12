import React from 'react'
import { cn } from '../utils/cn'
import CartIcon from '../icons/cart-icon'
import CartIndicator from './cart-indicator'
import Search from '../search/search'
import SearchIcon from '../icons/search-icon'

function NavIcons() {
 return (
  <div className='flex items-center gap-6'>
   <div className='flex items-center gap-2'>
    <Search />
    <SearchIcon className='text-accent w-6 -scale-x-100' />
   </div>
   <CartIndicator />
  </div>
 )
}

export default NavIcons
