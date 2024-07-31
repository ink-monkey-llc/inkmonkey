import { SVGProps } from 'react'
import { cn } from '../../utils/cn'

export function ChevronCirc({ dir, className }: { dir: string; className: string }, props: SVGProps<SVGSVGElement>) {
 const direction = dir === 'right' ? 'rotate-180' : 'rotate-0'
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   width='1em'
   height='1em'
   viewBox='0 0 24 24'
   className={cn(direction, className)}
   {...props}>
   <path
    fill='currentColor'
    d='M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m13.914-4l-4 4l4 4l-1.414 1.414L8.086 12L13.5 6.586z'></path>
  </svg>
 )
}
