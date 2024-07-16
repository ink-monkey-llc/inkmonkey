import Hero from './hero/hero'
import Slider from './featured/slider'

export default function Home() {
 return (
  <main className='flex min-h-screen flex-col items-center justify-between '>
   <Hero />
   <Slider collectionHandle='skulls' />
  </main>
 )
}
