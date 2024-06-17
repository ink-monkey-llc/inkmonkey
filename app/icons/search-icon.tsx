import React from 'react'

function SearchIcon({ className = '' }) {
 return (
  <svg
   className={className}
   width='21'
   height='20'
   viewBox='0 0 21 20'
   fill='none'>
   <g clipPath='url(#clip0_10936_781)'>
    <path
     d='M12 17C7.58172 17 4 13.4182 4 9C4 4.58172 7.58172 1 12 1C16.4182 1 20 4.58172 20 9C20 13.4182 16.4182 17 12 17Z'
     stroke='currentColor'
     strokeWidth='2'></path>
    <path
     d='M6 15L1 19'
     stroke='currentColor'
     strokeWidth='2'></path>
   </g>
   <defs>
    <clipPath id='clip0_10936_781'>
     <rect
      width='21'
      height='20'
      fill='currentColor'></rect>
    </clipPath>
   </defs>
  </svg>
 )
}

export default SearchIcon
