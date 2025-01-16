import { useState } from 'react'
import { useRouter } from 'next/navigation'
import useAtc from '@/app/hooks/useAtc'
import Atc from '@/app/atc'
import { ErrorToast } from '@/app/toast/error'
import { SuccessToast } from '@/app/toast/success'
import { initialBusinessLogoData } from '@/app/content/initial-values'
import { useAtom } from 'jotai'
import {
    logoDataUrlAtom,
    selectedLogoOptionAtom,
    selectedLogoFileAtom,
    selectedVariantAtom,
    businessLogoDataAtom,
    businessNameAtom,
    businessSloganAtom,
    businessContactAtom,
    businessLocationAtom,
    businessEtcAtom,
    textContentAtom,
    textDetailsAtom,
    isStandardSizeAtom,
    makeAtom,
    modelAtom,
    doorsAtom,
    vehicleYearAtom,
    sideAAtom,
    sideBAtom,
    sideCAtom,
    describeLogoAtom,
} from '@/app/providers/atoms'
import { uploadLogo } from '@/app/actions/images'
import { addVehicle } from '@/app/actions/vehicles'

function WindowAtc({ quantity, setQuantity, iid }: { iid: string | boolean; quantity: number; setQuantity: (num: number) => void }) {
    const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)
    const [selectedLogoOption, setSelectedLogoOption] = useAtom(selectedLogoOptionAtom)
    const [file, setFile] = useAtom(selectedLogoFileAtom)
    const [dataUrl, setDataUrl] = useAtom(logoDataUrlAtom)
    const [businessLogoData, setBusinessLogoData] = useAtom(businessLogoDataAtom)
    const [describeLogo, setDescribeLogo] = useAtom(describeLogoAtom)
    const [businessName, setBusinessName] = useAtom(businessNameAtom)
    const [businessSlogan, setBusinessSlogan] = useAtom(businessSloganAtom)
    const [businessContact, setBusinessContact] = useAtom(businessContactAtom)
    const [businessLocation, setBusinessLocation] = useAtom(businessLocationAtom)
    const [businessEtc, setBusinessEtc] = useAtom(businessEtcAtom)
    const [textContent, setTextContent] = useAtom(textContentAtom)
    const [textDetails, setTextDetails] = useAtom(textDetailsAtom)
    const [isStandardSize, setIsStandardSize] = useAtom(isStandardSizeAtom)
    const [make, setMake] = useAtom(makeAtom)
    const [model, setModel] = useAtom(modelAtom)
    const [doors, setDoors] = useAtom(doorsAtom)
    const [vehicleYear, setVehicleYear] = useAtom(vehicleYearAtom)
    const [sideA, setSideA] = useAtom(sideAAtom)
    const [sideB, setSideB] = useAtom(sideBAtom)
    const [sideC, setSideC] = useAtom(sideCAtom)

    const router = useRouter()

    const handleUpload = async () => {
        if (file) {
            const res = await uploadLogo({ dataUrl, fileName: file.name, fileSize: file.size })
            if (res.error) {
                ErrorToast({ msg: 'Logo upload failed, please try again' })
                console.log('error:', res.error)
                return { status: 'error' }
            } else {
                setBusinessLogoData({ publicId: res.imgData?.publicId, url: res.imgData?.url, secure_url: res.imgData?.secure_url })
                return { status: 'success', imgUrl: res.imgData?.secure_url }
            }
        }
    }

    const isBusiness = selectedVariant && selectedVariant?.title?.includes('Business')
    const isText = selectedVariant && selectedVariant?.title?.includes('Name / Text')
    const isAi = iid !== false

    const cartAttributes = (imgUrl?: string) => {
        let attributes = []
        if (isBusiness) {
            if (businessName) {
                attributes.push({ key: 'businessName', value: businessName })
            }
            if (businessSlogan) {
                attributes.push({ key: 'businessSlogan', value: businessSlogan })
            }
            if (businessContact) {
                attributes.push({ key: 'businessContact', value: businessContact })
            }
            if (businessLocation) {
                attributes.push({ key: 'businessLocation', value: businessLocation })
            }
            if (businessEtc) {
                attributes.push({ key: 'businessEtc', value: businessEtc })
            }
            if (imgUrl && imgUrl !== '') {
                attributes.push({ key: 'businessLogo', value: imgUrl })
            }
            if (describeLogo !== '') {
                attributes.push({ key: 'describeLogo', value: describeLogo })
            }
        }
        if (isText) {
            if (textContent !== '') {
                attributes.push({ key: 'textContent', value: textContent })
            }
            if (textDetails !== '') {
                attributes.push({ key: 'textDetails', value: textDetails })
            }
        }
        if (isStandardSize) {
            attributes.push({ key: 'isStandardSize', value: 'true' })
        }
        if (!isStandardSize) {
            attributes.push({ key: 'doors', value: `'${doors}'` })
            attributes.push({ key: 'vehicleYear', value: `'${vehicleYear}'` })
            if (make !== '') {
                attributes.push({ key: 'make', value: make })
            }
            if (model !== '') {
                attributes.push({ key: 'model', value: model })
            }
            if (sideA !== '') {
                attributes.push({ key: 'sideA', value: sideA })
            }
            if (sideB !== '') {
                attributes.push({ key: 'sideB', value: sideB })
            }
            if (sideC !== '') {
                attributes.push({ key: 'sideC', value: sideC })
            }
        }
        if (isAi) {
            attributes.push({ key: 'FonzImageUrl', value: `https://res.cloudinary.com/dkxssdk96/image/upload/${iid}.png` })
        }
        return attributes
    }

    const { adding, added, addToCart } = useAtc()

    const addAndOpenCart = (imgUrl?: string) => {
        addToCart({
            selectedVariant,
            quantity: quantity,
            attributes: cartAttributes(imgUrl),
        })

        router.push('/cart')
    }

    const handleAddToCart = async () => {
        if (!isStandardSize) {
            if (!make) {
                ErrorToast({ msg: 'Please enter a make' })
                return
            }
            if (!model) {
                ErrorToast({ msg: 'Please enter a model' })
                return
            }
            if (!sideA || !sideB || !sideC) {
                ErrorToast({ msg: 'Please enter all window measurements' })
                return
            }
            if (!doors) {
                ErrorToast({ msg: 'Please enter the number of doors' })
                return
            }
            if (!vehicleYear) {
                ErrorToast({ msg: 'Please enter vehicle year' })
                return
            }
            const vehicle = {
                make,
                model,
                year: vehicleYear,
                doors,
            }
            const window = {
                a: sideA,
                b: sideB,
                c: sideC,
            }
            addVehicle({
                vehicle,
                window,
            }).then((res) => {
            })
        }
        if (isBusiness) {
            if (!businessName || businessName === '') {
                ErrorToast({ msg: 'Please specify your business name' })
                return
            }
            if (dataUrl && dataUrl !== '') {
                if (!selectedLogoOption) {
                    ErrorToast({ msg: 'Please specify your logo option' })
                    return
                }
                const result = await handleUpload()
                if (!result) {
                    ErrorToast({ msg: 'Something went wrong, please try again' })
                    return
                }
                if (result.status === 'error') {
                    return
                }
                if (result.status === 'success') {
                    addAndOpenCart(result.imgUrl)
                    return
                }
            }
            if (!dataUrl || dataUrl === '') {
                if (selectedLogoOption === 'design' && describeLogo === '') {
                    ErrorToast({ msg: 'Please describe your logo' })
                    return
                }
                addAndOpenCart()
            }
        }
        if (isText) {
            if (textContent === '') {
                ErrorToast({ msg: 'Please enter your custom text' })
                return
            }
            addAndOpenCart()
        }
        if (!isBusiness && !isText) {
            addAndOpenCart()
        }
    }

    return (
        <Atc
            addToCart={handleAddToCart}
            adding={adding}
            added={added}
        />
    )
}

export default WindowAtc
