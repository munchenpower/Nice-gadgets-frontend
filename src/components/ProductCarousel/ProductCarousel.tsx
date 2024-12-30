import React, { useRef } from 'react';
import './ProductCarousel.scss';
import { Card } from '../Card';
import { Product } from '../../types/Product';
import './phones.json';

interface Props {
  title: string;
  products: Product[];
}

export const ProductCarousel: React.FC<Props> = ({ title, products }) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const handlePrevClick = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 286;
    }
  };

  const handleNextClick = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 286;
    }
  };

  return (
    <div className="recommended">
      <div className="recommended__top">
        <h3 className="recommended__title">{title}</h3>

        <div className="recommended__slider">
          <button className="recommended__button" onClick={handlePrevClick}>
            <span
              className="
                recommended__button-icon
                recommended__button-icon--left"
            ></span>
          </button>
          <button className="recommended__button" onClick={handleNextClick}>
            <span
              className="
                recommended__button-icon
                recommended__button-icon--right"
            ></span>
          </button>
        </div>
      </div>

      <div className="recommended__content" ref={listRef}>
        <div className="recommended__scroll-wrapper">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
