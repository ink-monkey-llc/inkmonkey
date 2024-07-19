import Hero from './hero/hero'
import Featured from './featured/featured'
import { WindowBanner } from './featured/window-banner'
import { collections } from './content/featured-collections'
import Memorial from './memorial/memorial'
import ComWindow from './commercial/com-window'

export default function Home() {
 return (
  <main className='flex min-h-screen flex-col items-center justify-between '>
   <Hero />
   <Featured
    type='decals'
    productsAmount={24}
    collectionHandles={collections.group1}
   />
   <WindowBanner />
   <ComWindow />
  </main>
 )
}
