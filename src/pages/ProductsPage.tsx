import { useContext } from 'react';
import { CreateProduct } from '../components/CreateProduct';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';

export function ProductPage() {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);
  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };
  const onCloseHandler = () => {
    close();
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
        onClick={open}
      >
        +
      </button>
    </div>
  );
}
