import React, { useEffect, useState } from 'react';
import './ProductPage.scss';
import './ProductSlider.scss';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import Slider from 'react-slick';
import { Buttons } from '../../components/Buttons/Buttons';
import { ProductDetails } from '../../types/ProductDetails';
import { Loader } from '../../components/Loader';
import { About } from '../../components/About';
import { getSpecsFromProductData } from '../../helpers/getSpecsFromProductData';
import { ProductTechSpecs } from '../../components/ProductTechSpecs';
import { ProductCarousel } from '../../components/ProductCarousel';
import { useGetRecommendedItems } from '../../hooks/useFetchData';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { GoBackButton } from '../../components/GoBackButton/GoBackButton';

export const ProductItem: React.FC = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState<ProductDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');
  const location = useLocation();
  const categoryName = location.pathname.split('/')[1];
  const { isLoading: isLoadingRecommendations, data: recommendedItems } =
    useGetRecommendedItems(categoryName, productSlug as string);
  const loadItem = (productSlug: string | undefined) => {
    setIsLoading(true);
    fetch(
      `https://devbananas-products-api.onrender.com/${categoryName}/${productSlug}`
    )
      .then((response) => {
        return response.json();
      })
      .then((loadedItem) => {
        if (loadedItem) {
          setCurrentProduct(loadedItem);
          setImages(loadedItem.images);
          setSelectedCapacity(loadedItem.capacity);
          setSelectedColor(loadedItem.color);
        }
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadItem(productSlug);
  }, [productSlug]);

  const handleColorButtonClick = (color: string) => {
    const colorId = color.split(' ').join('-');
    setSelectedColor(colorId);
    const newPhoneSlug = [
      currentProduct?.namespaceId,
      selectedCapacity,
      colorId
    ]
      .join('-')
      .toLowerCase();

    loadItem(newPhoneSlug);
    navigate(`/${categoryName}/${newPhoneSlug}`);
  };

  const handleCapacityButtonClick = (capacity: string) => {
    setSelectedCapacity(capacity);
    const newPhoneSlug = [currentProduct?.namespaceId, capacity, selectedColor]
      .join('-')
      .toLowerCase();

    loadItem(newPhoneSlug);
    navigate(`/${categoryName}/${newPhoneSlug}`);
  };

  const hostName = 'https://devbananas-products-api.onrender.com/';

  const settings = {
    customPaging(i: number) {
      return (
        <img
          src={`${hostName}${images[i]}`}
          alt="img"
          className="slick-image"
        />
      );
    },
    dots: true,
    dotsClass: 'slick-dots-for-small-img',
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    initialSlide: 0
  };

  if (isLoading || !currentProduct) {
    return (
      <div className="product">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs>
        <Link to={`/${categoryName}`}>
          <Typography className="product__category" color="text.primary">
            {categoryName.substring(0, 1).toUpperCase()}
            {categoryName.substring(1, categoryName.length)}
          </Typography>
        </Link>
        {currentProduct ? (
          <Typography className="product__name">
            {currentProduct.name}
          </Typography>
        ) : (
          ' '
        )}
      </Breadcrumbs>

      <GoBackButton categoryDirectory={categoryName} />

      <div className="product">
        <h2 className="product__title">{currentProduct.name}</h2>
        <div className="grid">
          <div className="grid__item--tablet--1-7 grid__item--desktop--1-12 slider">
            <Slider {...settings}>
              {images.map((image) => (
                <img
                  src={`${hostName}${image}`}
                  alt={image}
                  className="product__main-image"
                  key={image}
                />
              ))}
            </Slider>
          </div>

          <div className="product__actions grid__item--tablet--8-12 grid__item--desktop--14-20">
            <section className="product__colors">
              <p className="product__colors-title">Available colors</p>
              <div className="product__colors-buttons">
                {currentProduct?.colorsAvailable.map((color) => (
                  <button
                    className={cn('product__colors-selector', {
                      'product__colors-selector--is-active':
                        selectedColor === color
                    })}
                    key={color}
                    data-color={color}
                    style={{
                      backgroundColor: color
                    }}
                    onClick={() => handleColorButtonClick(color)}
                  />
                ))}
              </div>
            </section>

            <div className="product__line"></div>

            <section className="product__capacity">
              <p className="product__capacity-title">Select capacity</p>
              {currentProduct.capacityAvailable.map((capacity) => (
                <button
                  type="button"
                  className={cn('product__capacity-button', {
                    'product__capacity-button--is-active':
                      selectedCapacity === capacity
                  })}
                  key={capacity}
                  onClick={() => handleCapacityButtonClick(capacity)}
                >
                  {capacity}
                </button>
              ))}
            </section>

            <div className="product__line"></div>

            <section className="product__price">
              <h2 className="product__price-actual">
                ${currentProduct.priceDiscount}
              </h2>
              <p className="product__price-full">
                ${currentProduct.priceRegular}
              </p>
            </section>

            <section className="product__buy">
              <Buttons id={currentProduct.id} />
            </section>

            <div className="product__short-specs">
              <ul className="card__descriptions">
                <li className="card__description">
                  <p className="card__description-left">Screen</p>
                  <p className="card__description-right">
                    {currentProduct.screen}
                  </p>
                </li>
                <li className="card__description">
                  <p className="card__description-left">Resolution</p>
                  <p className="card__description-right">
                    {currentProduct.resolution}
                  </p>
                </li>
                <li className="card__description">
                  <p className="card__description-left">Capacity</p>
                  <p className="card__description-right">
                    {currentProduct.capacity}
                  </p>
                </li>
                <li className="card__description">
                  <p className="card__description-left">RAM</p>
                  <p className="card__description-right">
                    {currentProduct.ram}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="grid__item--tablet--1-12 grid__item--desktop--1-12">
            {<About product={currentProduct} />}
          </div>

          <div className="grid__item--tablet--1-12 grid__item--desktop--14-24">
            {
              <ProductTechSpecs
                specs={getSpecsFromProductData(currentProduct)}
              />
            }
          </div>
          <div className="grid__item--tablet--1-12 grid__item--desktop--1-24">
            {isLoadingRecommendations ? (
              <Loader />
            ) : (
              <ProductCarousel
                title="You may also like"
                products={recommendedItems}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
