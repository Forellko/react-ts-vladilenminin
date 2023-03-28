import axios from 'axios';
import React, { useState } from 'react';
import { IProduct } from '../models';

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem',
  image: 'random',
  category: 'electronic',
  rating: {
    count: 5,
    rate: 5,
  },
};

interface CreateProductProps {
  onCreate: () => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim() === '') {
      setError('not valid');
      return;
    }

    productData.title = value;

    const res = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData
    );

    onCreate();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-none"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      {error && <p>not valid</p>}
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  );
}
