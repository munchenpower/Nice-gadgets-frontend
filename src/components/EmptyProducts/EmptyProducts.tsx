import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import ImgComponent from '../../pages/NotFoundPage/ImgComponent';
import emptyProducts from '../../assets/icons/emptyProducts.png';

export const EmptyProducts: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10vh'
      }}
    >
      <h1 className="title" style={{ textAlign: 'center' }}>
        No products in this category
      </h1>

      <ImgComponent src={emptyProducts} />

      <NavLink to="/">
        <button className="modal__button">Back to Store</button>
      </NavLink>
    </div>
  );
};
