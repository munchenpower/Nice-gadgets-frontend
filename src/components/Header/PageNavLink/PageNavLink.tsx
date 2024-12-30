import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: string;
  text: string;
  isBurgerMenuOpen: boolean;
};

export const PageNavLink: React.FC<Props> = ({
  to,
  text,
  isBurgerMenuOpen
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        'nav__link',
        { 'is-active': isActive },
        { 'burger-menu__link': isBurgerMenuOpen }
      )
    }
  >
    {text}
  </NavLink>
);
