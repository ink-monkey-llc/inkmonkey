import React from 'react'
import dynamic from 'next/dynamic'

const ComCarousel = dynamic(() => import('./com-carousel'), { ssr: false })

function CarouselNoSSR() {
 return <ComCarousel />
}

export default CarouselNoSSR
