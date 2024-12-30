import { FC } from 'react';
import { ProductSpecs } from '../../types/ProductSpecs';
import './ProductTechSpecs.scss';
import classNames from 'classnames';
import React from 'react';

interface Props {
  specs: ProductSpecs;
  className?: string;
}

const normalizeValue = (value: string | string[]) => {
  if (typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.join(', ');
  }
};

export const ProductTechSpecs: FC<Props> = ({ specs, className }) => {
  return (
    <div className="specs">
      <div className="specs__title">Tech specs</div>
      <div className="specs__divider"></div>
      <ul className={classNames('ListOfSpecs', className)}>
        {Object.entries(specs).map(([key, value]) => {
          if (!value) {
            return false;
          }

          return (
            <li className="ListItem" key={key}>
              <span className="SpecsName">{key}</span>
              <span className="SpecsParams">{normalizeValue(value)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
