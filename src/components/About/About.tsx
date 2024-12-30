import React, { FC } from 'react';
import './About.scss';
import '../../pages/ProductPage/ProductPage.scss';
import { ProductDetails } from '../../types/ProductDetails';
import { generateId } from '../../helpers/generateId';

//When inserting this component pass productInfo like this:
// element={<About product={productInfo} />}

interface Props {
  product: ProductDetails;
}

export const About: FC<Props> = ({ product }) => {
  return (
    <div className="About">
      <h3 className="About__title">About</h3>
      <div className="About__divider"></div>
      {product.description.map((desc) => (
        <div className="About__paragraph" key={generateId()}>
          <p className="About__paragraphHeader">{desc.title}</p>
          <p className="About__text">{desc.text}</p>
        </div>
      ))}
    </div>
  );
};
