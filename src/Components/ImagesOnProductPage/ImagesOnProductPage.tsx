import classNames from 'classnames';
import React, { useState } from 'react';
import './ImagesOnProductPage.scss';

type Props = {
  images: string[],
};

export const ImagesOnProductPage: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  return (
    <div className="imagesOnProduct__images-block">
      <div className="imagesOnProduct__images">
        <ul className="imagesOnProduct__left-block-img">
          {images.map((image, i) => {
            const isSelected = currentIndex === i;

            return (
              <button
                type="button"
                className={classNames(
                  'imagesOnProduct__small-img-wrap',
                  {
                    'imagesOnProduct__small-img-wrap': isSelected,
                  },
                )}
                key={image}
                onClick={() => handleClick(i)}
              >
                <div
                  className="imagesOnProduct__small-img"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </button>
            );
          })}
        </ul>

        <div className="imagesOnProduct__main-image">
          <div
            className="imagesOnProduct__big-image"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
        </div>
      </div>
    </div>
  );
};
