import { SVGProps } from 'react'

export function HamburgerIcon(props: SVGProps<SVGSVGElement>) {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   width='1em'
   height='1em'
   viewBox='0 0 512 512'
   {...props}>
   <path
    fill='currentColor'
    d='M32 96v64h448V96zm0 128v64h448v-64zm0 128v64h448v-64z'></path>
  </svg>
 )
}
