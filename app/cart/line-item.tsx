import React, { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import Image from 'next/image'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { CartItem } from '@/lib/shopify/types'
import Quantity from './cart-quant'
import { formatPrice, transformKey } from '@/utils/helpers'
import CartDelete from './cart-delete'
import Chevron, { Direction } from '@/app/icons/chevron'

function LineItem({ lineItem, cartId }: { lineItem: CartItem; cartId: string }) {
 const [userCartId, setUserCartId] = useLocalStorage('userCartId', { id: '', count: 1 })
 const [isOpen, setIsOpen] = useState(false)
 const merch = lineItem.merchandise
 const product = lineItem.merchandise.product
 const price = formatPrice(Number(lineItem.cost.totalAmount.amount))
 const quantity = lineItem.quantity
 const attributes = lineItem.attributes.map((attr) => transformKey(attr))
 const hasAttributes = lineItem.attributes.length > 0

 const handleQuantity = (num: number) => {
  if (quantity + num < 1) {
   return
  }
  storeApi
   .updateCart(cartId, [{ id: lineItem.id, merchandiseId: merch.id, quantity: quantity + num }])
   .then((cart) => setUserCartId({ id: cart.id, count: cart.totalQuantity }))
 }

 const handleRemove = () => {
  storeApi.removeFromCart(cartId, [lineItem.id]).then((cart) => setUserCartId({ id: cart.id, count: cart.totalQuantity }))
 }

 const imgSrc = product.handle.includes('ai-') ? attributes.find((attr) => attr.newKey === 'imageUrl')?.value : product.featuredImage.url

 const imgAlt = product.handle.includes('ai-') ? 'Custom AI Designed Image' : product.featuredImage.altText

 return (
  <div className='flex flex-col '>
   <div className='flex justify-between text-txt-primary'>
    <div className='flex gap-2 items-center'>
     <Image
      src={imgSrc as string}
      alt={imgAlt}
      width={80}
      height={80}
     />
     <div className='flex flex-col gap-1'>
      <h3 className='font-base'>{product.title}</h3>
      <div className='font-light text-sm'>{merch.title}</div>
      <div className='text-base font-semibold'>{price}</div>
     </div>
    </div>
    <div className='flex flex-col gap-1 items-center justify-between py-1'>
     <Quantity
      quantity={quantity}
      setQuantity={handleQuantity}
     />
     <CartDelete handleRemove={handleRemove} />
    </div>
   </div>
   {hasAttributes && (
    <div>
     {isOpen && (
      <div className='flex flex-col'>
       {attributes.map((attr, i) => {
        if (attr.newKey === 'doors' || attr.newKey === 'vehicleYear' || attr.newKey === 'make' || attr.newKey === 'model') {
         return null
        }
        return (
         <div
          className='flex '
          key={attr.newKey + i}>
          <p className='min-w-24 text-txt-secondary text-sm'>{attr.newKey}:</p>
          {attr.newKey === 'Logo' ? (
           <Image
            className='border border-border'
            src={attr.value}
            alt='logo'
            width={50}
            height={50}
           />
          ) : (
           <p className='w-max text-txt-secondary'>{attr.value}</p>
          )}
         </div>
        )
       })}
      </div>
     )}
     <p
      onClick={() => setIsOpen(!isOpen)}
      className='cursor-pointer flex justify-center items-center text-accent text-sm hover:text-accent-bright'>
      Personalization Details
      <Chevron
       className='w-4 h-4 ml-1'
       direction={isOpen ? Direction.Up : Direction.Down}
      />
     </p>
    </div>
   )}
   <div className='border-t border-border w-full m-auto' />
  </div>
 )
}

export default LineItem
