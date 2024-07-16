// 'use client'
// const dynamic = 'force-dynamic'
// import React, { useEffect, useState } from 'react'
// import { storeApi } from '@/lib/shopify/storefront-api'
// import { useSearchParams, usePathname } from 'next/navigation'
// import ProductGrid from '../grid/product-grid'
// import TypeSelect from './type-select'
// import { SearchType, searchTypes } from '../content/search-types'
// import SearchField from './search-field'
// import { PageInfo, ShopifyProduct } from '@/lib/shopify/types'
// import Arrow from '../icons/arrow'
// import Link from 'next/link'

// function Search() {
//  const pathname = usePathname()
//  const [queryObj, setQueryObj] = useState<ShopifyProduct[]>([])
//  const [pageInfo, setPageInfo] = useState<PageInfo>({ hasNextPage: false, hasPreviousPage: false, startCursor: null, endCursor: null })
//  const searchParams = useSearchParams()
//  const dir = searchParams.get('dir') ?? ''
//  const cursor = searchParams.get('cursor') ?? ''
//  const query = searchParams.get('query') ?? ''
//  const queryType = searchParams.get('type')

//  const buildArrowUrl = (dir: string, cursor: string) => {
//   if (!queryType && !!query) {
//    return `${pathname}?query=${query}&dir=${dir}&cursor=${cursor}`
//   }
//   if (!query && !!queryType) {
//    return `${pathname}?type=${queryType}&dir=${dir}&cursor=${cursor}`
//   }
//   if (!query && !queryType) {
//    return `${pathname}?dir=${dir}&cursor=${cursor}`
//   }
//   return `${pathname}?query=${query}&type=${queryType}&dir=${dir}&cursor=${cursor}`
//  }

//  useEffect(() => {
//   const productType = queryType ? (searchTypes.find((type) => type.id === queryType) as SearchType) : searchTypes[0]
//   const fetchProducts = async () => {
//    if (!!queryType) {
//     const result = await storeApi.searchProducts({
//      dir: dir,
//      cursor: cursor,
//      query: query,
//      numProducts: 24,
//      reverse: false,
//      productType: productType.queryHandle,
//     })
//     setQueryObj(result.products)
//     setPageInfo(result.pageInfo)
//    }
//    if (!queryType || queryType === 'all') {
//     const result = await storeApi.searchAllProducts({
//      dir: dir,
//      cursor: cursor,
//      query: query,
//      numProducts: 24,
//      reverse: false,
//     })
//     setQueryObj(result.products)
//     setPageInfo(result.pageInfo)
//    }
//   }
//   fetchProducts()
//  }, [query, queryType, dir, cursor])

//  return (
//   <div className='w-full pb-16'>
//    <div className='w-full flex bg-bg-primary'>
//     <SearchField type={queryType ? queryType : 'all'} />
//     <div className='pt-6 pr-8'>
//      <TypeSelect query={query} />
//     </div>
//    </div>
//    <ProductGrid
//     isSearch={true}
//     products={queryObj}
//    />
//    <div className='flex justify-center gap-8 mt-6 absolute bottom-0 left-0 right-0 w-full mb-6'>
//     {pageInfo.hasPreviousPage && (
//      <div className='flex items-center gap-2 text-sm'>
//       <Link
//        prefetch={false}
//        href={buildArrowUrl('prev', pageInfo.startCursor ?? '')}>
//        <Arrow
//         direction='left'
//         className='w-8 h-8 text-white hover:text-accent'
//        />
//       </Link>
//      </div>
//     )}
//     {pageInfo.hasNextPage && (
//      <div className='flex items-center gap-2 text-sm'>
//       <Link
//        prefetch={false}
//        href={buildArrowUrl('next', pageInfo.endCursor ?? '')}>
//        <Arrow
//         direction='right'
//         className='w-8 h-8 text-white hover:text-accent'
//        />
//       </Link>
//      </div>
//     )}
//    </div>
//   </div>
//  )
// }

// export default Search
