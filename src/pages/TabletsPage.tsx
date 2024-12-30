import React, { FC } from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const TabletsPage: FC = () => {
  return (
    <main>
      <Breadcrumbs>
        <Typography>Tablets</Typography>
      </Breadcrumbs>
      <ProductList productType={'tablets'} title={'Tablets'} />
    </main>
  );
};
