import { useState } from 'react';
import { CreateProduct } from './components/CreateProduct';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';

function App() {
  const { products, loading, error } = useProducts();
  const [modal, setModal] = useState(true);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading</p>}
      {error && <p className="text-center">{error}</p>}
      {!loading &&
        products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      {modal && (
        <Modal title="Create new product">
          <CreateProduct
            onCreate={() => {
              setModal(false);
            }}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
