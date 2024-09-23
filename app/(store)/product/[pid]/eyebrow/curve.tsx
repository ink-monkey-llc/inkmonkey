import React from 'react'
import { cn } from '@/utils/cn'

function Curve({ text, className }: { text: string; className?: string }) {
 return (
  <svg
   className={cn(className, 'rotate-180')}
   viewBox='24.856 183.2369 314.532 19.4401'
   xmlns='http://www.w3.org/2000/svg'>
   <path
    style={{ fill: 'rgb(216, 216, 216)', stroke: 'rgb(0, 0, 0)' }}
    d='M 24.856 202.677 C 122.906 176.628 239.144 176.886 339.388 202.677'
   />
   <text>{text}</text>
  </svg>
 )
}

export default Curve
