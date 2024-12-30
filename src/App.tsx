import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage, PhonesPage, TabletsPage, AccessoriesPage } from './pages';
import { NotFoundPage } from './pages/NotFoundPage';
import { NotFoundRedirect } from './pages/NotFoundPage/NotFoundRedirect';
import { FavoritesPage } from './pages/FavoritesPage/Favorites';
import { CartPage } from './pages/CartPage/CartPage';
import { ProductItem } from './pages/ProductPage';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { RightsPage } from './pages/RightsPage';

export const App = () => {
  return (
    <div className={'App'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="phones">
            <Route index element={<PhonesPage />} />
            <Route path=":productSlug" element={<ProductItem />} />
          </Route>
          <Route path="tablets">
            <Route index element={<TabletsPage />} />
            <Route path=":productSlug" element={<ProductItem />} />
          </Route>
          <Route path="accessories">
            <Route index element={<AccessoriesPage />} />
            <Route path=":productSlug" element={<ProductItem />} />
          </Route>
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="not-found" element={<NotFoundPage />} />
          <Route path="rights" element={<RightsPage />} />
          <Route path="authorization" element={<AuthPage />} />{' '}
          {/* TEST AUTH */}
          <Route path="*" element={<NotFoundRedirect />} />
        </Route>
      </Routes>
    </div>
  );
};
