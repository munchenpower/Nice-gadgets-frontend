import React, { FC } from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const PhonesPage: FC = () => {
  return (
    <main>
      <Breadcrumbs>
        <Typography>Phones</Typography>
      </Breadcrumbs>
      <ProductList productType={'phones'} title={'Mobile phones'} />
    </main>
  );
};
