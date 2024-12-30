import React from 'react';
import './Favorites.scss';
import { useFetchData } from '../../hooks/useFetchData';
import { Product } from '../../types/Product';
import { Catalog } from '../../components/Catalog';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectFavorites } from '../../features/favorites/favoritesSlice';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import emptyFav from '../../assets/icons/emptyFav.png';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Loader } from '../../components/Loader';

export const FavoritesPage: React.FC = () => {
  const favoriteItems = useAppSelector(selectFavorites);
  const queryString = `?id=${favoriteItems.map((item) => item.id)}`;
  const { isLoading, data: products } = useFetchData<Product>(
    'products',
    queryString
  );

  return (
    <>
      <Breadcrumbs>
        <Typography>Favorites</Typography>
      </Breadcrumbs>

      {isLoading && Boolean(favoriteItems.length) && <Loader />}

      {!isLoading && products.length ? (
        <div className="favorites">
          {/* <a href="#" className="favorites__link">
            Back
          </a> */}

          <h1 className="favorites__title">Favorites</h1>
          <p className="favorites__quantity">
            {products.length === 1
              ? `${products.length} item`
              : `${products.length} items`}
          </p>

          <div className="favorites__wrapper">
            <Catalog products={products} />
          </div>
        </div>
      ) : (
        <div className={cn('empty__container')}>
          <img src={emptyFav} alt="Empty Favorites" className="image" />
          <h2 className={cn('empty__container--text', 'empty__title')}>
            {'Nothing here yet :('}
          </h2>
          <h2 className={cn('empty__container_bottom--text')}>
            Let&apos;s find your favorites
          </h2>
          <Link to="/" className={cn('empty__container--button')}>
            FIND FAVORITES!
          </Link>
        </div>
      )}
    </>
  );
};
