import React, { FC } from 'react';
import './Counter.scss';

interface Props {
  amount: number;
}

export const Counter: FC<Props> = ({ amount }) => (
  <>
    {amount > 0 && (
      <div className="counter">
        <span className="counter__text">{amount > 9 ? '9+' : amount}</span>
      </div>
    )}
  </>
);
