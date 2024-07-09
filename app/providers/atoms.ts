import { ProductVariant } from '@/lib/shopify/types'
import { atom } from 'jotai'
import { initialSelectedVariant, initialBusinessLogoData } from '@/app/content/initial-values'

export type BusinessLogoData = {
 publicId: string
 url: string
 secure_url: string
}

export const selectedVariantAtom = atom<ProductVariant | null>(initialSelectedVariant)
export const selectedLogoOptionAtom = atom<string | null>(null)
export const selectedLogoFileAtom = atom<File | null>(null)
export const logoDataUrlAtom = atom<string>('')

export const businessNameAtom = atom<string>('')
export const businessSloganAtom = atom<string>('')
export const businessContactAtom = atom<string>('')
export const businessLocationAtom = atom<string>('')
export const businessEtcAtom = atom<string>('')
export const businessLogoDataAtom = atom<BusinessLogoData>(initialBusinessLogoData)
export const textContentAtom = atom<string>('')
export const textDetailsAtom = atom<string>('')
