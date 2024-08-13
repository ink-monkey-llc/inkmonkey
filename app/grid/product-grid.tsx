import React, { Suspense } from 'react'
import { ShopifyProduct } from '@/lib/shopify/types'
import { cn } from '../../utils/cn'
import GridItem from './grid-item'
import Spinner from '../spinner/spinner'
import { excludeProducts } from '../content/exlude-prods'

const Loader = () => {
 return (
  <div className='w-[200px] h-[200px] flex justify-center items-center border-2 rounded-md border-accent-tr mb-4'>
   <Spinner />
  </div>
 )
}

function ProductGrid({ collectionName, products, isSearch = false }: { collectionName?: string; products: ShopifyProduct[]; isSearch?: boolean }) {
 const filtered = products.filter((product) => !excludeProducts.includes(product.handle))

 const noProds = filtered.length === 0

 return (
  <>
   {noProds && <div className='text-xl text-center'>{collectionName} designs coming soon!</div>}
   <div
    className={cn(
     ' grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 justify-start pl-4 m-auto w-11/12 ml-auto hidden sm:grid',
     isSearch && 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7'
    )}>
    {filtered.map((product) => (
     <Suspense
      fallback={<Loader />}
      key={product.id}>
      <GridItem product={product} />
      {/* <TempGridItem product={product} /> */}
     </Suspense>
    ))}
   </div>
  </>
 )
}

export default ProductGrid
