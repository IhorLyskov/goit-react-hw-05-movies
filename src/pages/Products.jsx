import { ProductList } from '../components/ProductList';
import { getProducts } from '../fakeAPI';

export const Products = () => {
  return (
    <main>
      <ProductList products={getProducts()} />
    </main>
  );
};
