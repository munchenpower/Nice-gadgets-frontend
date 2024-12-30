import React from 'react';
import './Promo.scss';
import { HomeSlider } from '../HomeSlider';

export const Promo: React.FC = () => (
  <section className="Promo">
    <div className="Promo__title">Welcome to Nice Gadgets store!</div>

    <div className="Promo__slider">
      <HomeSlider />
    </div>

    <div style={{ position: 'static' }} className="swiper-pagination" />
  </section>
);
