import Image from 'next/image';
import { ShopifyProduct } from '@/lib/shopify/types';
import ProductImage from '../product/[pid]/product-image';

export default function UploadImage({
  imageData,
  product,
}: {
  imageData: { publicID: string; url: string; secure_url: string };
  product: ShopifyProduct;
}) {
  return (
    <div className='w-full'>
    {imageData.secure_url &&  <Image
    className='max-h-[50vh] object-contain'
        src={imageData.secure_url}
        alt="uploaded image"
        width={900}
        height={900}
      /> }
    </div>
  );
}
