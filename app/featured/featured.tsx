import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import React from 'react'
import Slider from './slider'
import { cn } from '../../utils/cn'
import { smooch } from '@/lib/fonts'

async function Featured({ collectionHandles, productsAmount, type }: { collectionHandles: string[]; productsAmount: number; type: string }) {
    const getColl = async (handle: string, firstCursor?: string | null) => {
        const { products, pageInfo, collectionInfo } = await storeApi.getCollectionByHandle({
            handle,
            sortKey: 'CREATED',
            reverse: true,
            numProducts: productsAmount,
            dir: firstCursor ? 'next' : '',
            cursor: firstCursor ? firstCursor : '',
            productType: 'Vinyl Decal',
        })
        const seq = !firstCursor ? 'first' : 'last'
        return { products, collectionInfo, pageInfo, seq }
    }

    const collections = await Promise.all(
        collectionHandles.map(async (handle) => {
            const first = await getColl(handle)
            return { first }
        })
    )

    const title = type === 'decals' ? 'Vinyl Decals' : type === 'windows' ? 'Truck Back Window Graphics' : ''

    return (
        <div className='w-full border-t-8 border-accent-tr'>
            <div className='w-full bg-bg-secondary'>
                <h2
                    style={{ textShadow: '0px 4px 6px #00000086' }}
                    className={cn('text-4xl md:text-5xl text-accent pl-8 pt-8 pb-8', smooch.className)}>
                    Featured {title} Collections:
                </h2>
                <Slider
                    type={type}
                    collections={collections}
                />
            </div>
        </div>
    )
}

export default Featured
