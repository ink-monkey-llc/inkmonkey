'use client'
import React, { useEffect } from 'react'
import { storeApi } from '@/lib/shopify/storefront-api'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import ProductGrid from '../grid/product-grid'
import TypeSelect from './type-select'
import { SearchType, searchTypes } from '../content/search-types'
import SearchField from './search-field'

function Search() {
 const { query, type: queryType } = useParams()
 const productType = queryType ? (searchTypes.find((type) => type.id === queryType) as SearchType) : searchTypes[0]

 return (
  <div className='w-full'>
   <div className='w-full flex bg-bg-primary'>
    <SearchField />
    <div className='pt-6 pr-8'>
     <TypeSelect query={''} />
    </div>
   </div>
   {/* <ProductGrid
    isSearch={true}
    products={queryObj.products}
   /> */}
  </div>
 )
}

export default Search
