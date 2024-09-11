import React from 'react'
import BlogCard from './blog-card'
import { articles } from '@/app/content/articles'
import { Metadata } from 'next'

export const metadata: Metadata = {
 title: 'Blog | Ink Monkey',
 description: 'Ink Monkey Designs Blog',
}

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
