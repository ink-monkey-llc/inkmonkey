import { SVGProps } from 'react'

export function ChevronLeftLong(props: SVGProps<SVGSVGElement>) {
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
    d='m13 20l-3-8l3-8'></path>
  </svg>
 )
}

export function ChevronRightLong(props: SVGProps<SVGSVGElement>) {
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
    d='m11 4l3 8l-3 8'></path>
  </svg>
 )
}
