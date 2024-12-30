import React, { FC } from 'react';
import './Card.scss';
import { Buttons } from '../Buttons/Buttons';
import { Product } from '../../types/Product';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}

const API_URL = 'https://devbananas-products-api.onrender.com/';

export const Card: FC<Props> = ({ product }) => {
  return (
    <article className="card">
      <Link to={`/${product.category}/${product.itemId}`} className="card__top">
        <img
          className="card__photo"
          src={`${API_URL}${product.image}`}
          alt={product.name}
        />
        <h3 className="card__title">{product.name}</h3>
        <div className="card__price">
          <p className="card__price-actual">${product.price}</p>
          <p className="card__price-full">${product.fullPrice}</p>
        </div>
      </Link>
      <div className="card__line"></div>
      <ul className="card__descriptions">
        <li className="card__description">
          <p className="card__description-left">Screen</p>
          <p className="card__description-right">{product.screen}</p>
        </li>
        <li className="card__description">
          <p className="card__description-left">Capacity</p>
          <p className="card__description-right">{product.capacity}</p>
        </li>
        <li className="card__description">
          <p className="card__description-left">RAM</p>
          <p className="card__description-right">{product.ram}</p>
        </li>
      </ul>

      <Buttons id={product.itemId} />
    </article>
  );
};
