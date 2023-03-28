import { AxiosError } from './../../node_modules/axios/index.d';
import axios from 'axios';
import { IProduct } from './../models';
import { useState, useEffect } from 'react';
export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function addProduct(product: IProduct) {
    setProducts((prev) => [...prev, product]);
  }

  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);
      const res = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products'
      );
      setProducts(res.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, addProduct };
}
