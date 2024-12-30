import React, { ReactNode } from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/icons/arrow-right.svg';
import Home from '../../assets/icons/home.svg';
import './Breadcrumbs.scss';

interface BreadcrumbsProps {
  children: ReactNode;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = React.memo(
  ({ children }) => {
    return (
      <div className="breadcrumbs">
        <MuiBreadcrumbs
          separator={<img src={Arrow} alt="arrow" />}
          aria-label="Breadcrumb navigation"
        >
          <Link to="/">
            <img src={Home} alt="home" />
          </Link>
          {children}
        </MuiBreadcrumbs>
      </div>
    );
  }
);

Breadcrumbs.propTypes = {
  children: PropTypes.node
};

Breadcrumbs.displayName = 'Breadcrumbs';
