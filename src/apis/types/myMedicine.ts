import { ResponseFormat } from './common';
import { Product } from './product';

export type GetMyMedicineAPIResponse = ResponseFormat<Product[]>;

export type AddMyMedicineAPIRequest = {
  productId: number;
};

export type AddMyMedicineAPIResponse = ResponseFormat<Product>;

export type DeleteMyMedicineAPIRequest = {
  myMedicineId: number;
};
