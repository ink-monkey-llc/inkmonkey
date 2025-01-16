import React from 'react'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import Chevron, { Direction } from '@/app/icons/chevron'
import Link from 'next/link'
import SubcatSlider from './subcat-slider'

async function SubCats({ params }: { params: { slug: string[] } }) {
    const { slug } = params
    const isChild = slug.length > 2
    if (!isChild) return null
    const topLevel = slug[1]
    const parent = isChild ? slug[2] : ''
    const menu = await storeApi.getMenu({ handle: 'concise-menu' })
    const parentLevel = menu.items.find((item) => item.resource?.handle === topLevel)
    const current = parentLevel && parentLevel.items?.find((item) => item.resource?.handle === parent)
    const subitems = current?.items
    return <SubcatSlider subitems={subitems} />
}

export default SubCats
