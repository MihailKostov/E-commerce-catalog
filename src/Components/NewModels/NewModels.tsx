import { Product } from '../../types/Product';
import { Phones } from '../Phones';
import './NewModels.scss';

type Props = {
  products: Product[],
  isLoading: boolean,
};

export const NewModels: React.FC<Props> = ({ products, isLoading }) => {
  return (
    <section className="page__section newModels" id="hot-price">
      <div className="container">
        <h1 className="newModels__title">
          Brand new models
        </h1>

        <div className="newModels__box">
          <button type="button" className="hot-price__button">
            <div className="newModels__arr newModels__arr--left"> </div>
          </button>

          <button
            type="button"
            className="button newModels__button newModels__button--active"
          >
            <div className="newModels__arr newModels__arr--right" />
          </button>
        </div>
      </div>

      <div className="newModels__card-container">
        <Phones
          isLoading={isLoading}
          products={products}
          data-cy="cardsContainer"
        />
      </div>
    </section>
  );
};
