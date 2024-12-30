import React, { FC } from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const AccessoriesPage: FC = () => {
  return (
    <main>
      <Breadcrumbs>
        <Typography>Accessories</Typography>
      </Breadcrumbs>
      <ProductList productType={'accessories'} title={'Accessories'} />
    </main>
  );
};
