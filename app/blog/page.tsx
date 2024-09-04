import React from 'react'
import BlogCard from './blog-card'
import { articles } from '@/app/content/articles'

function Blog() {
 return (
  <div className='flex flex-col gap-4 p-8 m-auto'>
   {articles.map((article) => (
    <BlogCard
     key={article.title}
     article={article}
    />
   ))}
  </div>
 )
}

export default Blog
