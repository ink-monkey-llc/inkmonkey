import { sortOptions } from '@/app/content/sortOptions'
import ProductGrid from '@/app/grid/product-grid'
import Arrow from '@/app/icons/arrow'
import { formatPathname } from '@/app/utils/helpers'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { QueryResult } from '@/lib/shopify/types'
import React from 'react'
import PageBanner from '../[...slug]/page-banner'
import PageBtn from '../[...slug]/page-btn'
import Sort from '../[...slug]/sort'

async function AllProducts({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
 //  const query = formatPathname(params.slug[0])
 //  const colName = params.slug.length > 1 ? params.slug.slice(-1)[0] : ''
 const dir = searchParams.dir ? searchParams.dir.toString() : ''
 const cursor = searchParams.cursor ? searchParams.cursor.toString() : ''
 const sort = searchParams.sort ? searchParams.sort.toString() : ''

 const selectedSort = sortOptions.find((option) => option.id === sort)
 const sortParams = selectedSort ? { sortKey: selectedSort.value, reverse: selectedSort.reverse } : { sortKey: 'TITLE', reverse: false }
 //  type dataObj = QueryResult

 //  const args = { numProducts: 24, dir: 'next', cursor: '', sortKey: selectedSort?.value ?? 'TITLE', reverse: selectedSort?.reverse ?? false }

 //  console.log('args:', args)
 const dataObj = await storeApi.getAllProducts({
  sortKey: sortParams.sortKey === 'CREATED' ? 'CREATED_AT' : sortParams.sortKey,
  reverse: sortParams.reverse,
  numProducts: 24,
  cursor: cursor ?? '',
  dir,
 })

 const { products, pageInfo } = dataObj

 return (
  <div className='pb-12 relative w-full'>
   <PageBanner query={'all'} />
   <Sort />
   <ProductGrid products={products} />
   <div className='flex justify-center gap-8 mt-6 absolute bottom-0 left-0 right-0 w-full mb-6'>
    {pageInfo.hasPreviousPage && (
     <PageBtn
      pageInfo={pageInfo}
      id='prev'>
      <Arrow
       direction='left'
       className='w-8 h-8 text-white hover:text-accent'
      />
     </PageBtn>
    )}
    {pageInfo.hasNextPage && (
     <PageBtn
      pageInfo={pageInfo}
      id='next'>
      <Arrow
       direction='right'
       className='w-8 h-8 text-white hover:text-accent'
      />
     </PageBtn>
    )}
   </div>
  </div>
 )
}

export default AllProducts
