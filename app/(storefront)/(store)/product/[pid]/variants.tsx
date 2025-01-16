/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Price from './price'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'
import { ShopifyProduct, VariantByOptions, EyebrowCustom as EyebrowCustomType, eyebrowCustomDefault } from '@/lib/shopify/types'
import { extractFirstValues, convertToObjectArray } from '@/utils/helpers'
import useAtc from '@/app/hooks/useAtc'
import VariantSelect from './variant-select'
import Quantity from './quantity'
import Customization from './customization'
import Atc from '@/app/atc'
import EyebrowCustom from './eyebrow/eyebrow-custom'
import { ErrorToast } from '@/app/toast/error'

function Variants({ product, imageData }: { product: ShopifyProduct, imageData?: Record<string, string> }) {
  const initialOptions = extractFirstValues(product.options)
  const [selectedOptions, setSelectedOptions] = useState(initialOptions)
  const [selectedVariant, setSelectedVariant] = useState<VariantByOptions | null>(null)
  const [customization, setCustomization] = useState<string>('')
  const [eyebrowCustom, setEyebrowCustom] = useState<EyebrowCustomType>(eyebrowCustomDefault)
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()

  const isCard = product.productType === 'Credit Card Skin'
  const isEyebrow = product.handle === 'truck-windshield-eyebrow'
  const isUpload = product.handle === 'custom-sticker-design'

  const fetchedVariant = async (variant: Record<string, string>) => {
    return await storeApi.getVariantByOptions({ handle: product.handle, selectedOptions: convertToObjectArray(variant) })
  }

  const { adding, added, addToCart } = useAtc()

  const makeAttrs = () => {
    if (isEyebrow) {
      return [
        { key: 'Text', value: eyebrowCustom.text },
        { key: 'Font Color', value: eyebrowCustom.fontColor },
        { key: 'BG Color', value: eyebrowCustom.bgColor },
        { key: 'Note', value: eyebrowCustom.note },
      ]
    } else if (isUpload) {
      return [{ key: 'Image', value: imageData?.secure_url ?? '' }]
    }
    return [{ key: selectedOptions.Personalization ? selectedOptions.Personalization : 'None', value: customization ? customization : 'None' }]
  }

  const addAndOpenCart = () => {
    if (isUpload && !imageData?.secure_url) {
      ErrorToast({ msg: 'Please upload an image before adding to cart' })
      return
    }
    console.log('addAndOpenCart', { selectedVariant, quantity, attributes: makeAttrs() })
    addToCart({
      selectedVariant,
      quantity,
      attributes: makeAttrs(),
    })
    router.push('/cart')
  }

  useEffect(() => {
    fetchedVariant(selectedOptions).then((variant) => setSelectedVariant(variant))    
  }, [selectedOptions])

  const handleSelect = async (variant: Record<string, string>) => {
    setSelectedOptions(variant)
  }

  // console.log('selectedVariant', selectedVariant)

  const isCustom = selectedOptions.Personalization !== 'None'
  return (
    <div className='flex flex-col gap-4 min-w-[237px] px-4 mb-8'>
      <Price
        quantity={quantity}
        price={selectedVariant?.price ? selectedVariant?.price.amount : '0'}
        perUnit={selectedVariant?.metafield ? selectedVariant?.metafield?.value : ''}  
      />
      <div>
        {!isCard &&
          product.options.map((option, i) => (
            <VariantSelect
              setSelectedOptions={handleSelect}
              selectedOptions={selectedOptions}
              option={option}
              key={option.id}
            />
          ))}
      </div>
      {!isUpload && <div>
        {isEyebrow ? (
          <EyebrowCustom
            eyebrowCustom={eyebrowCustom}
            setEyebrowCustom={setEyebrowCustom}
          />
        ) : (
          <Customization
            isCustom={isCustom}
            setCustomization={setCustomization}
            customization={customization}
          />
        )}
      </div>}
      <Quantity
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <Atc
        addToCart={addAndOpenCart}
        adding={adding}
        added={added}
      />
    </div>
  )
}

export default Variants
