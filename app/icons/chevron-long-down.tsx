import { SVGProps } from 'react'

export function ChevronLongDown(props: SVGProps<SVGSVGElement>) {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   width='1em'
   height='1em'
   viewBox='0 0 24 24'
   {...props}>
   <path
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    d='m4 11l8 3l8-3'></path>
  </svg>
 )
}
