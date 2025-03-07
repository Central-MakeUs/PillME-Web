import { ResponseFormat } from './common';
import { Product } from './product';

export type GetMyMedicineAPIResponse = ResponseFormat<
  Array<{ myMedicineId: number; product: Product }>
>;

export type MedicineAnalysisCategory = 'VITAMIN' | 'MINERAL' | 'FUNCTIONAL';
export type MedicineAnalysisStatus = 'DEFICIENT' | 'ADEQUATE' | 'EXCESS';

export type GetMYMedicineAnalysiAPIResponse = ResponseFormat<{
  summary: [
    {
      statusType: MedicineAnalysisStatus;
      count: number;
      items: string[];
    },
  ];
  ingredients: [
    {
      ingredientName: string;
      category: MedicineAnalysisCategory;
      totalAmount: number;
      minIntake: number;
      maxIntake: number;
      upperLimit: number;
      unit: string;
      status: MedicineAnalysisStatus;
    },
  ];
}>;

export type AddMyMedicineAPIRequest = {
  productId: number;
};

export type AddMyMedicineAPIResponse = ResponseFormat<{ product: Product }>;

export type DeleteMyMedicineAPIRequest = {
  myMedicineIds: number[];
};
