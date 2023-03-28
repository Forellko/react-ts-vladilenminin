import { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button
        className={`py-2 px-4 border ${
          isVisible ? 'bg-green-400' : 'bg-yellow-400'
        }`}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>{product.description}</p>}
      <p>
        Rate: <span className="font-bold">{product?.rating?.rate}</span>
      </p>
    </div>
  );
}
