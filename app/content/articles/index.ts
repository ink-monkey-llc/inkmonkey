import { coloring } from './coloring'
import { windows } from './windows'
import { partner } from './partner'

export type Article = {
 author: string
 id: string
 image: string
 title: string
 excerpt: string
 body: string
}

export const articles = [coloring, windows, partner]
