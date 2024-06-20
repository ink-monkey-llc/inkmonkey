import React from 'react'
import type { MenuItem } from '@/lib/shopify/types'

type Props = {
 obj: MenuItem
}

function Level({ obj }: Props) {
 return (
  <div className='pl-2'>
   <p className='text-sm'>{obj.title}</p>
   {obj.items &&
    obj.items.map((item) => (
     <Level
      key={item.id}
      obj={item}
     />
    ))}
  </div>
 )
}

export default Level
