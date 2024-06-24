import React, { Suspense } from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import TempGridItem from './temp-grid-item'
import TempSlider from './temp-slider'
import GridItem from './grid-item'
import Spinner from '../spinner/spinner'

const Loader = () => {
 return (
  <div className='w-[200px] h-[200px] flex justify-center items-center border-2 rounded-md border-accent-tr'>
   <Spinner />
  </div>
 )
}

function ProductGrid({ products }: { products: ShopifyProduct[] }) {
 return (
  // <div className='grid gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4'>
  <div className='flex flex-wrap gap-8 justify-start p-4 pl-8'>
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
