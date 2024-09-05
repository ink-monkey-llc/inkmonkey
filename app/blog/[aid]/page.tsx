import React from 'react'
import Image from 'next/image'
import BackButton from '@/app/common/back-button'
import { articles } from '@/app/content/articles'

function Article({ params }: { params: { aid: string } }) {
 const { aid } = params
 const article = articles.find((article) => article.id === aid)
 const body = article?.body ? { __html: article.body } : { __html: '' }
 if (!article) {
  return <div>Article not found</div>
 }
 return (
  <div className='flex my-8 flex-col items-center justify-center relative bg-blog  w-max m-auto rounded-md'>
   <BackButton className='mx-auto my-4 text-accent hover:text-accent-bright hover:bg-bg-tertiary' />
   <div className='flex gap-8 w-[800px] m-auto justify-center'>
    <Image
     className='rounded-md object-contain'
     src={article.image}
     alt={article.title}
     width={200}
     height={200}
    />
    <div className='prose prose-invert w-[460px] '>
     <h1>{article.title}</h1>
     <h4 className='text-txt-secondary'>{article.excerpt}</h4>
    </div>
   </div>
   <div className='prose prose-invert '>
    <div dangerouslySetInnerHTML={body}></div>
   </div>
  </div>
 )
}

export default Article
