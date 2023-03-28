import { useState } from 'react';
import { CreateProduct } from './components/CreateProduct';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { IProduct } from './models';

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const [modal, setModal] = useState(true);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  };
  const onCloseHandler = () => {
    setModal(false);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading</p>}
      {error && <p className="text-center">{error}</p>}
      {!loading &&
        products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      {modal && (
        <Modal title="Create new product" onClose={onCloseHandler}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-600 text-white text-2xl px-4 py-2"
        onClick={() => {
          setModal(true);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
