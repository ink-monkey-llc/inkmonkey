import Hero from './hero/hero'
import Featured from './featured/featured'
import { WindowBanner } from './featured/window-banner'
import { collections } from './content/featured-collections'
import ComWindow from './(store)/commercial/com-window/com-window'
import Carousel from './carousel/carousel-nossr'
import Footer from './footer/footer'
import FonzBanner from './featured/fonz-banner/fonz-banner'
import '@/app/globals.css'

export default function Home() {
 return (
  <main className=' flex min-h-screen flex-col items-center justify-between overflow-hidden '>
   <Hero />
   <FonzBanner />
   <Featured
    type='decals'
    productsAmount={36}
    collectionHandles={collections.group1}
   />
   <WindowBanner />
   <ComWindow />
   <Carousel />
   <Footer />
  </main>
 )
}
