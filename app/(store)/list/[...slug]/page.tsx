import { formatPathname } from '@/utils/helpers'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import ProductGrid from '@/app/grid/product-grid'
import PageBtn from './page-btn'
import PageBanner from './page-banner'
import { QueryResult } from '@/lib/shopify/types'
import Arrow from '@/app/icons/arrow'
import Sort from './sort'
import { sortOptions } from '@/app/content/sortOptions'
import MobileGrid from '@/app/grid/mobile-grid/mobile-grid'
import SubCats from './sub-cats'

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function ProductType({ params, searchParams }: { params: { slug: string[] }; searchParams: { [key: string]: string | string[] | undefined } }) {
 const query = formatPathname(params.slug[0])
 const colName = params.slug.length > 1 ? params.slug.slice(-1)[0] : ''
 const dir = searchParams.dir ? searchParams.dir.toString() : ''
 const cursor = searchParams.cursor ? searchParams.cursor.toString() : ''
 const sort = searchParams.sort ? searchParams.sort.toString() : ''

 const selectedSort = sortOptions.find((option) => option.id === sort)
 const sortParams = selectedSort ? { sortKey: selectedSort.value, reverse: selectedSort.reverse } : { sortKey: 'CREATED', reverse: true }

 type dataObj = QueryResult

 const dataObj =
  params.slug.length === 1
   ? storeApi.getProductsByType({
      productType: query,
      sortKey: sortParams.sortKey === 'CREATED' ? 'CREATED_AT' : sortParams.sortKey,
      reverse: sortParams.reverse,
      numProducts: 24,
      cursor: cursor ?? '',
      dir,
     })
   : storeApi.getCollectionByHandle({
      handle: colName,
      sortKey: sortParams.sortKey,
      reverse: sortParams.reverse,
      numProducts: 24,
      productType: query,
      cursor: cursor ?? '',
      dir,
     })

 const { products, pageInfo, collectionInfo } = await dataObj
 //  console.log('dataObj:', await dataObj)

 return (
  <div className='pb-12 relative w-full overflow-hidden'>
   <PageBanner
    query={query}
    collectionInfo={collectionInfo}
   />
   <SubCats params={params} />
   <Sort />
   <MobileGrid products={products} />
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

export default ProductType
