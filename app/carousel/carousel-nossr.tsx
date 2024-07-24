import React from 'react'
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import('./carousel'), { ssr: false })

function CarouselNoSSR() {
 return <Carousel />
}

export default CarouselNoSSR
