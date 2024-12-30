import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import Fav from '../../../assets/icons/Favourites.svg';
import Cart from '../../../assets/icons/shoppingCart.svg';
import Auth from '../../../assets/icons/Auth.svg';
import { Counter } from '../Counter/Counter';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectCart } from '../../../features/cart/cartSlice';
import { selectFavorites } from '../../../features/favorites/favoritesSlice';

type Props = {
  type: string;
};

const prepareLink = (type: string) => {
  switch (type) {
    case 'fav':
      return ['/favorites', Fav];

    case 'auth':
      return ['/authorization', Auth]; // TEST AUTH

    default:
      return ['/cart', Cart];
  }
};

export const HeaderButton: React.FC<Props> = ({ type }) => {
  const [isClicked, setIsClicked] = useState(false);
  const linkData = prepareLink(type);

  const storageItems = useAppSelector(
    type === 'cart' ? selectCart : selectFavorites
  );

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset the isClicked state after 200ms (duration of the transition)
  };

  return (
    <NavLink
      to={linkData[0]}
      className={({ isActive }) =>
        cn(
          'header__button',
          { 'header__button--active': isActive },
          { 'header__button--fav': type === 'fav' },
          { 'header__button--cart': type === 'cart' },
          { 'header__button--auth': type === 'auth' } // TEST AUTH
        )
      }
      onClick={handleClick}
    >
      <img
        src={linkData[1]}
        alt="button"
        className={cn('header__button--image', { clicked: isClicked })}
      />

      {type !== 'auth' && <Counter amount={storageItems.length} />}
    </NavLink>
  );
};
