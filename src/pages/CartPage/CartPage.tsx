import React from 'react';
import { useState } from 'react';
import './CartPage.scss';
import { CartItem } from '../../components/CartItem';
import { ModalWindow } from '../../components/ModalWindow';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectCart } from '../../features/cart/cartSlice';
import { Product } from '../../types/Product';
import { useFetchData } from '../../hooks/useFetchData';
import { Loader } from '../../components/Loader';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import cart from '../../assets/icons/purchaseIcon.png';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { CartItem as CartItemType } from '../../types/CartItem';

export const CartPage = () => {
  const [isModal, setIsModal] = useState(false);
  const cartItems = useAppSelector(selectCart);
  const queryString = `?id=${cartItems.map((item: CartItemType) => item.id)}`;
  const { isLoading, data: products } = useFetchData<Product>(
    'products',
    queryString
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.amount,
    0
  );

  const totalCost = products.reduce((accumulator, item) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.itemId);
    if (cartItem) {
      return accumulator + item.price * cartItem.amount;
    }
    return accumulator;
  }, 0);

  return (
    <>
      <Breadcrumbs>
        <Typography>Favorites</Typography>
      </Breadcrumbs>

      {isLoading && Boolean(cartItems.length) && <Loader />}

      {cartItems.length ? (
        <div className="cart">
          <h1 className="cart__title">Cart</h1>

          <div className="cart__wrapper">
            <div className="cart__items">
              <div className="cart__item">
                {products.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="cart__total">
              <h3 className="cart__price">${totalCost}</h3>
              <span className="cart__amount">
                {totalQuantity === 1
                  ? `Total for ${totalQuantity} item`
                  : `Total for ${totalQuantity} items`}
              </span>
              <button className="cart__button" onClick={() => setIsModal(true)}>
                Checkout
              </button>
            </div>
          </div>

          {isModal && <ModalWindow />}
        </div>
      ) : (
        <div className={cn('empty__container')}>
          <img src={cart} alt="" />
          <h2 className={cn('empty__container--text', 'empty__title')}>
            {'Nothing here yet :('}
          </h2>
          <h2 className={cn('empty__container_bottom--text')}>
            Let&apos;s better look what we have
          </h2>
          <Link to="/" className={cn('empty__container--button')}>
            find something!
          </Link>
        </div>
      )}
    </>
  );
};
