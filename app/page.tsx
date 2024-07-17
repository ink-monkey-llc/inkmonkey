import Hero from './hero/hero'
import SliderContent from './featured/slider-content'
import Slider from './featured/slider'

export default function Home() {
 return (
  <main className='flex min-h-screen flex-col items-center justify-between '>
   <Hero />
   <Slider>
    <SliderContent collectionHandle='skulls' />
   </Slider>
  </main>
 )
}
