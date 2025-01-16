import { useLocalStorage } from 'usehooks-ts'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { useState } from 'react'
import { VariantByOptions } from '@/lib/shopify/types'

export type AtcProps = {
    selectedVariant: VariantByOptions | null
    quantity: number
    attributes: { key: string; value: string }[]
}

export default function useAtc() {
    const [adding, setAdding] = useState(false)
    const [added, setAdded] = useState(false)
    const [userCartId, setUserCartId] = useLocalStorage('userCartId', { id: '', count: 1 })

    const addToCart = async ({ selectedVariant, quantity, attributes }: AtcProps) => {
        if (!selectedVariant) {
            return
        }
        setAdding(true)
        let cartId = userCartId.id ? userCartId.id : ''
        if (!userCartId.id) {
            const newCart = await storeApi.createCart()
            cartId = newCart.id
            setUserCartId({ id: cartId, count: newCart.totalQuantity })
        }
        const lines = selectedVariant ? [{ merchandiseId: selectedVariant.id, quantity: quantity, attributes: attributes }] : []
        const updatedCart = await storeApi.addToCart(cartId, lines)
        setUserCartId({ id: cartId, count: updatedCart.totalQuantity })
        setAdding(false)
        setAdded(true)
        setTimeout(() => {
            setAdded(false)
        }, 2000)
    }

    return { adding, added, addToCart }
}
