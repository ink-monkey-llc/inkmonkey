import React from 'react'
import { getResults } from '@/app/actions/survey'
import Content from '../content'

async function Results({ params }: { params: { id: string } }) {
 const { id } = params
 const resultsJson = await getResults(id)
 const data = JSON.parse(resultsJson?.json as string)
 const createdDate = resultsJson ? new Date(resultsJson?.createdAt) : null
 const createdDateString = createdDate ? createdDate.toLocaleDateString() : ''
 return (
  <div className='py-8 max-w-[600px] m-auto'>
   <h1 className='text-3xl text-accent text-center'>Survey Results</h1>
   <p>Survey submitted on {createdDateString}</p>
   <Content answers={data} />
  </div>
 )
}

export default Results
