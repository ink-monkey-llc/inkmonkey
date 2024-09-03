import React from 'react'
import Image from 'next/image'

function MapFallback() {
 return (
  <Image
   src='/im-directions.webp'
   alt='directions'
   width={300}
   height={300}
  />
 )
}

export default MapFallback
