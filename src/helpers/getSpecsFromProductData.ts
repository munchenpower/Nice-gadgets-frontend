import { ProductDetails } from '../types/ProductDetails';
import { ProductSpecs } from '../types/ProductSpecs';

export const getSpecsFromProductData = (
  productData: ProductDetails
): ProductSpecs => {
  const { screen, resolution, processor, ram, camera, zoom, cell } =
    productData;

  return {
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell
  };
};
