import Hero from './hero/hero'
import Featured from './featured/featured'
import { collections } from './content/featured-collections'

export default function Home() {
 return (
  <main className='flex min-h-screen flex-col items-center justify-between '>
   <Hero />
   <Featured
    type='decals'
    productsAmount={24}
    collectionHandles={collections.group1}
   />
  </main>
 )
}
