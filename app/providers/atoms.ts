import { ProductVariant } from '@/lib/shopify/types'
import { atom } from 'jotai'
import { initialSelectedVariant, initialBusinessLogoData, initialBusinessData } from '@/app/content/initial-values'

export type BusinessLogoData = {
 publicId: string
 url: string
 secure_url: string
}

export type BusinessData = {
 name: string
 slogan?: string
 contact?: string
 location?: string
 etc?: string
 logo?: BusinessLogoData
}

export const selectedVariantAtom = atom<ProductVariant | null>(initialSelectedVariant)
export const selectedLogoOptionAtom = atom<string | null>(null)
export const selectedLogoFileAtom = atom<File | null>(null)
export const logoDataUrlAtom = atom<string>('')
export const logoUrlAtom = atom<string>('')

export const businessNameAtom = atom<string>('')
export const businessSloganAtom = atom<string>('')
export const businessContactAtom = atom<string>('')
export const businessLocationAtom = atom<string>('')
export const businessEtcAtom = atom<string>('')
export const businessLogoDataAtom = atom<BusinessLogoData>(initialBusinessLogoData)

export const textContentAtom = atom<string>('')
export const textDetailsAtom = atom<string>('')

export const businessDataAtom = atom<BusinessData>(initialBusinessData)

export const isStandardSizeAtom = atom<boolean>(true)
export const vehicleYearAtom = atom<number>(2024)

selectedVariantAtom.debugLabel = 'Selected Variant'
selectedLogoOptionAtom.debugLabel = 'Selected Logo Option'
selectedLogoFileAtom.debugLabel = 'Selected Logo File'
logoDataUrlAtom.debugLabel = 'Logo Data Url'
logoUrlAtom.debugLabel = 'Logo Url'
businessNameAtom.debugLabel = 'Business Name'
businessSloganAtom.debugLabel = 'Business Slogan'
businessContactAtom.debugLabel = 'Business Contact'
businessLocationAtom.debugLabel = 'Business Location'
businessEtcAtom.debugLabel = 'Business Etc'
businessLogoDataAtom.debugLabel = 'Business Logo Data'
textContentAtom.debugLabel = 'Text Content'
textDetailsAtom.debugLabel = 'Text Details'
businessDataAtom.debugLabel = 'Business Data'
isStandardSizeAtom.debugLabel = 'Is Standard Size'
vehicleYearAtom.debugLabel = 'Vehicle Year'
