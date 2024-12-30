import React, { FC } from 'react';
import './GoBackButton.scss';
import { Link } from 'react-router-dom';

type Props = {
  categoryDirectory?: string;
};

export const GoBackButton: FC<Props> = ({ categoryDirectory = '' }) => (
  <Link to={`/${categoryDirectory}`} className="goBackButton">
    Back
  </Link>
);
