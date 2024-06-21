import { use } from 'react'
import { formatPathname } from '@/app/utils/helpers'
import { storeApi } from '@/lib/shopify/storefront-api'
import ProductGrid from '@/app/grid/product-grid'
import PageBtn from './page-btn'

function ProductType({ params, searchParams }: { params: { slug: string[] }; searchParams: { [key: string]: string | string[] | undefined } }) {
 const query = formatPathname(params.slug[0])
 const colName = params.slug.length > 1 ? params.slug[-1] : ''
 const dir = searchParams.dir ? searchParams.dir.toString() : ''
 const cursor = searchParams.cursor ? searchParams.cursor.toString() : ''

 const productData = storeApi.getProductsByType({ productType: query, sortKey: 'TITLE', reverse: false, numProducts: 24, cursor: cursor ?? '', dir })
 //  const collectionData = storeApi.getCollectionByHandle({ handle: colName, sortKey: 'TITLE', reverse: false, numProducts: 24, cursor: cursor ?? '', dir })

 //  const coldata = use(collectionData)
 //  console.log('coldata:', coldata)
 const { products, pageInfo } = use(productData)

 const nextText = `Next Page >`
 const prevText = `< Previous Page`

 return (
  <div className='pb-12 pt-8'>
   <ProductGrid products={products} />
   <div className='flex justify-center gap-6 mt-6'>
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
