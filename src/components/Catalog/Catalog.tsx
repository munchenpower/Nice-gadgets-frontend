import React from 'react';
import { Card } from '../Card/Card';
import './Catalog.scss';
import { Product } from '../../types/Product';

export type OptionType = {
  value: string;
  label: string;
};

export const sortByOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'alphabetically', label: 'Alphabetically' },
  { value: 'cheapest', label: 'Cheapest' }
];

export const perPageOptions = [
  { value: '4', label: '4' },
  { value: '8', label: '8' },
  { value: '12', label: '12' },
  { value: '16', label: '16' }
];

interface Props {
  products: Product[];
}

export const Catalog: React.FC<Props> = ({ products }) => {
  return (
    <section className="catalog__grid">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
};
