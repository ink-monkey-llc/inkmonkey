import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { useCooldown } from '@/app/hooks/useCooldown'
import toast from 'react-hot-toast'
// import { createCart, addCartLine } from '../storefront-api/cart'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import useAtc from './useAtc'
import {
    generatedAtom,
    generatedDefault,
    selectedImageAtom,
    wsIdAtom,
    wsMessageAtom,
    isLoadingAtom,
    selectedImageDefault,
    isUpscalingAtom,
    upscaleAndAddAtom,
    cartContentsAtom,
    cartDataAtom,
    shopAtom,
    selectedVariantAtom,
} from '@/app/providers/fonz-atoms'
import { ProductVariant } from '../(fonzai)/types/product-types'

function useModOptions() {
    const [generated, setGenerated] = useAtom(generatedAtom)
    const [wsMessage, setWsMessage] = useAtom(wsMessageAtom)
    const [cartData, setCartData] = useAtom(cartDataAtom)
    const [cartContents, setCartContents] = useAtom(cartContentsAtom)
    const [, setIsLoading] = useAtom(isLoadingAtom)
    const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom)
    const [isUpscaling, setIsUpscaling] = useAtom(isUpscalingAtom)
    const [, setUpscaleAndAdd] = useAtom(upscaleAndAddAtom)
    const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)
    const [wsId] = useAtom(wsIdAtom)
    const [shop] = useAtom(shopAtom)
    const { checkCooldown } = useCooldown()
    const router = useRouter()
    const goBack = () => {
        setGenerated(generatedDefault)
    }

    const { adding, added, addToCart } = useAtc()

    const makeVariations = () => {
        const cdMessage = checkCooldown()
        if (cdMessage.cd) {
            toast.error(cdMessage.message)
            return
        }
        if (selectedImage.generated.imgData.publicId === '') {
            toast.error('Please select an image to make variations.')
            return
        }
        setSelectedImage(selectedImageDefault)
        setGenerated(generatedDefault)
        setIsLoading(true)
        setWsMessage({ event: 'variations', data: JSON.stringify(selectedImage), id: wsId })
    }

    const upscale = (cart = false, wi = false) => {
        if (selectedImage.generated.imgData.publicId === '') {
            toast.error('Please select an image to upscale.')
            return
        }
        setSelectedImage(selectedImageDefault)
        setGenerated(generatedDefault)
        setIsUpscaling(true)
        setIsLoading(true)
        setWsMessage({ event: 'upscale', data: JSON.stringify(selectedImage), id: wsId })
        if (cart) {
            setUpscaleAndAdd({ cart: true, wi: wi })
        }
    }

    const addProductToCart = async (addCartData: { up: boolean; imageUrl: string; productId: string; publicId: string; wi: boolean }) => {

        const { up, imageUrl, productId, publicId, wi } = addCartData ? addCartData : { up: false, imageUrl: '', productId: '', publicId: '', wi: false }

        if (!generated.isUpscaled && !up) {
            if (selectedImage.generated.imgData.publicId === '') {
                toast.error('Please select an image to add to cart.')
                return
            } else {
                const cart = true
                const wi = generated.ff === 'wi'
                upscale(cart, wi)
                return
            }
        }

        if (wi) {
            router.push(`/window/${addCartData.productId}?iid=${addCartData.publicId}`)
            return
        }
        if (generated.ff === 'wi') {
            router.push(`/window/${generated.productId}?iid=${generated.imgData.publicId}`)
            return
        }
        const fetchedVariant: ProductVariant = await storeApi.getVariantById(addCartData?.productId ? addCartData.productId : generated.productId)

        addToCart({
            selectedVariant: fetchedVariant,
            quantity: 1,
            attributes: [{ key: 'imageUrl', value: up ? imageUrl : generated.imgData.url }],
        })
        router.push('/cart')
    }

    const optionData = {
        purchase: {
            id: 'purchase',
            label: 'Add to Cart',
            addProductToCart: addProductToCart,
        },
        variations: {
            id: 'vars',
            label: 'Make Variations',
            makeVariations: makeVariations,
        },
        upscale: {
            id: 'upscale',
            label: 'Upscale',
            upscale: upscale,
        },
        back: {
            id: 'back',
            label: 'Go Back',
            goBack: goBack,
        },
    }

    return optionData
}
export default useModOptions
