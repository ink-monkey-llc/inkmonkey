import { ProductVariant } from '@/lib/shopify/types'
import { atom } from 'jotai'
import { initialSelectedVariant } from '@/app/content/initial-values'

export const selectedVariantAtom = atom<ProductVariant | null>(initialSelectedVariant)
export const selectedLogoOptionAtom = atom<string | null>(null)
