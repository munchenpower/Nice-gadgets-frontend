import React from 'react';
import './Footer.scss';
import logo from '../../assets/icons/Logo.svg';
import arrow from '../../assets/icons/arrow.svg';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__logo">
          <Link to="/">
            <img src={logo} alt="nice gadgets" />
          </Link>
        </div>

        <div className="footer__container__links">
          <Link
            to="https://github.com/fe-apr23-devbananas"
            className="link"
            target="_blank"
          >
            github
          </Link>
          <Link to="/rights" className="link">
            rights
          </Link>
        </div>

        <div className="footer__container__up" onClick={() => scrollToTop()}>
          <span className="up__text">Back to top</span>
          <button className="button__up">
            <img src={arrow} alt="go up button" />
          </button>
        </div>
      </div>
    </footer>
  );
};
