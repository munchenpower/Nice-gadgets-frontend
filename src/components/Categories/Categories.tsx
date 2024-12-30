import React from 'react';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import './Categories.scss';
import catImgPhone from '../../assets/icons/PhonesImage.png';
import catImgTablet from '../../assets/icons/TabletsImage.png';
import catImgAccessories from '../../assets/icons/AccessoriesImage.png';
import { useFetchData } from '../../hooks/useFetchData';
import { ProductDetails } from '../../types/ProductDetails';

export const Categories: React.FC = () => {
  const { count: countPhones } = useFetchData<ProductDetails>();
  const { count: countTablets } = useFetchData<ProductDetails>('tablets');
  const { count: countAccessories } =
    useFetchData<ProductDetails>('accessories');

  return (
    <>
      <div className="category">
        <div className="container">
          <div className="category__title">Shop by category</div>

          <div className="category__content">
            <CategoryCard
              path="/phones"
              img={catImgPhone}
              title="Mobile phones"
              quantity={countPhones}
            />
            <CategoryCard
              path="/tablets"
              img={catImgTablet}
              title="Tablets"
              quantity={countTablets}
            />
            <CategoryCard
              path="/accessories"
              img={catImgAccessories}
              title="Accessories"
              quantity={countAccessories}
            />
          </div>
        </div>
      </div>
    </>
  );
};
