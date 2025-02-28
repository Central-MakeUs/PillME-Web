import { ResponseFormat } from './common';
import { Product } from './product';

export type GetCartAPIResponse = ResponseFormat<
  Array<{
    cartId: number;
    product: Omit<Product, 'healthConcerns' | 'productIngredients'>;
  }>
>;

export type AddCartAPIRequest = {
  productId: number;
};

export type AddCartAPIResponse = ResponseFormat<{
  cartId: number;
  product: Omit<Product, 'healthConcerns' | 'productIngredients'>;
}>;

export type DeleteCartAPIRequest = {
  myMedicineIds: number[];
};
