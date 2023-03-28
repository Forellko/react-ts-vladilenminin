import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Product } from './components/Product';
import { IProduct } from './models';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    const res = await axios.get<IProduct[]>(
      'https://fakestoreapi.com/products'
    );
    setProducts(res.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading</p>}
      {!loading &&
        products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
    </div>
  );
}

export default App;
