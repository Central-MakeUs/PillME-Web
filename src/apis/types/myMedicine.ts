import { ResponseFormat } from './common';
import { Product } from './product';

export type GetMyMedicineAPIResponse = ResponseFormat<
  Array<{ myMedicineId: number; product: Product }>
>;

export type AddMyMedicineAPIRequest = {
  productId: number;
};

export type AddMyMedicineAPIResponse = ResponseFormat<{ product: Product }>;

export type DeleteMyMedicineAPIRequest = {
  myMedicineIds: number[];
};
