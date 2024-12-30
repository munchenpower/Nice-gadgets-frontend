import { FC } from 'react';
import './Icon.scss';
import React from 'react';

export type IconType =
  | 'like'
  | 'like-filled'
  | 'arrow-up'
  | 'arrow-up-disabled'
  | 'arrow-left'
  | 'arrow-left-disabled'
  | 'arrow-right'
  | 'arrow-right-disabled';

interface Props {
  size: number;
  type: IconType;
}

export const Icon: FC<Props> = ({ size, type }) => (
  <div
    className={`Icon Icon--${type}`}
    style={{
      width: size,
      height: size
    }}
  ></div>
);
