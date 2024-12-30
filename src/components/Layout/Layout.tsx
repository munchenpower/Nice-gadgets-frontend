import React, { FC } from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout: FC = () => (
  <>
    <Header />
    <main className="page">
      <div className="page__container">
        <Outlet />
      </div>
    </main>
    <Footer />
  </>
);
