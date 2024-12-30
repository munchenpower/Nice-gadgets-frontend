import React, { FC, useState } from 'react';
import './CartItem.scss';
import { Product } from '../../types/Product';
import { changeAmount, deleteItem } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';

interface Props {
  item: Product;
}

export const CartItem: FC<Props> = ({ item }) => {
  const initialAmount = useSelector((state: RootState) => {
    const cartItem = state.cart.cartList.find(
      (cartItem) => cartItem.id === item.itemId
    );
    return cartItem ? cartItem.amount : 1;
  });

  const [amount, setAmount] = useState(initialAmount);

  const API_URL = 'https://devbananas-products-api.onrender.com/';
  const totalPrice = item.price * amount;

  const isOneAmount = amount === 1;

  const dispatch = useAppDispatch();

  const removeItemHandler = () => {
    dispatch(deleteItem(item.itemId));
  };

  const buttonDecreaseHandler = () => {
    setAmount((prev) => Math.max(prev - 1, 1));
    dispatch(changeAmount({ itemId: item.itemId, sign: '-' }));
  };

  const buttonIncreaseHandler = () => {
    if (amount < 99) {
      setAmount((prev) => prev + 1);
      dispatch(changeAmount({ itemId: item.itemId, sign: '+' }));
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button
          className="cart-item__delete"
          onClick={removeItemHandler}
        ></button>
        <img
          className="cart-item__image"
          src={`${API_URL}${item.image}`}
          alt={item.name}
        />
        <Link
          to={`/${item.category}/${item.itemId}`}
          className="cart-item__link"
        >
          <div className="cart-item__title">{item.name}</div>
        </Link>
      </div>

      <div className="cart-item__details">
        <div className="cart-item__amount-info">
          <button
            className={classNames('cart-item__button--minus', {
              'cart-item__button--minus_disabled': isOneAmount
            })}
            onClick={buttonDecreaseHandler}
            disabled={amount <= 1}
          >
            <span
              className={classNames(
                'cart-item__button-icon',
                'cart-item__button-icon--decrease',
                { 'cart-item__button-icon--decrease_disabled': isOneAmount }
              )}
            ></span>
          </button>
          <span className="cart-item__amount">{amount}</span>
          <button
            className={classNames('cart-item__button--plus', {
              'cart-item__button--plus_disabled': amount >= 99
            })}
            onClick={buttonIncreaseHandler}
            disabled={amount >= 99}
          >
            <span
              className={classNames(
                'cart-item__button-icon',
                'cart-item__button-icon--increase',
                { 'cart-item__button-icon--increase_disabled': amount >= 99 }
              )}
            ></span>
          </button>
        </div>

        <h4 className="cart-item__price">${totalPrice}</h4>
      </div>
    </div>
  );
};
