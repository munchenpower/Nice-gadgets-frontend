import React, { useState } from 'react';
import cn from 'classnames';
import './Header.scss';
import './MainNavigation/MainNavigation.scss';
import { HeaderButton } from './HeaderButton';
import { Link, NavLink } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import './BurgerMenu.scss';
import Logo from '../../assets/icons/Logo.svg';
import Favs from '../../assets/icons/Favourites.svg';
import Cart from '../../assets/icons/shoppingCart.svg';
// import Auth from '../../assets/icons/Auth.svg';

import { PageNavLink } from './PageNavLink';
import { SearchBar } from '../SearchBar';

const navigationItems = [
  { to: '/', text: 'Home' },
  { to: '/phones', text: 'Phones' },
  { to: '/tablets', text: 'Tablets' },
  { to: '/accessories', text: 'Accessories' }
];

export const Header: React.FC = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);

    if (!isBurgerMenuOpen) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }
  };

  return (
    <>
      <header
        className={cn('header', { 'header--burger-open': isBurgerMenuOpen })}
      >
        <div className="header__top">
          <Link to="./" className="header__logo">
            <img
              className="header__logo--image"
              src={Logo}
              alt="NiceGadgets logo"
            />
          </Link>

          <MainNavigation isBurgerMenuOpen={isBurgerMenuOpen} />

          <div className="header__search">
            <SearchBar />
          </div>

          <div className="header__icons">
            <HeaderButton type="fav" />
            <HeaderButton type="cart" />
            {/* <HeaderButton type="auth" /> */}
            <button
              type="button"
              className={cn('header__button', 'header__button--burger', {
                'header__button--burger_open': isBurgerMenuOpen
              })}
              onClick={handleBurgerMenuClick}
            />
          </div>
        </div>
        {isBurgerMenuOpen && (
          <aside
            className={cn('burger-menu', {
              'burger-menu--active': isBurgerMenuOpen
            })}
          >
            <nav className="nav nav--burger">
              <ul className="nav__list nav__list--burger">
                {navigationItems.map((item) => (
                  <li
                    onClick={handleBurgerMenuClick}
                    className="nav__item  nav__item--burger"
                    key={item.to}
                  >
                    <PageNavLink
                      to={item.to}
                      text={item.text}
                      isBurgerMenuOpen={isBurgerMenuOpen}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="burger-menu__bottom">
              <NavLink
                to={'/favorites'}
                className={({ isActive }) =>
                  cn('header__button', 'burger-menu__bottom-button', {
                    'burger-menu__bottom-button--active': isActive
                  })
                }
                onClick={handleBurgerMenuClick}
              >
                <img
                  src={Favs}
                  alt="button"
                  className="header__button--image"
                />
              </NavLink>

              {/* TEST AUTH */}
              {/* <NavLink
                to={'/authorization'}
                className={({ isActive }) =>
                  cn('header__button', 'burger-menu__bottom-button', {
                    'burger-menu__bottom-button--active': isActive
                  })
                }
                onClick={handleBurgerMenuClick}
              >
                <img
                  src={Auth}
                  alt="button"
                  className="header__button--image"
                />
              </NavLink> */}
              {/* TEST AUTH */}

              <NavLink
                to={'/cart'}
                className={({ isActive }) =>
                  cn('header__button', 'burger-menu__bottom-button', {
                    'burger-menu__bottom-button--active': isActive
                  })
                }
                onClick={handleBurgerMenuClick}
              >
                <img
                  src={Cart}
                  alt="button"
                  className="header__button--image"
                />
              </NavLink>
            </div>
          </aside>
        )}
      </header>
    </>
  );
};
