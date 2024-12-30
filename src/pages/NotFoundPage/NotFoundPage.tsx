import React, { FC } from 'react';
import ImgComponent from './ImgComponent';
import { NavLink } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  const imgSrc =
    'https://png.pngtree.com/png-clipart/20200401/original/pngtree-page-not-found-error-404-concept-with-people-trying-to-fix-png-image_5333349.jpg';

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
        The page you&#39;re looking for can&#39;t be found.
      </h1>

      <ImgComponent src={imgSrc} />

      <NavLink to="/">
        <button className="modal__button">Back to Store</button>
      </NavLink>
    </div>
  );
};
