import { GenericSlide } from 'yet-another-react-lightbox'
import { ShopifyProduct } from './lib/shopify/types'

declare module 'yet-another-react-lightbox' {
 export interface CustomSlide extends GenericSlide {
  type: 'custom'
  src: string
  width: number
  height: number
  price: string
  prod: ShopifyProduct
 }

 interface SlideTypes {
  custom: CustomSlide
 }
 interface SlideImage {
  prod: ShopifyProduct
  price: string
 }
}
