'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  console.log(quantity)

  return (
    <div>
      <Image
        src={`/products/${product.image}.jpg`}
        width="300"
        height="200"
        alt={product.name}
      />
      <input
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <button> Add to Cart</button>
    </div>
  );
}
