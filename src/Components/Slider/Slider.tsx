/* eslint-disable react/no-unknown-property */
/* eslint-disable max-len */
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { Spinner } from '../Spinner';
import { ImageOnHomePage } from '../../types/ImageOnHomePage';
import { imagesForSlider } from '../../variables/variables';
import './Slider.scss';

const Dots = (index: number, selectedSlide: number) => {
  return (
    <svg
      width="12"
      height="2"
      viewBox="0 0 12 2"
      fill="#e2e6e9"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(
        'slider__img-dots',
        {
          'slider__img-dots--active': index === selectedSlide,
        },
      )}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.666504 0.999995C0.666504 0.631805 0.964981 0.333328 1.33317 0.333328H10.6665C11.0347 0.333328 11.3332 0.631805 11.3332 0.999995C11.3332 1.36818 11.0347 1.66666 10.6665 1.66666H1.33317C0.964981 1.66666 0.666504 1.36818 0.666504 0.999995Z"
        fill="current"
      />
    </svg>
  );
};

type Props = {
  isLoading: boolean,
};

export const Slider: React.FC<Props> = ({ isLoading }) => {
  const TRASITION_DURATION = 300;
  const animationDuration = 3000;

  const [slides] = useState<ImageOnHomePage[]>(imagesForSlider);
  const [currentSlide] = useState(0);
  const [width, setWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(0);
  const sliderLine = useRef<HTMLDivElement | null>(null);
  const sliderWindow = useRef<HTMLDivElement | null>(null);

  const maxOffset = (slides.length - 1) * width;

  const setCurrentWidth = () => {
    setWidth(prev => {
      if (sliderWindow.current) {
        return sliderWindow.current.offsetWidth;
      }

      return prev;
    });

    setOffset(prev => {
      if (sliderWindow.current) {
        return sliderWindow.current.offsetWidth * currentSlide;
      }

      return prev;
    });
  };

  useEffect(() => {
    setTransitionDuration(0);
    setCurrentWidth();
    window.addEventListener('resize', setCurrentWidth);
  }, [slides]);

  const onNext = () => {
    setTransitionDuration(TRASITION_DURATION);

    setOffset(prev => {
      if (prev === maxOffset) {
        return 0;
      }

      return prev + width;
    });
  };

  const onPrev = () => {
    setTransitionDuration(TRASITION_DURATION);

    setOffset(prev => {
      if (prev === 0) {
        return maxOffset;
      }

      return prev - width;
    });
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (width) {
        onNext();
      }
    }, animationDuration);

    return () => {
      clearTimeout(timerId);
    };
  }, [width, offset]);

  const selectedSlide = offset / width;

  const hadleClick = (index: number) => {
    setOffset(index * width);
  };

  if (isLoading) {
    return (
      <div className="slider page__section">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="page__section slider">
      <div className="container slider__container">
        <div className="slider__box">
          <button
            type="button"
            className="slider__arrow"
            onClick={() => onPrev()}
          >
            <div className="slider__arr slider__arr--left"> </div>
          </button>

          <div className="slider__main" ref={sliderWindow}>
            <div
              className="slider__list"
              ref={sliderLine}
              style={{
                width: `${width * slides.length}px`,
                transform: `translateX(-${offset}px)`,
                transitionDuration: `${transitionDuration}ms`,
              }}
            >
              {imagesForSlider.map((image, index) => {
                return (
                  <img
                    key={image.id}
                    src={image.imageUrl}
                    alt={`${index + 1}`}
                    className="slider__img"
                    style={{ width: `${width}px` }}
                  />
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="slider__arrow"
            onClick={() => onNext()}
          >
            <div className="slider__arr slider__arr--right"> </div>
          </button>
        </div>

        <div className="slider__dots">
          {imagesForSlider.map((image, index) => (
            <button
              className="slider__button-dots"
              key={image.id}
              onClick={() => hadleClick(index)}
              type="button"
            >
              {Dots(index, selectedSlide)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
