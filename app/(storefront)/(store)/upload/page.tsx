'use client'
import React, { useState, useEffect } from 'react'
import FileInput from './file-input'
import { ShopifyProduct } from '@/lib/shopify/types'
import { storeApi } from '@/lib/shopify/storefront-api/store-api'

import Variants from '../product/[pid]/variants'

function Upload() {
  const [product, setProduct] = useState<ShopifyProduct | null>(null)
  const [imageData, setImageData] = useState({ publicID: '', url: '', secure_url: '' })

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await storeApi.getProductByHandle({ handle: 'custom-sticker-design' })
      setProduct(product)
    }
    fetchProduct()
  }, [])

  if (!product) return null

  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-center text-2xl font-bold">Upload your own design</h1>
      <div className="flex gap-4 justify-center">
        <FileInput setImageData={setImageData} imageData={imageData} />
        <Variants imageData={imageData} product={product} />
      </div>
    </div>
  )
}

export default Upload
