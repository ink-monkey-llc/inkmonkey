import { use } from 'react'
import { formatPathname } from '@/app/utils/helpers'
import { storeApi } from '@/lib/shopify/storefront-api'
import ProductGrid from '@/app/grid/product-grid'
import PageBtn from './page-btn'

function ProductType({ params, searchParams }: { params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined } }) {
 const query = formatPathname(params.slug)
 const dir = searchParams.dir ? searchParams.dir.toString() : ''
 const cursor = searchParams.cursor ? searchParams.cursor.toString() : ''
 const productData = storeApi.getProductsByType({ productType: query, sortKey: 'TITLE', reverse: false, numProducts: 25, cursor: cursor ?? '', dir })

 const { products, pageInfo } = use(productData)

 //  console.log('pageInfo:', pageInfo)

 const nextText = `Next Page >`
 const prevText = `< Previous Page`

 return (
  <div className='pb-12'>
   <div>{query}</div>
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
