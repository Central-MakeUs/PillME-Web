import { ResponseFormat } from './common';
import { Product } from './product';

export type GetMyMedicineAPIResponse = ResponseFormat<
  Array<{ product: Product }>
>;

export type AddMyMedicineAPIRequest = {
  productId: number;
};

export type AddMyMedicineAPIResponse = ResponseFormat<Product>;

export type DeleteMyMedicineAPIRequest = {
  myMedicineId: number;
};
