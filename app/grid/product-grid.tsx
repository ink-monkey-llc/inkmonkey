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
  <div className=' flex flex-wrap gap-8 justify-center p-4'>
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
