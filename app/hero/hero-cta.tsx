import React from 'react'
import CtaButton from '../featured/cta-button'

function HeroCta() {
 return (
  <div className='flex gap-4 flex-col items-center justify-center'>
   <CtaButton href='/list/Vinyl-Decal'>Stickers & Decals</CtaButton>
   <CtaButton href='/list/Truck-Back-Window-Graphics'>Truck Back Window Graphics</CtaButton>
  </div>
 )
}

export default HeroCta
