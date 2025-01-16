import { useState, useEffect, useMemo } from 'react'
import { getNouns } from '@/lib/compromise'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { ShopifyProduct } from '@/lib/shopify/types'
import { useAtomValue } from 'jotai'
import { promptAtom, selectedFFAtom } from '@/app/providers/fonz-atoms'

async function useRecs() {
    const [recProds, setRecProds] = useState<ShopifyProduct | undefined>()
    const prompt = useAtomValue(promptAtom)
    const selectedFF = useAtomValue(selectedFFAtom)
    const type = selectedFF.id === 'wi' ? 'Truck Back Window Graphics' : 'Vinyl Decal'
    const nouns: () => Promise<string[]> = async () => {
        const result: string[] = await getNouns({ userQuery: prompt })
        return result
    }
    const nounsArr = await nouns()
    function createSearchQuery(nounsArr: string[], productType: string) {
        const tagPart = nounsArr.map((noun) => `(tag:${noun})`).join(' OR ')
        const query = `${tagPart} AND (product_type:${productType})`
        return query
    }

    const recs = async () => {
        const query = createSearchQuery(nounsArr, type)
        const products = storeApi.getProductsByTag(query)
        return await products
    }
    setRecProds(await recs())

    return recProds
    //  return 'recs'
}

export default useRecs
