import React, { Suspense } from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import TempGridItem from './temp-grid-item'
import TempSlider from './temp-slider'
import GridItem from './grid-item'
import Spinner from '../spinner/spinner'

const Loader = () => {
 return (
  <div className='w-[200px] h-[200px] flex justify-center items-center border-2 rounded-md border-accent-tr mb-4'>
   <Spinner />
  </div>
 )
}

function ProductGrid({ products }: { products: ShopifyProduct[] }) {
 return (
  // <div className='grid gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4'>
  <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 justify-start pl-4 pt-8 m-auto w-11/12'>
   {products.map((product) => (
    <Suspense
     fallback={<Loader />}
     key={product.id}>
     {/* <GridItem product={product} /> */}
     <TempGridItem product={product} />
    </Suspense>
   ))}
  </div>
 )
}

export default ProductGrid
