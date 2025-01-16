'use client';
import React, { useState, useEffect } from 'react';
import FileInput from './file-input';
import { ShopifyProduct } from '@/lib/shopify/types';
import { storeApi } from '@/lib/shopify/storefront-api/store-api';

import Variants from '../product/[pid]/variants';
import UploadImage from './upload-image';
import BackButton from '@/app/common/back-button';
import Disclaimer from './disclaimer';

function Upload() {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [imageData, setImageData] = useState({
    publicID: '',
    url: '',
    secure_url: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await storeApi.getProductByHandle({
        handle: 'custom-sticker-design',
      });
      setProduct(product);
    };
    fetchProduct();
  }, []);

  if (!product) return null;
  // console.log('product', product)

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1400px] m-auto px-2">
      <BackButton />
      <Disclaimer />
      <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-[1400px] m-auto mt-2">
        <div className="rounded-md  border-none flex flex-col items-center justify-center w-full my-auto md:w-2/3 md:h-[70vh] md:mb-8 md:ml-8 mb-0 p-2">
          <UploadImage
            imageData={imageData}
            product={product}
          />
          <FileInput
            setImageData={setImageData}
            imageData={imageData}
          />
        </div>
        <div className="w-full  sm:w-2/3 md:w-1/3 h-full mx-auto flex flex-col gap-4 ">
          <h1 className="text-3xl text-accent px-4 mt-4">{product.title}</h1>
          <Variants
            imageData={imageData}
            product={product}
          />
        </div>
      </div>
    </div>
  );
}

export default Upload;
