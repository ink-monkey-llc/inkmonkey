import React from 'react'
import SearchForm from './search-form'
import { storeApi } from '@/lib/shopify/storefront-api'
import { SearchType, searchTypes } from '../content/search-types'
import ProductGrid from '../grid/product-grid'
import NextPrev from './next-prev'

async function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
 const { type: urlType, query, dir, cursor } = searchParams
 const productType = urlType ? (searchTypes.find((type) => type.id === urlType) as SearchType) : searchTypes[0]

 const products =
  !urlType || urlType === 'all'
   ? await storeApi.searchAllProducts({
      dir: typeof dir === 'string' ? dir : 'next',
      cursor: typeof cursor === 'string' ? cursor : '',
      query: typeof query === 'string' ? query : '',
      numProducts: 24,
      reverse: false,
     })
   : await storeApi.searchProducts({
      dir: typeof dir === 'string' ? dir : 'next',
      cursor: typeof cursor === 'string' ? cursor : '',
      query: typeof query === 'string' ? query : '',
      numProducts: 24,
      reverse: false,
      productType: productType.queryHandle,
     })

 //  console.log('products:', products)

 return (
  <div className='w-full h-full pb-12'>
   <SearchForm />
   <ProductGrid
    products={products.products}
    isSearch={true}
   />
   <NextPrev pageInfo={products.pageInfo} />
  </div>
 )
}

export default Page
