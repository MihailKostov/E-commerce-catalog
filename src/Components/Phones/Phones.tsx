import { Product } from '../../types/Product';
import { Loader } from '../Loader';
import { Card } from '../Card';

type Props = {
  products: Product[],
  isLoading?: boolean,
};

export const Phones: React.FC<Props> = ({ products, isLoading }) => {
  return (
    <>
      {isLoading
        ? (<Loader />)
        : (
          products.map((product) => (
            <Card
              product={product}
              key={product.id}
            />
          ))
        )}
    </>
  );
};
