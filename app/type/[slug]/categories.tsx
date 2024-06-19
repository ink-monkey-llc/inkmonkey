import React from 'react'
import { tempCategories } from '@/app/content/temp-categories'

function Categories() {
 return (
  <div>
   <ul className='flex gap-6 w-full justify-center py-4'>
    {tempCategories.map((category) => (
     <li
      className='text-sm'
      key={category.id}>
      {category.name}
     </li>
    ))}
   </ul>
  </div>
 )
}

export default Categories
