import React from 'react'
import Arrow from '../icons/arrow'
import SearchBtn from './search-btn'
import { PageInfo } from '@/lib/shopify/types'

function NextPrev({ pageInfo }: { pageInfo: PageInfo }) {
 return (
  <div className='flex justify-center gap-8 mt-6 absolute bottom-0 left-0 right-0 w-full mb-6'>
   {pageInfo.hasPreviousPage && (
    <SearchBtn
     pageInfo={pageInfo}
     id='prev'>
     <Arrow
      direction='left'
      className='w-8 h-8 text-white hover:text-accent'
     />
    </SearchBtn>
   )}
   {pageInfo.hasNextPage && (
    <SearchBtn
     pageInfo={pageInfo}
     id='next'>
     <Arrow
      direction='right'
      className='w-8 h-8 text-white hover:text-accent'
     />
    </SearchBtn>
   )}
  </div>
 )
}

export default NextPrev
