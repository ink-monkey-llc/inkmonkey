import React from 'react'

function Arrow({ className = '', direction }: { className?: string; direction?: 'left' | 'right' }) {
 return (
  <>
   {direction === 'left' ? (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     viewBox='0 0 48 48'
     className={className}>
     <g
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      transform='scale(3)'>
      <path
       fillRule='evenodd'
       d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'></path>
      <path
       fillRule='evenodd'
       d='M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0'></path>
      <path
       fillRule='evenodd'
       d='M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5'></path>
     </g>
    </svg>
   ) : (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     className={className}
     fill='currentColor'
     viewBox='0 0 16 16'>
     <path
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'></path>
     <path
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      d='M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z'></path>
     <path
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      d='M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z'></path>
    </svg>
   )}
  </>
 )
}

export default Arrow
