import React from 'react';
import { formatPrice } from '@/utils/helpers';

function Price({
  price,
  quantity,
  perUnit,
}: {
  price: string;
  quantity: number;
  perUnit?: string;
}) {
  const totalPrice = Number(price) * quantity;

  const formattedPerUnit = perUnit?.startsWith('.') ? `0${perUnit}` : perUnit;

  return (
    <div>
      <div className="text-4xl font-semibold">{formatPrice(totalPrice)}</div>
      {perUnit && <div className="text-sm">${formattedPerUnit}/unit</div>}
    </div>
  );
}

export default Price;
