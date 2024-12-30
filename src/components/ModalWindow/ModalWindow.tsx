import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './ModalWindow.scss';
import React from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { clearCart } from '../../features/cart/cartSlice';
import successBuy from '../../assets/icons/successBuy.png';
import closeButton from '../../assets/icons/closeButton.png';

export const ModalWindow = () => {
  const [isModal, setIsModal] = useState(true);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    setIsModal(false);
    dispatch(clearCart());
  };

  return (
    <>
      {isModal && (
        <div
          className={cn('modal', 'modal__backdrop', { 'is-active': isModal })}
        >
          <div className="modal__content">
            <img src={closeButton} className="close" onClick={closeModal} />
            <img src={successBuy} className={cn('modal__image')} />
            <div className="modal__thank">Thank&#39;s for shopping!</div>
            <div className="modal__message">
              Your order was successfully applied!
            </div>

            <NavLink onClick={closeModal} to="/">
              <button className="modal__button">Back to Store</button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
