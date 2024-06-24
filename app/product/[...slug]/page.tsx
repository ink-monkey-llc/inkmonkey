import { use } from 'react'
import { formatPathname } from '@/app/utils/helpers'
import { storeApi } from '@/lib/shopify/storefront-api'
import ProductGrid from '@/app/grid/product-grid'
import PageBtn from './page-btn'
import { ProductQueryResult } from '@/lib/shopify/types'

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function ProductType({ params, searchParams }: { params: { slug: string[] }; searchParams: { [key: string]: string | string[] | undefined } }) {
 const query = formatPathname(params.slug[0])
 const colName = params.slug.length > 1 ? params.slug.slice(-1)[0] : ''
 const dir = searchParams.dir ? searchParams.dir.toString() : ''
 const cursor = searchParams.cursor ? searchParams.cursor.toString() : ''

 const dataObj =
  params.slug.length === 1
   ? storeApi.getProductsByType({ productType: query, sortKey: 'TITLE', reverse: false, numProducts: 24, cursor: cursor ?? '', dir })
   : storeApi.getCollectionByHandle({ handle: colName, sortKey: 'TITLE', reverse: false, numProducts: 24, productType: query, cursor: cursor ?? '', dir })

 const { products, pageInfo } = await dataObj

 const nextText = `Next Page >`
 const prevText = `< Previous Page`

 return (
  <div className='pb-12 pt-8 relative'>
   <ProductGrid products={products} />
   <div className='flex justify-center gap-6 mt-6 absolute bottom-0 left-0 right-0 w-full'>
    {pageInfo.hasPreviousPage && (
     <PageBtn
      pageInfo={pageInfo}
      id='prev'>
      {prevText}
     </PageBtn>
    )}
    <span>|</span>
    {pageInfo.hasNextPage && (
     <PageBtn
      pageInfo={pageInfo}
      id='next'>
      {nextText}
     </PageBtn>
    )}
   </div>
  </div>
 )
}

export default ProductType
