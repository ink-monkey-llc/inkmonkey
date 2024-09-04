import React from 'react'
import { articles } from '@/app/content/articles'

function Article({ params }: { params: { aid: string } }) {
 const { aid } = params
 return <div>{aid}</div>
}

export default Article
