import React from 'react'

function VariantItem({ value }: { value: string }) {
 return (
  <div
   className='flex p-2 w-max border border-bg-tertiary cursor-pointer'
   key={value}>
   <h3>{value}</h3>
  </div>
 )
}

export default VariantItem
