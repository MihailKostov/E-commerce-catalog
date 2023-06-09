import { Link } from 'react-router-dom';
import { DetailsOfProducts } from '../../types/DetailsOfProducts';
import { Product } from '../../types/Product';
import { DescriptionOnProductPage } from '../DescriptionOnProductPage';
import { ImagesOnProductPage } from '../ImagesOnProductPage';
import { OptionsOnProductPage } from '../OptionsOnProductPage';
import './DetailsOfProduct.scss';

type Prop = {
  selectedProduct: Product,
  product: DetailsOfProducts,
};

export const DetailsOfProduct: React.FC<Prop> = ({
  selectedProduct,
  product,
}) => {
  const { name, images } = product;

  return (
    <div className="container">
      <div className="details__root-box">
        <Link to="/">
          <img
            src="img/Icons/home.svg"
            alt="Home"
            className="details__home-img"
          />
        </Link>

        <img
          src="img/Icons/arr-right-hover.svg"
          alt="arr-right"
          className="details__arr-right"
        />

        <Link to="../" className="item__root-name">
          Phones
        </Link>

        <img
          src="img/Icons/arr-right-hover.svg"
          alt="arr-right"
          className="details__arr-right"
        />

        <p className="details__root-name">
          {name}
        </p>
      </div>

      <a href="/" className="details__back-link">
        <img
          src="img/Icons/arr-left.svg"
          alt="back-arrow"
          className="details__back-arrow"
        />

        <p className="details__root-name">Back</p>
      </a>

      <h1 className="details__title">{name}</h1>

      <div className="details__main-block">
        <ImagesOnProductPage images={images} />

        <OptionsOnProductPage
          product={product}
          selectedProduct={selectedProduct}
        />
      </div>

      <div className="details__secondary-block">
        <DescriptionOnProductPage product={product} />
      </div>
    </div>
  );
};
