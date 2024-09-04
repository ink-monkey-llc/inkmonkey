import React from 'react'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { Ig } from '../icons/ig'
import { Fb } from '../icons/fb'

function Social() {
 return (
  <div className='flex gap-4 items-center'>
   <Link href='https://www.instagram.com/inkmonkeyllc'>
    <Ig className={cn('w-8 h-8 text-accent hover:text-accent-bright transition-all')} />
   </Link>
   <Link href='https://www.facebook.com/inkmonkeyllc'>
    <Fb className={cn('w-[26px] h-[26px] text-accent hover:text-accent-bright transition-all')} />
   </Link>
  </div>
 )
}

export default Social
