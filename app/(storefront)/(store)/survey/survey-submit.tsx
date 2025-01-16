import React from 'react'
import Spinner from '@/app/spinner/spinner'
import { useLocalStorage } from 'usehooks-ts'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { useRouter } from 'next/navigation'
import useValidateAnswers from './useValidateAnswers'
import { useAtom } from 'jotai'
import { isSubmittingAtom, discAuthAtom, initSubmitAtom } from './state/survey-atoms'

function SurveySubmit() {
    const [isSubmitting, setIsSubmitting] = useAtom(isSubmittingAtom)
    const [discAuth, setDiscAuth] = useAtom(discAuthAtom)
    const [initSubmit, setInitSubmit] = useAtom(initSubmitAtom)
    const { answersData, incomplete } = useValidateAnswers()
    const [userCartId, setUserCartId] = useLocalStorage('userCartId', { id: '', count: 1 })
    const router = useRouter()

    const handleCart = async () => {
        if (userCartId.id) {
            const { cartId, code, status } = await storeApi.updateDiscountCodes(userCartId.id, ['SURVEY824'])
        } else {
            const { cartId, code, status } = await storeApi.createCartDiscount(['SURVEY824'])
            setUserCartId({ id: cartId, count: 0 })
        }
    }

    const handleSubmit = async () => {
        setInitSubmit(true)
        if (incomplete) {
            return
        }
        setIsSubmitting(true)
        const res = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(answersData),
        })
        if (res.ok) {
            setIsSubmitting(false)
            handleCart()
            setDiscAuth({ authorized: true })
            router.push('/survey/discount')
        }
    }

    return (
        <button
            onClick={handleSubmit}
            className='bg-accent text-bg-primary font-bold text-lg h-12 py-2 px-4 rounded-md hover:bg-accent-bright hover:text-bg-primary transition-all'>
            {isSubmitting ? (
                <Spinner
                    small
                    dark
                />
            ) : (
                'Submit'
            )}
        </button>
    )
}

export default SurveySubmit
