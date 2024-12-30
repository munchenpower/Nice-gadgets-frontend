import React, { FC } from 'react';
import { ProductCarousel } from '../components/ProductCarousel';
import { useGetSpecial } from '../hooks/useFetchData';
import { Categories } from '../components/Categories/Categories';
import { Loader } from '../components/Loader';
import { Promo } from '../components/Promo/Promo';

export const HomePage: FC = () => {
  const { isLoading: isLoadingNewest, data: newest } = useGetSpecial('new');
  const { isLoading: isLoadingdiscounts, data: discounts } =
    useGetSpecial('discounts');

  return (
    <main>
      <Promo />
      {isLoadingNewest ? (
        <Loader />
      ) : (
        <ProductCarousel title="Brand new models" products={newest} />
      )}
      <Categories />
      {isLoadingdiscounts ? (
        <Loader />
      ) : (
        <ProductCarousel title="Hot prices" products={discounts} />
      )}
    </main>
  );
};
