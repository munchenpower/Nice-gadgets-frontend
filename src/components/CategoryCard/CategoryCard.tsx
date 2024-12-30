import React from 'react';
import './CategoryCard.scss';
import { Link } from 'react-router-dom';

type Props = {
  path: string;
  img: string;
  title: string;
  quantity: number;
};

export const CategoryCard: React.FC<Props> = ({
  path,
  img,
  title,
  quantity
}) => {
  return (
    <div className="category__item">
      <div className="category__item_container">
        <Link to={path}>
          <img
            src={img}
            alt="phone category"
            className="category__item_container-image"
          />
        </Link>
      </div>
      <Link to={path} className="category__item_description">
        {title}
      </Link>
      <div className="category__item_quantity">
        {quantity > 0 ? `${quantity} models` : 'There are no products yet'}
      </div>
    </div>
  );
};
