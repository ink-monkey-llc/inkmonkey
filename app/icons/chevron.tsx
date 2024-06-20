import React from 'react'
import { cn } from '../utils/cn'

export enum Direction {
 Left,
 Right,
 Up,
 Down,
}

export type Props = {
 className?: string
 direction?: Direction
}

function Chevron({ className = '', direction }: Props) {
 const rotate = () => {
  switch (direction) {
   case Direction.Left:
    return 'rotate-0'
   case Direction.Right:
    return 'rotate-180'
   case Direction.Up:
    return 'rotate-90'
   case Direction.Down:
    return '-rotate-90'
   default:
    return ''
  }
 }
 return (
  <svg
   className={cn(className, rotate())}
   xmlns='http://www.w3.org/2000/svg'
   viewBox='0 0 48 48'>
   <path
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    d='M28.828 11.172a4 4 0 0 0-5.656 0L10.342 24l12.83 12.828C23.952 37.61 24.976 38 26 38s2.048-.39 2.828-1.172a4 4 0 0 0 0-5.656L21.658 24l7.17-7.172a4 4 0 0 0 0-5.656'></path>
  </svg>
 )
}

export default Chevron
