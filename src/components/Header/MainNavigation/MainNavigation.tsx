import React from 'react';
import { PageNavLink } from '../PageNavLink';

const navigationItems = [
  { to: '/', text: 'Home' },
  { to: '/phones', text: 'Phones' },
  { to: '/tablets', text: 'Tablets' },
  { to: '/accessories', text: 'Accessories' }
];

interface Props {
  isBurgerMenuOpen: boolean;
}

export const MainNavigation: React.FC<Props> = ({ isBurgerMenuOpen }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navigationItems.map((item) => (
          <li className="nav__item" key={item.to}>
            <PageNavLink
              to={item.to}
              text={item.text}
              isBurgerMenuOpen={isBurgerMenuOpen}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
